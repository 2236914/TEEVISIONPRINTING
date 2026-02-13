import React from 'react';

import ProductListSearchWrapper from '@/components/products/ProductPageBody/ProductList/ProductListSearchWrapper';

import SideBar from '@/components/products/ProductPageBody/SideBar/SideBar';
import type { ProductItemOnList } from '@/utilities/types/shared.types';

type PropTypes = {
  products: Array<ProductItemOnList>;
  categoryName?: string;
  categorySlug?: string;
};

const ProductPageBody: React.FC<PropTypes> = ({
  products,
  categorySlug,
  categoryName,
}) => {
  return (
    <div className="flex justify-center">
      {categoryName && <h1 className="sr-only">{categoryName}</h1>}

      <div className="pl-0 pr-0 bg-white w-screen h-screen flex flex-row overflow-hidden">
        <div className="hidden xl:block">
          {/* Removed the duplicate logo section */}
          <div className="h-full pl-4">
            <SideBar categorySlug={categorySlug} />
          </div>
        </div>
        <div className="relative flex flex-col gap-2 w-full bg-white">
          <ProductListSearchWrapper products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductPageBody;