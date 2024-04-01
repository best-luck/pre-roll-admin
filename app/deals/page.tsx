import Specials from "@src/components/shared/pages/specials";
import { filterRetailerProductsAction } from "@src/lib/actions/products";
import { getRetailerSpecials } from "@src/lib/dutchie/retailers";
import { ProductType } from "@src/lib/types/product";
import { SpecialType } from "@src/lib/types/specials";
import Board from "app/shop/category/[category]/board";

export default async function Page() {
  const specials: SpecialType[] = await getRetailerSpecials();
  const availableSpecials: SpecialType[] = [];
  const products: ProductType[] = [];
  for (const special of specials) {
    const res = await filterRetailerProductsAction("Specials", "", "", [], [], [], [special.id], "");
    const _products = res.products.filter((product: ProductType) => product.variants[0].specialPriceMed)
    if (_products.length) {
      availableSpecials.push(special);
      products.push(..._products);
    }
  }

  return (
    <div className="container m-auto py-10">
      <Specials
        specials={availableSpecials}
        />
      <Board
        products={products}
        category="Specials"
        specials={availableSpecials}
        />
    </div>
  )
}