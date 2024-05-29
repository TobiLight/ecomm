import { a as subscribe } from "../../../../../chunks/lifecycle.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { s as superForm } from "../../../../../chunks/index4.js";
import { A as AppInput } from "../../../../../chunks/AppInput.js";
import { S as SubmitButton } from "../../../../../chunks/SubmitButton.js";
import { b as upsertAdminSchema } from "../../../../../chunks/validation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let $delayed, $$unsubscribe_delayed;
  let { data } = $$props;
  const { form, errors, delayed, enhance } = superForm(data.form, { validators: upsertAdminSchema });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_delayed = subscribe(delayed, (value) => $delayed = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0"><div class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"><div class="space-y-4 p-6 sm:p-8 md:space-y-6"><h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl" data-svelte-h="svelte-t01hqi">Create your account</h1> <form method="post" class="space-y-4 md:space-y-6"><div>${validate_component(AppInput, "AppInput").$$render(
      $$result,
      {
        input: {
          name: "name",
          label: "Your name",
          placeholder: "John doe",
          errors: $errors.name
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
          type: "email",
          label: "Your email",
          placeholder: "name@company.com",
          errors: $errors.email
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
    )}</div> ${validate_component(SubmitButton, "SubmitButton").$$render($$result, { submitting: $delayed, wFull: true }, {}, {
      default: () => {
        return `Sign up`;
      }
    })}</form></div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_errors();
  $$unsubscribe_form();
  $$unsubscribe_delayed();
  return $$rendered;
});
export {
  Page as default
};
