import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { upsertProductSchema } from '$lib/server/validation';
import { useRepository } from '$lib/server/repositories';
import { throwIfNotFound } from '$lib/utils';
import { deleteFile, uploadFile } from '$lib/server/filesystem';

const repository = useRepository('product');
const categoryRepository = useRepository('category');

export async function load(event) {
  const categories = await categoryRepository.getMany();

  const form = await superValidate(upsertProductSchema);

  return { form, categories };
}

export const actions = {
  default: async (event) => {
    const formData = await event.request.formData();

    const form = await superValidate(formData, upsertProductSchema);

    if (!form.valid) {
      return fail(400, { form });
    }

    const image = await uploadFile('image', formData, 'one', 'kvk_products');
    
    if (image) {
      form.data.image = image;
    }

    await repository.create({ ...form.data, image: form.data.image as string });

    throw redirect(303, '/admin/auth/product/list');
  },
};
