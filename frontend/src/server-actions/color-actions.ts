'use server';
import { cookies } from 'next/headers';

import { createColor, updateColor } from '@/utilities/fetch/color';
import type { AddColorType } from '@/utilities/types/AdminFormTypes';

async function addColorOnServer(color: AddColorType) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await createColor(color, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

async function editColorOnServer(color: AddColorType, colorId: string) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await updateColor(color, colorId, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

export { addColorOnServer, editColorOnServer };
