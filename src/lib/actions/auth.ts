'use server';

import { redirect } from "next/navigation";
import { setSessionData } from "../session/setSession";

export async function login (prevState: any, data: FormData) {
  const email = data.get('email');
  const password = data.get('password');

  if (email=='parc@admin.com' && password == '%Bm_7&fnnnr') {
    await setSessionData('loggedIn', true);

    redirect('/admin');
  }
  return {
    error: 'Credentials are invalid!'
  };
}