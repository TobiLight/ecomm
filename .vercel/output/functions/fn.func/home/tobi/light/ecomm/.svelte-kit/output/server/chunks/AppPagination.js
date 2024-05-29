import { c as compute_rest_props, a as subscribe } from "./lifecycle.js";
import { c as create_ssr_component, s as spread, f as escape_object, e as escape, v as validate_component, d as each, a as add_attribute } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { p as page } from "./stores.js";
import { g as getParamsString } from "./utils.js";
import { l as loadIcons } from "./functions.js";
function generateArray(params) {
  return Array.from({ length: params }, (_, index) => index + 1);
}
const AppPagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathname;
  let currentPage;
  let $$restProps = compute_rest_props($$props, ["totalPages"]);
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { totalPages } = $$props;
  let searchParams;
  loadIcons(["mdi:arrow-left", "mdi:arrow-right"]);
  if ($$props.totalPages === void 0 && $$bindings.totalPages && totalPages !== void 0)
    $$bindings.totalPages(totalPages);
  {
    {
      const allParamsString = getParamsString($page.url.searchParams, ["page"]);
      if (allParamsString) {
        searchParams = `?${allParamsString}&`;
      } else {
        searchParams = "?";
      }
    }
  }
  pathname = $page.url.pathname + searchParams;
  currentPage = Number($page.url.searchParams.get("page")) || 1;
  $$unsubscribe_page();
  return `${totalPages > 1 ? `<div${spread([{ class: "flex justify-end" }, escape_object($$restProps)], {})}><nav aria-label="Page navigation example"><ul class="inline-flex h-10 -space-x-px text-base"><li><a href="${escape(pathname, true) + "page=" + escape(currentPage === 1 ? 1 : currentPage - 1, true)}" class="ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:arrow-left" }, {}, {})}</a></li> ${each(generateArray(totalPages), (page2) => {
    return `<li><a href="${escape(pathname, true) + "page=" + escape(page2, true)}"${add_attribute("aria-current", currentPage === page2 ? "page" : void 0, 0)} class="${"flex h-10 items-center justify-center border px-4 leading-tight " + escape(
      currentPage === page2 ? "bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
      true
    )}">${escape(page2)}</a> </li>`;
  })} <li><a href="${escape(pathname, true) + "page=" + escape(
    currentPage === totalPages ? totalPages : currentPage + 1,
    true
  )}" class="flex h-10 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:arrow-right" }, {}, {})}</a></li></ul></nav></div>` : ``}`;
});
export {
  AppPagination as A
};
