import { f as fail, r as redirect } from "../../../../../../../chunks/index.js";
import { s as superValidate } from "../../../../../../../chunks/superValidate.js";
import { u as upsertAdminSchema } from "../../../../../../../chunks/validation2.js";
import { u as useRepository } from "../../../../../../../chunks/index3.js";
import { u as upsertAdmin } from "../../../../../../../chunks/utils.server.js";
const repository = useRepository("admin");
async function load(event) {
  const form = await superValidate(upsertAdminSchema);
  const id = Number(event.params.id);
  if (id) {
    const item = await repository.getOne(id);
    return {
      item,
      form
    };
  }
  return { form };
}
const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const { id } = event.params;
    if (id) {
      formData.append("id", id);
    }
    const form = await superValidate(formData, upsertAdminSchema);
    if (!form.valid) {
      return fail(400, { form });
    }
    await upsertAdmin(form.data);
    throw redirect(303, "/admin/auth/admin/list");
  }
};
export {
  actions,
  load
};
