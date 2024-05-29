import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
/* empty css                      */import { N as Navbar, F as Footer } from "../../../../chunks/Navbar.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <section class="bg-gray-50 dark:bg-gray-900">${slots.default ? slots.default({}) : ``}</section> <div class="fixed bottom-0 w-full">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Layout as default
};
