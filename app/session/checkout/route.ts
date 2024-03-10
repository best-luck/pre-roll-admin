import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, defaultSession, sessionOptions } from "@src/lib/session/config";
import { createCheckout } from "@src/lib/dutchie/checkout";

// login
export async function POST(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  const { retailerId } = (await request.json()) as {
    retailerId: string;
  };
  if (!session[`retailer-${retailerId}-checkout-id`]) {
    const checkout = await createCheckout();
    session[`retailer-${retailerId}-checkout-id`] = checkout;
    await session.save();
  }

  await session.save();

  return Response.json(session);
}