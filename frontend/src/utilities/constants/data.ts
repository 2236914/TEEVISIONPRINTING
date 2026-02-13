/* eslint-disable id-length */

import type { InputValues } from '@/utilities/types/AdminFormTypes';
import {
  ClothingSizeParts,
  ClothingSizes,
} from '@/utilities/types/AdminFormTypes';

export const initialAvailableSizes = Object.keys(ClothingSizes).map((size) => ({
  name: ClothingSizes[size as keyof typeof ClothingSizes],
  value: true,
}));

export const initialAvailableClotheSizeParts = Object.keys(
  ClothingSizeParts
).map((sizePart) => ({
  name: ClothingSizeParts[sizePart as keyof typeof ClothingSizeParts],
  value: true,
}));

export const initialValues: InputValues = {
  name: '',
  metaTitle: '',
  description: '',
  hasFiberInfo: false,
  fiberInfoItems: [''],
  fitIds: [],
  hasFeaturesInfo: false,
  featureInfoItems: [''],
  isProductVisibleInWebsite: true,
  isProductVisibleInHomePage: false,
  hasSizeInfo: false,
  availableSizes: initialAvailableSizes,
  availableClotheSizeParts: initialAvailableClotheSizeParts,
  clothePackagingType: 'TSHIRT',
  brandId: null,
  categoryIds: [],
  styleId: null,
  whiteIsSameAsColored: true,
  productColors: [],
  slug: '',
  pricesPerColorOnWhiteClothes: {
    [ClothingSizes.XS]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.S]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.M]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.LG]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.XL]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['2XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['3XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['4XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['5XL']]: {
      markup: 1,
      originalPrice: 0,
    },
  },
  pricesPerColorOnColoredClothes: {
    [ClothingSizes.XS]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.S]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.M]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.LG]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes.XL]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['2XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['3XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['4XL']]: {
      markup: 1,
      originalPrice: 0,
    },
    [ClothingSizes['5XL']]: {
      markup: 1,
      originalPrice: 0,
    },
  },
  sizesInfo: {
    [ClothingSizes.XS]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes.S]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes.M]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes.LG]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes.XL]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes['2XL']]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes['3XL']]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes['4XL']]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
    [ClothingSizes['5XL']]: {
      [ClothingSizeParts['BODY LENGTH']]: '',
      [ClothingSizeParts['BODY WIDTH']]: '',
      [ClothingSizeParts['FULL BODY LENGTH']]: '',
      [ClothingSizeParts['NECK CIRCUMFERENCE']]: '',
      [ClothingSizeParts['SLEEVE LENGTH']]: '',
    },
  },
  tags: [],
};

export const initialBlogValues = {
  title: '',
  content: '',
  date: '',
  author: '',
  isActive: true,
  slug: '',
  titleMetadata: '',
  descriptionMetadata: '',
  keywordsMetadata: '',
};

export const sampleProduct = {
  availableClotheSizeParts: initialAvailableClotheSizeParts,
  availableSizes: initialAvailableSizes,
  brand: {
    name: 'Brand Name',
  },
  categories: [],
  categorySlugs: [],
  colors: [
    {
      hexCode: '#000000',
      id: 1,
      isActive: true,
      name: 'Black',
      sortOrder: 'N/A',
      productColorImages: [],
      tags: [],
      isImage: false,
      imageUrl: '',
    },
  ],
  description: 'Product Description',
  featuresInfoItems: ['Feature Info'],
  fiberInfoItems: ['Fiber Info'],
  hasFeaturesInfo: true,
  hasFiberInfo: true,
  hasSizeInfo: true,
  id: 0,
  imageUrl: '',
  isProductVisibleInHomePage: true,
  isProductVisibleInWebsite: true,
  metaTitle: 'Product Meta Title',
  name: 'Product Name',
  sizePricesForColored: 'Size Prices For Colored',
  sizePricesForWhite: 'Size Prices For White',
  slug: 'product-slug',
  sizesInfo: {
    XS: {
      'BODY LENGTH': 'XS Body Length',
      'BODY WIDTH': 'XS Body Width',
      'FULL BODY LENGTH': 'XS Full Body Length',
      'NECK CIRCUMFERENCE': 'XS Neck Circumference',
      'SLEEVE LENGTH': 'XS Sleeve Length',
    },
    S: {
      'BODY LENGTH': 'S Body Length',
      'BODY WIDTH': 'S Body Width',
      'FULL BODY LENGTH': 'S Full Body Length',
      'NECK CIRCUMFERENCE': 'S Neck Circumference',
      'SLEEVE LENGTH': 'S Sleeve Length',
    },
    M: {
      'BODY LENGTH': 'M Body Length',
      'BODY WIDTH': 'M Body Width',
      'FULL BODY LENGTH': 'M Full Body Length',
      'NECK CIRCUMFERENCE': 'M Neck Circumference',
      'SLEEVE LENGTH': 'M Sleeve Length',
    },
    LG: {
      'BODY LENGTH': 'LG Body Length',
      'BODY WIDTH': 'LG Body Width',
      'FULL BODY LENGTH': 'LG Full Body Length',
      'NECK CIRCUMFERENCE': 'LG Neck Circumference',
      'SLEEVE LENGTH': 'LG Sleeve Length',
    },
    XL: {
      'BODY LENGTH': 'XL Body Length',
      'BODY WIDTH': 'XL Body Width',
      'FULL BODY LENGTH': 'XL Full Body Length',
      'NECK CIRCUMFERENCE': 'XL Neck Circumference',
      'SLEEVE LENGTH': 'XL Sleeve Length',
    },
    '2XL': {
      'BODY LENGTH': '2XL Body Length',
      'BODY WIDTH': '2XL Body Width',
      'FULL BODY LENGTH': '2XL Full Body Length',
      'NECK CIRCUMFERENCE': '2XL Neck Circumference',
      'SLEEVE LENGTH': '2XL Sleeve Length',
    },
    '3XL': {
      'BODY LENGTH': '3XL Body Length',
      'BODY WIDTH': '3XL Body Width',
      'FULL BODY LENGTH': '3XL Full Body Length',
      'NECK CIRCUMFERENCE': '3XL Neck Circumference',
      'SLEEVE LENGTH': '3XL Sleeve Length',
    },
    '4XL': {
      'BODY LENGTH': '4XL Body Length',
      'BODY WIDTH': '4XL Body Width',
      'FULL BODY LENGTH': '4XL Full Body Length',
      'NECK CIRCUMFERENCE': '4XL Neck Circumference',
      'SLEEVE LENGTH': '4XL Sleeve Length',
    },
    '5XL': {
      'BODY LENGTH': '5XL Body Length',
      'BODY WIDTH': '5XL Body Width',
      'FULL BODY LENGTH': '5XL Full Body Length',
      'NECK CIRCUMFERENCE': '5XL Neck Circumference',
      'SLEEVE LENGTH': '5XL Sleeve Length',
    },
  },
  style: {
    name: 'Style Name',
  },
};

export const sampleRequestAQuoteProduct = {
  availableSizes: Object.keys(ClothingSizes).map(
    (size) => ClothingSizes[size as keyof typeof ClothingSizes]
  ),
  id: 0,
  colors: [
    {
      hexCode: '#000000',
      name: 'Black',
    },
  ],
  name: 'Product Name',
};
