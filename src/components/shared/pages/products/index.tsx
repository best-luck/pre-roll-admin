'use client';

import { useMemo } from "react";
import { CategorizedProductsType, ProductType } from "../../../../lib/types/product";
import ProductsByCategory from "./bycategory";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShop } from "@fortawesome/free-solid-svg-icons";

export default function CategorizedProducts(props: { products: ProductType[], categories: string[] }) {

  const categories = props.categories;
  const categorizedProducts: CategorizedProductsType = useMemo(() => {
    let products: CategorizedProductsType = {};
    props.products.forEach(product => {
      if (!products[product.category])
        products[product.category] = [];
        products[product.category].push(product);
    });
    return products;
  }, [props.products, categories])

  return (
    <div className="mt-3">
      {
        categories.map(category => <ProductsByCategory key={`products-by-category-${category}`} category={category} products={categorizedProducts[category]} />)
      }
    </div>
  );
}
