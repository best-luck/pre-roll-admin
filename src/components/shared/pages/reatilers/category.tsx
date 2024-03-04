import { RetailerType } from "../../../../lib/types/retailers"
import Categories from "../../common/UI/categories"

export default function RetailerCategories({
  categories
}: {
  categories: string[]
}) {
  return (
    <div className="mt-3">
      <h1 className="text-3xl text-black font-bold uppercase mb-3">Shop by category</h1>
      <Categories />
    </div>
  )
}