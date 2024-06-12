import { useRepository } from '$lib/server/repositories';
import { formatListParams, formatListResponse } from '$lib/utils/list';
import { throwIfNotFound } from '$lib/utils';
import { deleteFile } from '$lib/server/filesystem';
import { error } from '@sveltejs/kit';

const repository = useRepository('category');

export async function load(event) {
  const params = formatListParams(event);

  const items = await repository.getMany();

  const ret = {
    total: items.length,
    items: items,
  };

  const data = formatListResponse(ret);

  return { data };
}

export const actions = {
  destroy: async (event) => {
    const id = event.params.id;
    if (id) {
      const { image, products } = throwIfNotFound(await repository.getOne(id));
      if (products.length > 0) {
        throw error(
          400,
          `You cannot delete this category because it has products in it.\n\n Delete the products under this category before deleting the category`,
        );
      }

      await deleteFile(image);
      return throwIfNotFound(await repository.deleteOne(id));
    }
  },
};
