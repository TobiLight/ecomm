import { u as useRepository } from "../../../../../../../chunks/index3.js";
import { f as formatListParams, a as formatListResponse } from "../../../../../../../chunks/list.js";
import { t as throwIfNotFound } from "../../../../../../../chunks/utils.js";
const repository = useRepository("admin");
async function load(event) {
  const params = formatListParams(event);
  const items = await repository.getMany(params);
  const data = formatListResponse(items);
  return { data };
}
const actions = {
  destroy: async (event) => {
    const id = Number(event.params.id);
    if (id) {
      const result = await repository.destroy(id);
      return throwIfNotFound(result);
    }
  }
};
export {
  actions,
  load
};
