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
        <div className="site-heading text-white text-center">
          <h1 className="font-bold md:leading-snug sm:leading-snug leading-snug md:text-6xl sm:text-5xl text-4xl">PARC MARIJUANA<br /> RECREATIONAL DISPENSARY</h1>
          <p className="font-bold md:text-2xl text-xl">Alpena&apos;s favorite neighborhood recreational cannabis dispensary experience.</p>
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
