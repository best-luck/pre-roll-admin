import { addItemToCart, createCheckout, getCart } from '@src/lib/dutchie/checkout';
import { getSessionData } from '@src/lib/session/getSession';
import { NextRequest } from 'next/server';
import { z } from 'zod'

type ResponseData = {
  message: string
}
 
export async function POST(
  req: NextRequest,
) {
  try {
    
    return Response.json({ status: 'OK' })
  } catch(err) {
    return Response.error()
  }

}