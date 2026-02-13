import React, { memo } from 'react';

import ProductImage from '@/components/products/ProductPageBody/ProductList/ProductImage';
import ProductItemContainer from '@/components/products/ProductPageBody/ProductList/ProductItemContainer';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import type { ProductItemOnList } from '@/utilities/types/shared.types';

type PropTypes = {
  products: Array<ProductItemOnList>;
};

const ProductList: React.FC<PropTypes> = ({ products }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 1_5xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 pb-8">
        {products.map((product, index) => {
          // Prioritize first 4 images for faster LCP
          const isPriority = index < 4;
          
          return (
            <ProductItemContainer
              productSlug={product.slug}
              key={product.id}
              productColors={product.colors}
            >
              <div className="flex flex-col items-center gap-2 p-4">
                <ProductImage 
                  imageUrl={product.imageUrl} 
                  productName={product.name}
                  priority={isPriority}
                />
                <div className="text-center max-w-[17rem]">
                  <h2 className={`${MaisonNeue} text-[0.9rem] font-bold`}>
                    {product.name}
                  </h2>
                  <p className={`${Roboto} text-xs text-productPriceColor mt-2`}>
                    {product.colors.length} Color{product.colors.length !== 1 ? 's' : ''}
                  </p>
                </div>
                
                {/* Color Swatches */}
                <div className="flex gap-2">
                  {product.colors.slice(0, 7).map((color) => (
                    <div
                      key={color.hexCode}
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: color.hexCode }}
                      title={color.name}
                    />
                  ))}
                  {product.colors.length > 7 && (
                    <div className="w-4 h-4 flex justify-center items-center rounded text-center text-xs">
                      +{product.colors.length - 7}
                    </div>
                  )}
                </div>
              </div>
            </ProductItemContainer>
          );
        })}
      </div>
    </div>
  );
};

export default memo(ProductList);