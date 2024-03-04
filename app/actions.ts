'use server'

import { createCheckout } from "@src/lib/dutchie/checkout";
import { getSessionData } from "@src/lib/session/getSession";

export async function checkoutEstablish(id: string) {
  const session = await getSessionData();
  const checkout = await createCheckout(id);
  session[`checkout-id-${id}`] = checkout.id;
  session.save();
  return checkout.id;
}