import { u as useRepository } from "./index3.js";
import { h as hash } from "./hash.js";
import { t as throwIfNotFound } from "./utils.js";
async function savePassword(adminId, password) {
  if (password) {
    const adminPassword = useRepository("adminPassword");
    password = await hash.hash(password);
    await adminPassword.upsert({ password, adminId });
  }
}
async function upsertAdmin(input) {
  const repository = useRepository("admin");
  let admin;
  const { id, password, ...values } = input;
  if (id) {
    const result = await repository.update(values, id);
    admin = throwIfNotFound(result);
  } else {
    admin = await repository.create(values);
  }
  await savePassword(admin.id, password);
  return admin;
}
export {
  upsertAdmin as u
};
