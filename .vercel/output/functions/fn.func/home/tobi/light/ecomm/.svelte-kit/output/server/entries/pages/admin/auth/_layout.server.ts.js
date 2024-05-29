import { r as redirect } from "../../../../chunks/index.js";
function load(event) {
  if (!event.locals.admin) {
    throw redirect(303, "/admin/guest/login");
  }
}
export {
  load
};
