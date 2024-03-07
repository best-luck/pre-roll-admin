import { filterRetailerProductsAction } from "@src/lib/actions/products";
import { getRetailerSpecials } from "@src/lib/dutchie/retailers";
import { SpecialType } from "@src/lib/types/specials";
import Board from "app/shop/category/[category]/board";
import { useSearchParams } from "next/navigation";

export default async function Page({ searchParams }: { searchParams: any }) {
  const search = searchParams?.search;
  const res = await filterRetailerProductsAction("", "", "", [], [], [], [], search);

  return (
    <div className="container m-auto py-10">
      <Board
        search={search}
        products={res.products}
        category=""
        />
    </div>
  )
}