'use server';
import { cookies } from 'next/headers';

import { 
  createMainCategory, 
  deleteMainCategory,
  updateMainCategory
} from '@/utilities/fetch/main-category';
import type { AddMainCategoryType } from '@/utilities/types/AdminFormTypes';

async function addMainCategoryOnServer(mainCategory: AddMainCategoryType) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await createMainCategory(mainCategory, accessToken);
  } catch (error: any) {
    console.error('Error adding main category:', error);
    throw error;
  }
}

async function editMainCategoryOnServer(
  mainCategory: AddMainCategoryType,
  mainCategoryId: number
) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await updateMainCategory(mainCategory, mainCategoryId, accessToken);
  } catch (error: any) {
    console.error('Error editing main category:', error);
    throw error;
  }
}

async function deleteMainCategoryOnServer(mainCategoryId: number) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await deleteMainCategory(mainCategoryId, accessToken);
  } catch (error: any) {
    console.error('Error deleting main category:', error);
    throw error;
  }
}

export { 
  addMainCategoryOnServer, 
  editMainCategoryOnServer, 
  deleteMainCategoryOnServer 
};