import { BannerType, createBanner } from "@src/lib/database/banners";
import Form from "./form";
import fs from 'fs';
import { revalidatePath } from "next/cache";

export default async function Page() {

  const saveBanner = async (data: BannerType) => {
    'use server';

    const base64Data = data.image.replace(/^data:image\/\w+;base64,/, '');

    // Convert the base64 data to a Buffer
    const buffer = Buffer.from(base64Data, 'base64');

    // Generate a unique filename or use the original filename
    const fullpath = `/images/blogs/${new Date().getTime()}.png`;

    // Save the file to the desired location
    fs.writeFile('public'+fullpath, buffer, async (error) => {
      console.log(error);
      if (!error) {
        data.image=fullpath;
        const res = await createBanner(data);
        revalidatePath("/admin/banner", "layout");
      }
    });
  }

  return (
    <div className="container m-auto py-5">
      <h1 className="text-xl mt-3 font-bold pb-1 px-3 border-b border-gray-300">New Banner</h1>
      <Form
        saveBanner={saveBanner}
        />
    </div>
  );
}