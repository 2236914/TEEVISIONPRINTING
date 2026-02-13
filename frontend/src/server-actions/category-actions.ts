'use server';
import { cookies } from 'next/headers';

import { createCategory, updateCategory } from '@/utilities/fetch/category';
import type { AddCategoryType } from '@/utilities/types/AdminFormTypes';

async function addCategoryOnServer(category: AddCategoryType) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await createCategory(category, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

async function editCategoryOnServer(
  category: AddCategoryType,
  categoryId: number
) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await updateCategory(category, categoryId, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

export { addCategoryOnServer, editCategoryOnServer };
