import { a as subscribe } from "../../../../../chunks/lifecycle.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { s as superForm } from "../../../../../chunks/index4.js";
import { A as AppInput } from "../../../../../chunks/AppInput.js";
import { S as SubmitButton } from "../../../../../chunks/SubmitButton.js";
const ErrorAlert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-700 dark:text-red-400" role="alert"><span class="font-medium" data-svelte-h="svelte-1gfseow">Oops!</span> ${slots.default ? slots.default({}) : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $message, $$unsubscribe_message;
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let $delayed, $$unsubscribe_delayed;
  let { data } = $$props;
  const { form, errors, delayed, enhance, message } = superForm(data.form);
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_delayed = subscribe(delayed, (value) => $delayed = value);
  $$unsubscribe_message = subscribe(message, (value) => $message = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_message();
  $$unsubscribe_errors();
  $$unsubscribe_form();
  $$unsubscribe_delayed();
  return `<div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0"><div class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"><div class="space-y-4 p-6 sm:p-8 md:space-y-6"><h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl" data-svelte-h="svelte-j58nfx">Sign in to your account</h1> ${$message ? `${validate_component(ErrorAlert, "ErrorAlert").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($message)}`;
    }
  })}` : ``} <form method="post" class="space-y-4 md:space-y-6"><div>${validate_component(AppInput, "AppInput").$$render(
    $$result,
    {
      input: {
        name: "email",
        type: "email",
        label: "Your email",
        placeholder: "name@company.com",
        errors: $errors.email,
        value: $form.email
      }
    },
    {},
    {}
  )}</div> <div>${validate_component(AppInput, "AppInput").$$render(
    $$result,
    {
      input: {
        name: "password",
        type: "password",
        placeholder: "••••••••",
        errors: $errors.password,
        value: $form.password
      }
    },
    {},
    {}
  )}</div> ${validate_component(SubmitButton, "SubmitButton").$$render($$result, { submitting: $delayed, wFull: true }, {}, {
    default: () => {
      return `Sign in`;
    }
  })}</form></div></div></div>`;
});
export {
  Page as default
};
