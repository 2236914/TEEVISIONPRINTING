// components/products/MainCategoryNavigation/MainCategoryNavigation.tsx
'use client';

import React from 'react';
import Link from 'next/link';

import type { MainCategory } from '@/utilities/types/shared.types';

type PropTypes = {
  currentSlug: string;
  mainCategories: Array<MainCategory>;
};

const MainCategoryNavigation: React.FC<PropTypes> = ({ 
  mainCategories, 
  currentSlug 
}) => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide">
          {mainCategories.map((category) => {
            const isActive = category.slug === currentSlug;
            
            return (
              <Link
                key={category.id}
                href={`/products/category/${category.slug}`}
                className={`
                  px-6 py-4 text-sm font-medium whitespace-nowrap
                  border-b-2 transition-colors duration-200
                  ${isActive 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }
                `}
              >
                {category.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MainCategoryNavigation;