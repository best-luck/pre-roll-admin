"use server";

import { revalidatePath } from "next/cache";
import { CategoryImageType, putCategoryImage } from "../database/categoryImages";
import { uploadFileToCloudinary } from "../functions/server/helper";

export async function putCategoryImagesAction(data: CategoryImageType[]) {
  for (const categoryimage of data) {
    const res = await uploadFileToCloudinary(categoryimage.image)
    await putCategoryImage({
      name: categoryimage.name,
      image: res.secure_url
    });
    revalidatePath("/", "layout");
    revalidatePath("/shop", "layout");
    revalidatePath("/deals", "layout");
  }
  return true;
}