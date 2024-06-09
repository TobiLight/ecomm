import { z } from 'zod';
import { getCart } from './utils';
import { useRepository } from '$lib/server/repositories';
import { formatListParams, formatListResponse } from '$lib/utils/list';
import { Category } from '@prisma/client';

const filterSchema = z.object({
  name: z.string().optional(),
  categoryID: z.string().optional(),
});

export async function load(event) {
  const filters = filterSchema.parse(
    Object.fromEntries(event.url.searchParams),
  );

  const getCategories = async (): Promise<Category[] | []> => {
    const repository = useRepository('category');
    return repository.getMany();
  };

  const getProducts = async () => {
    const repository = useRepository('product');
    const params = formatListParams(event);
    const items = await repository.getManyWithCategory(params, {name: filters.name ?? "All", categoryID: filters.categoryID  ?? (await getCategories())[0].id});

    const ret = {
      items,
      totalPages: items.length
    }

    return formatListResponse(ret);
  };

  const getCurrentUser = async () => {
    const repository = useRepository("user")
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
    // currentUser: getCurrentUser()
  };
}
