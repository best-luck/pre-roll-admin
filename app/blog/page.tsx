import getBlogs, { BlogType } from "@src/lib/database/blogs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const blogs = await getBlogs('');

  return (
    <div className="container m-auto py-10">
      <h1 className="text-3xl font-bold mt-5">Blogs</h1>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {
          blogs.map((blog: BlogType) => (
            <Link
              href={`/blog/${blog.slug}`} key={`blog-index-${blog.id}`}>
              <div className="shadow-lg h-full flex flex-col justify-between">
                <Image
                  alt="blog"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={blog.image}
                  />
                <p className="text-xl font-bold px-3 pb-5">{blog.title}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}