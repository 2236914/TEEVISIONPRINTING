import { revalidateTag } from 'next/cache';

import axios from 'axios';

import type { AddBlogType } from '@/utilities/types/AdminFormTypes';
import type { Blog } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

interface PagedBlogResponse {
  blogs: Array<{
    date: string;
    imageSrc: string | null;
    slug: string;
    title: string;
  }>;
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  pageSize: number;
  totalBlogs: number;
  totalPages: number;
}

// Fetch blogs with server-side pagination
export const fetchBlogs = async (
  page: number = 1,
  limit: number = 9
): Promise<PagedBlogResponse> => {
  const response = await fetch(
    `${backendUrl}/blogs/paginated?page=${page}&size=${limit}`,
    {
      method: 'GET',
      next: {
        tags: ['blogs', `blogs-page-${page}`],
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.status}`);
  }

  const data: PagedBlogResponse = await response.json();

  return {
    blogs: data.blogs,
    currentPage: data.currentPage,
    totalBlogs: data.totalBlogs,
    totalPages: data.totalPages,
    pageSize: data.pageSize,
    hasNext: data.hasNext,
    hasPrevious: data.hasPrevious,
  };
};

export const fetchBlogById = async (blogId: string): Promise<Blog> => {
  const response = await fetch(`${backendUrl}/blogs/${blogId}`, {
    method: 'GET',
    next: {
      tags: [`blogs/${blogId}`],
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export const fetchBlogBySlug = async (slug: string): Promise<Blog> => {
  const response = await fetch(`${backendUrl}/blogs/slug/${slug}`, {
    method: 'GET',
    next: {
      tags: [`blogs/slug-${slug}`],
      revalidate: 86400,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export const createBlog = async (
  blog: AddBlogType,
  accessToken: string
): Promise<number> => {
  const response = await axios({
    url: `${backendUrl}/blogs`,
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: blog,
  });
  revalidateTag('blogs');
  const data = response.data;
  return data;
};

export const updateBlog = async (
  blog: AddBlogType,
  blogId: string,
  accessToken: string
): Promise<AddBlogType> => {
  const response = await axios({
    url: `${backendUrl}/blogs/${blogId}`,
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: blog,
  });
  revalidateTag('blogs');
  revalidateTag(`blogs/${blogId}`);
  revalidateTag(`blogs/${blog.slug}`);
  const data = response.data;
  return data;
};
