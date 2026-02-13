import { revalidateTag } from 'next/cache';

import axios from 'axios';

import type { AddStyleType } from '@/utilities/types/AdminFormTypes';
import type { Style } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchStyles = async (): Promise<Style[]> => {
  const response = await fetch(`${backendUrl}/styles`, {
    method: 'GET',
    next: {
      tags: ['styles'],
      revalidate: 60,
    },
  });

  const data = await response.json();
  return data;
};

export const createStyle = async (
  style: AddStyleType,
  accessToken: string
): Promise<AddStyleType> => {
  const response = await axios({
    url: `${backendUrl}/styles`,
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: style,
  });

  revalidateTag('styles');

  const data = response.data;
  return data;
};

export const updateStyle = async (
  style: AddStyleType,
  styleId: string,
  accessToken: string
): Promise<AddStyleType> => {
  const response = await axios({
    url: `${backendUrl}/styles/${styleId}`,
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
    data: style,
  });

  revalidateTag('styles');

  const data = response.data;
  return data;
};
