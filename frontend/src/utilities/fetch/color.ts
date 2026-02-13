// utilities/fetch/color.ts
import { revalidateTag } from 'next/cache';
import axios from 'axios';

import type { AddColorType } from '@/utilities/types/AdminFormTypes';
import type { Color, PaginatedColor } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// ✅ OPTIMIZED: Cache for public pages
export async function fetchColors() {
  try {
    const response = await fetch(`${backendUrl}/colors`, {
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['colors'] 
      }
    });
    
    if (!response.ok) {
      console.error('Failed to fetch colors:', response.status);
      return [];
    }
    
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching colors:', error);
    return [];
  }
}

// ✅ NEW: For admin pages that need fresh data
export async function fetchColorsAdmin(accessToken: string) {
  try {
    const response = await fetch(`${backendUrl}/colors`, {
      cache: 'no-store', // Always fresh for admin
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    if (!response.ok) {
      console.error('Failed to fetch colors:', response.status);
      return [];
    }
    
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching colors:', error);
    return [];
  }
}

export const fetchPaginatedColors = async (
  page: number,
  size: number,
  search: string
): Promise<PaginatedColor> => {
  const response = await fetch(
    `${backendUrl}/colors/paginated?page=${page}&size=${size}&search=${search}`,
    {
      method: 'GET',
      next: {
        tags: ['colors/paginated'],
        revalidate: 60,
      },
    }
  );
  const data = await response.json();
  return data;
};

export const createColor = async (
  color: AddColorType,
  accessToken: string
): Promise<AddColorType> => {
  const response = await axios({
    url: `${backendUrl}/colors`,
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: color,
  });
  revalidateTag('colors');
  revalidateTag('colors/paginated');
  const data = response.data;
  return data;
};

export const updateColor = async (
  color: AddColorType,
  colorId: string,
  accessToken: string
): Promise<AddColorType> => {
  const response = await axios({
    url: `${backendUrl}/colors/${colorId}`,
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: color,
  });
  revalidateTag('colors');
  revalidateTag('colors/paginated');
  const data = response.data;
  return data;
};

export const fetchColorsAvailableOnProduct = async (
  productId: string,
  accessToken: string
): Promise<Color[]> => {
  const response = await axios({
    url: `${backendUrl}/colors/product/${productId}`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = response.data;
  return data;
};