import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { Category, MainCategory } from '@/utilities/types/shared.types';

type PropTypes = {
  mainCategory: MainCategory;
  selectedSubcategorySlug: string;
  subcategories: Array<Category>;
};

const MainCategorySidebar: React.FC<PropTypes> = ({
  mainCategory,
  subcategories,
  selectedSubcategorySlug,
}) => {
  return (
    <div className="w-80 h-full bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        {/* Main Category Header */}
        <div className="mb-6">
          {mainCategory.imageUrl && (
            <div className="mb-4">
              <Image
                src={mainCategory.imageUrl}
                alt={mainCategory.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg border"
              />
            </div>
          )}
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {mainCategory.name}
          </h2>
          
          {mainCategory.description && (
            <p className="text-gray-600 text-sm mb-4">
              {mainCategory.description}
            </p>
          )}

          {/* "All Products" link */}
          <Link
            href={`/products/category/${mainCategory.slug}`}
            className={`block w-full text-left p-3 rounded-lg transition-colors duration-200 mb-2 ${
              !selectedSubcategorySlug
                ? 'bg-blue-100 text-blue-800 border border-blue-200 font-medium'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
            }`}
          >
            <div className="font-medium">All {mainCategory.name}</div>
            <div className="text-xs text-gray-500 mt-1">
              View all products in this category
            </div>
          </Link>
        </div>

        {/* Subcategories Filter */}
        {subcategories.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter by Type
            </h3>
            
            <div className="space-y-2">
              {subcategories.map((subcategory) => (
                <Link
                  key={subcategory.id}
                  href={`/products/category/${mainCategory.slug}?subcategory=${subcategory.slug}`}
                  className={`block w-full text-left p-3 rounded-lg transition-colors duration-200 border ${
                    selectedSubcategorySlug === subcategory.slug
                      ? 'bg-blue-100 text-blue-800 border-blue-200 font-medium'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{subcategory.name}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {subcategories.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-yellow-800 mb-1">No Subcategories</h3>
            <p className="text-xs text-yellow-700">
              This main category doesn&apos;t have any subcategories assigned yet.
            </p>
          </div>
        )}

        {/* Back to all categories link */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            href="/products"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2 rounded hover:bg-gray-50"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Categories
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-900 mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Need Help?
          </h4>
          <p className="text-sm text-blue-800 mb-3">
            Can&apos;t find what you&apos;re looking for? Our team is here to help with your custom printing needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm text-blue-700 hover:text-blue-900 font-medium"
          >
            Contact Us 
            <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainCategorySidebar;