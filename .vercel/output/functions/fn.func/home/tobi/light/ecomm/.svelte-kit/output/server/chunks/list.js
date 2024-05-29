import { z } from "zod";
const limit = 20;
z.object({
  page: z.coerce.number().optional()
});
function formatListParams(event) {
  let page = Number(event.url.searchParams.get("page"));
  page = page > 0 ? page : 1;
  const offset = (page - 1) * limit;
  return { limit, offset };
}
function formatListResponse({ items, total }) {
  let totalPages = 0;
  if (total) {
    totalPages = Math.ceil(total / limit);
  }
  return { items, totalPages };
}
export {
  formatListResponse as a,
  formatListParams as f
};
