import getBlogCategories from "@src/lib/database/blogCategories";
import Form from "./form";
import { getBlog } from "@src/lib/database/blogs";

export default async function Page({ params: { id } }: { params: { id: string } }) {

  id = decodeURIComponent(id);
  const blog = await getBlog(id);
  const blogCategories = await getBlogCategories();

  return (
    <div className="container m-auto py-5">
      <h1 className="text-xl mt-3 font-bold pb-1 px-3 border-b border-gray-300">New Blog</h1>
      <Form
        blog={blog}
        categories={blogCategories}/>
    </div>
  );
}