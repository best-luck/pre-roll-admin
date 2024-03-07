import { ProductType } from "./product";

export interface CartProductType {
  product: ProductType;
  id: string;
  option: string;
  productId: string;
  quantity: number;
  valid: boolean;
  isDiscounted: boolean;
  basePrice: number;
  discounts: number;
  taxes: number;
}

export interface PriceSummaryType {
  discounts: number;
  fees: number;
  mixAndMatch: number;
  rewards: number;
  subtotal: number;
  taxes: number;
  total: number;
}

export interface CartType {
  items: CartProductType[];
  orderType: string;
  priceSummary: PriceSummaryType;
  pricingType: string;
  redirectUrl: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}