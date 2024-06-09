import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { userSchema } from '$lib/server/validation';
import { createUser } from '$admin/utils.server.js';

export async function load(event) {
  const form = await superValidate(userSchema);

  return { form };
}

export const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
   
    const form = await superValidate(formData, userSchema);
    if (!form.valid) {
      return fail(400, { form });
    }

    await createUser(form.data);

    throw redirect(303, '/admin/auth/admin/list');
  },
};
