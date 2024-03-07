import { put } from "@vercel/blob";
import type { NextApiResponse, NextApiRequest } from "next";
import { NextResponse } from "next/server";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const filename = request.query.filename;

  const blob = await put(filename, request, { // The important change, not `request.body` but `request`
    access: 'public',
  });

  return NextResponse.json(blob);
}

export const config = {
  api: {
    bodyParser: false,
  },
};