'use server';
import { cookies } from 'next/headers';

import { createBlog, updateBlog } from '@/utilities/fetch/blog';
import type { AddBlogType } from '@/utilities/types/AdminFormTypes';

async function addBlogOnServer(blog: AddBlogType) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    const blogId = await createBlog(blog, accessToken);
    return blogId;
  } catch (error: any) {
    console.error(error);
    throw new Error('Error creating blog');
  }
}

async function editBlogOnServer(blog: AddBlogType, blogId: string) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await updateBlog(blog, blogId, accessToken);
  } catch (error: any) {
    console.error(error);
    throw new Error('Error updating blog');
  }
}

export { addBlogOnServer, editBlogOnServer };
