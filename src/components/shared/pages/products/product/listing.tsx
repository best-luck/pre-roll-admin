"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCartPlus, faShop } from "@fortawesome/free-solid-svg-icons"
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
  const options: SELECT_OPTION_TYPE[] = [...product.variants.map((variant: ProductVariantType) => ({value: variant.option, label: `$${variant.priceMed} / ${variant.option}`}))]
  const [option, setOption] = useState<string>(product.variants[0].option)

  const selectVariant = (variant: string) => {
    setOption(variant);
  }

  const addToCart = () => {
    addItemToCart(product?.id||'', 1, option)
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
              <div className="product-attributes w-full xl:w-auto mt-2 flex gap-10">
                <Select
                  onChange={(v: string) => selectVariant(v)}
                  options={options}
                  className="w-[200px] rounded-lg"
                  name="category_id"
                  />
                <button className="bg-black p-3 font-xl text-white rounded-[50px]" onClick={addToCart} type="button">
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
            </div>
          </>
      }
    </div>
  );
}
