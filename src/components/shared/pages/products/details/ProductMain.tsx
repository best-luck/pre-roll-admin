'use client';

import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "@src/components/shared/common/UI/select";
import Variants from "@src/components/shared/common/UI/variants";
import { addItemToCart } from "@src/lib/actions/checkout";
import { getRetailerId } from "@src/lib/functions/client/helper";
import { SELECT_OPTION_TYPE } from "@src/lib/types/general";
import { ProductType, ProductVariantType } from "@src/lib/types/product";
import { useState } from "react";

const quantityOptions: SELECT_OPTION_TYPE[] = [
  {label: 1, value: 1},
  {label: 2, value: 2},
  {label: 3, value: 3},
  {label: 4, value: 4},
  {label: 5, value: 5},
  {label: 6, value: 6},
  {label: 7, value: 7},
  {label: 8, value: 8},
  {label: 9, value: 9},
  {label: 10, value: 10},
]

export default function ProductMain({ product }: { product: ProductType }) {

  const [variant, setVariant] = useState<ProductVariantType|null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const retailerId = getRetailerId();

  const onSelect = (variant: ProductVariantType) => {
    setVariant(variant);
  }

  const onChange = (v: string) => {
    setQuantity(parseInt(v));
  }

  const addToCart = async () => {
    addItemToCart(retailerId, product.id, quantity, variant?.option||'')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="pb-10 border-b">
      <p className="text-gray-400 font-bold text-sm">{product.brand.name}</p>
      <p className="font-bold text-3xl">{product.name}</p>
      <div className="mt-5">
        <Variants
          variants={product.variants}
          onSelect={onSelect} />
      </div>
      <div className="mt-5">
        <Select
          options={quantityOptions}
          className="w-[100px]"
          onChange={onChange} />
        <button className="ms-5 rounded-full bg-blue-500 uppercase py-3 px-5 text-white font-bold" onClick={addToCart}>
          <FontAwesomeIcon icon={faCartArrowDown} className="me-3" /> add to cart
        </button>
      </div>
      <p className="mt-5 text-gray-500 text-md">{product.description}</p>
      <p className="text-sm text-gray-400 font-bold mt-3">*Cannabis and Sales tax will be added at checkout.</p>
    </div>
  )
}