import { c as create_ssr_component, v as validate_component, d as each, a as add_attribute } from "../../../../../../../chunks/ssr.js";
import { A as AppTable, a as AppRow } from "../../../../../../../chunks/AppRow.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let totalPages;
  let { data } = $$props;
  const name = {
    singular: "category",
    plural: "categories"
  };
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
      columns: ["Name", "Image"]
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
              link: name.singular
            },
            {},
            {
              default: () => {
                return `<td class="px-6 py-4"><a${add_attribute("href", item.image, 0)} target="_blank"><img loading="lazy" width="32" height="32" class="rounded-md"${add_attribute("src", item.image, 0)}${add_attribute("alt", item.name, 0)}> </a></td> `;
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
