import { revalidateTag } from 'next/cache';

import axios from 'axios';

import type { AddImageAsset } from '@/utilities/types/AdminFormTypes';
import type { ImageAsset } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchImageAssets = async (): Promise<ImageAsset[]> => {
  const response = await fetch(`${backendUrl}/image-assets`, {
    method: 'GET',
    next: {
      tags: ['image-assets'],
      revalidate: 60,
    },
  });

  const data = await response.json();
  return data;
};

export const addImageAsset = async (
  imageAsset: AddImageAsset,
  accessToken: string
): Promise<string> => {
  const response = await axios({
    url: `${backendUrl}/image-assets`,
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: imageAsset,
  });

  revalidateTag('image-assets');

  const data = response.data;
  return data;
};

export const deleteImageAssets = async (
  imageAssetIds: number[],
  accessToken: string
): Promise<void> => {
  await axios({
    url: `${backendUrl}/image-assets`,
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: { ids: imageAssetIds },
  });

  revalidateTag('image-assets');
};
