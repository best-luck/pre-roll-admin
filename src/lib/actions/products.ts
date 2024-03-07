'use server';

import { filterRetailerProducts } from "../dutchie/products";

export async function filterRetailerProductsAction(category: string, subCategory: string, weight: string, brands: string[], types: string[], effects: string[], specialIds: string[] = [], search: string) {
  const products = await filterRetailerProducts(category, types, brands, effects, weight?[weight]:[], specialIds, search||'')
  return { products }
}