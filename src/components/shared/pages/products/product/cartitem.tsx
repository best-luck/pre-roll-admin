'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { ProductType, ProductVariantType } from "../../../../../lib/types/product";
import Image from "next/image";
import { getRetailerId } from "@src/lib/functions/client/helper";
import "./style.scss";
import Link from 'next/link';
import { useState } from "react";
import { addItemToCart, removeItemFromCart } from "@src/lib/actions/frontend/checkout";
import { usePathname, useSearchParams } from "next/navigation";
import { RETAILER_ID } from "@src/lib/static/vars";
import { CartProductType } from "@src/lib/types/checkout";
import Select from "@src/components/shared/common/UI/select";
import { quantityOptions } from "../details/ProductMain";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface ProductProps {
  item: CartProductType;
  removeItem: (itemId: string) => void;
}

export default function CartItem({ item, removeItem }: ProductProps) {

  const { product } = item;
  const [variant, setVariant] = useState<ProductVariantType>(item.product.variants.find((v: ProductVariantType) => v.option===item.option))

  const addToCart = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  return (
    <div className="w-full border-b border-gray-200 pb-5">
      <div className="flex mt-3">
        <div className="flex flex-1">
          <Link href={`/shop/product/${product.slug}`}>
            <Image
              src={product.image}
              alt=""
              width={100}
              height={150}
              className="mr-2 max-h-[70px] max-w-[100px]"
            />
          </Link>
          <div className="mt-3">
            <Link href={`/shop/product/${product.slug}`}>
              <p className="text-sm font-bold">{product.name}</p>
            </Link>
            <p className="text-xs text-gray-500">{product?.brand.name}</p>
            <div className="mt-3 text-gray-500">
              <span className="text-xs cursor-pointer">
                {item.option}
              </span>
              <span className="mx-2">|</span>
              <span className="text-sm cursor-pointer" onClick={() => removeItem(item.id)}>
                <FontAwesomeIcon icon={faTrash} className="mr-1" size="xs" />
                Remove
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Select
            onChange={() => {}}
            options={quantityOptions}
            className="w-[70px] mx-2 h-[40px]"
            initialValue={item.quantity.toString()}
            name="quantity" />
        </div>
        <div className="text-sm flex flex-col justify-center">
          $ {variant.priceMed * item.quantity}
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
