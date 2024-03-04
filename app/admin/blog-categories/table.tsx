import { BlogCategory } from "@src/lib/database/blogCategories";

export default function Table({ categories }: { categories: BlogCategory[] }) {
  return (
    <table className="border-collapse border border-slate-400 w-full mb-5">
      <thead>
        <tr className="border-y border-gray-200">
          <th className="border border-slate-300"></th>
          <th className="border border-slate-300">Name</th>
          <th className="border border-slate-300">Slug</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.map((category: BlogCategory, index:number) => (
            <tr className="text-center border-b checkout-product" key={`category-row-${index}`}>
              <td className="border border-slate-300">{index+1}</td>
              <td className="border border-slate-300">{category.name}</td>
              <td className="border border-slate-300">{category.slug}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}