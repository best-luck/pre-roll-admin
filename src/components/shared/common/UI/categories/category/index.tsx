"use client";

import { getRetailerId } from "@src/lib/functions/client/helper";
import { RETAILER_ID } from "@src/lib/static/vars";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Category({
  category,
  image
}: {
  category: string;
  image?: string;
}) {

  const router = useRouter();
  const retailerId = RETAILER_ID;
  const viewCategory = () => {
    router.push(`/shop/category/${category}`)
  }

  return (
    <div className="home-category-image flex flex-col rounded-[30px] border-4 flex flex-col justify-between align-center border-black h-[200px] w-[200px] lg:w-[200px] cursor-pointer"
      onClick={viewCategory}>
      <div className="img-wrapper">
      <Image
        src={image||`/images/categories/${category}.jfif`}
        width={150}
        height={80}
        alt="category" />
      </div>
      <p className="text-center font-bold uppercase text-xs">{category}</p>
    </div>
  );
}