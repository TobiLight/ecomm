import { superValidate } from 'sveltekit-superforms/server';
import { fail, redirect } from '@sveltejs/kit';
import { useRepository } from '$lib/server/repositories';
import { addToCartSchema, updateCartSchema } from '$lib/validation';
import { getCart, setCart } from '$guest/utils';

export async function load(event) {
  const cart = getCart(event);
  
  const repository = useRepository('product');
  
  let products: Awaited<ReturnType<typeof repository.getAllById>> = [];

  if (cart.size > 0)
    products = await repository.getAllById(Array.from(cart.keys()));
  

  const product: string[] = [];

  const quantity: number[] = [];

  products.forEach(({ id }) => {
    product.push(id);
    quantity.push(cart.get(id) as number);
  });

  const form = await superValidate({ product, quantity }, updateCartSchema);

  // const getForm = () => superValidate({ quantity: 1 }, addToCartSchema);

  // let arr: Array<{productID: string, quantity: number}> = []
  // arr.push((await getForm()).data)
  return {
    form,
    products,
  };
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, updateCartSchema);
    if (!form.valid) {
      return fail(400, { form });
    }

    const cart = new Map();

    form.data.product.forEach((id, index) => {
      cart.set(id, form.data.quantity[index]);
    });

    setCart(event, cart);
  },

  updateAndCheckout: async (event) => {
    const form = await superValidate(event, updateCartSchema);
    if (!form.valid) {
      return fail(400, { form });
    }

    const cart = new Map();

    form.data.product.forEach((id, index) => {
      cart.set(id, form.data.quantity[index]);
    });

    setCart(event, cart);

    throw redirect(303, "/checkout")
  }
};
