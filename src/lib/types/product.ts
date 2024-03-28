export interface ProductImageType {
  id: string;
  label: string;
  url: string;
  description: string;
}

export interface ProductPotencyType {
  formatted: string;
  range: number[];
  unit: string;
}

export interface ProductType {
  name: string;
  brand: {
    id: string;
    name: string;
  }
  category: string;
  description: string;
  descriptionHtml: string;
  id: string;
  image: string;
  images: ProductImageType[];
  posId: string;
  potencyCbd: ProductPotencyType,
  potencyThc: ProductPotencyType,
  staffPick: boolean,
  strainType: string;
  subcategory: string;
  variants: ProductVariantType[];
  [key: string]: any;
}

export interface CategorizedProductsType {
  [key: string]: ProductType[]
}

export type ProductDisplayType = "Cart"|"Type"|"Listing";

export interface ProductVariantType {
  id: string;
  option: string;
  priceMed: number;
  priceRec: number;
  specialPriceMed: number;
  specialPriceRec: number;
}