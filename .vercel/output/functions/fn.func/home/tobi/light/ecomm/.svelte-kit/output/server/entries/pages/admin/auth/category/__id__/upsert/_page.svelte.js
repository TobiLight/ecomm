import { a as subscribe } from "../../../../../../../chunks/lifecycle.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { s as superForm } from "../../../../../../../chunks/index4.js";
import { A as AppInput } from "../../../../../../../chunks/AppInput.js";
import { d as upsertCategorySchema } from "../../../../../../../chunks/validation.js";
import { A as AppForm } from "../../../../../../../chunks/AppForm.js";
import { A as AppFileInput } from "../../../../../../../chunks/AppFileInput.js";
import { p as page } from "../../../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $submitting, $$unsubscribe_submitting;
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { form, errors, submitting, enhance } = superForm(data.form, {
    validators: upsertCategorySchema,
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
        name: {
          singular: "category",
          plural: "categories"
        },
        submitting: $submitting
      },
      {},
      {
        default: () => {
          return `<div class="sm:col-span-2">${validate_component(AppInput, "AppInput").$$render(
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
