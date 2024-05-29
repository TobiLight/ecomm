import { z } from 'zod';
import { getCart } from './utils';
import { useRepository } from '$lib/server/repositories';
import { formatListParams, formatListResponse } from '$lib/utils/list';

const filterSchema = z.object({
  name: z.string().optional(),
  category: z.coerce.number().optional(),
});

export async function load(event) {
  const filters = filterSchema.parse(
    Object.fromEntries(event.url.searchParams),
  );

  const getCategories = async () => {
    const repository = useRepository('category');
    return repository.getManyWithName();
  };

  const getProducts = async () => {
    const repository = useRepository('product');
    const params = formatListParams(event);
    const items = await repository.getManyWithFilter(params, filters);
    return formatListResponse(items);
  };

  const getCurrentUser = async () => {
    const repository = useRepository("admin")
    if (event.locals.admin) {
      const user = await repository.getLoginData(event.locals.admin.email);

      return user;
    }

    return undefined;
  }

  return {
    categories: getCategories(),
    products: getProducts(),
    cart: getCart(event),
    currentUser: getCurrentUser()
  };
}
