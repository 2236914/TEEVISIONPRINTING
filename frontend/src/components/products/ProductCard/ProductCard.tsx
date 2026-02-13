import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { ProductItemOnList } from '@/utilities/types/shared.types';

type PropTypes = {
  product: ProductItemOnList;
};

const ProductCard: React.FC<PropTypes> = ({ product }) => {
  // Get image URL from product or first color
  // Adjust this based on your actual data structure
  const getImageUrl = () => {
    // Check if product has a direct image property
    if ((product as any).image) {
      return (product as any).image;
    }

    // Check if first color has an image
    const firstColor = product.colors[0];
    if ((firstColor as any).image) {
      return (firstColor as any).image;
    }

    // Check if product has imageUrl
    if ((product as any).imageUrl) {
      return (product as any).imageUrl;
    }

    // Fallback to placeholder
    return '/placeholder-product.png';
  };

  const imageUrl = getImageUrl();

  // Product detail URL
  const productUrl = `/products/view/${product.slug}`;

  return (
    <Link
      href={productUrl}
      className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
      prefetch={false}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
          quality={75}
        />

        {/* Color indicator if multiple colors */}
        {product.totalNumberOfColors > 1 && (
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
            +{product.totalNumberOfColors} colors
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4">
        {/* Brand */}
        <p className="text-xs text-gray-500 uppercase tracking-wide truncate">
          {product.brandSlug.replace(/-/g, ' ')}
        </p>

        {/* Product Name */}
        <h3 className="text-sm sm:text-base font-medium text-gray-900 mt-1 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
          {product.name}
        </h3>

        {/* Price (if available) */}
        {(product as any).price && (
          <p className="text-sm sm:text-base font-semibold text-gray-900 mt-2">
            ${(product as any).price.toFixed(2)}
          </p>
        )}

        {/* Colors Preview */}
        {product.totalNumberOfColors > 0 && (
          <div className="flex gap-1 mt-2 flex-wrap">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border border-gray-300"
                style={{
                  backgroundColor:
                    (color as any).hexCode || (color as any).hex || '#ccc',
                }}
                title={color.name}
              />
            ))}
            {product.totalNumberOfColors > 5 && (
              <div className="w-8 h-5 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center text-[0.7rem] text-gray-600">
                +{product.totalNumberOfColors - 5}
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default memo(ProductCard);
