import { z } from "zod";
import { g as getCart } from "../../../chunks/utils2.js";
import { u as useRepository } from "../../../chunks/index3.js";
import { f as formatListParams, a as formatListResponse } from "../../../chunks/list.js";
const filterSchema = z.object({
  name: z.string().optional(),
  category: z.coerce.number().optional()
});
async function load(event) {
  const filters = filterSchema.parse(
    Object.fromEntries(event.url.searchParams)
  );
  const getCategories = async () => {
    const repository = useRepository("category");
    return repository.getManyWithName();
  };
  const getProducts = async () => {
    const repository = useRepository("product");
    const params = formatListParams(event);
    const items = await repository.getManyWithFilter(params, filters);
    return formatListResponse(items);
  };
  const getCurrentUser = async () => {
    const repository = useRepository("admin");
    if (event.locals.admin) {
      const user = await repository.getLoginData(event.locals.admin.email);
      return user;
    }
    return void 0;
  };
  return {
    categories: getCategories(),
    products: getProducts(),
    cart: getCart(event),
    currentUser: getCurrentUser()
  };
}
export {
  load
};
