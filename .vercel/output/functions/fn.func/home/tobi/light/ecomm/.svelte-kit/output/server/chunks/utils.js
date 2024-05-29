import { e as error } from "./index.js";
import { P as PUBLIC_APP_NAME } from "./public.js";
function throwIfNotFound(item) {
  if (!item) {
    throw error(404);
  }
  return item;
}
function getParamsString(searchParams, removeParams, addParams) {
  let allParams = Object.fromEntries(searchParams);
  if (removeParams) {
    for (const param of removeParams) {
      delete allParams[param];
    }
  }
  if (addParams) {
    allParams = { ...allParams, ...addParams };
  }
  return new URLSearchParams(allParams).toString();
}
function getTitle(title) {
  return title ? `${PUBLIC_APP_NAME} | ${title}` : PUBLIC_APP_NAME;
}
export {
  getTitle as a,
  getParamsString as g,
  throwIfNotFound as t
};
