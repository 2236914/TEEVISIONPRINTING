'use client';
import React from 'react';
import Link from 'next/link';

const ProductItemContainer = ({
  children,
  productSlug,
  productColors,
}: {
  children: React.ReactNode;
  productColors: Array<{
    hexCode: string;
    name: string;
  }>;
  productSlug: string;
}) => {
  if (productColors.length === 0) return children;

  return (
    <div className="h-fit">
      <Link
        className="group w-full h-full block hover:bg-white hover:shadow-lg hover:rounded-md transition-all"
        href={`/products/view/${productSlug}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default ProductItemContainer;
