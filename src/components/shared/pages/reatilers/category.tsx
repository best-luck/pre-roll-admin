import { RetailerType } from "../../../../lib/types/retailers"
import Categories from "../../common/UI/categories"

export default function RetailerCategories({
  categories,
  images
}: {
  categories: string[];
  images?: any
}) {
  return (
    <div className="mt-3">
      <h2 className="text-[28px] sm:text-3xl md:text-4xl text-black font-bold uppercase mb-3">Shop by category</h2>
      <Categories
        images={images} />
    </div>
  )
}