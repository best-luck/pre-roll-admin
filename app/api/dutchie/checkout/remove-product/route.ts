import { addItemToCart, createCheckout, getCart, removeItemFromCart } from '@src/lib/dutchie/checkout';
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
    const { retailerId, itemId } = body;
    const session = await getSessionData();
    let checkoutId = session[`checkoutid-${retailerId}`];
    if (!checkoutId) {
      const checkout = await createCheckout(retailerId);
      session[`checkoutid-${retailerId}`] = checkout.id;
      await session.save();
      checkoutId = checkout.id;
    }
    const resp = await removeItemFromCart(retailerId, checkoutId, itemId);
    
    return Response.json({ status: 'OK' })
  } catch(err) {
    return Response.error()
  }

}