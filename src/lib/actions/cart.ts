"use server";

import { createCheckout, getCart } from "../dutchie/checkout";
import { getSessionData } from "../session/getSession";
import { RETAILER_ID } from "../static/vars";

export default async function getCartItemsAction () {
  const session = await getSessionData();
  let checkoutId = session[`checkoutid-${RETAILER_ID}`];
  if (!checkoutId) {
    const checkout = await createCheckout();
    session[`checkoutid-${RETAILER_ID}`] = checkout.id;
    await session.save();
    checkoutId = checkout.id;
  }
  console.log(checkoutId)
  const resp = await getCart(checkoutId)
  return { cart: resp }
}