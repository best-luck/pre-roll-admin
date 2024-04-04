"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCartPlus, faShop } from "@fortawesome/free-solid-svg-icons"
import { ProductType, ProductVariantType } from "../../../../../lib/types/product";
import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { calculateDiscount, getRetailerId } from "@src/lib/functions/client/helper";
import ProductPulse from "./pulse";
import Variants from "@src/components/shared/common/UI/variants";
import { useState } from "react";
import { addItemToCart } from "@src/lib/actions/frontend/checkout";
import { toast } from "react-toastify";
import Select from "@src/components/shared/common/UI/select";
import { SELECT_OPTION_TYPE } from "@src/lib/types/general";
import Button from "@src/components/shared/common/UI/button";

interface ProductProps {
  product: ProductType
  isFetching?: boolean
}

export default function ProductListing(props: ProductProps) {

  const { product, isFetching } = props;
  const [isAdding, setIsAdding] = useState(false);
  const options: SELECT_OPTION_TYPE[] = [...product.variants.map((variant: ProductVariantType, idx: number) => ({value: idx, label: `${variant.option}`}))]
  const [selectedVariant, setSelectedVariant] = useState<ProductVariantType>(product.variants[0]);

  const selectVariant = (variant: string|number) => {
    const index = typeof variant==="string"?parseInt(variant):variant;
    setSelectedVariant(product.variants[index]);
  }

  const addToCart = () => {
    addItemToCart(product?.id||'', 1, selectedVariant.option)
      .then(() => {
        setIsAdding(false);
        toast.success('Added To Cart!');
      })
      .catch(() => {
        setIsAdding(false);
      })
  }

  return (
    <div className="product-wrapper">
      <div className="product border-gray-300 flex flex-col justify-between relative">
      {
        isFetching ?
          <ProductPulse /> :
          <>
            {
              calculateDiscount(props.product) ? (
                <span className="absolute right-[10px] top-[10px] bg-black text-white font-bold rounded-full px-3 py-2">
                  {calculateDiscount(props.product)}% OFF
                </span>
              ) : <></>
            }
            <div className="product-image">
              <Link href={`/shop/product/${props.product.slug}`}>
                <Image
                  src={props.product.image}
                  alt=""
                  width={200}
                  height={200}
                  style={{'margin': 'auto'}}
                />
              </Link>
            </div>
            <div className="product-info flex justify-between flex-col">
              <div className="flex justify-center flex-col">
                <p className="text-gray-400 text-base mb-1 mt-6">{props.product.brand?.name}</p>
                <Link href={`/shop/product/${props.product.slug}`}><p className="text-lg font-bold mb-1">{props.product.name}</p></Link>
                <p className="text-xs text-gray-500"><span className="font-bold">THC</span>: {props.product.potencyThc.formatted} | <span className="font-bold">CBD</span>: {props.product.potencyCbd.formatted}</p>
              </div>
            </div>
            <div className="product-attributes w-full xl:w-auto mt-2 flex justify-between">
              <div className="text-xl flex justify-center items-center">
                {
                  selectedVariant.specialPriceMed ? (
                    <>
                      <span className="font-bold">
                        ${selectedVariant.specialPriceMed}
                      </span>
                      <span className="line-through	ml-5 text-lg">
                        ${selectedVariant.priceMed}
                      </span>
                    </>
                  ) : (
                    <span className="font-bold">
                      ${selectedVariant.priceMed}
                    </span>
                  )
                }
              </div>
              <Select
                onChange={(v: string) => selectVariant(v)}
                options={options}
                className="w-[100px] rounded-lg product-options"
                name="category_id"
                />
              <button className="btn-add-cart bg-black p-3 font-xl text-white rounded-[50px] flex items-center justify-center" onClick={addToCart} type="button">
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
            </div>
          </>
      }
      </div>
    </div>
  );
}
