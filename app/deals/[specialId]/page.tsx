import { filterRetailerProductsAction } from "@src/lib/actions/products";
import { getRetailerSpecials } from "@src/lib/dutchie/retailers";
import { ProductType } from "@src/lib/types/product";
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
  const products = res.products.filter((product: ProductType) => product.variants[0].specialPriceMed)

  return (
    <div className="container m-auto py-10">
      <Board
        products={products}
        category="Specials"
        specials={specials}
        special={special}
        />
    </div>
  )
}