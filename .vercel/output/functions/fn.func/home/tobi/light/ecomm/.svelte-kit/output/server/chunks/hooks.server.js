import { r as redirect } from "./index.js";
import { g as getToken } from "./utils3.js";
import { j as jwt } from "./jwt.js";
const handle = async ({ event, resolve }) => {
  const token = getToken(event);
  if (token) {
    const admin = jwt.verifyAndDecode(token);
    if (admin) {
      event.locals.admin = admin;
    }
  }
  if (!event.locals.admin && event.url.pathname.startsWith("/admin/auth")) {
    throw redirect(303, "/admin/guest/login");
  }
  return await resolve(event);
};
export {
  handle
};
