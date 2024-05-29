import { d as dev } from "./environment.js";
function setCart(event, cart) {
  event.cookies.set("cart", JSON.stringify([...cart]), {
    // send cookie for every page
    path: "/",
    // server side only cookie so you can't use `document.cookie`
    httpOnly: true,
    // only requests from same site can send cookies
    // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
    sameSite: "strict",
    // only sent over HTTPS in production
    secure: dev,
    // set cookie to expire after a month
    maxAge: 60 * 60 * 24 * 30
  });
}
function getCart(event) {
  let cartMap = /* @__PURE__ */ new Map();
  const cart = event.cookies.get("cart");
  if (cart) {
    try {
      cartMap = new Map(JSON.parse(cart));
    } catch (error) {
      removeCart(event);
    }
  }
  return cartMap;
}
function removeCart(event) {
  event.cookies.set("cart", "", {
    path: "/",
    expires: /* @__PURE__ */ new Date(0)
  });
}
export {
  getCart as g,
  removeCart as r,
  setCart as s
};
