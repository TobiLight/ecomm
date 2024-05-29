import { join } from "node:path";
import { createReadStream } from "node:fs";
async function GET({ params }) {
  const key = params.key;
  const filePath = join("uploads", key);
  const fileStream = createReadStream(filePath);
  return new Response(fileStream);
}
export {
  GET
};
