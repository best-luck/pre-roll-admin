'use server';

import { filterRetailerProducts } from "../dutchie/products";

export async function filterRetailerProductsAction(category: string, subCategory: string, weight: string, brands: string[], types: string[], effects: string[], specialIds: string[] = [], search: string, offset: number=0) {
  const products = await filterRetailerProducts(category, subCategory, types, brands, effects, weight?[weight]:[], specialIds, search||'', offset)
  return { products }
}