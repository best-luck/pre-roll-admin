'use server';

import { redirect } from "next/navigation";
import { addBlogCategory } from "../database/blogCategories";
import { revalidatePath } from "next/cache";

export async function createBlog(prevState: any, formData: FormData) {
  
}

export async function createBlogCategoryAction(prevState: any, formData: FormData) {
  const name = formData.get('name')?.toString()||'';
  const slug = formData.get('slug')?.toString()||'';
  const res = await addBlogCategory(name, slug);
  if (!res) {
    return {
      error: 'Something went wrong!'
    }
  } else {
    revalidatePath('/admin/blog-categories')
    redirect('/admin/blog-categories')
  }
}