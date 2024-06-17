import { removeToken } from '$admin/utils.js';
import { useRepository } from '$lib/server/repositories/index.js';
import { redirect } from '@sveltejs/kit';

export async function load(event) {
  const repository = useRepository("user")
  
  const user = await repository.getLoginData(event.locals.admin.email)

  if (!user)
    removeToken(event)

  if (!event.locals.admin) {
    throw redirect(303, '/admin/guest/login');
  }

  return {
    currentUser: user
  }
}
