import { filterRetailerProductsAction } from "@src/lib/actions/products";
import { getRetailerSpecials } from "@src/lib/dutchie/retailers";
import { SpecialType } from "@src/lib/types/specials";
import Board from "app/shop/category/[category]/board";

export const metadata = {
  title: 'Parc Cannabis',
  description:
    'Parc Cannabis'
};

export default async function Page({ params: { specialId } }: { params: { specialId: string } }) {
  const specials: SpecialType[] = await getRetailerSpecials();
  const special = specials.find(s => s.id===specialId);
  const res = await filterRetailerProductsAction("Specials", "", "", [], [], [], [specialId], "");

  return (
    <div className="container m-auto py-10">
      <Board
        products={res.products}
        category="Specials"
        specials={specials}
        special={special}
        />
    </div>
  )
}