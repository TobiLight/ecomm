import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
/* empty css                   */import { A as AppLogo, D as DarkMode } from "../../../chunks/DarkMode.js";
import "../../../chunks/functions.js";
import { a as subscribe } from "../../../chunks/lifecycle.js";
import { p as page } from "../../../chunks/stores.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 mt-auto"><div class="mx-auto max-w-screen-xl text-center"><div class="flex justify-center items-center">${validate_component(AppLogo, "AppLogo").$$render($$result, {}, {}, {})}</div> <p class="my-6 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-l01tb0">A powerful, open-source E-commerce project for seamless online shopping
      experiences, powered by SvelteKit.</p> </div></footer>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let category;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { isLoggedIn } = $$props;
  if ($$props.isLoggedIn === void 0 && $$bindings.isLoggedIn && isLoggedIn !== void 0)
    $$bindings.isLoggedIn(isLoggedIn);
  category = $page.url.searchParams.get("category");
  $$unsubscribe_page();
  return `<nav class="bg-white border-gray-200 dark:bg-gray-800"><div class="max-w-screen-xl flex flex-col gap-y-4 lg:flex-row items-center justify-between mx-auto p-4">${validate_component(AppLogo, "AppLogo").$$render($$result, {}, {}, {})} <div class="items-center justify-between flex w-auto"><ul class="flex font-medium rounded-lg space-x-8 bg-white dark:bg-gray-800 dark:border-gray-700"><li data-svelte-h="svelte-28gio4"><a href="/" class="block text-primary-700 dark:text-primary-500" aria-current="page">Home</a></li> <li data-svelte-h="svelte-1cj4yoy"><a href="/cart" class="block text-gray-900 hover:text-primary-700 dark:hover:text-primary-500 dark:text-white">Cart</a></li> ${isLoggedIn ? `<li data-svelte-h="svelte-z3hb8z"><a href="/admin/auth/dashboard" class="block text-gray-900 hover:text-primary-700 dark:hover:text-primary-500 dark:text-white">Dashboard</a></li> <form action="/admin/auth/logout" method="post" data-svelte-h="svelte-1gwgquq"><button class="block text-gray-900 hover:text-primary-700 dark:hover:text-primary-500 dark:text-white">Logout</button></form>` : `<li data-svelte-h="svelte-xxomj3"><a href="/admin/guest/login" class="block text-gray-900 hover:text-primary-700 dark:hover:text-primary-500 dark:text-white">Login</a></li>`} <li>${validate_component(DarkMode, "DarkMode").$$render(
    $$result,
    {
      btnClass: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
    },
    {},
    {}
  )}</li></ul></div> <form><label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-svelte-h="svelte-1goaivw">Search</label> <div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" data-svelte-h="svelte-7qql9o"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div> <input type="hidden" name="category"${add_attribute("value", category, 0)}> <input${add_attribute("value", $page.url.searchParams.get("name"), 0)} name="name" type="search" class="block w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"> <button type="submit" class="absolute top-0 right-0 px-2.5 h-full text-sm font-medium text-white bg-primary-700 rounded-r-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" data-svelte-h="svelte-am63tg">Search</button></div></form></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  data.currentUser;
  return `<div class="w-full flex flex-col min-h-screen">${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      isLoggedIn: data.currentUser ? true : false
    },
    {},
    {}
  )} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
