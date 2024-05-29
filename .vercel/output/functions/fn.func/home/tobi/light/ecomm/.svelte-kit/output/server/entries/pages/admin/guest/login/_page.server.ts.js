import { f as fail, r as redirect } from "../../../../../chunks/index.js";
import { s as superValidate, m as message } from "../../../../../chunks/superValidate.js";
import "../../../../../chunks/validation2.js";
import { u as useRepository } from "../../../../../chunks/index3.js";
import { h as hash } from "../../../../../chunks/hash.js";
import { j as jwt } from "../../../../../chunks/jwt.js";
import { s as setToken } from "../../../../../chunks/utils3.js";
import { l as loginSchema } from "../../../../../chunks/validation.js";
async function load() {
  const form = await superValidate(loginSchema);
  return { form };
}
const actions = {
  default: async (event) => {
    const form = await superValidate(event, loginSchema);
    if (!form.valid) {
      return fail(400, { form });
    }
    const { email, password } = form.data;
    const repository = useRepository("admin");
    const loginData = await repository.getLoginData(email);
    if (loginData) {
      const { adminPassword, ...jwtData } = loginData;
      const passwordMatched = await hash.compare(
        password,
        adminPassword.password
      );
      if (passwordMatched) {
        const token = jwt.encode(jwtData);
        setToken(event, token);
        throw redirect(303, "/admin/auth/dashboard");
      }
    }
    return message(form, "The email or password does not match");
  }
};
export {
  actions,
  load
};
