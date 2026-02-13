'use client';
import React, { createContext, useContext } from 'react';

import type { Color } from '@/utilities/types/shared.types';
export const ProductViewContext = createContext({
  currentColor: {
    hexCode: '#009AA8',
    id: 0,
    name: 'White',
    isImage: false,
    imageUrl: '',
  },
  colorOnChange: (_color: Color) => {},
  searchProduct: '',
  searchProductOnChange: (_search: string) => {},
  branchIds: '',
  brandIdsOnChange: (_brandIds: string) => {},
});

export function ProductViewProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentColor, setCurrentColor] = React.useState<Color>({
    hexCode: '#009AA8',
    id: 0,
    name: 'White',
    isActive: true,
    sortOrder: 'N/A',
    productColorImages: [],
    tags: [],
    isImage: false,
    imageUrl: '',
  });

  const [searchProduct, setSearchProduct] = React.useState<string>('');
  const [branchIds, setBranchIds] = React.useState<string>('');

  const colorOnChange = (color: Color) => {
    setCurrentColor(color);
  };

  const searchProductOnChange = (search: string) => {
    setSearchProduct(search);
  };

  const brandIdsOnChange = (brandIds: string) => {
    setBranchIds(brandIds);
  };

  return (
    <ProductViewContext.Provider
      value={{
        currentColor,
        colorOnChange,
        searchProduct,
        searchProductOnChange,
        branchIds,
        brandIdsOnChange,
      }}
    >
      {children}
    </ProductViewContext.Provider>
  );
}

export function useProductView() {
  return useContext(ProductViewContext);
}
