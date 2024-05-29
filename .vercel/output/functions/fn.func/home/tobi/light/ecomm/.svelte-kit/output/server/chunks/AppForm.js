import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute } from "./ssr.js";
import { A as AppHeading } from "./AppHeading.js";
import { S as SubmitButton } from "./SubmitButton.js";
const LightButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button type="button" class="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">${slots.default ? slots.default({}) : ``}</button>`;
});
const AppForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { enctype = "text/plain" } = $$props;
  let { enhance } = $$props;
  let { submitting } = $$props;
  let { name } = $$props;
  if (!name.plural) {
    name.plural = `${name.singular}s`;
  }
  if ($$props.enctype === void 0 && $$bindings.enctype && enctype !== void 0)
    $$bindings.enctype(enctype);
  if ($$props.enhance === void 0 && $$bindings.enhance && enhance !== void 0)
    $$bindings.enhance(enhance);
  if ($$props.submitting === void 0 && $$bindings.submitting && submitting !== void 0)
    $$bindings.submitting(submitting);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="flex flex-col gap-y-5">${validate_component(AppHeading, "AppHeading").$$render($$result, {}, {}, {
    default: () => {
      return `Add a new ${escape(name.singular)}`;
    }
  })} <form${add_attribute("enctype", enctype, 0)} method="post"><div class="grid gap-4 sm:grid-cols-2 sm:gap-6">${slots.default ? slots.default({}) : ``}</div> <div class="mt-4 flex gap-x-3 sm:mt-6">${validate_component(SubmitButton, "SubmitButton").$$render($$result, { submitting }, {}, {
    default: () => {
      return `Add ${escape(name.singular)}`;
    }
  })} <a href="${"/admin/auth/" + escape(name.singular, true) + "/list"}">${validate_component(LightButton, "LightButton").$$render($$result, {}, {}, {
    default: () => {
      return `All ${escape(name.plural)}`;
    }
  })}</a></div></form></div>`;
});
export {
  AppForm as A
};
