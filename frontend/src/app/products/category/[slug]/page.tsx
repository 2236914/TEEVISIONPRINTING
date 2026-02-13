import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import MainCategoryNavigation from '@/components/products/MainCategoryNavigation/MainCategoryNavigation';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import { fetchCategories } from '@/utilities/fetch/category';
import {
  fetchMainCategoryBySlug,
  fetchVisibleMainCategories,
} from '@/utilities/fetch/main-category';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const mainCategorySlug = params.slug;

  try {
    const mainCategory = await fetchMainCategoryBySlug(mainCategorySlug);
    const categoryName = mainCategory.name;

    return {
      title: `${categoryName} - Custom ${categoryName} at TeeVisionPrinting Philadelphia`,
      description: `${mainCategory.description || `Design custom ${categoryName} at TeeVisionPrinting in Philadelphia. Fast service, quality prints. Get a quote!`}`,
      keywords:
        't-shirts, printing, custom, design, shirts, apparel, clothing, philadelphia',
      alternates: {
        canonical: `https://www.teevisionprinting.com/products/category/${mainCategorySlug}`,
      },
    };
  } catch (error) {
    return {
      title: 'Product Category - TeeVisionPrinting Philadelphia',
      description:
        'Browse our custom printing products at TeeVisionPrinting in Philadelphia.',
    };
  }
}

const MainCategoryPage = async ({ params }: Props) => {
  const mainCategorySlug = params.slug;

  try {
    // Fetch data in parallel for better performance
    const [currentMainCategory, allMainCategories, allCategories] =
      await Promise.all([
        fetchMainCategoryBySlug(mainCategorySlug),
        fetchVisibleMainCategories(),
        fetchCategories(),
      ]);

    // Filter subcategories for this main category
    const subcategories = allCategories.filter(
      (category) =>
        category.mainCategoryId === currentMainCategory.id &&
        category.isActive &&
        category.isVisibleOnWebsite
    );

    // Sort subcategories by sortOrder
    const sortedSubcategories = subcategories.sort((categoryA, categoryB) => {
      if (categoryA.sortOrder === 'N/A') return 1;
      if (categoryB.sortOrder === 'N/A') return -1;
      return parseInt(categoryA.sortOrder) - parseInt(categoryB.sortOrder);
    });

    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="absolute z-[60] w-full">
          <MainNavigation />
        </div>

        <main className="mt-[5rem] xl:mt-[5rem] min-h-screen w-full">
          {/* Main Category Navigation - Using existing component */}
          <MainCategoryNavigation
            mainCategories={allMainCategories}
            currentSlug={currentMainCategory.slug}
          />

          {/* Main Content */}
          <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
            {/* Category Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {currentMainCategory.name}
              </h1>
              {currentMainCategory.description && (
                <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
                  {currentMainCategory.description}
                </p>
              )}
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                {sortedSubcategories.length} categor
                {sortedSubcategories.length !== 1 ? 'ies' : 'y'}
              </p>
            </div>

            {/* Subcategories Grid */}
            {sortedSubcategories.length > 0 ? (
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
                  {sortedSubcategories.map((subcategory) => (
                    <Link
                      key={subcategory.id}
                      href={`/products/category/${mainCategorySlug}/${subcategory.slug}`}
                      prefetch={true}
                      className="group block"
                    >
                      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                        {/* Image Container - Larger aspect ratio */}
                        <div
                          className="relative overflow-hidden bg-gray-100"
                          style={{ aspectRatio: '3/4' }}
                        >
                          {subcategory.imageUrl ? (
                            <Image
                              src={subcategory.imageUrl}
                              alt={subcategory.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                              loading="lazy"
                              quality={75}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                              <div className="text-gray-400 text-5xl sm:text-6xl font-bold">
                                {subcategory.name.charAt(0)}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Category Info - Larger text */}
                        <div className="p-4 sm:p-6 text-center">
                          <h2 className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {subcategory.name}
                          </h2>
                          {subcategory.description && (
                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                              {subcategory.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 sm:py-16 bg-white rounded-lg border border-gray-200">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <p className="text-gray-500 text-base sm:text-lg mb-2 font-medium">
                  No subcategories available
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Check back later for new products
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error loading main category page:', error);

    return (
      <div className="flex flex-col min-h-screen">
        <div className="absolute z-[60] w-full">
          <MainNavigation />
        </div>
        <main className="mt-[5rem] xl:mt-[5rem] min-h-screen w-full overflow-hidden">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Category Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The category you&apos;re looking for doesn&apos;t exist or has
              been moved.
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

export default MainCategoryPage;
