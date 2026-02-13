import React from 'react';
import type { Metadata } from 'next';

import ProductListingBody from '@/components/products/ProductListingBody/ProductListingBody';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import { fetchBrands } from '@/utilities/fetch/brand';
import {
  fetchCategories,
  fetchCategoryBySlug,
} from '@/utilities/fetch/category';
import { fetchFits } from '@/utilities/fetch/fit';
import {
  fetchMainCategoryBySlug,
  fetchVisibleMainCategories,
} from '@/utilities/fetch/main-category';
import { fetchProductItemOnListByCategory } from '@/utilities/fetch/product';

type Props = {
  params: {
    slug: string;
    subcategory: string;
  };
  searchParams?: {
    brands?: string;
    fits?: string;
    search?: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const [mainCategory, subcategory] = await Promise.all([
      fetchMainCategoryBySlug(params.slug),
      fetchCategoryBySlug(params.subcategory),
    ]);

    return {
      title: `${subcategory.name} - ${mainCategory.name} | TeeVisionPrinting`,
      description:
        subcategory.description ||
        `Shop ${subcategory.name} at TeeVisionPrinting in Philadelphia. Custom printing, fast service, quality products.`,
      keywords:
        't-shirts, printing, custom, design, shirts, apparel, clothing, philadelphia',
      alternates: {
        canonical: `https://www.teevisionprinting.com/products/category/${params.slug}/${params.subcategory}`,
      },
      openGraph: {
        title: `${subcategory.name} - ${mainCategory.name}`,
        description:
          subcategory.description ||
          `Shop ${subcategory.name} at TeeVisionPrinting`,
        type: 'website',
      },
    };
  } catch (error) {
    return {
      title: 'Products - TeeVisionPrinting',
      description: 'Browse our custom printing products',
    };
  }
}

// Helper function to extract fit slugs (optimized)
const extractFitSlugs = (fitData: any): string[] => {
  if (!fitData) return [];

  if (Array.isArray(fitData)) {
    return fitData.filter(Boolean);
  }

  if (typeof fitData === 'string') {
    const trimmed = fitData.trim();
    if (!trimmed) return [];

    // Single delimiter check
    const delimiter = trimmed.includes(',')
      ? ','
      : trimmed.includes('|')
        ? '|'
        : null;
    return delimiter
      ? trimmed
          .split(delimiter)
          .map((slug) => slug.trim())
          .filter(Boolean)
      : [trimmed];
  }

  return [];
};

// Optimized searchable content creation
const createSearchableContent = (product: any): string => {
  const parts = [
    product.name,
    product.colors.map((color: any) => color.name).join(' '),
    product.brandSlug.replace(/-/g, ' '),
    product.categorySlugs.join(' ').replace(/-/g, ' '),
    product.tags.join(' '),
    product.fitSlugs.join(' ').replace(/-/g, ' '),
  ];

  return parts.join(' ').toLowerCase();
};

// Constants
const INITIAL_LOAD = 50;

