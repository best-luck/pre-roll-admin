import { addItemToCart, createCheckout } from '@src/lib/dutchie/checkout';
import { getSessionData } from '@src/lib/session/getSession';
import type { NextApiResponse } from 'next'
import { NextRequest } from 'next/server';
import { z } from 'zod'
 
const schema = z.object({
  productId: z.string(),
  retailerId: z.string(),
  quantity: z.number()
});
 
export default async function handler(
  req: NextRequest,
  res: NextApiResponse
) {
  try {
    const parsed = schema.parse(req.body);
    const { productId, retailerId, quantity } = parsed;
    const session = await getSessionData();
    let checkoutId = session[`checkoutid-${retailerId}`];
    if (!checkoutId) {
      const checkout = await createCheckout();
      session[`checkoutid-${retailerId}`] = checkout.id;
      checkoutId = checkout.id;
    }

    await addItemToCart(checkoutId, quantity, "", productId);
    res.status(200).json({ message: 'Hello from Next.js!' })
  } catch(err) {
    console.log(err);
  }

}