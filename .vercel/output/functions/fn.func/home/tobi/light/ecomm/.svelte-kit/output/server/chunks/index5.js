import { env } from "node:process";
import sharp from "sharp";
import { z } from "zod";
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { writeFile, unlink } from "node:fs/promises";
async function promise(callback, logError = false) {
  try {
    const data = await callback();
    return { success: true, data };
  } catch (error) {
    if (logError) {
      console.error(error);
    }
    return { success: false, error };
  }
}
const constants = z.object({
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  S3_REGION: z.string(),
  S3_BUCKET: z.string(),
  S3_DIRECTORY: z.string()
}).parse(env);
const accessKeyId = constants.AWS_ACCESS_KEY_ID;
const secretAccessKey = constants.AWS_SECRET_ACCESS_KEY;
const region = constants.S3_REGION;
const Bucket = constants.S3_BUCKET;
const directory = constants.S3_DIRECTORY;
async function store$1(file, name) {
  const client = getClient();
  let body;
  if (file instanceof File) {
    body = file;
  } else {
    body = await file.toBuffer();
  }
  const upload = new Upload({
    client,
    params: {
      ACL: "public-read",
      Bucket,
      Key: `${directory}/${name}`,
      Body: body,
      CacheControl: "max-age=31536000"
    }
  });
  const uploadPromise = await promise(
    () => upload.done(),
    true
  );
  if (uploadPromise.success && uploadPromise.data.Location) {
    return uploadPromise.data.Location;
  }
}
async function destroy$1(key) {
  const client = getClient();
  key = decodeURIComponent(key.slice(key.indexOf(".com") + 5));
  const command = new DeleteObjectCommand({
    Bucket,
    Key: key
  });
  await promise(() => client.send(command), true);
}
class SThree {
  store = store$1;
  destroy = destroy$1;
}
const sThree = new SThree();
function getClient() {
  return new S3Client({
    credentials: {
      accessKeyId,
      secretAccessKey
    },
    region
  });
}
async function store(file, name) {
  const uploadDirectory = "uploads";
  const filePath = `${uploadDirectory}/${name}`;
  let writePromise;
  if (file instanceof File) {
    const buffer = await file.arrayBuffer();
    writePromise = await promise(
      () => writeFile(filePath, new Uint8Array(buffer)),
      true
    );
  } else {
    writePromise = await promise(() => file.toFile(filePath), true);
  }
  if (writePromise.success) {
    return `/${filePath}`;
  }
}
async function destroy(key) {
  key = key.substring(1);
  await promise(() => unlink(key));
}
class Local {
  store = store;
  destroy = destroy;
}
const local = new Local();
let filesystem = local;
if (env.FILESYSTEM_DISK === "S3") {
  filesystem = sThree;
}
const resizes = {
  product: {
    width: 320,
    height: 288,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  },
  category: {
    width: 48,
    height: 48,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  }
};
async function uploadSharp(file, resize) {
  if (resize) {
    file.resize(resizes[resize]);
  }
  const link = await filesystem.store(
    file.webp(),
    `${crypto.randomUUID()}.webp`
  );
  return link || "";
}
async function uploadFile(name, formData, type) {
  const files = getFiles(formData, name);
  if (files.length === 0) {
    return;
  }
  const links = [];
  for await (const file of files) {
    const { file: optimizedFile, name: name2 } = await optimizeFile(file);
    const link = await filesystem.store(optimizedFile, name2);
    if (link) {
      links.push(link);
    }
  }
  const result = {
    one: links[0] || "",
    many: links
  };
  return result[type];
}
function deleteFile(key) {
  if (key) {
    return filesystem.destroy(key);
  }
}
function getFiles(formData, name) {
  return formData.getAll(name).filter((x) => x instanceof File && x.size > 0);
}
async function optimizeFile(file) {
  const input = await file.arrayBuffer();
  return { file: sharp(input).webp(), name: `${crypto.randomUUID()}.webp` };
}
export {
  uploadSharp as a,
  deleteFile as d,
  uploadFile as u
};
