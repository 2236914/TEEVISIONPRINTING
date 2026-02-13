import React from 'react';

import DesignerBody from '@/components/designer/components/Designerbody/DesignerBody';
import { sampleProduct } from '@/utilities/constants/data';
import { fetchAllProducts } from '@/utilities/fetch/product';

const DesignerBodyWrapper = async () => {
  const products = await fetchAllProducts('all', '', '');

  if (products.length === 0) {
    products.push(sampleProduct);
  }

  return (
    <div className="mt-[8.5rem] w-full h-full flex items-center justify-center">
      <DesignerBody products={products} />
    </div>
  );
};

export default DesignerBodyWrapper;