const ProductListingPage = async ({ params, searchParams }: Props) => {
  try {
    // Parse search params once
    const selectedBrands =
      searchParams?.brands?.split(',').filter(Boolean) || [];
    const selectedFits = searchParams?.fits?.split(',').filter(Boolean) || [];
    const searchQuery = searchParams?.search?.trim() || '';
    const searchQueryLower = searchQuery.toLowerCase();

    // Fetch critical data first (for category/nav), then less critical data
    const [mainCategory, subcategory, allProducts] = await Promise.all([
      fetchMainCategoryBySlug(params.slug),
      fetchCategoryBySlug(params.subcategory),
      fetchProductItemOnListByCategory(params.subcategory),
    ]);

    // Fetch remaining data in parallel
    const [allMainCategories, allCategories, brands, fits] = await Promise.all([
      fetchVisibleMainCategories(),
      fetchCategories(),
      fetchBrands(),
      fetchFits(),
    ]);

    // Filter subcategories once
    const subcategories = allCategories.filter(
      (cat) =>
        cat.mainCategoryId === mainCategory.id &&
        cat.isActive &&
        cat.isVisibleOnWebsite
    );

    // Filter products for this subcategory only
    const categoryProducts = allProducts.filter((product) =>
      product.categorySlugs.includes(params.subcategory)
    );

    // Pre-process products ONCE with all transformations
    const processedProducts = categoryProducts.map((product) => {
      const rawProduct = product as any;
      const fitSlugs = extractFitSlugs(
        rawProduct.fitSlugs || rawProduct.fitSlug
      );

      return {
        ...product,
        fitSlugs,
        searchableContent: createSearchableContent({
          ...product,
          fitSlugs,
        }),
      };
    });

    // Single-pass filtering with early exits
    const hasSearch = searchQuery.length > 0;
    const hasBrandFilter = selectedBrands.length > 0;
    const hasFitFilter = selectedFits.length > 0;
    const selectedFitsSet = hasFitFilter ? new Set(selectedFits) : null;

    const serverFilteredProducts = processedProducts.filter((product) => {
      // Search filter (most selective, check first)
      if (hasSearch && !product.searchableContent.includes(searchQueryLower)) {
        return false;
      }

      // Brand filter
      if (hasBrandFilter && !selectedBrands.includes(product.brandSlug)) {
        return false;
      }

      // Fit filter
      if (
        hasFitFilter &&
        !product.fitSlugs.some((slug) => selectedFitsSet!.has(slug))
      ) {
        return false;
      }

      return true;
    });

    // Calculate available filters in a SINGLE PASS
    const availableBrandSlugs = new Set<string>();
    const availableFitCounts = new Map<string, number>();

    processedProducts.forEach((product) => {
      // For brands: exclude brand filter but apply others
      if (
        (!hasSearch || product.searchableContent.includes(searchQueryLower)) &&
        (!hasFitFilter ||
          product.fitSlugs.some((slug) => selectedFitsSet!.has(slug)))
      ) {
        availableBrandSlugs.add(product.brandSlug);
      }

      // For fits: exclude fit filter but apply others
      if (
        (!hasSearch || product.searchableContent.includes(searchQueryLower)) &&
        (!hasBrandFilter || selectedBrands.includes(product.brandSlug))
      ) {
        product.fitSlugs.forEach((slug) => {
          if (slug) {
            availableFitCounts.set(
              slug,
              (availableFitCounts.get(slug) || 0) + 1
            );
          }
        });
      }
    });

    // Filter and sort brands/fits
    const availableBrands = brands.filter((brand) =>
      availableBrandSlugs.has(brand.slug)
    );
    const availableFits = fits
      .filter(
        (fit) =>
          availableFitCounts.has(fit.slug) &&
          availableFitCounts.get(fit.slug)! > 0
      )
      .sort((fitA, fitB) => {
        const countA = availableFitCounts.get(fitA.slug) || 0;
        const countB = availableFitCounts.get(fitB.slug) || 0;

        // Both available or both unavailable - sort alphabetically
        if ((countA > 0 && countB > 0) || (countA === 0 && countB === 0)) {
          return fitA.name.localeCompare(fitB.name);
        }

        // One available, one not - available first
        return countB > 0 ? 1 : -1;
      });

    // Limit initial payload
    const productsToRender = serverFilteredProducts.slice(0, INITIAL_LOAD);

    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="absolute z-[60] w-full">
          <MainNavigation />
        </div>

        <main className="mt-[5rem] xl:mt-[5rem] min-h-screen w-full">
          <ProductListingBody
            mainCategory={mainCategory}
            subcategory={subcategory}
            subcategories={subcategories}
            products={productsToRender}
            allMainCategories={allMainCategories}
            brands={availableBrands}
            fits={availableFits}
            initialBrandFilter={selectedBrands}
            initialFitFilter={selectedFits}
            initialSearchQuery={searchQuery}
            hasMore={serverFilteredProducts.length > INITIAL_LOAD}
          />
        </main>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error loading product listing:', error);

    return (
      <div className="flex flex-col min-h-screen">
        <div className="absolute z-[60] w-full">
          <MainNavigation />
        </div>
        <main className="mt-[5rem] xl:mt-[5rem] min-h-screen w-full">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Products Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The products you&apos;re looking for don&apos;t exist or have been
              moved.
            </p>
            <a
              href="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse All Categories
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
};

export default ProductListingPage;
