import { BlogType, getBlog } from "@src/lib/database/blogs";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata(props: Props) {
  
  const slug = decodeURIComponent(props.params.slug);
  const blog: BlogType = await getBlog(slug);

  return {
    title: blog.meta_title,
    description: blog.meta_description,
  }
}

export default async function Page(props: Props) {

  const slug = decodeURIComponent(props.params.slug);
  const blog: BlogType = await getBlog(slug);

  return (
    <div className="container m-auto py-5">
      <Image
        src={blog.image}
        layout="responsive"
        width={100}
        alt="blog image"
        height={100}
        />
      <h1 className="text-3xl font-bold uppercase border-b pb-3 border-gray-300 mt-5">{blog.title}</h1>
      <h2 className="text-end">Written By <span className="font-bold uppercase">{blog.author}</span> on {new Date(blog?.created_at||new Date()).toDateString()}</h2>
      <div className="mt-5" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}