import { a as subscribe } from "../../../../chunks/lifecycle.js";
import { c as create_ssr_component, v as validate_component, d as each, e as escape, a as add_attribute } from "../../../../chunks/ssr.js";
import { s as superForm } from "../../../../chunks/index4.js";
import { c as currency } from "../../../../chunks/constants.js";
import { c as createOrderSchema } from "../../../../chunks/validation.js";
import { S as SubmitButton } from "../../../../chunks/SubmitButton.js";
import { A as AppInput } from "../../../../chunks/AppInput.js";
import { a as getTitle } from "../../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cart;
  let products;
  let total;
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  let $submitting, $$unsubscribe_submitting;
  let { data } = $$props;
  const { form, errors, submitting, enhance } = superForm(data.form, { validators: createOrderSchema });
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
    cart = data.cart;
    products = data.products;
    total = products.reduce((total2, product) => total2 + product.price * (cart.get(product.id) || 1), 0);
    $$rendered = `<div class="w-full py-24"><form method="post" class="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-5 xl:px-0 px-5"><div class="w-full flex self-start p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"><div class="w-full grid gap-4 sm:gap-6"><div>${validate_component(AppInput, "AppInput").$$render(
      $$result,
      {
        input: { name: "name", errors: $errors.name },
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
        input: { name: "phone", errors: $errors.phone },
        value: $form.phone
      },
      {
        value: ($$value) => {
          $form.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div>${validate_component(AppInput, "AppInput").$$render(
      $$result,
      {
        input: { name: "city", errors: $errors.city },
        value: $form.city
      },
      {
        value: ($$value) => {
          $form.city = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div>${validate_component(AppInput, "AppInput").$$render(
      $$result,
      {
        input: { name: "address", errors: $errors.address },
        value: $form.address
      },
      {
        value: ($$value) => {
          $form.address = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div>${validate_component(SubmitButton, "SubmitButton").$$render($$result, { submitting: $submitting }, {}, {
      default: () => {
        return `Confirm order`;
      }
    })}</div></div></div> <div class="w-full self-start max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"><div class="flex items-center justify-between mb-4" data-svelte-h="svelte-13v2awl"><h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Order summary</h5></div> <div class="flow-root"><ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">${each(products, (product) => {
      return `<li class="py-3 sm:py-4"><div class="flex items-center space-x-4"><div class="flex-shrink-0"><img class="w-8 h-8 rounded-full"${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)}></div> <div class="flex-1 min-w-0"><p class="text-sm font-medium text-gray-900 truncate dark:text-white">${escape(product.name)}</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400">Quantity:
                    <strong>${escape(cart.get(product.id) || 1)}</strong> </p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${escape(currency)}${escape(product.price * (cart.get(product.id) || 1))} </div></div> </li>`;
    })} <li class="py-3 sm:py-4"><div class="flex items-center space-x-4"><div class="flex-1 min-w-0" data-svelte-h="svelte-trvo97"><p class="text-sm font-medium text-gray-900 truncate dark:text-white"><strong>Order total</strong></p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${escape(currency)}${escape(total)}</div></div></li></ul></div></div></form></div> ${$$result.head += `<!-- HEAD_svelte-pvpuir_START -->${$$result.title = `<title>${escape(getTitle("Checkout"))}</title>`, ""}<meta name="description" content="Seamless checkout at its finest! SvelteKit-powered eCommerce ensures a smooth and secure payment process. Complete your order hassle-free. Shop now!"><!-- HEAD_svelte-pvpuir_END -->`, ""}`;
  } while (!$$settled);
  $$unsubscribe_form();
  $$unsubscribe_errors();
  $$unsubscribe_submitting();
  return $$rendered;
});
export {
  Page as default
};
