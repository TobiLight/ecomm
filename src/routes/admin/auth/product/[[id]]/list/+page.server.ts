import { useRepository } from '$lib/server/repositories';
import { formatListParams, formatListResponse } from '$lib/utils/list';
import { categories, products } from '$lib/server/dummy';
import { deleteFile } from '$lib/server/filesystem';
import { throwIfNotFound } from '$lib/utils';

const repository = useRepository('product');

export async function load(event) {
  const params = formatListParams(event);

  const items = await repository.getManyWithCategory(params);

  const ret = {
    total: items.length,
    items,
  };

  const data = formatListResponse(ret);

  return { data };
}

export const actions = {
  destroy: async (event) => {
    const id = event.params.id;

    if (id) {
      const { image } = throwIfNotFound(await repository.getOne(id));

      let publicID = 'kvk_products/' + image.split('/')[8].split('.')[0];
      
      await deleteFile(publicID);
      
      return throwIfNotFound(await repository.deleteOne(id));
    }
  },
  dummy: async () => {
    const items = await categories();

    await products(items);
  },
};
