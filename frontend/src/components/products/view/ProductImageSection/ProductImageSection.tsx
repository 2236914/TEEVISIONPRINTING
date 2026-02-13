import React from 'react';
import dynamic from 'next/dynamic';

import type { Color } from '@/utilities/types/shared.types';

// Lazy load the ProductViewImage component since images might be heavy
const ProductViewImage = dynamic(
  () => import('@/components/products/view/ProductImageSection/ProductViewImage'),
  {
    loading: () => (
      <div className="w-full aspect-square bg-gray-200 animate-pulse rounded-lg" />
    ),
    ssr: true, // Keep SSR for SEO
  }
);

type PropTypes = {
  productColors: Array<Color>;
};

const ProductImageSection: React.FC<PropTypes> = ({ productColors }) => {
  return <ProductViewImage productColors={productColors} />;
};

export default ProductImageSection;