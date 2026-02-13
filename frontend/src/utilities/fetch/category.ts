// utilities/fetch/category.ts
import { revalidateTag } from 'next/cache';

import axios from 'axios';

import type { AddCategoryType } from '@/utilities/types/AdminFormTypes';
import type { Category } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// ✅ OPTIMIZED: Cache for public pages
export async function fetchCategories() {
  try {
    const response = await fetch(`${backendUrl}/categories`, {
      next: {
        revalidate: 86400, // Cache for 1 day
        tags: ['categories'],
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch categories:', response.status);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// ✅ NEW: For admin pages that need fresh data
export async function fetchCategoriesAdmin(accessToken: string) {
  try {
    const response = await fetch(`${backendUrl}/categories`, {
      cache: 'no-store', // Always fresh for admin
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch categories:', response.status);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export const createCategory = async (
  category: AddCategoryType,
  accessToken: string
): Promise<AddCategoryType> => {
  const response = await axios({
    url: `${backendUrl}/categories`,
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: category,
  });

  revalidateTag('categories');

  const data = response.data;
  return data;
};

export const updateCategory = async (
  category: AddCategoryType,
  categoryId: number,
  accessToken: string
): Promise<AddCategoryType> => {
  const response = await axios({
    url: `${backendUrl}/categories/${categoryId}`,
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: category,
  });

  revalidateTag('categories');

  const data = response.data;
  return data;
};

// Fetch category by slug - uses cached data
export async function fetchCategoryBySlug(slug: string): Promise<Category> {
  try {
    const allCategories = await fetchCategories();
    const category = allCategories.find((cat) => cat.slug === slug);

    if (!category) {
      throw new Error(`Category not found: ${slug}`);
    }

    return category;
  } catch (error) {
    console.error(`Error fetching category by slug ${slug}:`, error);
    throw error;
  }
}

// Fetch visible categories
export async function fetchVisibleCategories(): Promise<Category[]> {
  try {
    const allCategories = await fetchCategories();
    return allCategories.filter(
      (cat) => cat.isActive && cat.isVisibleOnWebsite
    );
  } catch (error) {
    console.error('Error fetching visible categories:', error);
    return [];
  }
}
