'use client';

import React, { useEffect, useState } from 'react';

import { Index, type Index as IndexType } from 'flexsearch';

import FilterDrawer from '@/components/products/ProductPageBody/FilterDrawer';
import ProductList from '@/components/products/ProductPageBody/ProductList/ProductList';
import ProductSearch from '@/components/products/ProductPageBody/ProductSearch';
import type { ProductItemOnList } from '@/utilities/types/shared.types';

type PropTypes = {
  products: Array<ProductItemOnList>;
};

const ProductListSearchWrapper: React.FC<PropTypes> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');

  const [index, setIndex] = useState<IndexType | null>(null);

  useEffect(() => {
    const newIndex = new Index({
      preset: 'performance',
      tokenize: 'forward',
    });

    products.map((product) => {
      newIndex.add(product.id, product.content || '');
    });
    setIndex(newIndex);
  }, [products]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
    }

    if (index && searchTerm) {
      const searchResults = index.search(searchTerm);

      const filteredProducts = products.filter((product) => {
        return searchResults.includes(product.id);
      });
      setFilteredProducts(filteredProducts);
    }
  }, [index, products, searchTerm]);

  return (
    <div
      className={`h-full w-full relative flex flex-col gap-8 overflow-y-auto pb-12 pt-[2rem] bg-white z-10`}
    >
      <div className="sticky left-0 pt-2 px-4 z-50 w-full">
        <div className="flex z-50 bg-white rounded p-4 shadow-md w-full">
          <FilterDrawer />
          <ProductSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductListSearchWrapper;