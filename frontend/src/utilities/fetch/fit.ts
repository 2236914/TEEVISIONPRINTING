// utilities/fetch/fit.ts
import { revalidateTag } from 'next/cache';

import axios from 'axios';

import type { AddFitType } from '@/utilities/types/AdminFormTypes';
import type { Fit } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// ✅ OPTIMIZED: Cache for public pages
export async function fetchFits() {
  try {
    const response = await fetch(`${backendUrl}/fits`, {
      next: {
        revalidate: 86400, // Cache for 1 hour
        tags: ['fits'],
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch fits:', response.status);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching fits:', error);
    return [];
  }
}

// ✅ NEW: For admin pages that need fresh data
export async function fetchFitsAdmin(accessToken: string) {
  try {
    const response = await fetch(`${backendUrl}/fits`, {
      cache: 'no-store', // Always fresh for admin
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch fits:', response.status);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching fits:', error);
    return [];
  }
}

export const createFit = async (
  fit: AddFitType,
  accessToken: string
): Promise<AddFitType> => {
  const response = await axios({
    url: `${backendUrl}/fits`,
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: fit,
  });
  revalidateTag('fits');
  return response.data;
};

export const updateFit = async (
  fit: AddFitType,
  fitId: number,
  accessToken: string
): Promise<AddFitType> => {
  const response = await axios({
    url: `${backendUrl}/fits/${fitId}`,
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: fit,
  });
  revalidateTag('fits');
  return response.data;
};

// Uses cached data
export const fetchVisibleFits = async (): Promise<Fit[]> => {
  try {
    const allFits = await fetchFits();
    return allFits.filter((fit) => fit.isActive && fit.isVisibleOnWebsite);
  } catch (error) {
    console.error('Error fetching visible fits:', error);
    return [];
  }
};
