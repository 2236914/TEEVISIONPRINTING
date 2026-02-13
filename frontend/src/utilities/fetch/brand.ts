import { revalidateTag } from 'next/cache';

import axios from 'axios';

import type { AddBrandType } from '@/utilities/types/AdminFormTypes';
import type { Brand } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// Fetch all brands
export const fetchBrands = async (): Promise<Brand[]> => {
  try {
    const response = await fetch(`${backendUrl}/brands`, {
      method: 'GET',
      next: {
        tags: ['brands'],
        revalidate: 86400,
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch brands: ${response.status}`);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching brands:', error);
    return [];
  }
};

export const createBrand = async (
  brand: AddBrandType,
  accessToken: string
): Promise<AddBrandType> => {
  const response = await axios({
    url: `${backendUrl}/brands`,
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: brand,
  });

  revalidateTag('brands');

  const data = response.data;
  return data;
};

export const updateBrand = async (
  brand: AddBrandType,
  brandId: number,
  accessToken: string
): Promise<AddBrandType> => {
  const response = await axios({
    url: `${backendUrl}/brands/${brandId}`,
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: brand,
  });

  revalidateTag('brands');

  const data = response.data;
  return data;
};

// Fetch visible brands only
export const fetchVisibleBrands = async (): Promise<Brand[]> => {
  try {
    const allBrands = await fetchBrands();
    return allBrands.filter(
      (brand) => brand.isActive && brand.isVisibleOnWebsite
    );
  } catch (error) {
    console.error('Error fetching visible brands:', error);
    return [];
  }
};
