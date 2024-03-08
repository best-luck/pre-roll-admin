import { BannerType, createBanner } from "@src/lib/database/banners";
import Form from "./form";
import { revalidatePath } from "next/cache";
import { saveBufferToFile } from "@src/lib/functions/server/helper";
import { put } from '@vercel/blob';


export default async function Page() {

  const saveBanner = async (formData: FormData) => {
    'use server';

    const imageFile = formData.get('image') as File;
    console.log(imageFile)
    const fileBuffer = Buffer.from(await imageFile.arrayBuffer());
    console.log(fileBuffer);
    const blob = await put("/banners/"+imageFile.name, fileBuffer, {
      access: 'public',
    });
    console.log('here')
    revalidatePath('/');
    return blob;

    // const base64Data = data.image.replace(/^data:image\/\w+;base64,/, '');

    // // Convert the base64 data to a Buffer
    // const buffer = Buffer.from(base64Data, 'base64');

    // // Generate a unique filename or use the original filename
    // const fullpath = `/images/blogs/${new Date().getTime()}.png`;
    // const error = await saveBufferToFile('public'+fullpath, buffer)
    // console.log(error);
    // if (!error) {
    //   data.image=fullpath;
    //   const res = await createBanner(data);
    //   revalidatePath("/admin/banner", "layout");
    //   return "";
    // }
    // return error;
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