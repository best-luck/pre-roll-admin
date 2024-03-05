"use client";

import { ProductType } from "@src/lib/types/product";
import Product from "../product";
import { useMemo } from "react";

interface Props {
  products: ProductType[];
  category: string;
}

export default function Filter(props: Props) {

  const { products } = props;
  const subCategories = useMemo(() => {
    return Array.from(new Set(products.map(product => product.subcategory)))
  }, [products])
  const weights = useMemo(() => {
    const _weights = new Set();
    products.forEach(product => {
      product.variants.map((variant: string) => {
        _weights.add(variant);
      })
    })
    return Array.from(_weights);
  }, [products]);
  const brands = useMemo(() => {
    return Array.from(new Set(products.map(product => product.brand.name)))
  }, [products]);
  const types = useMemo(() => {
    return Array.from(new Set(products.map(product => product.strainType)))
  }, [products]);


  return (
    <div className="flex flex-wrap gap-10">
      <div>
        <p className="uppercase text-sm">Subcategories</p>
        {/* <p className="uppercase text-sm">All {category}s</p> */}
      </div>
    </div>
  );
}