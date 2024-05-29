import { a as subscribe } from "../../../../../../../chunks/lifecycle.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { s as superForm } from "../../../../../../../chunks/index4.js";
import { A as AppInput } from "../../../../../../../chunks/AppInput.js";
import { A as AppForm } from "../../../../../../../chunks/AppForm.js";
import { b as upsertAdminSchema } from "../../../../../../../chunks/validation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $submitting, $$unsubscribe_submitting;
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  const { form, errors, submitting, enhance } = superForm(data.form, {
    validators: upsertAdminSchema,
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
        name: { singular: "product" },
        enhance,
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
                placeholder: "John Doe",
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
                name: "email",
                placeholder: "name@company.com",
                errors: $errors.email,
                value: data.item?.email
              },
              value: $form.email
            },
            {
              value: ($$value) => {
                $form.email = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div>${validate_component(AppInput, "AppInput").$$render(
            $$result,
            {
              input: {
                name: "password",
                type: "password",
                placeholder: "••••••••",
                errors: $errors.password
              },
              value: $form.password
            },
            {
              value: ($$value) => {
                $form.password = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_submitting();
  $$unsubscribe_errors();
  $$unsubscribe_form();
  return $$rendered;
});
export {
  Page as default
};
