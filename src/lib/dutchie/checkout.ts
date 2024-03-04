import { callDutchie } from "./reqeuest"
import { ADD_TO_CART, CREATE_CHECKOUT, GET_CART_CONTENTS } from "./schemas/checkout";

export const createCheckout = async (retailerId: string, orderType: string="PICKUP", pricingType: string="MEDICAL") => {
  try {
    const res = await callDutchie(CREATE_CHECKOUT, { retailerId, orderType, pricingType });
    return res.data.createCheckout;
  } catch (err) {
    return {};
  }
}

export const getCart = async (retailerId: string, checkoutId: string) => {
  try {
    const res = await callDutchie(GET_CART_CONTENTS, { retailerId, checkoutId });
    return res.data.checkout;
  } catch (err) {
    return {};
  }
}


export const addItemToCart = async (retailerId: string, checkoutId: string, quantity: number, option: string, productId: string) => {
  try {
    const res = await callDutchie(ADD_TO_CART, { retailerId, checkoutId, quantity, option, productId });
    return res;
  } catch (err) {
    return {};
  }
}