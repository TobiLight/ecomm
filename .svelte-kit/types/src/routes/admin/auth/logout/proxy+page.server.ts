// @ts-nocheck
import { removeToken } from '$admin/utils.js';
import { redirect } from '@sveltejs/kit';

/** */
export const actions = {
  default:/** @param {import('./$types').RequestEvent} event */  async (event) => {
    removeToken(event);
    throw redirect(303, '/admin/guest/login');
  },
};
