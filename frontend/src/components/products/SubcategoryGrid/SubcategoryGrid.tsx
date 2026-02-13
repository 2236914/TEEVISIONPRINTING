// components/products/SubcategoryGrid/SubcategoryGrid.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { Category } from '@/utilities/types/shared.types';

type PropTypes = {
  mainCategoryName: string;
  mainCategorySlug: string;
  subcategories: Array<Category>;
};

const SubcategoryGrid: React.FC<PropTypes> = ({ 
  mainCategoryName,
  mainCategorySlug,
  subcategories
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {mainCategoryName}
        </h1>
        <p className="text-gray-600">
          Choose a subcategory to view products
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {subcategories.map((subcategory) => (
          <Link
            key={subcategory.id}
            href={`/products/category/${mainCategorySlug}/${subcategory.slug}`}
            className="group block"
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
                <h2 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {subcategory.name}
                </h2>
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

      {subcategories.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-500 text-lg mb-4">
            No subcategories available in this category.
          </div>
          <Link href="/products" className="text-blue-600 hover:underline">
            ← Back to all categories
          </Link>
        </div>
      )}
    </div>
  );
};

export default SubcategoryGrid;