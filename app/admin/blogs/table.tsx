"use client";

import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@src/components/shared/common/UI/button";
import { deleteBlogAction } from "@src/lib/actions/blog";
import { BlogType } from "@src/lib/database/blogs";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

interface BlogTableProps {
  blogs: BlogType[]
}

export default function Table(props: BlogTableProps) {

  const blogs = props.blogs;
  const router = useRouter();
  const [state, deleteAction] = useFormState(deleteBlogAction, {});

  const viewBlog = (blog: BlogType) => {
    router.push(`/shop/blog/${blog.slug}`)
  }

  const deleteBlog = async (blog: BlogType) => {
    const formData = new FormData();
    formData.set('id', (blog.id||'').toString());
    const res = await deleteAction(formData);
  }

  const editBlog = async (blog: BlogType) => {
    router.push(`/admin/blogs/edit/${blog.slug}`);
  }

  return (
    <table className="border-collapse border border-slate-400 w-full mb-5">
      <thead>
        <tr className="border-y border-gray-200">
          <th className="border border-slate-300">Id</th>
          <th className="border border-slate-300">Name</th>
          <th className="border border-slate-300">Slug</th>
          <th className="border border-slate-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          blogs.map((blog: BlogType, index:number) => (
            <tr className="text-center border-b checkout-product" key={`blog-row-${index}`}>
              <td className="border border-slate-300">{index+1}</td>
              <td className="border border-slate-300">{blog.title}</td>
              <td className="border border-slate-300">{blog.slug}</td>
              <td>
                <div className="flex justify-center py-2 text-white">
                  <Button
                    className="bg-blue-400"
                    onClick={() => viewBlog(blog)}
                    type="button">
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button
                    className="bg-rose-400 mx-3"
                    onClick={() => deleteBlog(blog)}
                    type="button">
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                  <Button
                    className="bg-green-400"
                    onClick={() => editBlog(blog)}
                    type="button">
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}