import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { MainCategoryWithSubcategories } from '@/utilities/types/shared.types';

type PropTypes = {
  categoriesGroupedByMain: Array<MainCategoryWithSubcategories>;
};

const ProductsPageClient: React.FC<PropTypes> = ({
  categoriesGroupedByMain,
}) => {
  return (
    <div className="w-full">
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            BROWSE OUR PRODUCTS
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover high-quality apparel and accessories perfect for custom
            screen printing. Whether you need t-shirts, hoodies, tote bags, or
            hats for your team, event, or business—we deliver exceptional prints
            with fast turnaround times. Let&apos;s bring your vision to life!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {categoriesGroupedByMain.length > 0 ? (
          <div className="space-y-16">
            {categoriesGroupedByMain.map((mainCategory) => (
              <div key={mainCategory.id} className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {mainCategory.name}
                  </h2>
                  {mainCategory.description && (
                    <p className="text-gray-600">{mainCategory.description}</p>
                  )}
                </div>

                {mainCategory.subcategories.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-6">
                    {mainCategory.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.id}
                        href={`/products/category/${mainCategory.slug}/${subcategory.slug}`}
                        className="group block w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-19.2px)]"
                      >
                        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                          <div className="aspect-square relative overflow-hidden bg-gray-100">
                            {subcategory.imageUrl ? (
                              <Image
                                src={subcategory.imageUrl}
                                alt={subcategory.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="text-gray-400 text-4xl font-bold">
                                  {subcategory.name.charAt(0)}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="p-4 text-center">
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {subcategory.name}
                            </h3>
                            {subcategory.description && (
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {subcategory.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No subcategories available
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              No Categories Available
            </h2>
            <p className="text-lg text-gray-600">
              Please check back soon for our product categories!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPageClient;
