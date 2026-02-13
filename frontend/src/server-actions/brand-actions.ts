'use server';
import { cookies } from 'next/headers';

import { createBrand, updateBrand } from '@/utilities/fetch/brand';
import type { AddBrandType } from '@/utilities/types/AdminFormTypes';

async function addBrandOnServer(brand: AddBrandType) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await createBrand(brand, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

async function editBrandOnServer(brand: AddBrandType, brandId: number) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await updateBrand(brand, brandId, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

export { addBrandOnServer, editBrandOnServer };
