import { s as superValidate } from "../../../../chunks/superValidate.js";
import { f as fail } from "../../../../chunks/index.js";
import { u as useRepository } from "../../../../chunks/index3.js";
import { u as updateCartSchema } from "../../../../chunks/validation.js";
import { g as getCart, s as setCart } from "../../../../chunks/utils2.js";
async function load(event) {
  const cart = getCart(event);
  const repository = useRepository("product");
  let products = [];
  if (cart.size > 0) {
    products = await repository.getAllById(Array.from(cart.keys()));
  }
  const product = [];
  const quantity = [];
  products.forEach(({ id }) => {
    product.push(id);
    quantity.push(cart.get(id) || 1);
  });
  const form = await superValidate({ product, quantity }, updateCartSchema);
  return {
    form,
    products
  };
}
const actions = {
  default: async (event) => {
    const form = await superValidate(event, updateCartSchema);
    if (!form.valid) {
      return fail(400, { form });
    }
    const cart = /* @__PURE__ */ new Map();
    form.data.product.forEach(
      (id, index) => cart.set(id, form.data.quantity[index])
    );
    setCart(event, cart);
  }
};
export {
  actions,
  load
};
