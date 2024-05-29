import { a as subscribe } from "../../../../chunks/lifecycle.js";
import { c as create_ssr_component, a as add_attribute, d as each, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { s as superForm } from "../../../../chunks/index4.js";
import { c as currency } from "../../../../chunks/constants.js";
import { u as updateCartSchema } from "../../../../chunks/validation.js";
import { S as SubmitButton } from "../../../../chunks/SubmitButton.js";
import { a as getTitle } from "../../../../chunks/utils.js";
const noProduct = "/_app/immutable/assets/no-product.ad5e0ec9.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products;
  let total;
  let $form, $$unsubscribe_form;
  let $submitting, $$unsubscribe_submitting;
  let { data } = $$props;
  const { form, submitting, enhance } = superForm(data.form, { validators: updateCartSchema });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_submitting = subscribe(submitting, (value) => $submitting = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  products = data.products;
  total = products.reduce((total2, product, index) => total2 + product.price * $form.quantity[index], 0);
  $$unsubscribe_form();
  $$unsubscribe_submitting();
  return `<div class="w-full py-24">${products.length === 0 ? `<div class="w-full flex flex-col items-center justify-center gap-10" data-svelte-h="svelte-1uwg8gw"><img loading="lazy"${add_attribute("src", noProduct, 0)} alt="No Products Found"> <h3 class="text-xl font-bold text-gray-900 dark:text-white">No product in cart</h3></div>` : `<form method="post" class="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-5 xl:px-0 px-5"><div class="w-full flex self-start relative overflow-x-auto shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" data-svelte-h="svelte-117tm1s"><tr><th scope="col" class="px-6 py-3"><span class="sr-only">Image</span></th> <th scope="col" class="px-6 py-3">Product</th> <th scope="col" class="px-6 py-3">Qty</th> <th scope="col" class="px-6 py-3">Price</th> <th scope="col" class="px-6 py-3">Action</th></tr></thead> <tbody>${each(products, (product, index) => {
    return `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"><td class="w-24 p-4"><a href="${"/product/" + escape(product.id, true)}"><img${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)}> </a></td> <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white"><a href="${"/product/" + escape(product.id, true)}">${escape(product.name)} </a></td> <td class="px-6 py-4"><div><input type="hidden" name="product"${add_attribute("value", $form.product[index], 0)}> <input type="number" name="quantity" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="1"${add_attribute("max", product.quantity, 0)} required${add_attribute("value", $form.quantity[index], 0)}> </div></td> <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">${escape(currency)}${escape(product.price)}</td> <td class="px-6 py-4"><form method="post" action="${"/product/" + escape(product.id, true) + "?/remove"}"><button type="submit" class="font-medium text-red-600 dark:text-red-500 hover:underline" data-svelte-h="svelte-2xaee8">Remove</button> </form></td> </tr>`;
  })}</tbody></table></div> <div class="w-full flex flex-col items-center lg:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 self-start gap-y-5"><h5 class="mb-0 text-xl font-medium text-gray-500 dark:text-gray-400" data-svelte-h="svelte-pr7lit">Order total</h5> <div class="flex items-baseline text-gray-900 dark:text-white"><span class="text-3xl font-semibold">${escape(currency)}</span> <span class="text-5xl font-extrabold tracking-tight">${escape(total)}</span></div> ${validate_component(SubmitButton, "SubmitButton").$$render($$result, { wFull: true, submitting: $submitting }, {}, {
    default: () => {
      return `Update order`;
    }
  })} <a href="/checkout" class="text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-secondary-200 dark:focus:ring-secondary-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" data-svelte-h="svelte-2ovbmc">Place order</a></div></form>`}</div> ${$$result.head += `<!-- HEAD_svelte-evohiw_START -->${$$result.title = `<title>${escape(getTitle("Cart"))}</title>`, ""}<meta name="description" content="Your shopping cart, your way! SvelteKit-powered eCommerce makes checkout a breeze. Manage items effortlessly and complete your order in a snap. Shop now!"><!-- HEAD_svelte-evohiw_END -->`, ""}`;
});
export {
  Page as default
};
