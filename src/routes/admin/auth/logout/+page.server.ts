import { removeToken } from '$admin/utils.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    removeToken(event);
    throw redirect(303, '/admin/guest/login');
  },
};
