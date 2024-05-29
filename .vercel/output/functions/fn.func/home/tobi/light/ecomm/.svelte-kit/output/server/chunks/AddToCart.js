import { c as create_ssr_component, e as escape, v as validate_component } from "./ssr.js";
import "devalue";
import { S as SubmitButton } from "./SubmitButton.js";
const AddToCart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isInCart } = $$props;
  let { product } = $$props;
  let submitting = false;
  if ($$props.isInCart === void 0 && $$bindings.isInCart && isInCart !== void 0)
    $$bindings.isInCart(isInCart);
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  return `<form method="post" action="${"/product/" + escape(product.id, true) + "?/" + escape(isInCart ? "remove" : "add", true)}" class="flex gap-5">${!isInCart ? `<input type="hidden" name="quantity" value="1">` : ``} ${validate_component(SubmitButton, "SubmitButton").$$render($$result, { submitting }, {}, {
    default: () => {
      return `${isInCart ? `Remove from cart` : `Add to cart`}`;
    }
  })}</form>`;
});
export {
  AddToCart as A
};
