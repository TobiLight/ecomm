import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { loginSchema } from '$lib/server/validation';
import { useRepository } from '$lib/server/repositories';
import { hash } from '$lib/authentication/hash';
import { jwt } from '$lib/authentication/jwt';
import { setToken } from '$admin/utils';
import { setFlash } from 'sveltekit-flash-message/server';

export async function load(event) {
  const form = await superValidate(loginSchema);
  return { form};
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, loginSchema);
    if (!form.valid) {
      return fail(400, { form });
    }

    const { email, password } = form.data;
    const repository = useRepository('user');
    const loginData = await repository.getUserByEmail(email);

    if (loginData) {
      const {  id, email } = loginData;
      
      const passwordMatched = await hash.compare(
        password,
        loginData.password,
      );

      if (passwordMatched) {
        const token = jwt.encode({id, email});
        setToken(event, token);

        throw redirect(303, '/admin/auth/dashboard');
      }
    }

    return message(form, 'The email or password does not match', {status: 400});
  },
};
