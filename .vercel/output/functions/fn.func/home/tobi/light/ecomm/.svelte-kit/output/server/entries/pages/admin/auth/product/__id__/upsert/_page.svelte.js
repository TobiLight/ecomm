import { a as subscribe } from "../../../../../../../chunks/lifecycle.js";
import { c as create_ssr_component, a as add_attribute, e as escape, d as each, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { s as superForm } from "../../../../../../../chunks/index4.js";
import { A as AppInput } from "../../../../../../../chunks/AppInput.js";
import { e as upsertProductSchema } from "../../../../../../../chunks/validation.js";
import { titleCase, noCase } from "text-case";
import { A as AppForm } from "../../../../../../../chunks/AppForm.js";
import { A as AppFileInput } from "../../../../../../../chunks/AppFileInput.js";
import { p as page } from "../../../../../../../chunks/stores.js";
const AppTextarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name;
  let id;
  let label;
  let required;
  let rows;
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
  id = input.id || name;
  label = input.label || titleCase(name);
  required = input.required || false;
  rows = input.rows || 5;
  placeholder = input.placeholder || `Type ${noCase(name)} here`;
  errors = input.errors || [];
  hasError = errors.length > 0;
  return `<label${add_attribute("for", id, 0)} class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">${escape(label)}</label> <textarea${add_attribute("id", id, 0)}${add_attribute("rows", rows, 0)}${add_attribute("name", name, 0)} ${required ? "required" : ""}${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-invalid", hasError, 0)} class="${"block w-full rounded-lg border " + escape(
    hasError ? "border-red-500 bg-red-50 p-2.5 text-sm text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500" : "focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-500 dark:focus:ring-primary-500 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    true
  )}">${escape(value || "")}</textarea> ${hasError ? `<ul class="mt-2 text-sm text-red-600 dark:text-red-500">${each(errors, (error) => {
    return `<li>${escape(error)}</li>`;
  })}</ul>` : ``}`;
});
const AppSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name;
  let as;
  let id;
  let label;
  let required;
  let placeholder;
  let errors;
  let hasError;
  let { options } = $$props;
  let { valueKey } = $$props;
  let { textKey } = $$props;
  let { input } = $$props;
  let { value = "" } = $$props;
  if (input.value) {
    value = input.value;
  }
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.valueKey === void 0 && $$bindings.valueKey && valueKey !== void 0)
    $$bindings.valueKey(valueKey);
  if ($$props.textKey === void 0 && $$bindings.textKey && textKey !== void 0)
    $$bindings.textKey(textKey);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  name = input.name;
  as = input.as;
  id = input.id || name;
  label = input.label || `Select an ${noCase(as || name)}`;
  required = input.required || false;
  placeholder = input.placeholder || `Choose a ${noCase(as || name)}`;
  errors = input.errors || [];
  hasError = errors.length > 0;
  return `<label${add_attribute("for", id, 0)} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">${escape(label)}</label> <select${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} ${required ? "required" : ""}${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-invalid", hasError, 0)} class="${"block w-full rounded-lg border p-2.5 text-sm " + escape(
    hasError ? "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500" : "focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-500 dark:focus:ring-primary-500 border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    true
  )}"><option${add_attribute("value", "", 0)}>${escape(placeholder)}</option>${each(options, (option) => {
    return `<option${add_attribute("value", option[valueKey], 0)}>${escape(option[textKey])}</option>`;
  })}</select> ${hasError ? `<ul class="mt-2 text-sm text-red-600 dark:text-red-500">${each(errors, (error) => {
    return `<li>${escape(error)}</li>`;
  })}</ul>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $submitting, $$unsubscribe_submitting;
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { form, errors, submitting, enhance } = superForm(data.form, {
    validators: upsertProductSchema,
    taintedMessage: null
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_submitting = subscribe(submitting, (value) => $submitting = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(AppForm, "AppForm").$$render(
      $$result,
      {
        enhance,
        enctype: "multipart/form-data",
        name: { singular: "product" },
        submitting: $submitting
      },
      {},
      {
        default: () => {
          return `<div class="sm:col-span-2">${validate_component(AppSelect, "AppSelect").$$render(
            $$result,
            {
              input: {
                name: "categoryId",
                as: "category",
                errors: $errors.categoryId,
                value: data.item?.categoryId
              },
              options: data.categories,
              valueKey: "id",
              textKey: "name",
              value: $form.categoryId
            },
            {
              value: ($$value) => {
                $form.categoryId = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div class="sm:col-span-2">${validate_component(AppInput, "AppInput").$$render(
            $$result,
            {
              input: {
                name: "name",
                placeholder: "SuperTech X1",
                errors: $errors.name,
                value: data.item?.name
              },
              value: $form.name
            },
            {
              value: ($$value) => {
                $form.name = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div>${validate_component(AppInput, "AppInput").$$render(
            $$result,
            {
              input: {
                name: "price",
                type: "number",
                placeholder: "300",
                errors: $errors.price,
                value: data.item?.price
              },
              value: $form.price
            },
            {
              value: ($$value) => {
                $form.price = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div>${validate_component(AppInput, "AppInput").$$render(
            $$result,
            {
              input: {
                name: "quantity",
                type: "number",
                placeholder: "3",
                errors: $errors.quantity,
                value: data.item?.quantity
              },
              value: $form.quantity
            },
            {
              value: ($$value) => {
                $form.quantity = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div class="col-span-2">${validate_component(AppTextarea, "AppTextarea").$$render(
            $$result,
            {
              input: {
                name: "description",
                placeholder: "Introducing the SuperTech X1 - your all-in-one solution for cutting-edge performance and seamless connectivity. With a lightning-fast chipset, stunning display, and advanced camera system, it's the ultimate tech companion",
                errors: $errors.description,
                value: data.item?.description
              },
              value: $form.description
            },
            {
              value: ($$value) => {
                $form.description = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div class="col-span-2">${validate_component(AppFileInput, "AppFileInput").$$render(
            $$result,
            {
              input: {
                name: "image",
                type: "file",
                min: 5,
                multiple: true,
                required: !$page.params.id,
                errors: $errors.image
              }
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_submitting();
  $$unsubscribe_errors();
  $$unsubscribe_form();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
