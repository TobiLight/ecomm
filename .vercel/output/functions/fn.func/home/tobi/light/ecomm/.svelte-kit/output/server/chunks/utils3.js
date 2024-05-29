import { d as dev } from "./environment.js";
function setToken(event, token) {
  event.cookies.set("authorization", token, {
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
function getToken(event) {
  return event.cookies.get("authorization");
}
function removeToken(event) {
  event.cookies.set("authorization", "", {
    path: "/",
    expires: /* @__PURE__ */ new Date(0)
  });
}
export {
  getToken as g,
  removeToken as r,
  setToken as s
};
