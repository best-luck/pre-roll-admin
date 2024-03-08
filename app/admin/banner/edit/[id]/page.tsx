import { getBanner } from "@src/lib/database/banners";
import Form from "./form";

export default async function Page({ params: { id } }: { params: { id: number } }) {

  const banner = await getBanner(id);

  return (
    <div className="container m-auto py-5">
      <h1 className="text-xl mt-3 font-bold pb-1 px-3 border-b border-gray-300">New Banner</h1>
      <Form
        banner={banner}
        />
    </div>
  );
}