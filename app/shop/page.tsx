import Board from "./category/[category]/board";
import { filterRetailerProductsAction } from "@src/lib/actions/products";

export default async function Page() {

  const _category = "all";
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