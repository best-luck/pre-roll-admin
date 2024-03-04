import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { SessionData, sessionOptions } from './config';

export async function getSessionData() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return session;
}