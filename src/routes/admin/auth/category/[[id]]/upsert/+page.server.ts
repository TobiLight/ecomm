import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { upsertCategorySchema } from '$lib/server/validation';
import { useRepository } from '$lib/server/repositories';
import { throwIfNotFound } from '$lib/utils';
import { deleteFile, uploadFile } from '$lib/server/filesystem';

export async function load(event) {
  const form = await superValidate(upsertCategorySchema);
  const repository = useRepository('category');

  const id = event.params.id;
  if (id) {
    const item = await repository.getOne(id);
    return {
      item,
      form,
    };
  }

  return { form };
}

export const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const id = event.params.id;

    if (id) {
      formData.append('id', String(id));
    }

    const form = await superValidate(formData, upsertCategorySchema);

    if (!form.valid) {
      return fail(400, { form });
    }

    const image = await uploadFile('image', formData, 'one');

    if (image) {
      form.data.image = image;
    } else if (!id) {
      form.errors.image = ['Required'];
      return fail(400, { form });
    }

    const repository = useRepository('category');

    if (id) {
      if (form.data.image) {
        const { image } = throwIfNotFound(await repository.getOne(id));
        let publicID = 'kvk_categories/' + image.split('/')[8].split('.')[0];

        await deleteFile(publicID);
      }

      throwIfNotFound(
        await repository.update({
          id: id,
          name: form.data.name,
          image: form.data.image,
        }),
      );
    } else {
      await repository.create({ image: form.data.image, name: form.data.name });
    }

    throw redirect(303, '/admin/auth/category/list');
  },
};
