import { type RequestEvent, redirect } from '@sveltejs/kit';
import { useRepository } from '$lib/server/repositories';
import { getCart } from '$guest/utils';

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

  if (!products.length || products.length < 1)
    throw redirect(303, '/')

  return {
    cart,
    products,
  };
}