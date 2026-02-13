import type {
  ClothingSizeParts,
  ClothingSizes,
  SizesInfo,
} from '@/utilities/types/AdminFormTypes';
import type { PrintType } from '@/utilities/types/PriceSettingTypes';

/* eslint-disable unused-imports/no-unused-vars */
export type Product = {
  availableClotheSizeParts: Array<{
    name: ClothingSizeParts;
    value: boolean;
  }>;
  availableSizes: Array<{
    name: ClothingSizes;
    value: boolean;
  }>;
  brand: {
    name: string;
  };
  categories: Array<string>;
  categorySlugs: string[];
  colors: Array<Color>;
  description: string;
  featuresInfoItems: string[];
  fiberInfoItems: string[];
  hasFeaturesInfo: boolean;
  hasFiberInfo: boolean;
  hasSizeInfo: boolean;
  id: number;
  imageUrl: string;
  isProductVisibleInHomePage: boolean;
  isProductVisibleInWebsite: boolean;
  metaTitle: string;
  name: string;
  sizePricesForColored: string;
  sizePricesForWhite: string;
  sizesInfo: SizesInfo;
  slug: string;
  style: {
    name: string;
  };
};

export type RequestAQuoteProduct = {
  availableSizes: Array<ClothingSizes>;
  colors: Array<{
    hexCode: string;
    name: string;
  }>;
  id: number;
  name: string;
};

export type ProductItemOnList = {
  brandSlug: string;
  categorySlugs: Array<string>;
  colors: Array<{
    hexCode: string;
    name: string;
  }>;
  content: string | null;
  fitSlug: string | string[];
  id: number;
  imageUrl: string;
  name: string;
  slug: string;
  tags: Array<string>;
  totalNumberOfColors: number;
  fitSlugs?: string[];
};

export type AdminProductItemOnList = {
  brandName: string;
  id: number;
  imageUrl: string;
  isProductVisibleInWebsite: boolean;
  name: string;
  styleName: string;
};

export interface MainCategory {
  description: string;
  id: number;
  imageUrl: string;
  isActive: boolean;
  isVisibleOnWebsite: boolean;
  name: string;
  slug: string;
  sortOrder: string;
}

export interface MainCategoryWithSubcategories {
  description: string;
  id: number;
  imageUrl: string;
  isActive: boolean;
  isVisibleOnWebsite: boolean;
  name: string;
  slug: string;
  sortOrder: string;
  subcategories: Category[];
}

// Update the existing Category interface to include main category info
export interface Category {
  id: number;
  isActive: boolean;
  isVisibleOnWebsite: boolean;
  name: string;
  slug: string;
  sortOrder: string;
  description?: string | null;
  imageAssetId?: number | null;
  imageUrl?: string | null;
  mainCategoryId?: number | null;
  mainCategoryName?: string | null;
}

export interface AddMainCategoryType {
  description: string;
  imageUrl: string;
  isActive: boolean;
  isVisibleOnWebsite: boolean;
  name: string;
  slug: string;
  sortOrder: string;
}

export type Brand = {
  id: number;
  isActive: boolean;
  isVisibleOnWebsite: boolean;
  name: string;
  slug: string;
  sortOrder: string;
};

export type Style = {
  id: number;
  isActive: boolean;
  name: string;
};

export type Color = {
  hexCode: string;
  id: number;
  imageUrl: string;
  isActive: boolean;
  isImage: boolean;
  name: string;
  productColorImages: Array<ProductColorImage>;
  sortOrder: string;
  tags: Array<string>;
};

export type PaginatedColor = {
  contents: Array<Color>;
  currentPage: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
};

export type PriceSettings = {
  adminFees: number;
  backPrintPrice: Array<PrintType>;
  frontPrintPrice: Array<PrintType>;
  maximumQuantity: number;
  minimumQuantity: number;
  numberOfHoodiePerPackage: number;
  numberOfTShirtPerPackage: number;
  pricePerHoodiePackage: number;
  pricePerTShirtPackage: number;
  setupChargePerNumberOfColors: number;
};

// long id,
// String title,
// String content,
// String author,
// LocalDateTime date,
// String imageSrc,
// Boolean isActive

export type Blog = {
  author: string;
  content: string;
  date: string;
  descriptionMetadata: string;
  id: number;
  imageSrc: string;
  isActive: boolean;
  keywordsMetadata: string;
  slug: string;
  title: string;
  titleMetadata: string;
  latestBlogs?: Array<{
    date: string;
    slug: string;
    title: string;
  }>;
};

export type ProductColorImage = {
  imageUrl: string;
  sortOrder: string;
};

export type ErrorMessage = {
  message: string;
  type: string;
};

export type ImageAsset = {
  id: number;
  imageUrl: string;
};

export enum HomePageCategory {
  LONG_SLEEVE_SHIRT = 'Long Sleeve Shirts',
  SHORT_SLEEVE = 'Short Sleeve',
  SWEATSHIRT = 'Sweatshirt',
}

export type Quote = {
  additionalNotes: string;
  artworkImageUrl: string;
  backNumberOfColors: number;
  createArtwork: boolean;
  dueDate: string;
  email: string;
  extraLargeQuantity: number;
  fiveExtraLargeQuantity: number;
  fourExtraLargeQuantity: number;
  frontNumberOfColors: number;
  fullName: string;
  hasSpecialRequest: boolean;
  id: string;
  largeQuantity: number;
  mediumQuantity: number;
  needsDesigner: boolean;
  phoneNumber: string;
  pricePerShirt: string;
  productColor: string;
  productName: string;
  smallQuantity: number;
  threeExtraLargeQuantity: number;
  totalPrice: string;
  twoExtraLargeQuantity: number;
};

export type Question = {
  companyName: string;
  email: string;
  fullName: string;
  id: string;
  inquiryDetails: string;
  phoneNumber: string;
  preferredContactMethod: string;
};

export type FetchAddResponse = {
  error: string;
  success: boolean;
};

export type Fit = {
  id: number;
  isActive: boolean;
  isVisibleOnWebsite: boolean;
  name: string;
  slug: string;
  sortOrder: string;
};
