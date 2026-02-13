import { cookies } from 'next/headers';

import {
  createProduct,
  deleteProduct,
  fetchAllHomePageProducts,
  fetchProductItemOnList,
  updateProduct,
} from '@/utilities/fetch/product';
import type {
  InputValues,
  ProductColors,
} from '@/utilities/types/AdminFormTypes';

async function createProductOnServer(
  inputValues: InputValues,
  productColors: Array<ProductColors>
) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;
  try {
    const productId = await createProduct(
      inputValues,
      productColors,
      accessToken
    );
    return productId;
  } catch (error: any) {
    console.error(error);
  }
}

async function updateProductOnServer(
  inputValues: InputValues,
  productColors: Array<{ colorId: number; sortOrder: string }>,
  productId: string
) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await updateProduct(inputValues, productColors, productId, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

async function fetchAllHomePageProductsOnServer() {
  'use server';

  try {
    return await fetchAllHomePageProducts();
  } catch (error: any) {
    console.error(error);
  }
}

async function fetchProductItemOnListOnServer() {
  'use server';

  try {
    return await fetchProductItemOnList();
  } catch (error: any) {
    console.error(error);
  }
}

async function deleteProductOnServer(productId: number) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await deleteProduct(productId, accessToken);
  } catch (error: any) {
    console.error(error);
  }
}

export {
  createProductOnServer,
  updateProductOnServer,
  fetchAllHomePageProductsOnServer,
  fetchProductItemOnListOnServer,
  deleteProductOnServer,
};
