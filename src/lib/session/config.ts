import { SessionOptions } from "iron-session";

export interface SessionData {
  [key: string]: string;
}

export const defaultSession: SessionData = {}

export const sessionOptions: SessionOptions = {
  password: '9xh3FbGZiDc5WReN7y1Tl2q0s6vX4jaP',
  cookieName: 'dutchie-plus-integration-parc',
  cookieOptions: {
    secure: true
  }
}
