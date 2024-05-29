import { s as superValidate } from "../../../../chunks/superValidate.js";
import { f as fail, r as redirect } from "../../../../chunks/index.js";
import { u as useRepository } from "../../../../chunks/index3.js";
import { c as createOrderSchema } from "../../../../chunks/validation.js";
import { r as removeCart, g as getCart } from "../../../../chunks/utils2.js";
function throwIfCartEmpty(event) {
  const cart = getCart(event);
  if (cart.size === 0) {
    throw redirect(303, "/cart");
  }
  return cart;
}
async function load(event) {
  const cart = throwIfCartEmpty(event);
  const products = await useRepository("product").getAllById(
    Array.from(cart.keys())
  );
  const form = await superValidate(createOrderSchema);
  return {
    form,
    cart,
    products
  };
}
const actions = {
  default: async (event) => {
    const form = await superValidate(event, createOrderSchema);
    if (!form.valid) {
      return fail(400, { form });
    }
    const cart = throwIfCartEmpty(event);
    const products = await useRepository("product").getAllById(
      Array.from(cart.keys())
    );
    const total = products.reduce(
      (total2, product) => total2 + product.price * (cart.get(product.id) || 1),
      0
    );
    const { id: orderId } = await useRepository("order").create({
      ...form.data,
      total
    });
    await useRepository("productToOrder").create(
      products.map(({ id: productId }) => ({
        productId,
        orderId
      }))
    );
    removeCart(event);
    throw redirect(303, "/");
  }
};
export {
  actions,
  load
};
