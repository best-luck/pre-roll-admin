"use server";

import { RETAILER_ID as retailerId } from "../static/vars";
import { callDutchie } from "./reqeuest";
import { FILTER_RETAILER_PRODUCTS, FILTER_RETAILER_PRODUCTS_WEIGHTS, GET_ALL_PRODUCTS, GET_CATEGORIZRD_PRODUCT, GET_PRODUCT_DATA, GET_RETAILER_SPECIALS, GET_RETAILER_SPECIALS_WITHOUT_WEIGHTS, STRING_SERACH_PRODUCTS } from "./schemas/products";

export const getRetailerProducts = async (id: string) => {
  try {
    const res = await callDutchie(GET_ALL_PRODUCTS, { retailerId: id })
    return res.data.menu.products
  } catch (err) {
    return {};
  }
}

export const getRetailerProduct = async (productId: string) => {
  try {
    const res = await callDutchie(GET_PRODUCT_DATA, { retailerId, productId });
    console.log(res);
    return res.data.product
  } catch (err) {
    return {}
  }
}

export  const getRetailerCategorizedProducts = async (category: string) => {
  try {
    if (category === 'pre-rolls') category='PRE_ROLLS';
    const res = await callDutchie(GET_CATEGORIZRD_PRODUCT, { retailerId, category: category.toUpperCase() });
    return res.data.menu.products||[];
  } catch (err) {
    return []
  }
}

export async function filterRetailerProducts (category: string, strainTypes: string[], brandIds: string[], effects: string[], weights: string[], specialIds: string[], search: string) {

  try {
    if (category !== "Specials") {
      let categories;
      if (category === 'pre-rolls') category='PRE_ROLLS';
      category=category.toUpperCase();
      if (category==="")
        categories=["ACCESSORIES", "APPAREL", "CBD", "CLONES", "CONCENTRATES", "EDIBLES", "FLOWER", "NOT_APPLICABLE", "ORALS", "PRE_ROLLS", "SEEDS", "TINCTURES", "TOPICALS", "VAPORIZERS"];
      else
        categories=[category];

      let res;
      if (weights.length) {
        res = await callDutchie(FILTER_RETAILER_PRODUCTS, { categories, retailerId, strainTypes, brandIds, effects, weights, specialIds, search });
      } else {
        res = await callDutchie(FILTER_RETAILER_PRODUCTS_WEIGHTS, { categories, retailerId, strainTypes, brandIds, effects, specialIds, search });        
        console.log(res);
      }
      return res.data.menu.products
    } else {
      let res;
      if (weights.length) {
        res = await callDutchie(GET_RETAILER_SPECIALS, { retailerId, strainTypes, brandIds, effects, weights, specialIds, search });
      } else {
        res = await callDutchie(GET_RETAILER_SPECIALS_WITHOUT_WEIGHTS, { retailerId, strainTypes, brandIds, effects, specialIds, search });        
      }
      return res.data.menu.products
    }
  } catch (err) {
    return []
  }
}

export async function stringSearchProducts(search: string) {
  try {
    const res = await callDutchie(STRING_SERACH_PRODUCTS, { retailerId, search });
    return res.data.menu.products
  } catch (err) {
    return []
  }
}