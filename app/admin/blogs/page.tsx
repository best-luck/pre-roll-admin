import getBlogs from "@src/lib/database/blogs";
import Link from "next/link";
import Table from "./table";
import { unstable_noStore } from "next/cache";

export default async function Page() {
  unstable_noStore();
  const blogs = await getBlogs("");

  return (
    <div className="container m-auto py-10">
      <div className="flex justify-end">
        <Link href="blogs/new" className="p-3 bg-cyan-400 text-white rounded-lg">
          Add New
        </Link>
      </div>
      <div className="mt-5 shadow-lg p-5 rounded-[20px]">
        <h1 className="text-xl font-bold mb-5 border-b border-gray-400">Blogs</h1>
        <Table
          blogs={blogs}
          />
      </div>
    </div>
  )
}