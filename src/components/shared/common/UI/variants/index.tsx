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
      className={`overflow-hidden text-center flex flex-col justify-between rounded-lg min-h-[55px] py-2 px-2 ${selected?'border-black border-2':'border-gray-300 border-2'} text-sm cursor-pointer`}
      onClick={selectVariant}>
      <p className={`${selected?'text-black':'text-black'}`}>{variant.option}</p>
      {
        variant.specialPriceMed ?
          <>
            <p className={`${selected?'text-black':''} font-bold`}>${variant.specialPriceMed.toFixed(2)}</p>
            <p className={`line-through ${selected?'text-black':''} font-bold`}>${variant.priceMed.toFixed(2)}</p>
            <p className="bg-black rounded-md px-2 py-1 font-bold text-white">{(100 - (variant.specialPriceMed / variant.priceMed * 100)).toFixed(0)}% off</p>
          </> : 
          <p className={`${selected?'text-black':''} font-bold`}>${variant.priceMed.toFixed(2)}</p>   
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
    <div className="flex flex-wrap gap-3">
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