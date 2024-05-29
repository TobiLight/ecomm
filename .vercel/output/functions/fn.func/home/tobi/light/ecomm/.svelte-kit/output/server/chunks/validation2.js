import { u as useRepository } from "./index3.js";
import { b as upsertAdminSchema$1, e as upsertProductSchema$1 } from "./validation.js";
async function uniqueAdminEmail(email, id) {
  const repository = useRepository("admin");
  const exists = await repository.emailExists(email, id);
  return !exists;
}
const upsertAdminSchema = upsertAdminSchema$1.refine(({ id, password }) => Boolean(password || id), {
  message: "String must contain at least 1 character(s)",
  path: ["password"]
}).refine(({ email, id }) => uniqueAdminEmail(email, id), {
  message: "The email already exists.",
  path: ["email"]
});
const upsertProductSchema = upsertProductSchema$1.refine(
  ({ categoryId }) => useRepository("category").idExists(categoryId),
  {
    message: "Invalid cateogry",
    path: ["categoryId"]
  }
);
export {
  upsertProductSchema as a,
  upsertAdminSchema as u
};
