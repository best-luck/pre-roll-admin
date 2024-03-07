"use client";

import Button from '@src/components/shared/common/UI/button';
import Select from '@src/components/shared/common/UI/select';
import { createBlogAction } from '@src/lib/actions/blog';
import { BannerType } from '@src/lib/database/banners';
import { BlogCategory } from '@src/lib/database/blogCategories';
import { convertImage } from '@src/lib/functions/client/helper';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';


// const Editor = dynamic(() => import("@src/components/shared/common/UI/CKEditor"), { ssr: false });

interface BannerFormProps {
  saveBanner: (data: FormData) => void;
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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res: any = await props.saveBanner(formData);
    console.log(res);
    // if (!res) {
    //   router.push("/admin/banner");
    // }
  }

  const imageCallback = async (e: any) => {
    if (!e.target || !e.target.files || !e.target.files[0]) return;

    const image = await convertImage(e);
    setBanner({
      ...banner,
      image
    })
  }

  const updateBanner = (event: ChangeEvent<HTMLInputElement>) => {
    setBanner({
      ...banner,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="w-3/4 m-auto shadow rounded-[20px] bg-white p-5 mt-5">
      <form action={props.saveBanner}>

        <div className="mt-3">
          <label className="font-bold mb-3">Image</label>
          <input 
            id="image"
            name="image"
            type="file"
            autoComplete="image"
            placeholder="Image"
            required
            onChange={imageCallback}
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