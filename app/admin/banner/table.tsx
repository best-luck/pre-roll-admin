"use client";

import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@src/components/shared/common/UI/button";
import { BannerType } from "@src/lib/database/banners";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface BannerTableProps {
  banners: BannerType[];
  deleteBanner: (id: number) => Promise<boolean>;
}

export default function Table(props: BannerTableProps) {

  const banners = props.banners;
  const router = useRouter();

  const deleteBanner = async (banner: BannerType) => {
    const res = await props.deleteBanner(banner.id||-1);
    if (res) {
      toast.success('Banner deleted!');
      router.refresh();
    }
  }

  return (
    <table className="border-collapse border border-slate-400 w-full mb-5">
      <thead>
        <tr className="border-y border-gray-200">
          <th className="border border-slate-300">Id</th>
          <th className="border border-slate-300">Heading</th>
          <th className="border border-slate-300">Subheading</th>
          <th className="border border-slate-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          banners.map((banner: BannerType, index:number) => (
            <tr className="text-center border-b checkout-product" key={`blog-row-${index}`}>
              <td className="border border-slate-300">{index+1}</td>
              <td className="border border-slate-300">{banner.heading}</td>
              <td className="border border-slate-300">{banner.subheading}</td>
              <td>
                <div className="flex justify-center py-2 text-white">
                  <Button
                    className="bg-rose-400 mx-3"
                    onClick={() => deleteBanner(banner)}
                    type="button">
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>

                  <Link href={`/admin/banner/edit/${banner.id}`} className="px-3 text-white bg-blue-500 rounded-lg flex justify-center items-center">
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}