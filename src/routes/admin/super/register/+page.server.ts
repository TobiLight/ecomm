import { error, fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { upsertAdminSchema, userSchema } from '$lib/validation';
import { createUser } from "../../utils.server.js";
import { useRepository } from '$lib/server/repositories';
import { setFlash } from 'sveltekit-flash-message/server';

export async function load() {
  // if (await isAdminExists()) {
  //   throw redirect(303, '/admin/guest/login');
  // }

  const form = await superValidate(userSchema);
  return { form };
}

export const actions = {
  default: async (event) => {
    // if (await isAdminExists()) {
    //   throw error(401);
    // }

    const form = await superValidate(event, userSchema);
    if (!form.valid) {
      return fail(400, { form });
    }

    const repo = useRepository('user');

    const existingUser = await repo.emailExists(form.data.email);

    if (existingUser)
      return message(form, 'Record already exists!', {
        status: 400,
      });

    try {
      await createUser(form.data, "admin");
      event.locals.flashMessage = 'Registration Successful';
    } catch (err: any) {
      return message(form, err.message, {
        status: 400,
      });
    }

    setFlash({ type: 'success', message: 'Registration success' }, event.cookies);

    throw redirect(303, '/admin/guest/login');
  },
};
