'use server';

import getBanners, { BannerType } from "@src/lib/database/banners";
import BannerSwiper from "./sub/bannerswiper";

export default async function Banner() {

  const banners = await getBanners();

  return (
    <div className="m-auto container mt-3">
      { banners.length ? <BannerSwiper banners={banners} /> : '' }
    </div>
  );
}
