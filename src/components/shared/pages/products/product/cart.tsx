'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { ProductType } from "../../../../../lib/types/product";
import Image from "next/image";
import { getRetailerId } from "@src/lib/functions/client/helper";
import "./style.scss";
import Link from 'next/link';
import { useState } from "react";
import { addItemToCart } from "@src/lib/actions/frontend/checkout";
import { usePathname, useSearchParams } from "next/navigation";
import { RETAILER_ID } from "@src/lib/static/vars";

interface ProductProps {
  product: ProductType;
  selectProduct?: (p: ProductType) => void;
}

export default function ProductCart({ product, selectProduct }: ProductProps) {

  const pathname = usePathname();

  const addToCart = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (selectProduct)
      selectProduct(product);
  }

  const hasSpecialPrice = product.variants[0].specialPriceMed !== null;
  const productPriceClass = `product-price text-black mb-0 text-md ${
    hasSpecialPrice ? 'line-through' : ''
  }`;

  return (
    <div className="bg-white mx-auto product-container hover:shadow-lg">
      {hasSpecialPrice && (
      <div className="flex justify-end pt-3">
        <span className="text-white bg-black font-bold rounded-full me-3 px-3">{((product.variants[0].priceMed - product.variants[0].specialPriceMed) / product.variants[0].priceMed * 100).toFixed(2)}% OFF</span>
      </div>
      )}
      <div className="flex justify-center mt-3">
        <Link href={`/shop/product/${product.slug}`}>
          <Image
            src={product.image}
            alt=""
            width={200}
            height={250}
            style={{maxHeight: 150, height: 150, width: 200}}
          />
        </Link>
      </div>
      <div className="px-3">
        <p className="mb-0 text-base text-xs mt-2 text-gray-400">
          {product.brand?.name}
        </p>
        <p className="text-black mb-0 line-clamp-2 text-base">
          {product.name}
        </p>
        <p className={productPriceClass}>$ {product.variants[0].priceMed.toFixed(2)}</p>
        {hasSpecialPrice && (
            <p className="product-special-price text-bold text-black mb-0 text-md">
              $ {product.variants[0].specialPriceMed.toFixed(2)}
            </p>
        )}
        <button
          className="btn-addcart text-white bg-black w-full mt-3  mb-4"
          onClick={addToCart}
        >
          <FontAwesomeIcon icon={faPlus} className="me-3" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
