"use client";

import Button from '@src/components/shared/common/UI/button';
import { BannerType } from '@src/lib/database/banners';
import { convertImage } from '@src/lib/functions/client/helper';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useRef, useState } from 'react';


interface BannerFormProps {
}

export default function Form(props: BannerFormProps) {

  const [banner, setBanner] = useState<BannerType>({
    heading: '',
    subheading: '',
    image: '',
    mobile_image: '',
    link: '',
    cta: ''
  });
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement|null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let file = null;
    if (imageRef?.current?.files) file = imageRef?.current?.files[0];
    const base64 = await convertImage(file);
    const data = {
      ...banner,
      image: base64
    };

    const response = await fetch(
      `/api/files`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      },
    );
    router.replace("/admin/banner");
    router.refresh();
  }

  const updateBanner = (event: ChangeEvent<HTMLInputElement>) => {
    setBanner({
      ...banner,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="w-3/4 m-auto shadow rounded-[20px] bg-white p-5 mt-5">
      <form onSubmit={onSubmit}>
        <div className="mt-5">
          <label className="font-bold mb-3" htmlFor="heading">Heading</label>
          <input 
            id="heading"
            name="heading"
            type="text"
            autoComplete="heading"
            placeholder="Heading"
            onChange={updateBanner}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>
        
        <div className="mt-3">
          <label className="font-bold mb-3">Subheading</label>
          <input 
            id="subheading"
            name="subheading"
            type="text"
            autoComplete="subheading"
            placeholder="subheading"
            required
            onChange={updateBanner}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>

        <div className="mt-3">
          <label className="font-bold mb-3">Image</label>
          <input 
            id="image"
            name="image"
            type="file"
            autoComplete="image"
            placeholder="Image"
            required
            ref={imageRef}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>

        <div className="mt-3">
          <label className="font-bold mb-3">Link</label>
          <input 
            id="link"
            name="link"
            type="text"
            autoComplete="link"
            placeholder="Link"
            required
            onChange={updateBanner}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>

        <div className="mt-3">
          <label className="font-bold mb-3">CTA</label>
          <input 
            id="cta"
            name="cta"
            type="text"
            autoComplete="cta"
            placeholder="CTA"
            required
            onChange={updateBanner}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>

        <div className="flex justify-end mt-5">
          <Button
            onClick={() => router.back()}
            className="bg-rose-600 text-white px-5 me-3"
            type="button"
            >
            Back
          </Button>
          <Button
            onClick={() => {}}
            className="bg-cyan-400 text-white px-5"
            type="submit"
            >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}