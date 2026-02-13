'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SideBar from '@/components/products/ProductPageBody/SideBar/SideBar';
import Filter from '@/utilities/SVGs/Filter';

type PropTypes = {
  categorySlug?: string;
};

const FilterDrawer: React.FC<PropTypes> = ({ categorySlug }) => {
  return (
    <div className="drawer xl:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex items-center h-full">
        <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
          <Filter width={24} height={24} />
        </label>
      </div>

      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <div className="drawer-side-content bg-white">
          <div className="flex items-center justify-center bg-[#1E1D1D] w-full p-4 py-6 z-20">
            <Link href="/">
              <Image
                src="/main/logo.png"
                width={170}
                height={170}
                alt="logo"
                className="w-full h-auto"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                loading="eager"
              />
            </Link>
          </div>
          <div className="p-8">
            <SideBar categorySlug={categorySlug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
