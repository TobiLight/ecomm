import { r as removeToken } from "../../../../../chunks/utils3.js";
import { r as redirect } from "../../../../../chunks/index.js";
const actions = {
  default: async (event) => {
    removeToken(event);
    throw redirect(303, "/admin/guest/login");
  }
};
export {
  actions
};
