import { c as create_ssr_component, v as validate_component, d as each } from "../../../../../../../chunks/ssr.js";
import { A as AppTable, a as AppRow } from "../../../../../../../chunks/AppRow.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let totalPages;
  let { data } = $$props;
  const name = { singular: "admin" };
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
      columns: ["Name", "Email"]
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
              columns: [item.email],
              link: name.singular
            },
            {},
            {}
          )}`;
        })}`;
      }
    }
  )}`;
});
export {
  Page as default
};
