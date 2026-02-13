'use server';
import { cookies } from 'next/headers';

import {
  addImageAsset,
  deleteImageAssets,
} from '@/utilities/fetch/image-assets';
import type { AddImageAsset } from '@/utilities/types/AdminFormTypes';

async function addImageAssetOnServer(imageAsset: AddImageAsset) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await addImageAsset(imageAsset, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

async function deleteImageAssetsOnServer(imageAssetIds: number[]) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await deleteImageAssets(imageAssetIds, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

export { addImageAssetOnServer, deleteImageAssetsOnServer };
