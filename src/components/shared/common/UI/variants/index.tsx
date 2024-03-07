'use client';

import { ProductVariantType } from "@src/lib/types/product";
import { useState } from "react";

interface VariantComponentProps {
  variant: ProductVariantType,
  onSelect: (variant: ProductVariantType) => void;
  selected: boolean|null;
}

export function Variant(props: VariantComponentProps) {

  const { variant, onSelect, selected } = props;

  const selectVariant = () => {
    onSelect(variant);
  }

  return (
    <div 
      className={`overflow-hidden text-center flex flex-col justify-center rounded-lg min-h-[55px] ${selected?'border-blue-400 border-2':'border-gray-400 border'} w-[71px] text-sm cursor-pointer`}
      onClick={selectVariant}>
      <p className={`${selected?'text-blue-400':'text-gray-800'}`}>{variant.option}</p>
      {
        variant.specialPriceMed ?
          <>
            <p className={`${selected?'text-blue-400':''} font-bold`}>${variant.specialPriceMed.toFixed(2)}</p>
            <p className={`text-gray-400 line-through ${selected?'text-blue-400':''} font-bold`}>${variant.priceMed.toFixed(2)}</p>
            <p className="bg-rose-500 font-bold text-white">{(100 - (variant.specialPriceMed / variant.priceMed * 100)).toFixed(0)}% off</p>
          </> : 
          <p className={`${selected?'text-blue-400':''} font-bold`}>${variant.priceMed.toFixed(2)}</p>   
      }
    </div>
  );
}

interface VariantsComponentProps {
  variants: ProductVariantType[];
  onSelect: (variant: ProductVariantType) => void;
  variant?: ProductVariantType;
}

export default function Variants(props: VariantsComponentProps) {

  const { variants, onSelect } = props;

  const [variantsState, setVariants] = useState<ProductVariantType[]>(variants);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariantType|null>(props.variant||null);

  const onSelectVariant = (variant: ProductVariantType) => {
    setSelectedVariant(variant);
    onSelect(variant);
  }

  return (
    <div className="flex gap-3">
      {
        variantsState.map(variant => (
          <Variant 
            key={`variant-${variant.id}`}
            variant={variant}
            onSelect={onSelectVariant}
            selected={variant.id===selectedVariant?.id}
            />)
        )
      }
    </div>
  );
}