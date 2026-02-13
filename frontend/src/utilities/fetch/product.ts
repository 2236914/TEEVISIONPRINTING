/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import { revalidateTag } from 'next/cache';

import type { AxiosError } from 'axios';
import axios from 'axios';

import type {
  ColorImageFromS3Type,
  InputValues,
  ProductColors,
} from '@/utilities/types/AdminFormTypes';
import type { PriceVariablesData } from '@/utilities/types/CalculateTotalProductPriceTypes';
import type {
  AdminProductItemOnList,
  ErrorMessage,
  Product,
  ProductItemOnList,
  RequestAQuoteProduct,
} from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchAllProducts = async (
  categorySlug: string,
  brandSlugs: string,
  search: string
): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${backendUrl}/products?categorySlug=${categorySlug}&brandSlugs=${brandSlugs}&search=${search}`,
      {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': backendUrl as string,
        },
        next: {
          tags: [`products`],
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch products: ${response.status}`);
      return [];
    }

    const text = await response.text();
    if (!text || text.trim() === '') {
      return [];
    }

    const responseData = JSON.parse(text);

    if (!Array.isArray(responseData)) {
      console.error('Response is not an array:', responseData);
      return [];
    }

    const data = responseData.map((product: any) => {
      return {
        ...product,
        availableSizes: product.availableSizes
          ? JSON.parse(product.availableSizes)
          : [],
        availableClotheSizeParts: product.availableClotheSizeParts
          ? JSON.parse(product.availableClotheSizeParts)
          : [],
        sizesInfo: product.sizesInfo ? JSON.parse(product.sizesInfo) : {},
      };
    });
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchAllRequestAQuoteProducts = async (): Promise<
  RequestAQuoteProduct[]
> => {
  try {
    const response = await fetch(`${backendUrl}/products/request-a-quote`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': backendUrl as string,
      },
      next: {
        tags: [`products/request-a-quote`],
        revalidate: 86400,
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch products: ${response.status}`);
      return [];
    }

    // const text = await response.text();
    // if (!text || text.trim() === '') {
    //   return [];
    // }

    // const responseData = JSON.parse(text);

    // if (!Array.isArray(responseData)) {
    //   console.error('Response is not an array:', responseData);
    //   return [];
    // }

    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductItemOnList = async (): Promise<
  ProductItemOnList[]
> => {
  try {
    const response = await fetch(
      `${backendUrl}/products/product-item-on-list`,
      {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': backendUrl as string,
        },
        next: {
          tags: [`products`],
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch product list: ${response.status}`);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching product item list:', error);
    return [];
  }
};

// ✅ NEW FUNCTION - Add this for category filtering
export const fetchProductItemOnListByCategory = async (
  categorySlug: string
): Promise<ProductItemOnList[]> => {
  try {
    const response = await fetch(
      `${backendUrl}/products/product-item-on-list?categorySlug=${categorySlug}`,
      {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': backendUrl as string,
        },
        next: {
          tags: [`products`, `category-${categorySlug}`],
          revalidate: 86400,
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch product list: ${response.status}`);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching product item list:', error);
    return [];
  }
};

export type HomePageProducts = {
  categories: Array<string>;
  colors: Array<{
    hexCode: string;
    name: string;
  }>;
  imageUrl: string;
  name: string;
  slug: string;
};

export const fetchAllHomePageProducts = async (): Promise<
  HomePageProducts[]
> => {
  try {
    const response = await fetch(`${backendUrl}/products/home-page`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': backendUrl as string,
      },
      next: {
        tags: [`products/home-page`],
        revalidate: 86400,
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch home page products: ${response.status}`);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching home page products:', error);
    return [];
  }
};

export const fetchAllAdminProducts = async (): Promise<
  AdminProductItemOnList[]
> => {
  try {
    const response = await fetch(`${backendUrl}/products/admin`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': backendUrl as string,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch admin products: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const text = await response.text();

    if (!text || text.trim() === '') {
      console.error('Empty response from admin products endpoint');
      return [];
    }

    const data = JSON.parse(text);

    if (!Array.isArray(data)) {
      console.error('Admin products response is not an array:', data);
      return [];
    }

    return data;
  } catch (error) {
    console.error('Error fetching admin products:', error);
    return [];
  }
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await axios({
    url: `${backendUrl}/products/${id}`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
    },
  });
  const responseData = response.data;
  const data = {
    ...responseData,
    availableSizes: responseData.availableSizes
      ? JSON.parse(responseData.availableSizes)
      : [],
    availableClotheSizeParts: responseData.availableClotheSizeParts
      ? JSON.parse(responseData.availableClotheSizeParts)
      : [],
    sizesInfo: responseData.sizesInfo ? JSON.parse(responseData.sizesInfo) : {},
  };
  return data;
};

export const fetchProductBySlug = async (slug: string): Promise<Product> => {
  const response = await fetch(`${backendUrl}/products/slug/${slug}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': backendUrl as string,
    },
    next: {
      tags: [`products/${slug}`],
      revalidate: 86400,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch product by slug: ${response.status}`);
  }

  const responseData = await response.json();
  const data = {
    ...responseData,
    availableSizes: responseData.availableSizes
      ? JSON.parse(responseData.availableSizes)
      : [],
    availableClotheSizeParts: responseData.availableClotheSizeParts
      ? JSON.parse(responseData.availableClotheSizeParts)
      : [],
    sizesInfo: responseData.sizesInfo ? JSON.parse(responseData.sizesInfo) : {},
  };
  return data;
};

