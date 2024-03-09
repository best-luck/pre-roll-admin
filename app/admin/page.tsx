import getCategoryImages, { CategoryImageType, getCategoryImage } from "@src/lib/database/categoryImages";
import Form from "./form";

export default async function Page() {

  const images = await getCategoryImages();

  return (
    <div className="container m-auto py-10">
      <Form
        images={images}
        />
    </div>
  );
}