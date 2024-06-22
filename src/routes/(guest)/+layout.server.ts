import { z } from 'zod';
import { getCart } from './utils';
import { useRepository } from '$lib/server/repositories';
import { formatListParams, formatListResponse } from '$lib/utils/list';
import { cartCount } from '../../store/store';

const filterSchema = z.object({
  name: z.string().optional(),
  category: z.coerce.number().optional(),
});

export async function load(event) {
  const getCurrentUser = async () => {
    const repository = useRepository('user');
    
    if (event.locals.admin) {
      const user = await repository.getLoginData(event.locals.admin.email);

      return user;
    }

    return null;
  };

  return {
    currentUser: await getCurrentUser(),
    cartCount: getCart(event).size,
  };
}
