// main-category.ts - Add to your utilities/fetch folder
import { revalidateTag } from 'next/cache';

import axios from 'axios';

import type {
  AddMainCategoryType,
  MainCategory,
  MainCategoryWithSubcategories,
} from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// Fetch all main categories for admin
export const fetchMainCategories = async (): Promise<MainCategory[]> => {
  try {
    const response = await fetch(`${backendUrl}/main-categories`, {
      method: 'GET',
      next: {
        tags: ['main-categories'],
        revalidate: 60,
      },
    });

    if (response.status === 401) {
      // Return empty array instead of logging to console
      return [];
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    if (!text || text.trim() === '') {
      return [];
    }

    const data = JSON.parse(text);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    // For production, you might want to use a proper logging service
    // console.error('Error fetching main categories:', error);
    return [];
  }
};

// Fetch visible main categories for public use
export const fetchVisibleMainCategories = async (): Promise<MainCategory[]> => {
  try {
    const response = await fetch(`${backendUrl}/main-categories/visible`, {
      method: 'GET',
      next: {
        tags: ['main-categories-visible'],
        revalidate: 86400,
      },
    });

    if (response.status === 401) {
      // Return empty array instead of logging to console
      return [];
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    if (!text || text.trim() === '') {
      return [];
    }

    const data = JSON.parse(text);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    // For production, you might want to use a proper logging service
    // console.error('Error fetching visible main categories:', error);
    return [];
  }
};

// Fetch main categories with their subcategories
export const fetchMainCategoriesWithSubcategories = async (): Promise<
  MainCategoryWithSubcategories[]
> => {
  const response = await fetch(
    `${backendUrl}/main-categories/with-subcategories`,
    {
      method: 'GET',
      next: {
        tags: ['main-categories-with-subcategories'],
        revalidate: 86400,
      },
    }
  );

  const data = await response.json();
  return data;
};

// Get main category by slug
export const fetchMainCategoryBySlug = async (
  slug: string
): Promise<MainCategory> => {
  try {
    const response = await fetch(`${backendUrl}/main-categories/slug/${slug}`, {
      method: 'GET',
      next: {
        tags: ['main-categories', `main-category-${slug}`],
        revalidate: 86400,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching main category by slug ${slug}:`, error);
    throw error;
  }
};

// Create main category
export const createMainCategory = async (
  mainCategory: AddMainCategoryType,
  accessToken: string
): Promise<MainCategory> => {
  const response = await axios({
    url: `${backendUrl}/main-categories`,
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: mainCategory,
  });

  revalidateTag('main-categories');
  revalidateTag('main-categories-visible');
  revalidateTag('main-categories-with-subcategories');

  return response.data;
};

// Update main category
export const updateMainCategory = async (
  mainCategory: AddMainCategoryType,
  mainCategoryId: number,
  accessToken: string
): Promise<MainCategory> => {
  const response = await axios({
    url: `${backendUrl}/main-categories/${mainCategoryId}`,
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: mainCategory,
  });

  revalidateTag('main-categories');
  revalidateTag('main-categories-visible');
  revalidateTag('main-categories-with-subcategories');

  return response.data;
};

// Delete main category
export const deleteMainCategory = async (
  mainCategoryId: number,
  accessToken: string
): Promise<void> => {
  await axios({
    url: `${backendUrl}/main-categories/${mainCategoryId}`,
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  revalidateTag('main-categories');
  revalidateTag('main-categories-visible');
  revalidateTag('main-categories-with-subcategories');
};
