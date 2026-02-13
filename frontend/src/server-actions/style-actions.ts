'use server';
import { cookies } from 'next/headers';

import { createStyle, updateStyle } from '@/utilities/fetch/style';
import type { AddStyleType } from '@/utilities/types/AdminFormTypes';

async function addStyleOnServer(style: AddStyleType) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await createStyle(style, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

async function editStyleOnServer(style: AddStyleType, styleId: string) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await updateStyle(style, styleId, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

export { addStyleOnServer, editStyleOnServer };
