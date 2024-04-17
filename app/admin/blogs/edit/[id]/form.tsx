"use client";

import Button from '@src/components/shared/common/UI/button';
import Select from '@src/components/shared/common/UI/select';
import { createBlogAction, updateBlogAction } from '@src/lib/actions/blog';
import { BlogCategory } from '@src/lib/database/blogCategories';
import { BlogType, createBlog } from '@src/lib/database/blogs';
import { convertImage } from '@src/lib/functions/client/helper';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useRef, useState } from 'react';


const Editor = dynamic(() => import("@src/components/shared/common/UI/CKEditor"), { ssr: false });

interface BlogFormProps {
  categories: BlogCategory[];
  blog: BlogType
}

const initialState = {
  message: '',
  type: ''
}

export default function Form(props: BlogFormProps) {

  const options = props.categories.map(c => ({label: c.name, value: c.id}))
  const [blog, setBlog] = useState<BlogType>(props.blog)
  const imageRef = useRef<HTMLInputElement|null>(null);
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = blog;
    if (imageRef?.current?.files?.length) {
      console.log('here')
      const file = imageRef?.current?.files[0];
      const base64 = await convertImage(file);
      data.image=base64;
    }
    const res = await updateBlogAction(data);

    router.replace("/admin/blogs");
    router.refresh();
  }

  const updateBlogState = (field: string, value: string) => {
    setBlog({
      ...blog,
      [field]: value
    })
  }

  const updateBlog = (event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    updateBlogState(event.target.name, event.target.value);
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
            onChange={updateBlog}
            value={blog.title}
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
            value={blog.slug}
            onChange={updateBlog}
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
            value={blog.author}
            onChange={updateBlog}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Category</label>
          <Select
            onChange={(v: string) => updateBlogState("category_id", v)}
            options={options}
            className="w-full rounded-lg"
            name="category_id"
            initialValue={blog.category_id.toString()}
            />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Content</label>
          <Editor
            value={blog.content}
            onChange={(v: string) => updateBlogState("content", v)}
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
            ref={imageRef}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
            accept=".jpg,.jpeg,.png,.webp"
          />
          <Image
            alt="image"
            width={200}
            height={200}
            src={blog.image}
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
            value={blog.excerpt}
            onChange={updateBlog}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          ></textarea>
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Meta Title</label>
          <input 
            id="meta_title"
            name="meta_title"
            type="text"
            value={blog.meta_title}
            onChange={updateBlog}
            autoComplete="metatitle"
            placeholder="Meta Title"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          />
        </div>
        <div className="mt-3">
          <label className="font-bold mb-3">Meta Description</label>
          <input 
            id="meta_description"
            name="meta_description"
            type="text"
            autoComplete="metadescription"
            placeholder="Meta Description"
            required
            value={blog.meta_description}
            onChange={updateBlog}
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
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}