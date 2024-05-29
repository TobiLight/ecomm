import { r as redirect, e as error, f as fail } from "../../../../../chunks/index.js";
import { s as superValidate } from "../../../../../chunks/superValidate.js";
import { u as useRepository } from "../../../../../chunks/index3.js";
import { b as upsertAdminSchema } from "../../../../../chunks/validation.js";
import { u as upsertAdmin } from "../../../../../chunks/utils.server.js";
function isAdminExists() {
  const repository = useRepository("admin");
  return repository.getOne();
}
async function load() {
  if (await isAdminExists()) {
    throw redirect(303, "/admin/guest/login");
  }
  const form = await superValidate(upsertAdminSchema);
  return { form };
}
const actions = {
  default: async (event) => {
    if (await isAdminExists()) {
      throw error(401);
    }
    const form = await superValidate(event, upsertAdminSchema);
    if (!form.valid) {
      return fail(400, { form });
    }
    await upsertAdmin(form.data);
    throw redirect(303, "/admin/guest/login");
  }
};
export {
  actions,
  load
};
