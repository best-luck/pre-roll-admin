import Board from "./board";
import { filterRetailerProductsAction } from "@src/lib/actions/products";

export default async function Page({params: {category}}: {params: { category: string }}) {

  const _category = decodeURIComponent(category)
  const { products } = await filterRetailerProductsAction(_category, "", "", [], [], [], [], "");

  return (
    <div className="container m-auto py-10">
      <Board
        products={products}
        category={_category}
        />
    </div>
  )
}