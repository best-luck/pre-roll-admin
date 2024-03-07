import { callDutchie } from "./reqeuest"
import { ADD_TO_CART, CREATE_CHECKOUT, GET_CART_CONTENTS, REMOVE_ITEM_FROM_CART } from "./schemas/checkout";
import { RETAILER_ID as retailerId } from "../static/vars";

export const createCheckout = async (orderType: string="PICKUP", pricingType: string="MEDICAL") => {
  try {
    const res = await callDutchie(CREATE_CHECKOUT, { retailerId, orderType, pricingType });
    return res.data.createCheckout;
  } catch (err) {
    return {};
  }
}

export const getCart = async (checkoutId: string) => {
  try {
    const res = await callDutchie(GET_CART_CONTENTS, { retailerId, checkoutId });
    return res.data.checkout;
  } catch (err) {
    return {};
  }
}


export const addItemToCart = async (checkoutId: string, quantity: number, option: string, productId: string) => {
  try {
    const res = await callDutchie(ADD_TO_CART, { retailerId, checkoutId, quantity, option, productId });
    return res;
  } catch (err) {
    return {};
  }
}

export const removeItemFromCart = async (checkoutId: string, itemId: string) => {
  try {
    const res = await callDutchie(REMOVE_ITEM_FROM_CART, { retailerId, checkoutId, itemId });
    return res.data.removeItem;
  } catch (err) {
    return {};
  }
}