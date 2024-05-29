import { c as create_ssr_component } from "./ssr.js";
const AppHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="mb-0 bg-white text-3xl font-bold text-gray-900 dark:bg-gray-800 dark:text-white">${slots.default ? slots.default({}) : ``}</h1>`;
});
export {
  AppHeading as A
};
