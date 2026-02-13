'use client';

import React from 'react';
import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import SideBarCheckboxes from '@/components/products/ProductPageBody/SideBar/SideBarCheckboxes';
import SideBarItems from '@/components/products/ProductPageBody/SideBar/SideBarItems';
import { fetchBrands } from '@/utilities/fetch/brand';
import { fetchCategories } from '@/utilities/fetch/category';
import Roboto from '@/utilities/fonts/Roboto';
import type { Brand, Category } from '@/utilities/types/shared.types';

type PropTypes = {
  categorySlug?: string;
};

const LinkComponent = ({
  children,
  category,
  categorySlug,
}: {
  category: { id: number; name: string; slug: string };
  children: React.ReactNode;
  categorySlug?: string;
}) => {
  if (categorySlug === String(category.slug)) {
    return (
      <Link
        className="group transition duration-300"
        href={`/products`}
        key={category.id}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      className="group transition duration-300"
      href={`/products/category/${category.slug}`}
      key={category.id}
    >
      {children}
    </Link>
  );
};

const SideBar: React.FC<PropTypes> = ({ categorySlug }) => {
  const categoryQuery = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
  });

  const brandQuery = useQuery<Brand[]>({
    queryKey: ['brands'],
    queryFn: () => fetchBrands(),
  });

  const categories = categoryQuery.data?.filter(
    (category) => category.isVisibleOnWebsite
  );
  const brands = brandQuery.data?.filter((brand) => brand.isVisibleOnWebsite);

  if (!categories || !brands) {
    return (
      <div
        className={`h-full w-[15rem] xl:pt-4 pb-4 pr-4 xl:border-r-2 border-borderColor overflow-y-auto`}
      />
    );
  }

  return (
    <div
      className={`h-full w-[15rem] xl:pt-4 pb-4 pr-4 xl:border-r-2 border-borderColor overflow-y-auto`}
    >
      <div className="pb-[15rem]">
        <div className="flex flex-col h-full">
          {categories.map((category) => (
            <LinkComponent
              key={category.id}
              category={category}
              categorySlug={categorySlug}
            >
              <p
                key={category.id}
                className={`${Roboto} w-fit text-[1.3rem] font-bold ${categorySlug === String(category.slug) && 'text-primaryT font-bold'}`}
              >
                {category.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryMinimalist" />
              </p>
            </LinkComponent>
          ))}
        </div>
        <SideBarItems title="Brands">
          <SideBarCheckboxes items={brands} />
        </SideBarItems>
      </div>
    </div>
  );
};

export default SideBar;
