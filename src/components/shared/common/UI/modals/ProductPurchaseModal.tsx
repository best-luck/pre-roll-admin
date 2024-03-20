import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalWrapper from "./ModalWrapper";
import { ProductType, ProductVariantType } from "@src/lib/types/product";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import Variants from "../variants";
import Button from "../button";
import { RETAILER_ID } from "@src/lib/static/vars";
import { addItemToCart } from "@src/lib/actions/frontend/checkout";
import { toast } from "react-toastify";

interface Props {
  product?: ProductType|null;
  show: boolean;
  hideModal: () => void;
}

export default function ProductPurchaseModal({ product, show, hideModal }: Props) {

  const [variant, setVariant] = useState<ProductVariantType|null>(product?.variants[0]||null);
  const [loading, setLoading] = useState(false);

  const variantSelect = (_variant: ProductVariantType) => {
    setVariant(_variant);
  }

  const addToCart = () => {
    if (loading) return;
    setLoading(true);
    addItemToCart(product?.id||'', 1, variant?.option||'')
      .then(() => {
        setLoading(false);
        toast.success('Added To Cart!');
        hideModal();
      })
      .catch(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    if (product)
      setVariant(product?.variants[0])
  }, [product]);
  return (
    <ModalWrapper show={show}>
      {
        variant && product ? <div className="w-[460px] rounded-[20px] bg-white text-black p-[30px] shadow-xl">
        <div className="flex justify-between">
          <div className="text-xl font-bold text-gray-700">Select Weight</div>
          <Button
            type="button"
            onClick={hideModal}
            className="">
            <FontAwesomeIcon icon={faClose} size="lg" />
          </Button>
        </div>
        <div className="flex mt-10">
          <Image
            src={product.image}
            alt="product"
            width={100}
            height={100}
            />
          <div className="flex-1 ml-2">
            <p className="text-xs text-gray-500">{product.brand?.name}</p>
            <p className="text-md font-bold">{product.name}</p>
            <p className="text-gray-500 font-bold text-xs">{variant.option} @ ${variant.priceMed.toFixed(2)}</p>
          </div>
        </div>
        <div className="mt-5">
          <Variants
            variant={variant}
            variants={product.variants}
            onSelect={variantSelect}/>
        </div>
        <div className="mt-5">
          <Button className="bg-gray-700 text-white font-bold w-full" onClick={addToCart} type="button">
            {loading?'Adding...':'Add To Cart'}
          </Button>
          <Button className="mt-2 w-full text-xs text-gray-400" onClick={hideModal} type="button">Cancel</Button>
        </div>
        </div>: ''
      }
    </ModalWrapper>
  );
}