import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { MainCategory } from '@/utilities/types/shared.types';

type PropTypes = {
  mainCategories: Array<MainCategory>;
};

const MainCategoriesGrid: React.FC<PropTypes> = ({ mainCategories }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Shop by Category
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose from our wide selection of custom apparel and accessories. 
          Each category offers quality products perfect for your custom printing needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {mainCategories.map((mainCategory) => (
          <Link
            key={mainCategory.id}
            href={`/products/category/${mainCategory.slug}`}
            className="group block"
          >
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
              <div className="aspect-square relative overflow-hidden">
                {mainCategory.imageUrl ? (
                  <Image
                    src={mainCategory.imageUrl}
                    alt={mainCategory.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-gray-500 text-6xl font-bold">
                      {mainCategory.name}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                
                {/* Overlay text for better readability */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h2 className="text-white text-xl font-bold group-hover:text-blue-200 transition-colors duration-300">
                    {mainCategory.name}
                  </h2>
                </div>
              </div>
              
              <div className="p-6">
                {mainCategory.description && (
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {mainCategory.description}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
                    <span className="text-sm font-medium">Shop Now</span>
                    <svg 
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {mainCategories.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-500 text-lg mb-4">
            No product categories available at the moment.
          </div>
          <p className="text-gray-400">
            Check back soon for our latest product categories!
          </p>
        </div>
      )}
    </div>
  );
};

export default MainCategoriesGrid;