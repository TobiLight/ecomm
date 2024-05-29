import { f as fail, r as redirect } from "../../../../../../../chunks/index.js";
import { s as superValidate } from "../../../../../../../chunks/superValidate.js";
import { a as upsertProductSchema } from "../../../../../../../chunks/validation2.js";
import { u as useRepository } from "../../../../../../../chunks/index3.js";
import { t as throwIfNotFound } from "../../../../../../../chunks/utils.js";
import { u as uploadFile, d as deleteFile } from "../../../../../../../chunks/index5.js";
const repository = useRepository("product");
const categoryRepository = useRepository("category");
async function load(event) {
  const categories = await categoryRepository.getManyWithName();
  const form = await superValidate(upsertProductSchema);
  const id = Number(event.params.id);
  if (id) {
    const item = await repository.getOne(id);
    return { item, form, categories };
  }
  return { form, categories };
}
const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const id = Number(event.params.id);
    if (id) {
      formData.append("id", String(id));
    }
    const form = await superValidate(formData, upsertProductSchema);
    if (!form.valid) {
      return fail(400, { form });
    }
    const image = await uploadFile("image", formData, "one");
    if (image) {
      form.data.image = image;
    } else if (!id) {
      form.errors.image = ["Required"];
      return fail(400, { form });
    }
    if (id) {
      if (form.data.image) {
        const { image: image2 } = throwIfNotFound(await repository.getOne(id));
        await deleteFile(image2);
      }
      throwIfNotFound(await repository.update(form.data, id));
    } else {
      await repository.create(form.data);
    }
    throw redirect(303, "/admin/auth/product/list");
  }
};
export {
  actions,
  load
};
