import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { upsertCategorySchema } from '$lib/server/validation';
import { useRepository } from '$lib/server/repositories';
import { throwIfNotFound } from '$lib/utils';
import { deleteFile, uploadFile } from '$lib/server/filesystem';

export async function load(event) {
  const form = await superValidate(upsertCategorySchema);

  return { form };
}

export const actions = {
  default: async (event) => {
    const formData = await event.request.formData();

    const form = await superValidate(formData, upsertCategorySchema);
    if (!form.valid) {
      return fail(400, { form });
    }

    const image = await uploadFile('image', formData, 'one');

    if (image) {
      form.data.image = image;
    }

    const repository = useRepository('category');

    await repository.create({ image: form.data.image, name: form.data.name });

    throw redirect(303, '/admin/auth/category/list');
  },
};
