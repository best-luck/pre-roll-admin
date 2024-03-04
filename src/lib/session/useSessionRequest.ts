import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { SessionData, defaultSession } from "./config";

const sessionApiRoute =
  "/session";

async function fetchJson<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  return fetch(input, {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    ...init,
  }).then((res) => res.json());
}

function createCheckoutAction(url: string, { arg }: { arg: string }) {
  return fetchJson<SessionData>(url, {
    method: "POST",
    body: JSON.stringify({ arg }),
  });
}

function doLogin(url: string, { arg }: { arg: string }) {
  return fetchJson<SessionData>(url, {
    method: "POST",
    body: JSON.stringify({ username: arg }),
  });
}

function doLogout(url: string) {
  return fetchJson<SessionData>(url, {
    method: "DELETE",
  });
}

export default function useSession() {
  const { data: session, isLoading } = useSWR(
    sessionApiRoute,
    fetchJson<SessionData>,
    {
      fallbackData: defaultSession,
    },
  );

  const { trigger: createCheckout } = useSWRMutation(sessionApiRoute, createCheckoutAction, {
    // the login route already provides the updated information, no need to revalidate
    revalidate: false,
  });

  return { session, createCheckout, isLoading };
}