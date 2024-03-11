import fs from 'fs';
import { revalidatePath } from 'next/cache';
import path from 'path';
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dx84l6icz',
  api_key: '882141798269339',
  api_secret: 'DpIY03fyhFQmoDaF0e94BLf8a7Y',
});

export const saveBufferToFile = (location: string, buffer: Buffer) => {
  return new Promise((resolve: any, reject: any) => {
    fs.writeFile(path.join(process.cwd(), location), buffer, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

export const uploadFileToCloudinary = async (image: any) => {
  const uploadResponse = await cloudinary.uploader.upload(image, {});
  return uploadResponse;
}

export const revalidateCache = () => {
  revalidatePath("/", "layout");
  revalidatePath("/admin", "layout");
  revalidatePath("/shop", "layout");
  revalidatePath("/deals", "layout");
}