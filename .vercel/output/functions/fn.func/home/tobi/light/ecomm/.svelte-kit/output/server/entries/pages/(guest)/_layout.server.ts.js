import { z } from "zod";
import { u as useRepository } from "../../../chunks/index3.js";
import "../../../chunks/list.js";
z.object({
  name: z.string().optional(),
  category: z.coerce.number().optional()
});
async function load(event) {
  const getCurrentUser = async () => {
    const repository = useRepository("admin");
    if (event.locals.admin) {
      const user = await repository.getLoginData(event.locals.admin.email);
      return user;
    }
    return void 0;
  };
  return {
    currentUser: getCurrentUser()
  };
}
export {
  load
};
