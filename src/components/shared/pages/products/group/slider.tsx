"use client";

import { ProductType } from "../../../../../lib/types/product";
import Carousel from "react-elastic-carousel";
import Product from "../product";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2},
  { width: 700, itemsToShow: 3},
  { width: 900, itemsToShow: 4},
  { width: 1200, itemsToShow: 5 },
];

export default function ProductsSlier({ products }: { products: ProductType[] }) {
  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        {
          products.map((product, index) => <Product key={`product-slider-${product.id}`} display="Cart" product={product} />)
        }
      </Carousel>
    </div>
  );
}