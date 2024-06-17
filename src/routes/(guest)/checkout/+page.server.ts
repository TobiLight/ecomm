import { superValidate } from 'sveltekit-superforms/server';
import { type RequestEvent, fail, redirect } from '@sveltejs/kit';
import { useRepository } from '$lib/server/repositories';
import { createOrderSchema } from '$lib/validation';
import { getCart, removeCart } from '$guest/utils';

function throwIfCartEmpty(event: RequestEvent) {
  const cart = getCart(event);
  if (cart.size === 0) {
    throw redirect(303, '/cart');
  }
  return cart;
}

export async function load(event) {
  const cart = throwIfCartEmpty(event);
  const products = await useRepository('product').getAllById(
    Array.from(cart.keys()),
  );

  const form = await superValidate(createOrderSchema);

  return {
    form,
    cart,
    products,
  };
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, createOrderSchema);
    if (!form.valid) {
      return fail(400, { form });
    }

    const cart = throwIfCartEmpty(event);
    const products = await useRepository('product').getAllById(
      Array.from(cart.keys()),
    );
    const total = products.reduce(
      (total, product) =>
        total + product.price * (cart.get(product.id) as number),
      0,
    );

    const data = await useRepository('order').create({
      ...form.data,
      total,
    });

    if (data) {
      await useRepository('productToOrder').createMany([
        ...products.map(({ id: productID }) => ({
          productID,
          orderID: data.id,
        })),
      ]);

      removeCart(event);

      throw redirect(303, '/');
    }
  },
};
