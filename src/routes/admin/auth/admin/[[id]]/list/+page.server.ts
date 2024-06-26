import { useRepository } from '$lib/server/repositories';
import { formatListParams, formatListResponse } from '$lib/utils/list';
import { throwIfNotFound } from '$lib/utils';

const repository = useRepository('user');

export async function load(event) {
  const params = formatListParams(event);

  const items = await repository.getMany();

  let ret = {
    items,
    total: items.length
  }

  const data = formatListResponse(ret);

  return { data };
}

export const actions = {
  destroy: async (event) => {
    const id = event.params.id;
    if (id) {
      const result = await repository.destroy(id);
      return throwIfNotFound(result);
    }
  },
};
