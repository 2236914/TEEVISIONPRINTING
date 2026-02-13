import React from 'react';

import ProductListSearchWrapper from '@/components/products/ProductPageBody/ProductList/ProductListSearchWrapper';

import MainCategorySidebar from '@/components/products/MainCategoryProductsBody/MainCategorySidebar';
import MobileCategoryFilter from '@/components/products/MainCategoryProductsBody/MobileCategoryFilter';
import type { Category, MainCategory, ProductItemOnList } from '@/utilities/types/shared.types';

type PropTypes = {
  mainCategory: MainCategory;
  products: Array<ProductItemOnList>;
  selectedSubcategorySlug: string;
  subcategories: Array<Category>;
};

const MainCategoryProductsBody: React.FC<PropTypes> = ({
  mainCategory,
  subcategories,
  products,
  selectedSubcategorySlug,
}) => {
  return (
    <div className="flex justify-center">
      <div className="pl-0 pr-0 bg-white w-screen h-screen flex flex-row overflow-hidden">
        <div className="hidden xl:block">
          <div className="h-full pl-4">
            <MainCategorySidebar 
              mainCategory={mainCategory}
              subcategories={subcategories}
              selectedSubcategorySlug={selectedSubcategorySlug}
            />
          </div>
        </div>
        <div className="relative flex flex-col gap-2 w-full bg-white">
          <div className="bg-gray-50 p-6 border-b">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {mainCategory.name}
              </h1>
              {mainCategory.description && (
                <p className="text-lg text-gray-600 mb-4">
                  {mainCategory.description}
                </p>
              )}
              
              {/* Mobile subcategory filter - Now a client component */}
              <div className="xl:hidden">
                <MobileCategoryFilter
                  mainCategory={mainCategory}
                  selectedSubcategorySlug={selectedSubcategorySlug}
                  subcategories={subcategories}
                />
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span>{products.length} products found</span>
                {selectedSubcategorySlug && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Filtered by: {subcategories.find(sub => sub.slug === selectedSubcategorySlug)?.name}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <ProductListSearchWrapper products={products} />
        </div>
      </div>
    </div>
  );
};

export default MainCategoryProductsBody;