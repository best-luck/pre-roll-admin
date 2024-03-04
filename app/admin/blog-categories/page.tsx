import getBlogCategories from "@src/lib/database/blogCategories";
import Table from "./table";
import Form from "./form";

export default async function Page() {
  // const blogCategories = await prisma.blogcategory.findMany();
  // console.log(blogCategories);
  const blogCategories = await getBlogCategories();
  console.log(blogCategories)

  return (
    <div className="container m-auto">
      <Form />
      <h1 className="text-xl font-bold mb-5">Categories</h1>
      <Table categories={blogCategories} />
    </div>
  )
}