import { revalidatePath } from "next/cache";
import Form, { CategoryImagesType } from "./form";
import fs from 'fs';

export default function Page() {

  const saveCategoryImages = async (data: CategoryImagesType) => {
    "use server";
    Object.keys(data).map(category => {
      const base64Data = data[category].replace(/^data:image\/\w+;base64,/, '');

      // Convert the base64 data to a Buffer
      const buffer = Buffer.from(base64Data, 'base64');

      // Generate a unique filename or use the original filename
      const fullpath = `/images/categories/${category}.jfif`;

      // Save the file to the desired location
      fs.writeFile('public'+fullpath, buffer, async (error) => {
        if (!error) {
          revalidatePath("/admin", "layout");
        }
      });
    });
  }

  return (
    <div className="container m-auto py-10">
      <Form
        saveCategoryImages={saveCategoryImages}/>
    </div>
  );
}