//@ts-ignore

import { createBanner } from '@src/lib/database/banners';
import { revalidateCache, uploadFileToCloudinary } from '@src/lib/functions/server/helper';
import { redirect } from 'next/navigation';
const cloudinary = require('cloudinary').v2;

cloudinary.config({
 cloud_name: 'dx84l6icz',
 api_key: '882141798269339',
 api_secret: 'DpIY03fyhFQmoDaF0e94BLf8a7Y',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { image } = body;

    const { secure_url } = await uploadFileToCloudinary(image);
    const data = {
      ...body,
      image: secure_url
    };
    await createBanner(data);
    revalidateCache();
    return redirect("/admin/banner");
  } catch (err) {
    return Response.json({ err });
  }
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };