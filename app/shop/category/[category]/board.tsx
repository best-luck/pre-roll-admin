"use client";

import Filter from "@src/components/shared/pages/products/filter/filter";
import List from "@src/components/shared/pages/products/group/list";
import { filterRetailerProductsAction } from "@src/lib/actions/products";
import { ProductType } from "@src/lib/types/product"
import { SpecialType } from "@src/lib/types/specials";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  products: ProductType[];
  category: string;
  specials?: SpecialType[];
  special?: SpecialType;
  search?: string;
}

export default function Board(props: Props) {

  const { specials, special } = props;
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<ProductType[]>(props.products);
  const [category, setCategory] = useState(props.category);
  const [isFetching, setIsFetching] = useState(false);

  const fetchProducts = async (subCategory: string, weight: string, brands: string[], types: string[], effects: string[], specials: string[]=[], search: string) => {
    setIsFetching(true);
    const resp = await filterRetailerProductsAction(category, subCategory, weight, brands, types, effects, specials, search);
    setProducts(resp.products);
    setIsFetching(false);
  }

  return (
    <div className="mt-5 flex">
      <Filter
        products={products}
        category={category}
        fetchProducts={fetchProducts}
        />
      <List
        products={products}
        category={category}
        isFetching={isFetching}
        special={special} />
    </div>
  )
};