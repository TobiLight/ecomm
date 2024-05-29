import { c as create_ssr_component, a as add_attribute, e as escape, d as each } from "./ssr.js";
import { titleCase } from "text-case";
const AppFileInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name;
  let min;
  let multiple;
  let id;
  let label;
  let required;
  let errors;
  let hasError;
  let { input } = $$props;
  let { value = "" } = $$props;
  if (input.value) {
    value = input.value;
  }
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  name = input.name;
  min = input.min || 0;
  multiple = input.multiple || false;
  id = input.id || name;
  label = input.label || titleCase(name);
  required = input.required || false;
  errors = input.errors || [];
  hasError = errors.length > 0;
  return `<label${add_attribute("for", id, 0)} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">${escape(label)}</label> <input${add_attribute("id", id, 0)}${add_attribute("min", min, 0)}${add_attribute("name", name, 0)} ${multiple ? "multiple" : ""} ${required ? "required" : ""}${add_attribute("aria-invalid", hasError, 0)} class="${"block w-full text-sm border rounded-lg cursor-pointer focus:outline-none " + escape(
    hasError ? "border-red-500 text-red-900 dark:border-red-500 dark:bg-gray-700 dark:text-red-500" : "text-gray-900 border-gray-300 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",
    true
  )}" type="file"> ${hasError ? `<ul class="mt-2 text-sm text-red-600 dark:text-red-500">${each(errors, (error) => {
    return `<li>${escape(error)}</li>`;
  })}</ul>` : ``}`;
});
export {
  AppFileInput as A
};
