"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { ProductType, ProductVariantType } from "../../../../../lib/types/product";
import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { getRetailerId } from "@src/lib/functions/client/helper";
import ProductPulse from "./pulse";
import Variants from "@src/components/shared/common/UI/variants";
import { useState } from "react";
import { addItemToCart } from "@src/lib/actions/frontend/checkout";
import { toast } from "react-toastify";

interface ProductProps {
  product: ProductType
  isFetching?: boolean
}

export default function ProductListing(props: ProductProps) {

  const { product, isFetching } = props;
  const [isAdding, setIsAdding] = useState(false);

  const selectVariant = (variant: ProductVariantType) => {
    if (isAdding) return;
    setIsAdding(true);
    addItemToCart(product?.id||'', 1, variant?.option||'')
      .then(() => {
        setIsAdding(false);
        toast.success('Added To Cart!');
      })
      .catch(() => {
        setIsAdding(false);
      })
  }

  return (
    <div className="product-wrapper flex gap-col-10 mt-5 border-b border-gray-300 pb-5">
      {
        isFetching ?
          <ProductPulse /> :
          <>
            <div className="product-image mr-5">
              <Link href={`/shop/product/${props.product.slug}`}>
                <Image
                  src={props.product.image}
                  alt=""
                  width={200}
                  height={200}
                />
              </Link>
            </div>
            <div className="product-info flex justify-between flex-col">
              <div className="flex justify-center flex-col">
                <p className="text-xs text-gray-500">{props.product.brand?.name}</p>
                <Link href={`/shop/product/${props.product.slug}`}><p className="text-lg font-bold">{props.product.name}</p></Link>
                <p className="text-xs text-gray-500"><span className="font-bold">THC</span>: {props.product.potencyThc.formatted} | <span className="font-bold">CBD</span>: {props.product.potencyCbd.formatted}</p>
              </div>
              <div className="product-attributes w-full xl:w-auto mt-2">
                <Variants
                  variants={product.variants}
                  onSelect={selectVariant} />
              </div>
            </div>
          </>
      }
    </div>
  );
}
