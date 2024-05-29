import { c as create_ssr_component, a as add_attribute, e as escape, d as each } from "./ssr.js";
import { titleCase, noCase } from "text-case";
const AppInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name;
  let min;
  let overrideClass;
  let multiple;
  let id;
  let label;
  let showLabel;
  let required;
  let placeholder;
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
  overrideClass = input.class || "";
  multiple = input.multiple || false;
  id = input.id || name;
  input.type || "text";
  label = input.label || titleCase(name);
  showLabel = input.showLabel || true;
  required = input.required || true;
  placeholder = input.placeholder || `Type ${noCase(name)} here`;
  errors = input.errors || [];
  hasError = errors.length > 0;
  return `${showLabel ? `<label${add_attribute("for", id, 0)} class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">${escape(label)}</label>` : ``} <input${add_attribute("id", id, 0)}${add_attribute("min", min, 0)}${add_attribute("name", name, 0)} ${required ? "required" : ""}${add_attribute("placeholder", placeholder, 0)} ${multiple ? "multiple" : ""}${add_attribute("max", input.max, 0)}${add_attribute("aria-invalid", hasError, 0)} class="${"block w-full rounded-lg border p-2.5 text-sm " + escape(
    hasError ? "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500" : "focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-500 dark:focus:ring-primary-500 border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    true
  ) + " " + escape(overrideClass, true)}"${add_attribute("value", value, 0)}> ${hasError ? `<ul class="mt-2 text-sm text-red-600 dark:text-red-500">${each(errors, (error) => {
    return `<li>${escape(error)}</li>`;
  })}</ul>` : ``}`;
});
export {
  AppInput as A
};
