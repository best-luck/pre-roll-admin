//@ts-ignore

import { uploadFileToCloudinary } from '@src/lib/functions/server/helper';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { file } = body;

    const { secure_url } = await uploadFileToCloudinary(file);
    return Response.json({ url: secure_url })
  } catch (err) {
    console.log(err);
    return Response.json({ err });
  }
}