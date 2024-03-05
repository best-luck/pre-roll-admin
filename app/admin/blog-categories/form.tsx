'use client';

import Button from "@src/components/shared/common/UI/button";
import { createBlogCategoryAction } from "@src/lib/actions/blog";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

const initialState = {
  error: ''
}

export default function Form() {

  const [state, formAction] = useFormState(createBlogCategoryAction, initialState);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const slugRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.value = '';
    }
    if (slugRef.current) {
      slugRef.current.value = '';
    }
  }, [state])

  return (
    <div>
      <div className="flex my-5 border-b border-gray-300 pb-3">
        <form action={formAction} className="w-full">
          <h1 className="text-xl border-b pb-2 font-bold">Add new blog category</h1>
          <div className="mt-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <input 
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              ref={nameRef}
            />
          </div>
          <div>
            <label htmlFor="slug" className="block text-sm font-medium leading-6 text-gray-900">Slug</label>
            <input 
              id="slug"
              name="slug"
              type="text"
              autoComplete="slug"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
              ref={slugRef}
            />
          </div>
          <Button
            onClick={() => {}}
            className="bg-cyan-400 text-white mt-3"
            type="submit"
            >
            Add New
          </Button>
        </form>
      </div>
    </div>
  );
}