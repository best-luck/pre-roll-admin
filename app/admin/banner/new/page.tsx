import { BannerType, createBanner } from "@src/lib/database/banners";
import Form from "./form";
import { revalidatePath } from "next/cache";
import { saveBufferToFile } from "@src/lib/functions/server/helper";
import { put } from '@vercel/blob';


export default async function Page() {

  return (
    <div className="container m-auto py-5">
      <h1 className="text-xl mt-3 font-bold pb-1 px-3 border-b border-gray-300">New Banner</h1>
      <Form />
    </div>
  );
}