'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { ProductType } from "../../../../../lib/types/product";
import Image from "next/image";
import { getRetailerId } from "@src/lib/functions/client/helper";
import "./style.scss";
import Link from 'next/link';
import { useState } from "react";
import { addItemToCart } from "@src/lib/actions/checkout";

interface ProductProps {
  product: ProductType
}

export default function ProductCart({ product }: ProductProps) {

  const retailerId: string = getRetailerId();
  const [loading, setLoading] = useState<boolean>(false);

  const addToCart = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);
    addItemToCart(retailerId, product.id, 1, product.variants[0].option)
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  }

  return (
    <Link href={`/client/retailer/${retailerId}/product/${product.id}`}>
      <div className="bg-white mx-3 product-container hover:shadow-lg">
        <div className="flex justify-end pt-3">
          <span className="text-white bg-black font-bold rounded-full me-3 px-3">% OFF</span>
        </div>
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt=""
            width={200}
            height={250}
            style={{maxHeight: 150, height: 150, width: 200}}
          />
        </div>
        <div className="px-3">
          <p className="text-cyan-400 font-bold mb-0 text-md">
            $ {parseInt(product.variants[0].priceMed).toFixed(2)}
          </p>
          <p className="text-black mb-0 line-clamp-2 text-sm font-bold">
            {product.name}
          </p>
          <p className="text-black mb-0 text-sm text-gray-500 text-xs mt-2">
            {product.brand.name}
          </p>
          <p className="text-black font-bold mb-0">
          </p>
          <button
            className="text-white bg-black w-full mt-3 rounded-lg font-bold py-1 mb-4"
            onClick={addToCart}
            disabled={loading}
          >
            {
              loading ? "Loading...": <>
                <FontAwesomeIcon icon={faPlus} className="me-3" />
                Shop Now
              </>
            }
          </button>
        </div>
      </div>
    </Link>
  );
}
