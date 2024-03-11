"use client";

import Button from "@src/components/shared/common/UI/button";
import { putCategoryImagesAction } from "@src/lib/actions/categoryImage";
import { CategoryImageType } from "@src/lib/database/categoryImages";
import { convertImage } from "@src/lib/functions/client/helper";
import { CATEGORIES } from "@src/lib/static/vars";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface CategoryImagesType {
  [key: string]: any;
}

export default function Form(props: any) {

  const [images, setImages] = useState<CategoryImagesType>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCallback = async (e: any) => {
    if (!e.target || !e.target.files || !e.target.files[0]) {
      setImages({
        ...images,
        [e.target.name]: null
      });
      return;  
    }

    const image = await convertImage(e);
    setImages({
      ...images,
      [e.target.name]: image
    });
  }

  const updateCategoryImages = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const data: CategoryImageType[] = [];
    Object.keys(images).map((category: string) => {
      if (images[category])
        data.push({
          name: category,
          image: images[category]
        });
    });
    const res = await putCategoryImagesAction(data);
    router.refresh();
    setIsLoading(false);
  }

  return (
    <div className="shadow-lg p-5">
      <h1 className="font-bold text-xl">Category Images</h1>
      <div className="grid grid-cols-2 gap-y-8 mt-5">
        {
          CATEGORIES.map((category: string) => (
            <div key={`category-admin-${category}`}>
              <label className="mr-5 uppercase">{category}</label>
              <input
                type="file"
                name={category}
                onChange={handleCallback}
                />
              <div>
                <Image
                  src={props.images[category]}
                  width={100}
                  height={100}
                  alt="image"
                  />
              </div>
            </div>
          ))
      }
      </div>
      <div className="flex justify-end">
        <Button
          className="bg-cyan-400 text-white"
          onClick={updateCategoryImages}
          type="button">
          { !isLoading ? 'Update' : 'Updating...' }
        </Button>
      </div>
    </div>
  );
}