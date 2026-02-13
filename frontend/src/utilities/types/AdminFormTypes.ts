/* eslint-disable typescript-sort-keys/string-enum */

import type { ProductColorImage } from '@/utilities/types/shared.types';

export enum ClothingSizes {
  XS = 'XS',
  S = 'S',
  M = 'M',
  LG = 'LG',
  XL = 'XL',
  '2XL' = '2XL',
  '3XL' = '3XL',
  '4XL' = '4XL',
  '5XL' = '5XL',
}

export enum ClothingSizeParts {
  'BODY LENGTH' = 'BODY LENGTH',
  'BODY WIDTH' = 'BODY WIDTH',
  'FULL BODY LENGTH' = 'FULL BODY LENGTH',
  'NECK CIRCUMFERENCE' = 'NECK CIRCUMFERENCE',
  'SLEEVE LENGTH' = 'SLEEVE LENGTH',
}

export type SizesInfo = {
  [key in ClothingSizes]: {
    [key in ClothingSizeParts]: string;
  };
};

export type InputValues = {
  availableClotheSizeParts: Array<{
    name: ClothingSizeParts;
    value: boolean;
  }>;
  availableSizes: Array<{
    name: ClothingSizes;
    value: boolean;
  }>;
  brandId: number | null;
  categoryIds: Array<number>;
  clothePackagingType: string;
  description: string;
  featureInfoItems: string[];
  fiberInfoItems: string[];
  fitIds: Array<number>;
  hasFeaturesInfo: boolean;
  hasFiberInfo: boolean;
  hasSizeInfo: boolean;
  isProductVisibleInHomePage: boolean;
  isProductVisibleInWebsite: boolean;
  metaTitle: string;
  name: string;
  pricesPerColorOnColoredClothes: {
    [key in ClothingSizes]: {
      markup: number;
      originalPrice: number;
    };
  };
  pricesPerColorOnWhiteClothes: {
    [key in ClothingSizes]: {
      markup: number;
      originalPrice: number;
    };
  };
  productColors: Array<ProductColors>;
  sizesInfo: SizesInfo;
  slug: string;
  styleId: number | null;
  tags: string[];
  whiteIsSameAsColored: boolean;
};

export type BlogInputValues = {
  author: string;
  content: string;
  date: string;
  descriptionMetadata: string;
  isActive: boolean;
  keywordsMetadata: string;
  slug: string;
  title: string;
  titleMetadata: string;
};

export type ProductColors = {
  colorId: number;
  productColorImages: Array<ProductColorImage>;
  sortOrder: string;
};

export type ColorImageType = {
  hexCode: string;
  id: number;
  imageUrl: string;
  isActive: boolean;
  isImage: boolean;
  name: string;
  productColorImages: Array<ProductColorImageFile>;
  sortOrder: string;
};

export type ColorImageFromS3Type = {
  hexCode: string;
  id: number;
  imageUrl: string;
  isActive: boolean;
  isImage: boolean;
  name: string;
  productColorImages: Array<ProductColorImage>;
  sortOrder: string;
};

// Main Category Interface
export interface AddMainCategoryType {
  description: string;
  imageUrl: string;
  isActive: boolean;
  isVisibleOnWebsite: boolean;
  name: string;
  slug: string;
  sortOrder: string;
}

export interface AddCategoryType {
  isActive: boolean;
  isVisibleOnWebsite: boolean;
  name: string;
  slug: string;
  sortOrder: string;
  description?: string | null;
  imageUrl?: string | null;
  mainCategoryId?: number | null;
}

export type AddBrandType = {
  isActive: boolean;
  isVisibleOnWebsite: boolean;
  name: string;
  slug: string;
  sortOrder: string;
};

export type AddStyleType = {
  isActive: boolean;
  name: string;
};

export type AddColorType = {
  hexCode: string;
  imageUrl: string;
  isActive: boolean;
  isImage: boolean;
  name: string;
  tags: Array<string>;
};

export type AddBlogType = {
  author: string;
  content: string;
  date: string;
  descriptionMetadata: string;
  imageSrc: string;
  isActive: boolean;
  keywordsMetadata: string;
  slug: string;
  title: string;
  titleMetadata: string;
};

export type AddImageAsset = {
  imageUrl: string;
};

export type ProductColorImageFile = {
  imageUrl: File;
  sortOrder: string;
};

export type AddQuestionType = {
  companyName: string;
  email: string;
  fullName: string;
  inquiryDetails: string;
  phoneNumber: string;
  preferredContactMethod: string;
};

export type AddFitType = {
  isActive: boolean;
  isVisibleOnWebsite: boolean;
  name: string;
  slug: string;
  sortOrder: string;
};