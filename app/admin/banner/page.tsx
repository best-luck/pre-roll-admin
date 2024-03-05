import getBanners, { deleteBannerAction } from "@src/lib/database/banners"
import { revalidatePath } from "next/cache";
import Table from "./table";
import { toast } from "react-toastify";
import Link from "next/link";

export default async function Banner() {

  const banners = await getBanners();

  const deleteBanner = async (id: number): Promise<boolean> => {
    'use server';
    const res = await deleteBannerAction(id);
    revalidatePath("/admin/banner", "layout");
    return res;
  }

  return (
    <div className="container m-auto py-10">
      <div className="flex justify-end mb-3">
        <Link href="banner/new" className="p-3 bg-cyan-400 text-white rounded-lg">
          Add New
        </Link>
      </div>
      <h1 className="text-3xl font-bold border-b border-gray-400 mb-5">Banners</h1>
      <div className="shadow-lg rounded-[20px] p-3">
        <Table 
          banners={banners}
          deleteBanner={deleteBanner}
          />
      </div>
    </div>
  )
}