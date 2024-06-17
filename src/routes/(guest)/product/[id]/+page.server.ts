import { superValidate } from 'sveltekit-superforms/client';
import { fail, redirect } from '@sveltejs/kit';
import { addToCartSchema, updateCartSchema } from '$lib/validation';
import { useRepository } from '$lib/server/repositories';
import { throwIfNotFound } from '$lib/utils';
import { getCart, setCart } from '$guest/utils';

const repository = useRepository('product');

export async function load(event) {
  const id = event.params.id;

  const getForm = () => superValidate({ quantity: 1 }, addToCartSchema);

  const getProduct = async () => {
    const product = await repository.getOne(id);

    return throwIfNotFound(product);
  };

  const isInCart = () => {
    const cart = getCart(event);

    return cart.has(id);
  };

  return {
    form: getForm(),
    product: getProduct(),
    isInCart: isInCart(),
  };
}

export const actions = {
  add: async (event) => {
    const form = await superValidate(event, addToCartSchema);
    if (!form.valid) {
      return fail(400, { form });
    }

    const id = event.params.id;

    const quantity = form.data.quantity;

    const inStock = await repository.isInStock(id, quantity);

    if (inStock) {
      const cart = getCart(event);

      cart.set(id, quantity);

      setCart(event, cart);

      throw redirect(303, '/cart');
    }
  },

  remove: (event) => {
    const cart = getCart(event);

    cart.delete(event.params.id);

    setCart(event, cart);

    throw redirect(303, '/cart');
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
