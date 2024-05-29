import { c as create_ssr_component, a as add_attribute, e as escape, d as each, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                   */import { a as subscribe } from "../../../chunks/lifecycle.js";
import { p as page } from "../../../chunks/stores.js";
import { g as getParamsString, a as getTitle } from "../../../chunks/utils.js";
import { A as AddToCart } from "../../../chunks/AddToCart.js";
import { A as AppPagination } from "../../../chunks/AppPagination.js";
import { c as currency } from "../../../chunks/constants.js";
const noDataFound = "/_app/immutable/assets/no-data-found.6ca0399e.webp";
const CategoryItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { category } = $$props;
  let href;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  {
    {
      let categoryParam;
      if (category.name !== "All") {
        categoryParam = { category: category.id.toString() };
      }
      const allParams = getParamsString($page.url.searchParams, ["page", "category"], categoryParam);
      href = allParams ? `?${allParams}` : $page.url.pathname;
    }
  }
  $$unsubscribe_page();
  return `<a${add_attribute("href", href, 0)} class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-10"><div class="flex flex-col items-center"><img loading="lazy" width="48" height="48" class="mb-3"${add_attribute("src", category.image, 0)}${add_attribute("alt", category.name, 0)}> <span class="text-sm font-bold text-gray-900 dark:text-white">${escape(category.name)}</span></div></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categories;
  let products;
  let cart;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  categories = data.categories;
  products = data.products;
  cart = data.cart;
  return `<div class="grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-x-5 p-5"><div class="w-full"><div class="grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-5">${each(categories, (category) => {
    return `${validate_component(CategoryItem, "CategoryItem").$$render($$result, { category }, {}, {})}`;
  })}</div></div> <div class="w-full col-span-3">${products.items.length === 0 ? `<div class="w-full flex flex-col items-center justify-center gap-10" data-svelte-h="svelte-1n4xaz4"><img loading="lazy"${add_attribute("src", noDataFound, 0)} alt="No Products Found"> <h3 class="text-xl font-bold text-gray-900 dark:text-white">Currently, there are no products available.</h3></div>` : `<div class="gap-16 flex flex-col"><div class="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">${each(products.items, (product) => {
    return `<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"><div class="w-full text-center"><a href="${"/product/" + escape(product.id, true)}"><img loading="lazy" width="320" height="288" class="p-8 rounded-t-lg"${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)}> </a></div> <div class="px-5 pb-5 flex flex-col gap-4"><a href="${"/product/" + escape(product.id, true)}"><h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">${escape(product.name)} </h5></a> <div class="flex items-center justify-between"><span class="text-xl font-bold text-gray-900 dark:text-white">${escape(currency)}${escape(product.price)}</span> ${validate_component(AddToCart, "AddToCart").$$render($$result, { isInCart: cart.has(product.id), product }, {}, {})} </div></div> </div>`;
  })}</div> ${validate_component(AppPagination, "AppPagination").$$render(
    $$result,
    {
      totalPages: products.totalPages,
      class: "flex justify-center"
    },
    {},
    {}
  )}</div>`}</div></div> ${$$result.head += `<!-- HEAD_svelte-12ko934_START -->${$$result.title = `<title>${escape(getTitle())}</title>`, ""}<meta name="description" content="Unleash the shopping bliss! SvelteKit-powered eCommerce for fast, secure, and delightful retail therapy. Discover now!"><!-- HEAD_svelte-12ko934_END -->`, ""}`;
});
export {
  Page as default
};
