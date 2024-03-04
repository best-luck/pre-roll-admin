import { addItemToCart, createCheckout } from '@src/lib/dutchie/checkout';
import { getSessionData } from '@src/lib/session/getSession';
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
 
const schema = z.object({
  productId: z.string(),
  retailerId: z.string(),
  quantity: z.number()
});
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const parsed = schema.parse(req.body);
    console.log(parsed);
    const { productId, retailerId, quantity } = parsed;
    const session = await getSessionData();
    let checkoutId = session[`checkoutid-${retailerId}`];
    if (!checkoutId) {
      const checkout = await createCheckout(retailerId);
      session[`checkoutid-${retailerId}`] = checkout.id;
      checkoutId = checkout.id;
    }

    await addItemToCart(retailerId, checkoutId, quantity, "", productId);
    res.status(200).json({ message: 'Hello from Next.js!' })
  } catch(err) {
    console.log(err);
  }

}