import Specials from "@src/components/shared/pages/specials";
import { filterRetailerProductsAction } from "@src/lib/actions/products";
import { getRetailerSpecials } from "@src/lib/dutchie/retailers";
import { SpecialType } from "@src/lib/types/specials";
import Board from "app/shop/category/[category]/board";

export default async function Page() {
  const specials: SpecialType[] = await getRetailerSpecials();
  const specialIds = specials.map(s => s.id)
  const res = await filterRetailerProductsAction("Specials", "", "", [], [], [], specialIds, "");

  return (
    <div className="container m-auto py-10">
      <Specials
        specials={specials}
        />
      <Board
        products={res.products}
        category="Specials"
        specials={specials}
        />
    </div>
  )
}