import { addItemToCart, createCheckout, getCart } from '@src/lib/dutchie/checkout';
import { getSessionData } from '@src/lib/session/getSession';
import { NextRequest } from 'next/server';
import { z } from 'zod'
 
const schema = z.object({
  productId: z.string(),
  retailerId: z.string(),
  quantity: z.number()
});

type ResponseData = {
  message: string
}
 
export async function POST(
  req: NextRequest,
) {
  try {
    const body = await req.json();
    const { productId, retailerId, quantity, option } = body;
    const session = await getSessionData();
    let checkoutId = session[`checkoutid-${retailerId}`];
    if (!checkoutId) {
      const checkout = await createCheckout();
      session[`checkoutid-${retailerId}`] = checkout.id;
      await session.save();
      checkoutId = checkout.id;
    }
    const resp = await getCart(checkoutId)

    const res = await addItemToCart(checkoutId, quantity, option, productId);
    return Response.json({ status: 'OK' })
  } catch(err) {
    return Response.error()
  }

}