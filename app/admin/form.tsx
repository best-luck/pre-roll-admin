"use client";

import Button from "@src/components/shared/common/UI/button";
import { convertImage } from "@src/lib/functions/client/helper";
import { useState } from "react";

export interface CategoryImagesType {
  [key: string]: any;
}

export default function Form(props: any) {

  const [images, setImages] = useState<CategoryImagesType>({});

  const handleCallback = async (e: any) => {
    if (!e.target || !e.target.files || !e.target.files[0]) return;

    const image = await convertImage(e);
    setImages({
      ...images,
      [e.target.name]: image
    });
  }

  const saveCategoryImages = () => {
    props.saveCategoryImages(images);
  }

  return (
    <div className="shadow-lg p-5">
      <h1 className="font-bold text-xl">Category Images</h1>
      <div className="grid grid-cols-2 gap-y-8 mt-5">
        <div>
          <label className="mr-5">Pre-Rolls</label>
          <input
            type="file"
            name="pre-rolls"
            onChange={handleCallback}
            />
        </div>
        <div>
          <label className="mr-5">Topicals</label>
          <input
            type="file"
            name="topicals"
            onChange={handleCallback}
            />
        </div>
        <div>
          <label className="mr-5">Tincture</label>
          <input
            type="file"
            name="tincture"
            onChange={handleCallback}
            />
        </div>
        <div>
          <label className="mr-5">CBD</label>
          <input
            type="file"
            name="cbd"
            onChange={handleCallback}
            />
        </div>
        <div>
          <label className="mr-5">CEEDS</label>
          <input
            type="file"
            name="ceeds"
            onChange={handleCallback}
            />
        </div>
        <div>
          <label className="mr-5">Flower</label>
          <input
            type="file"
            name="flower"
            onChange={handleCallback}
            />
        </div>
        <div>
          <label className="mr-5">Vaporizers</label>
          <input
            type="file"
            name="vaporizers"
            onChange={handleCallback}
            />
        </div>
        <div>
          <label className="mr-5">Concentrates</label>
          <input
            type="file"
            name="concentrates"
            onChange={handleCallback}
            />
        </div>
        <div>
          <label className="mr-5">Edibles</label>
          <input
            type="file"
            name="edibles"
            onChange={handleCallback}
            />
        </div>
        <div>
          <label className="mr-5">Accessories</label>
          <input
            type="file"
            name="accessories"
            onChange={handleCallback}
            />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          className="bg-cyan-400 text-white"
          onClick={saveCategoryImages}
          type="button">
          Update
        </Button>
      </div>
    </div>
  );
}