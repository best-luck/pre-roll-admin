"use server";

import { revalidatePath } from "next/cache";
import { BannerType, updateBanner } from "../database/banners";
import { uploadFileToCloudinary } from "../functions/server/helper";

export async function updateBannerAction(banner: BannerType) {
  if (!banner.image.startsWith('https://')) {
    const { secure_url } = await uploadFileToCloudinary(banner.image);
    banner.image = secure_url;
  }
  const res = await updateBanner(banner);
  revalidatePath("/", "layout");
  revalidatePath("/admin/banner", "layout");
  return res;
}