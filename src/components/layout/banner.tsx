'use server';

import getBanners, { BannerType } from "@src/lib/database/banners";
import BannerSwiper from "./sub/bannerswiper";
import Link from "next/link";

export default async function Banner() {

  const banners = await getBanners();

  const agegateBG = {
    backgroundImage: 'url("/images/home-bg.webp")',
    backgroundColor: 'black',
    backgroundSize: 'cover'
  };

  return (
    <div className="banners-container" style={agegateBG}>
      <div className="m-auto container">
        <div className="site-heading">
          <h1 className="font-bold">PARC MARIJUANA<br /> RECREATIONAL DISPENSARY</h1>
          <p className="font-bold">Alpena&apos;s favorite neighborhood recreational cannabis dispensary experience.</p>
          <div className="menus">
            <Link className="font-bold text-md uppercase" href="/shop">Shop Menu</Link>
            <Link className="font-bold text-md uppercase" href="/deals">Shop Deals</Link>
          </div>
        </div>
        <div className="home-banners">
        { banners.length ? <BannerSwiper banners={banners} /> : '' }
        </div>
      </div>
    </div>
  );
}
