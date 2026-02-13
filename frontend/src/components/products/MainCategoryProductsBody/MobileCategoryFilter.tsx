'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import type { Category, MainCategory } from '@/utilities/types/shared.types';

interface MobileCategoryFilterProps {
  mainCategory: MainCategory;
  selectedSubcategorySlug: string;
  subcategories: Array<Category>;
}

const MobileCategoryFilter: React.FC<MobileCategoryFilterProps> = ({
  mainCategory,
  selectedSubcategorySlug,
  subcategories,
}) => {
  const router = useRouter();

  const handleSubcategoryChange = (subcategorySlug: string) => {
    const baseUrl = `/products/category/${mainCategory.slug}`;
    const newUrl = subcategorySlug ? `${baseUrl}?subcategory=${subcategorySlug}` : baseUrl;
    router.push(newUrl);
  };

  return (
    <select 
      className="select select-bordered w-full max-w-xs"
      value={selectedSubcategorySlug}
      onChange={(event) => handleSubcategoryChange(event.target.value)}
    >
      <option value="">All {mainCategory.name}</option>
      {subcategories.map((subcategory) => (
        <option key={subcategory.id} value={subcategory.slug}>
          {subcategory.name}
        </option>
      ))}
    </select>
  );
};

export default MobileCategoryFilter;