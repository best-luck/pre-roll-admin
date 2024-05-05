"use server";

import { updateSetting } from "../database/settings";
import { revalidateCache } from "../functions/server/helper";

export async function updateSettings(formData: FormData) {
    await updateSetting("localSchema", formData.get("localSchema")?.toString()||"");
    await updateSetting("googleTags", formData.get("googleTags")?.toString()||"");
    await updateSetting("terms", formData.get("terms")?.toString()||"");
    await updateSetting("privacy", formData.get("privacy")?.toString()||"");
    revalidateCache();
    return {
        message: "success",
        status: "OK"
    }
}