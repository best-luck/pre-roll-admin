"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@src/components/shared/common/UI/button";
import { deleteCategoryAction } from "@src/lib/actions/blog";
import { BlogCategory } from "@src/lib/database/blogCategories";
import { useRouter } from "next/navigation";

export default function Table({ categories }: { categories: BlogCategory[] }) {

  const router = useRouter();

  const deleteCategory = async (category: BlogCategory) => {
    const res = await deleteCategoryAction(category.id);
    router.refresh();
  }

  return (
    <table className="border-collapse border border-slate-400 w-full mb-5">
      <thead>
        <tr className="border-y border-gray-200">
          <th className="border border-slate-300"></th>
          <th className="border border-slate-300">Name</th>
          <th className="border border-slate-300">Slug</th>
          <th className="border border-slate-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.map((category: BlogCategory, index:number) => (
            <tr className="text-center border-b checkout-product" key={`category-row-${index}`}>
              <td className="border border-slate-300">{index+1}</td>
              <td className="border border-slate-300">{category.name}</td>
              <td className="border border-slate-300">{category.slug}</td>
              <td>
              <div className="flex justify-center py-2 text-white">
                <Button
                  className="bg-rose-400 mx-3"
                  onClick={() => deleteCategory(category)}
                  type="button">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}