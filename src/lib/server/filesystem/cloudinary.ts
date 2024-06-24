import {
  v2 as cloudinary,
  UploadApiErrorResponse,
  UploadApiResponse,
  UploadStream,
} from 'cloudinary';
import { env } from 'node:process';
import { z } from 'zod';
import type { Sharp } from 'sharp';

const cloudinaryConfig = z
  .object({
    CLOUDINARY_NAME: z.string(),
    CLOUDINARY_API_KEY: z.string(),
    CLOUDINARY_API_SECRET: z.string(),
  })
  .parse(env);

//   export async function store(file: File, name: string) {
//     let body: File;

//     body = file

//     const uploadPromise = await promise<CompleteMultipartUploadCommandOutput>(
//       () => upload.done(),
//       true,
//     );

//     if (uploadPromise.success && uploadPromise.data.Location) {
//       return uploadPromise.data.Location;
//     }
//   }

class CloudinaryStore {
  cloudinaryStore: typeof cloudinary;

  constructor() {
    cloudinary.config({
      cloud_name: cloudinaryConfig.CLOUDINARY_NAME,
      api_key: cloudinaryConfig.CLOUDINARY_API_KEY,
      api_secret: cloudinaryConfig.CLOUDINARY_API_SECRET,
      secure: true,
    });

    this.cloudinaryStore = cloudinary;
  }

  async upload(file: File | Sharp, name: string, folder: string): Promise<UploadApiResponse | undefined> {
    let ret: string | undefined;

    if (file instanceof File) {
      const uploadData = {
        file: file,
        upload_preset: 'kvk',
      };
      let clUploadProm = new Promise((resolve, reject) => {
        const uploadProm = this.cloudinaryStore.uploader.upload_stream(
          { folder },
          (err, res) => {
            if (err) reject(err.message as string);
            else resolve(res);
          },
        );

        file.arrayBuffer().then((buffer) => {
          const array = new Uint8Array(buffer);

          uploadProm.write(array);

          uploadProm.end();
        });
      });

      let uploadRes = (await clUploadProm) as UploadApiResponse;

      return uploadRes;
    }

    // const uploadProm = new Promise((resolve, reject) => {
    //   this.cloudinaryStore.uploader
    //     .upload_stream({ folder: 'kvk' }, (err, res) => {
    //       if (err) reject(err.message as string);
    //       else resolve(res?.secure_url as string);
    //     })
    //     .end(file);
    // });

    // const x = (await uploadProm) as string;

    // return x;
  }

  async destroy(publicID: string): Promise<any> {
    try {
      let req = await this.cloudinaryStore.uploader.destroy(publicID);

      return req;
    } catch (err: any) {
      console.error(err);

      return undefined
    }
  }
}

export async function store(file: File | Sharp, name: string, folder: string) {
  let cl = new CloudinaryStore();

  return await cl.upload(file, name, folder);
}

export async function destroy(publicID: string) {
  let cl = new CloudinaryStore();

  return await cl.destroy(publicID);
}

export class Cloudinary {
  store = store;
  destroy = destroy;
}

export const cloudinaryService = new Cloudinary();
