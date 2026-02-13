'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Pagination from '@/components/main/firstSection/components/RightSection/components/pagination/Pagination';
import ProductCard from '@/components/main/secondSection/components/ProductCard/ProductCard';
import ProductTabs from '@/components/main/secondSection/components/ProductTabs';
import ProductTabsMobile from '@/components/main/secondSection/components/ProductTabsMobile/ProductTabsMobile';
import YellowUnderline from '@/components/main/secondSection/components/YellowUnderline';
import PrimaryButton from '@/components/shared/PrimaryButton';
import Termina from '@/utilities/fonts/Termina/Termina';
import LeftArrow from '@/utilities/SVGs/LeftArrow';
import RightArrow from '@/utilities/SVGs/RightArrow';
import type { Product } from '@/utilities/types/shared.types';

type FeatureProductsSPDTypes = {
  homepageLongSleeveShirtProducts: Array<Product>;
  homepageSweatshirtProducts: Array<Product>;
  homepageTshirtProducts: Array<Product>;
};

const PRODUCT_LIMIT = 4;

const FeatureProductsSPD: React.FC<FeatureProductsSPDTypes> = ({
  homepageTshirtProducts,
  homepageSweatshirtProducts,
  homepageLongSleeveShirtProducts,
}) => {
  const [numberOfProductsIn1Page, setNumberOfProductsIn1Page] = useState(8);
  const [tabSelected, setTabSelected] = React.useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  // This effect determines how many product cards to show based on screen size.
  useEffect(() => {
    const updateNumberOfProducts = () => {
      const newCount = window.matchMedia('(min-width: 1025px)').matches ? 8 : 4;
      setNumberOfProductsIn1Page(newCount);
    };

    updateNumberOfProducts();
    window.addEventListener('resize', updateNumberOfProducts);

    return () => {
      window.removeEventListener('resize', updateNumberOfProducts);
    };
  }, []);

  // Memoize the product list based on the selected tab and apply the limit.
  const productsBasedOnTab = useMemo(() => {
    let selectedProducts: Product[] = [];
    if (tabSelected === 0) {
      selectedProducts = homepageTshirtProducts;
    } else if (tabSelected === 1) {
      selectedProducts = homepageSweatshirtProducts;
    } else {
      selectedProducts = homepageLongSleeveShirtProducts;
    }

    // --- CHANGE 2: Sliced the array to respect the PRODUCT_LIMIT. ---
    return selectedProducts.slice(0, PRODUCT_LIMIT);
  }, [
    tabSelected,
    homepageTshirtProducts,
    homepageSweatshirtProducts,
    homepageLongSleeveShirtProducts,
  ]);

  // Memoize the number of pagination dots based on the limited product list.
  const numberOfPaginationDots = useMemo(
    () => Math.ceil(productsBasedOnTab.length / numberOfProductsIn1Page),
    [productsBasedOnTab.length, numberOfProductsIn1Page]
  );

  // Memoize the slice of products to display for the current page.
  const currentProducts = useMemo(() => {
    const startIndex = paginationIndex * numberOfProductsIn1Page;
    const endIndex = startIndex + numberOfProductsIn1Page;
    return productsBasedOnTab.slice(startIndex, endIndex);
  }, [paginationIndex, numberOfProductsIn1Page, productsBasedOnTab]);

  const handleTabChange = useCallback((tab: number) => {
    setTabSelected(tab);
    setPaginationIndex(0); // Reset pagination when tab changes
  }, []);

  const onRightArrowClick = useCallback(() => {
    const nextIndex = paginationIndex + 1;
    setPaginationIndex(nextIndex >= numberOfPaginationDots ? 0 : nextIndex);
  }, [paginationIndex, numberOfPaginationDots]);

  const onLeftArrowClick = useCallback(() => {
    const prevIndex = paginationIndex - 1;
    setPaginationIndex(prevIndex < 0 ? numberOfPaginationDots - 1 : prevIndex);
  }, [paginationIndex, numberOfPaginationDots]);

  return (
    <section className="relative flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute top-0 w-full h-1/2 bg-darkGrey" />
      <div className="absolute bottom-0 w-full h-1/2 bg-white" />

      <div className="flex flex-col items-center w-full z-10">
        {/* Top Section (Header) */}
        <div className="w-full flex flex-col items-center bg-darkGrey">
          <div className="flex flex-col gap-4 xl:flex-row justify-between items-start p-8 md:pt-16 xl:pt-24 max-w-[90rem] w-full">
            <div className="flex flex-col gap-2 xl:gap-4">
              <h2
                className={`${Termina} font-black text-hero-sm md:text-hero-md xl:text-hero-xl 1_5xl:text-hero-1_5xl text-[#FFC700] leading-none`}
              >
                FEATURED
              </h2>
              <h2
                className={`${Termina} font-black text-hero-sm md:text-hero-md xl:text-text-hero-xl 1_5xl:text-hero-1_5xl text-white leading-none`}
              >
                SCREEN PRINTING
              </h2>
              {/* Responsive Underlines */}
              <div className="xl:block hidden">
                <YellowUnderline width={380} className="w-[50%]" />
              </div>
              <div className="md:hidden block">
                <YellowUnderline width={135} />
              </div>
              <div className="hidden md:block xl:hidden">
                <YellowUnderline width={250} />
              </div>
            </div>
            <div className="flex flex-col xl:w-[30rem] gap-8 xl:items-end">
              <p className="text-white xl:text-right text-md md:text-2xl xl:text-[1rem] 1_5xl:text-lg">
                Browse our feature works to see how we turn ideas into prints
                that stand out — wash after wash, wear after wear.
              </p>
              <PrimaryButton fullwidth isLink link="/products">
                VIEW OUR FULL CATALOG
              </PrimaryButton>
            </div>
          </div>
        </div>
        {/* Product Tabs (Desktop and Mobile) */}
        <div className="hidden xl:block w-full">
          <ProductTabs
            handleTabChange={handleTabChange}
            tabSelected={tabSelected}
          />
        </div>
        <div className="w-full xl:hidden">
          <ProductTabsMobile
            handleTabChange={handleTabChange}
            tabSelected={tabSelected}
          />
        </div>

        <div className="w-full bg-white py-8 pb-16 flex flex-col items-center justify-center pt-8 drop-shadow-secondSectionTabBody rounded-2xl rounded-tl-none z-30">
          <div className="w-full xl:max-w-[90rem] grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 px-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination Controls */}
          {numberOfPaginationDots > 1 && (
            <div className="flex gap-4 mt-8">
              <button
                aria-label="Previous slide"
                onClick={onLeftArrowClick}
                className={`flex items-center justify-center rounded-full border-2 border-black w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] xl:h-[2.3rem] xl:w-[2.3rem] bg-black p-[0.3rem] pr-[0.5rem] md:p-[1rem] md:pr-[1.2rem] xl:pr-[0.5rem] xl:p-[0.4rem]`}
              >
                <LeftArrow
                  color={`#FFFFFF`}
                  width={26}
                  height={18}
                  className="w-full h-full"
                />
              </button>
              <div className="flex gap-2 items-center">
                {Array.from({ length: numberOfPaginationDots }).map(
                  (_item, index) => (
                    <Pagination
                      key={index}
                      isActive={index === paginationIndex}
                    />
                  )
                )}
              </div>
              <button
                aria-label="Next slide"
                onClick={onRightArrowClick}
                className={`flex items-center justify-center rounded-full border-2 border-black w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] xl:h-[2.3rem] xl:w-[2.3rem] bg-black p-[0.3rem] pl-[0.5rem] md:p-[1rem] md:pl-[1.2rem] xl:pl-[0.5rem] xl:p-[0.4rem]`}
              >
                <RightArrow
                  color={`#FFFFFF`}
                  width={26}
                  height={18}
                  className="w-full h-full"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(FeatureProductsSPD);
