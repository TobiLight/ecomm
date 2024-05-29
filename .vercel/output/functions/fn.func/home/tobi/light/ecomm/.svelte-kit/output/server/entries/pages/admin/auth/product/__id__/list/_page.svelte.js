import { c as create_ssr_component, v as validate_component, d as each, e as escape, a as add_attribute } from "../../../../../../../chunks/ssr.js";
import { A as AppTable, a as AppRow } from "../../../../../../../chunks/AppRow.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let totalPages;
  let { data } = $$props;
  const name = { singular: "product" };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  items = data.data.items;
  totalPages = data.data.totalPages;
  return `${validate_component(AppTable, "AppTable").$$render(
    $$result,
    {
      items,
      totalPages,
      name,
      columns: ["Name", "Price", "Quantity", "Category", "Image"],
      dummy: true
    },
    {},
    {
      default: () => {
        return `${each(items, (item) => {
          return `${validate_component(AppRow, "AppRow").$$render(
            $$result,
            {
              itemId: item.id,
              headingColumn: item.name,
              columns: [item.price, item.quantity],
              link: name.singular
            },
            {},
            {
              default: () => {
                return `<td class="px-6 py-4"><span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">${escape(item.category?.name)} </span></td> <td class="px-6 py-4"><a${add_attribute("href", item.image, 0)} target="_blank"><img loading="lazy" width="32" height="32" class="rounded-md"${add_attribute("src", item.image, 0)}${add_attribute("alt", item.name, 0)}> </a></td> `;
              }
            }
          )}`;
        })}`;
      }
    }
  )}`;
});
export {
  Page as default
};
