import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import { c as currency } from "../../../../../chunks/constants.js";
import { A as AddToCart } from "../../../../../chunks/AddToCart.js";
import { a as getTitle } from "../../../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let product;
  let isInCart;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  product = data.product;
  isInCart = data.isInCart;
  return `<div class="w-full py-24 lg:px-0 px-5"><div class="grid grid-cols-1 md:grid-cols-2 rounded-lg py-8 sm:px-16 mx-auto max-w-screen-lg lg:py-16 bg-white dark:bg-gray-800 px-4 gap-5"><div class="flex justify-center"><img width="320" height="288"${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)}></div> <div><h2 class="mb-2 text-xl font-semibold leading-none text-gray-800 md:text-2xl dark:text-white">${escape(product.name)}</h2> <p class="mb-4 text-xl font-extrabold leading-none text-gray-800 md:text-2xl dark:text-white">${escape(currency)}${escape(product.price)}</p> <dl><dt class="mb-2 font-semibold leading-none text-gray-800 dark:text-white" data-svelte-h="svelte-1lbnixy">Details
        </dt><dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">${escape(product.description)}</dd></dl> <dl class="flex items-center space-x-6"><div><dt class="mb-2 font-semibold leading-none text-gray-800 dark:text-white" data-svelte-h="svelte-1rb85b8">Category</dt> <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">${escape(product.category?.name || "-")}</dd></div></dl> <div class="flex items-center space-x-4">${validate_component(AddToCart, "AddToCart").$$render($$result, { isInCart, product }, {}, {})}</div></div></div></div> ${$$result.head += `<!-- HEAD_svelte-ivuvht_START -->${$$result.title = `<title>${escape(getTitle(product.name))}</title>`, ""}<meta name="description"${add_attribute("content", product.description, 0)}><!-- HEAD_svelte-ivuvht_END -->`, ""}`;
});
export {
  Page as default
};
