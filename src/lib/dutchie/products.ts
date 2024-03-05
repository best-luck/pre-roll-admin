import { callDutchie } from "./reqeuest";
import { GET_ALL_PRODUCTS, GET_CATEGORIZRD_PRODUCT, GET_PRODUCT_DATA } from "./schemas/products";

export const getRetailerProducts = async (id: string) => {
  try {
    const res = await callDutchie(GET_ALL_PRODUCTS, { retailerId: id })
    return res.data.menu.products
  } catch (err) {
    return {};
  }
}

export const getRetailerProduct = async (retailerId: string, productId: string) => {
  try {
    const res = await callDutchie(GET_PRODUCT_DATA, { retailerId, productId });
    return res.data.product
  } catch (err) {
    return {}
  }
}

export  const getRetailerCategorizedProducts = async (retailerId: string, category: string) => {
  try {
    const res = await callDutchie(GET_CATEGORIZRD_PRODUCT, { retailerId, category: category.toUpperCase() });
    return res.data.menu.products||[];
  } catch (err) {
    return []
  }
}