export const fetchAdminProductViewById = async (
  id: string,
  accessToken: string
): Promise<{
  colors: Array<ColorImageFromS3Type>;
  initialValues: InputValues;
}> => {
  const response = await fetch(`${backendUrl}/products/admin/view/${id}`, {
    method: 'GET',
    next: {
      tags: [`products/admin/${id}`],
      revalidate: 60,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }

  const responseData = await response.json();

  const initialValues = {
    ...responseData,
    availableSizes: responseData.availableSizes
      ? JSON.parse(responseData.availableSizes)
      : [],
    availableClotheSizeParts: responseData.availableClotheSizeParts
      ? JSON.parse(responseData.availableClotheSizeParts)
      : [],
    sizesInfo: responseData.sizesInfo ? JSON.parse(responseData.sizesInfo) : {},
    pricesPerColorOnWhiteClothes: responseData.pricesPerColorOnWhiteClothes
      ? JSON.parse(responseData.pricesPerColorOnWhiteClothes)
      : {},
    pricesPerColorOnColoredClothes: responseData.pricesPerColorOnColoredClothes
      ? JSON.parse(responseData.pricesPerColorOnColoredClothes)
      : {},
  };

  return { initialValues, colors: responseData.colors || [] };
};

export const createProduct = async (
  inputValues: InputValues,
  productColors: Array<ProductColors>,
  accessToken: string
) => {
  const data = {
    ...inputValues,
    availableSizes: JSON.stringify(inputValues.availableSizes),
    sizesInfo: JSON.stringify(inputValues.sizesInfo),
    pricesPerColorOnWhiteClothes: JSON.stringify(
      inputValues.pricesPerColorOnWhiteClothes
    ),
    pricesPerColorOnColoredClothes: JSON.stringify(
      inputValues.pricesPerColorOnColoredClothes
    ),
    availableClotheSizeParts: JSON.stringify(
      inputValues.availableClotheSizeParts
    ),
    productColors: productColors,
  };

  const response = await axios({
    url: `${backendUrl}/products`,
    method: 'POST',
    data: data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': backendUrl,
    },
  }).catch((error: AxiosError<ErrorMessage>) => {
    if (error.response) {
      throw error.response.data.message;
    }
  });

  revalidateTag('products');
  revalidateTag('products/admin');
  revalidateTag(`products/home-page`);
  return response?.data;
};

export const updateProduct = async (
  inputValues: InputValues,
  productColors: Array<{ colorId: number; sortOrder: string }>,
  productId: string,
  accessToken: string
) => {
  const data = {
    ...inputValues,
    availableSizes: JSON.stringify(inputValues.availableSizes),
    sizesInfo: JSON.stringify(inputValues.sizesInfo),
    pricesPerColorOnWhiteClothes: JSON.stringify(
      inputValues.pricesPerColorOnWhiteClothes
    ),
    pricesPerColorOnColoredClothes: JSON.stringify(
      inputValues.pricesPerColorOnColoredClothes
    ),
    availableClotheSizeParts: JSON.stringify(
      inputValues.availableClotheSizeParts
    ),
    productColors: productColors,
  };

  const response = await axios({
    url: `${backendUrl}/products/${productId}`,
    method: 'PUT',
    data: data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': backendUrl,
    },
  }).catch((error: AxiosError<ErrorMessage>) => {
    if (error.response) {
      throw error.response.data.message;
    }
  });

  revalidateTag('products');
  revalidateTag(`products/admin/${productId}`);
  revalidateTag('products/admin');
  revalidateTag(`products/home-page`);
  revalidateTag(`products/${inputValues.slug}`);
  return response?.data;
};

export const calculateFinalPrice = async (
  priceVariablesData: PriceVariablesData
): Promise<number> => {
  const body = {
    ...priceVariablesData,
    quantityBySizes: JSON.stringify({
      XS: priceVariablesData.quantityBySizes.XS || 0,
      S: priceVariablesData.quantityBySizes.S || 0,
      M: priceVariablesData.quantityBySizes.M || 0,
      LG: priceVariablesData.quantityBySizes.LG || 0,
      XL: priceVariablesData.quantityBySizes.XL || 0,
      '2XL': priceVariablesData.quantityBySizes['2XL'] || 0,
      '3XL': priceVariablesData.quantityBySizes['3XL'] || 0,
      '4XL': priceVariablesData.quantityBySizes['4XL'] || 0,
      '5XL': priceVariablesData.quantityBySizes['5XL'] || 0,
    }),
  };

  const response = await axios({
    url: `${backendUrl}/products/calculate-final-price`,
    method: 'POST',
    data: body,
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
    },
  }).catch((error: AxiosError<ErrorMessage>) => {
    throw error;
  });

  const data = response?.data;
  return data;
};

export const deleteProduct = async (
  productId: number,
  accessToken: string
): Promise<void> => {
  await axios({
    url: `${backendUrl}/products/delete/${productId}`,
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': backendUrl,
    },
  });

  revalidateTag('products');
  revalidateTag('products/admin');
  revalidateTag(`products/home-page`);
};
