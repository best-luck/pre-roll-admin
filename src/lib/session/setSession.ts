'use server';

import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { SessionData, sessionOptions } from './config';

export async function setSessionData(key: string, value: any) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  session[key] = value;
  await session.save();
  return session;
}