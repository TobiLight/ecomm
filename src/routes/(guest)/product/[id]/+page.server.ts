import { superValidate } from 'sveltekit-superforms/client';
import { fail, redirect } from '@sveltejs/kit';
import { addToCartSchema, updateCartSchema } from '$lib/validation';
import { useRepository } from '$lib/server/repositories';
import { throwIfNotFound } from '$lib/utils';
import { getCart, setCart } from '$guest/utils';
import { setCatrtCount } from '../../../../store/store.js';

const repository = useRepository('product');

export async function load(event) {
  const id = event.params.id;

  const getForm = () => superValidate({quantity: 1}, addToCartSchema);

  const getProduct = async () => {
    const product = await repository.getOne(id);

    return throwIfNotFound(product);
  };

  const isInCart = () => {
    const cart = getCart(event);

    return cart.has(id);
  };

  return {
    form: await getForm(),
    product: getProduct(),
    isInCart: isInCart(),
  };
}

export const actions = {
  add: async (event) => {
    const form = await superValidate(event, addToCartSchema);

    const id = event.params.id;

    const quantity = form.data.quantity;

    // form.data.productID = id;

    console.log(form.data.quantity)

    if (!form.valid) {
      return fail(400, { form });
    }

    const inStock = await repository.isInStock(id, quantity);

    if (inStock) {
      const cart = getCart(event);

      cart.set(id, quantity);

      setCart(event, cart);

      setCatrtCount(cart.size);

      return { form };

      throw redirect(303, '/');
    }
  },

  remove: async (event) => {
    const cart = getCart(event);
    const form = await event.request.formData()

    const productID: string = form.get('productID') as string

    cart.delete(productID);

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

    throw redirect(303, '/checkout');
  },
};
