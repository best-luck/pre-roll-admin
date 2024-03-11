"use server";

import { CategoryImageType, putCategoryImage } from "../database/categoryImages";
import { revalidateCache, uploadFileToCloudinary } from "../functions/server/helper";

export async function putCategoryImagesAction(data: CategoryImageType[]) {
  for (const categoryimage of data) {
    const res = await uploadFileToCloudinary(categoryimage.image)
    await putCategoryImage({
      name: categoryimage.name,
      image: res.secure_url
    });
    revalidateCache();
  }
  return true;
}