import { u as useRepository } from "../../../../../../../chunks/index3.js";
import { f as formatListParams, a as formatListResponse } from "../../../../../../../chunks/list.js";
import { t as throwIfNotFound } from "../../../../../../../chunks/utils.js";
import { d as deleteFile } from "../../../../../../../chunks/index5.js";
const repository = useRepository("category");
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
      const { image } = throwIfNotFound(await repository.getOne(id));
      await deleteFile(image);
      return throwIfNotFound(await repository.destroy(id));
    }
  }
};
export {
  actions,
  load
};
