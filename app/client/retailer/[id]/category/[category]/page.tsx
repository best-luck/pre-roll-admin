import Filter from "@src/components/shared/pages/products/filter/filter";
import List from "@src/components/shared/pages/products/group/list";
import { getRetailerCategorizedProducts } from "@src/lib/dutchie/products"
import { ProductType } from "@src/lib/types/product";

export default async function Page({params: {id, category}}: {params: { id: string,category: string }}) {

  const _category = decodeURIComponent(category)
  const products: ProductType[] = await getRetailerCategorizedProducts(id, _category);

  return (
    <div className="container m-auto py-10">
      <h1 className="uppercase text-3xl font-bold border-b border-gray-300 pb-3">All {_category}</h1>
      <div className="mt-5 flex">
        {/* <Filter products={products} category={category} /> */}
        <List products={products} />
      </div>
    </div>
  )
}