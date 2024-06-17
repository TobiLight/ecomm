import { superValidate } from 'sveltekit-superforms/server';
import { fail, redirect } from '@sveltejs/kit';
import { updateCartSchema } from '$lib/validation';
import { getCart, setCart } from '$guest/utils';

export const actions = {
   
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
  