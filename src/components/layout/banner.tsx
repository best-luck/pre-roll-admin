'use server';

import getBanners, { BannerType } from "@src/lib/database/banners";
import BannerSwiper from "./sub/bannerswiper";

export default async function Banner() {

  const banners = await getBanners();
  console.log(banners);

  return (
    <div className="m-auto container">
      { banners.length ? <BannerSwiper banners={banners} /> : '' }
    </div>
  );
}
