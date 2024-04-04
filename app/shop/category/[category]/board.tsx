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

  const [products, setProducts] = useState<ProductType[]>(props.products);
  const [category, setCategory] = useState(props.category==="all"?"":props.category);
  const [isFetching, setIsFetching] = useState(false);
  const [offset, setOffset] = useState(0);
  const [fetchMore, setFetchMore] = useState<boolean>(false);
  const [noMoreProducts, setNoMoreProducts] = useState<boolean>(false);
  
  const fetchMoreProducts = async (subCategory: string, weight: string, brands: string[], types: string[], effects: string[], specials: string[]=[], search: string) => {
    setIsFetching(true);
    const _offset = offset + 50;
    const resp = await filterRetailerProductsAction(category, subCategory, weight, brands, types, effects, specials, search, _offset);
    setProducts([...products, ...resp.products]);
    setIsFetching(false);
    setFetchMore(false);
    if (!resp.products.length)
      setNoMoreProducts(true);
  }

  const fetchProducts = async (subCategory: string, weight: string, brands: string[], types: string[], effects: string[], specials: string[]=[], search: string) => {
    setIsFetching(true);
    const resp = await filterRetailerProductsAction(category, subCategory, weight, brands, types, effects, specials, search, offset);
    setProducts(resp.products);
    if (resp.products.length < 50)
      setNoMoreProducts(true);
    setIsFetching(false);
  }

  const loadMore = () => {
    setFetchMore(true);
  }

  return (
    <div className="mt-5 flex flex-wrap">
      <Filter
        products={products}
        category={category}
        fetchProducts={fetchProducts}
        fetchMore={fetchMore}
        fetchMoreProducts={fetchMoreProducts}
        />
      <List
        products={products}
        category={category}
        isFetching={isFetching}
        special={special}
        loadMore={loadMore}
        noMoreProducts={noMoreProducts}
        />
    </div>
  )
};