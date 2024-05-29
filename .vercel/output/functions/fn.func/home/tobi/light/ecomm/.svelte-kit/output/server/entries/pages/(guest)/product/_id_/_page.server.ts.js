import "klona/full";
import "devalue";
import "../../../../../chunks/form.js";
import { s as superValidate } from "../../../../../chunks/superValidate.js";
import { f as fail, r as redirect } from "../../../../../chunks/index.js";
import { a as addToCartSchema } from "../../../../../chunks/validation.js";
import { u as useRepository } from "../../../../../chunks/index3.js";
import { t as throwIfNotFound } from "../../../../../chunks/utils.js";
import { g as getCart, s as setCart } from "../../../../../chunks/utils2.js";
const repository = useRepository("product");
async function load(event) {
  const id = Number(event.params.id);
  const getForm = () => superValidate({ quantity: 1 }, addToCartSchema);
  const getProduct = async () => {
    const product = await repository.getOneForDetail(id);
    return throwIfNotFound(product);
  };
  const isInCart = () => {
    const cart = getCart(event);
    return cart.has(id);
  };
  return {
    form: getForm(),
    product: getProduct(),
    isInCart: isInCart()
  };
}
const actions = {
  add: async (event) => {
    const form = await superValidate(event, addToCartSchema);
    if (!form.valid) {
      return fail(400, { form });
    }
    const id = Number(event.params.id);
    const quantity = form.data.quantity;
    const inStock = await repository.isInStock(id, quantity);
    if (inStock) {
      const cart = getCart(event);
      cart.set(id, quantity);
      setCart(event, cart);
      throw redirect(303, "/cart");
    }
  },
  remove: (event) => {
    const cart = getCart(event);
    cart.delete(Number(event.params.id));
    setCart(event, cart);
    throw redirect(303, "/cart");
  }
};
export {
  actions,
  load
};
