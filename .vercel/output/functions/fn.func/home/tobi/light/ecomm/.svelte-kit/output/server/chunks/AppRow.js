import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, d as each } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { A as AppHeading } from "./AppHeading.js";
import { A as AppPagination } from "./AppPagination.js";
import { d as dev } from "./environment.js";
import "devalue";
const NoDataRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { totalItems } = $$props;
  let { colspan } = $$props;
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
    $$bindings.totalItems(totalItems);
  if ($$props.colspan === void 0 && $$bindings.colspan && colspan !== void 0)
    $$bindings.colspan(colspan);
  return `${totalItems === 0 ? `<tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"><th${add_attribute("colspan", colspan, 0)} scope="row" class="whitespace-nowrap px-6 py-4 text-center font-medium text-gray-900 dark:text-white">Currently, there is no data available.</th></tr>` : ``}`;
});
const DummyButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button type="submit" class="bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-300 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800 flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:content-copy",
      class: "mr-2 text-xl"
    },
    {},
    {}
  )}
  Add dummy data</button>`;
});
const AppAddLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:plus-circle-outline",
      class: "mr-2 text-xl"
    },
    {},
    {}
  )}
  Add ${slots.default ? slots.default({}) : ``}</a>`;
});
const AppTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dummy = false } = $$props;
  let { items } = $$props;
  let { columns } = $$props;
  let { totalPages } = $$props;
  let { name } = $$props;
  if (!name.plural) {
    name.plural = `${name.singular}s`;
  }
  if ($$props.dummy === void 0 && $$bindings.dummy && dummy !== void 0)
    $$bindings.dummy(dummy);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.totalPages === void 0 && $$bindings.totalPages && totalPages !== void 0)
    $$bindings.totalPages(totalPages);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="relative flex flex-col gap-y-5 overflow-x-auto"><div class="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-x-4 md:space-y-0">${validate_component(AppHeading, "AppHeading").$$render($$result, {}, {}, {
    default: () => {
      return `All ${escape(name.plural)}`;
    }
  })} <div class="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">${dummy && dev ? `<form method="post" action="?/dummy">${validate_component(DummyButton, "DummyButton").$$render($$result, {}, {}, {})}</form>` : ``} ${validate_component(AppAddLink, "AppAddLink").$$render(
    $$result,
    {
      href: "/admin/auth/" + name.singular + "/upsert"
    },
    {},
    {
      default: () => {
        return `${escape(name.singular)}`;
      }
    }
  )}</div></div> <div class="relative overflow-x-auto shadow-md sm:rounded-lg"><table class="w-full text-left text-sm text-gray-500 dark:text-gray-400"><thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"><tr>${each(columns, (column) => {
    return `<th scope="col" class="px-6 py-3">${escape(column)} </th>`;
  })} <th scope="col" class="px-6 py-3" data-svelte-h="svelte-nc1qxv"><span class="sr-only">Actions</span></th></tr></thead> <tbody>${validate_component(NoDataRow, "NoDataRow").$$render(
    $$result,
    {
      totalItems: items.length,
      colspan: columns.length + 1
    },
    {},
    {}
  )} ${slots.default ? slots.default({}) : ``}</tbody> <tfoot class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"><tr>${each(columns, (column) => {
    return `<th scope="col" class="px-6 py-3">${escape(column)} </th>`;
  })} <th scope="col" class="px-6 py-3" data-svelte-h="svelte-nc1qxv"><span class="sr-only">Actions</span></th></tr></tfoot></table></div> ${validate_component(AppPagination, "AppPagination").$$render($$result, { totalPages }, {}, {})}</div>`;
});
const AppRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  let { itemId } = $$props;
  let { headingColumn } = $$props;
  let { columns = [] } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.itemId === void 0 && $$bindings.itemId && itemId !== void 0)
    $$bindings.itemId(itemId);
  if ($$props.headingColumn === void 0 && $$bindings.headingColumn && headingColumn !== void 0)
    $$bindings.headingColumn(headingColumn);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  return `<tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"><th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">${escape(headingColumn)}</th> ${each(columns, (column) => {
    return `<td class="px-6 py-4">${escape(column)} </td>`;
  })} ${slots.default ? slots.default({}) : ``} <td class="flex justify-end gap-4 px-6 py-4"><a href="${"/admin/auth/" + escape(link, true) + "/" + escape(itemId, true) + "/upsert"}" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Edit</a> <form class="inline-block" method="post" action="${"/admin/auth/" + escape(link, true) + "/" + escape(itemId, true) + "/list?/destroy"}"><button type="submit" class="font-medium text-blue-600 hover:underline dark:text-blue-500" data-svelte-h="svelte-1k5rla9">Delete</button></form></td></tr>`;
});
export {
  AppTable as A,
  AppRow as a
};
