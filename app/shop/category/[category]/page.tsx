import Filter from "@src/components/shared/pages/products/filter/filter";
import List from "@src/components/shared/pages/products/group/list";
import { getRetailerCategorizedProducts } from "@src/lib/dutchie/products"
import { RETAILER_ID } from "@src/lib/static/vars";
import { ProductType } from "@src/lib/types/product";
import Board from "./board";

export default async function Page({params: {category}}: {params: { category: string }}) {

  const id = RETAILER_ID;
  const _category = decodeURIComponent(category)
  const products: ProductType[] = await getRetailerCategorizedProducts(_category);

  return (
    <div className="container m-auto py-10">
      <Board
        products={products}
        category={_category}
        />
    </div>
  )
}