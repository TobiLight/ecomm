import { useRepository } from '$lib/server/repositories';
import { formatListParams, formatListResponse } from '$lib/utils/list';
import { categories, products } from '$lib/server/dummy';

const repository = useRepository('order');

const userRepository = useRepository('user');

export async function load(event) {
  const params = formatListParams(event);

  const user = await userRepository.getLoginData(event.locals.admin.email);

  if (user && user.role === 'ADMIN') {
    const items = await repository.getMany();

    const ret = {
      total: items.length,
      items,
    };

    const data = formatListResponse(ret);

    return { data };
  }

  const items = await repository.getMany({ where: { id: user?.id } });

  const ret = {
    total: items.length,
    items,
  };

  const data = formatListResponse(ret);

  return { data };
}

export const actions = {
  // destroy: async (event) => {
  //   const id = Number(event.params.id);
  //   if (id) {
  //     const { image } = throwIfNotFound(await repository.getOne(id));
  //     await deleteFile(image);
  //     return throwIfNotFound(await repository.destroy(id));
  //   }
  // },
  dummy: async () => {
    const items = await categories();

    await products(items);
  },
};
