"use client";

import Button from '@src/components/shared/common/UI/button';
import Select from '@src/components/shared/common/UI/select';
import { createBlogAction } from '@src/lib/actions/blog';
import { BlogCategory } from '@src/lib/database/blogCategories';
import { createBlog } from '@src/lib/database/blogs';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Editor = dynamic(() => import("@src/components/shared/common/UI/CKEditor"), { ssr: false });

interface BlogFormProps {
  categories: BlogCategory[]
}

const initialState = {
  message: '',
  type: ''
}

export default function Form(props: BlogFormProps) {

  const options = props.categories.map(c => ({label: c.name, value: c.id}))
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event?.currentTarget);
    formData.set("image", image);
    const res = await createBlogAction(formData);
    router.push("/admin/blogs");
    router.refresh();
  }

  const imageCallback = async (e: any) => {
    if (!e.target || !e.target.files || !e.target.files[0]) return;

    const FR = new FileReader();
        
    FR.addEventListener("load", function(evt: any) {
      setImage(evt?.target?.result?.toString() ?? '');
    }); 
        
    FR.readAsDataURL(e.target.files[0]);
  }

  return (
    <div className="w-3/4 m-auto shadow rounded-[20px] bg-white p-5 mt-5">
      <form onSubmit={onSubmit}>
        <div className="mt-5">
          <label className="font-bold mb-3">Title</label>
          <input 
            id="title"
            name="title"
            type="text"
            autoComplete="title"
            placeholder="title"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Slug</label>
          <input 
            id="slug"
            name="slug"
            type="text"
            autoComplete="slug"
            placeholder="Slug"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Author</label>
          <input 
            id="author"
            name="author"
            type="text"
            autoComplete="author"
            placeholder="Author"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Category</label>
          <Select
            onChange={() => {}}
            options={options}
            className="w-full rounded-lg"
            name="category_id"
            />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Content</label>
          <Editor
            value=""
            onChange={(v: string) => {setContent(v)}}
            />
          <input 
            id="content"
            name="content"
            type="hidden"
            autoComplete="content"
            placeholder="Author"
            required
            value={content}
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
            onChange={imageCallback}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
            accept=".jpg,.jpeg,.png,.webp"
          />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Excerpt</label>
          <textarea 
            id="excerpt"
            name="excerpt"
            autoComplete="excerpt"
            placeholder="Excerpt"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          ></textarea>
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Meta Title</label>
          <input 
            id="metatitle"
            name="metatitle"
            type="text"
            autoComplete="metatitle"
            placeholder="Meta Title"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Meta Description</label>
          <input 
            id="metadescription"
            name="metadescription"
            type="text"
            autoComplete="metadescription"
            placeholder="Meta Description"
            required
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