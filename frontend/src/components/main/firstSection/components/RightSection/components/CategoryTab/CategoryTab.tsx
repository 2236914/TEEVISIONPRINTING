'use client';

import React from 'react';

// eslint-disable-next-line no-restricted-imports
import './CategoryTab.css';

import CategoryTabMedium from '@/components/main/firstSection/components/RightSection/components/CategoryTab/components/CategoryTabMedium/CategoryTabMedium';
import Pagination from '@/components/main/firstSection/components/RightSection/components/pagination/Pagination';
import SecondaryButton from '@/components/shared/SecondaryButton';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import LeftArrow from '@/utilities/SVGs/LeftArrow';
import RightArrow from '@/utilities/SVGs/RightArrow';

const getDataBasedOnTab = (tabSelected: number) => {
  switch (tabSelected) {
    case 0:
      return {
        content:
          'Basic and premium tees that will never fail you whether it’s birthdays, giveaways or events.',
        buttonText: 'VIEW ALL T-SHIRTS',
        buttonHref: '/products/category/short-sleeve',
      };
    case 1:
      return {
        content:
          'Made only from the best of the best, our sweatshirts provide unmatched warmth, and durability regardless of any season.',
        buttonText: 'VIEW ALL SWEATSHIRTS',
        buttonHref: '/products/category/long-sleeve',
      };
    case 2:
      return {
        content:
          'Premium comfort, perfect fit. Our hoodies are designed for effortless style leaving that lasting impression anywhere you go.',
        buttonText: 'VIEW ALL HOODIES',
        buttonHref: '/products/category/hoodie',
      };
    default:
      return {
        content:
          'Basic and premium tees that will never fail you whether it’s birthdays, giveaways or events.',
        buttonText: 'VIEW ALL T-SHIRTS',
        buttonHref: '/products/category/short-sleeve',
      };
  }
};

type PropTypes = {
  carouselImagesLength: number;
  currentSlide: number;
  handleTabChange: (tab: number) => void;
  onLeftArrowClick: () => void;
  onRightArrowClick: () => void;
};

const CategoryTab: React.FC<PropTypes> = ({
  onLeftArrowClick,
  onRightArrowClick,
  currentSlide,
  carouselImagesLength,
  handleTabChange,
}) => {
  const tabData = getDataBasedOnTab(currentSlide);
  const tabContents = tabData.content;
  const buttonText = tabData.buttonText;
  const buttonHref = tabData.buttonHref;

  return (
    <>
      <div className="hidden xl:flex flex-col">
        <div className="flex">
          <div
            className={`relative w-1/3 h-[3rem] ${currentSlide === 0 ? 'z-50' : 'z-10'} `}
          >
            <div
              className={`category-tab__trapezoid-parent absolute w-full h-full`}
            >
              <svg
                width="250"
                height="84"
                viewBox="0 0 449 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-[0.7rem] 2xl:-top-4 xl:w-[12rem] 1_5xl:w-[14rem] 2xl:w-[15.7rem]"
              >
                <path
                  d="M388.545 10.3399L449 84H0V28.2947C0 12.668 12.6629 0 28.2835 0H366.686C375.152 0 383.173 3.79403 388.545 10.3399Z"
                  fill="white"
                />
              </svg>

              <button
                type="button"
                className="w-full h-full absolute z-10 flex items-center justify-center"
                onClick={() => handleTabChange(0)}
              >
                <p
                  className={`${MaisonNeue} font-extrabold text-nestedTabs xl:text-nestedTabs-xl 1_5xl:text-nestedTabs-1_5xl pt-[0.9rem] 2xl:pt-[0.3rem]`}
                >
                  T-SHIRTS
                </p>
              </button>
            </div>
            <div />
          </div>
          <div
            className={`relative w-1/3 h-[3rem] ${currentSlide === 1 ? 'z-50' : 'z-10'}`}
          >
            <div
              className={`category-tab__trapezoid-parent absolute w-full h-full`}
            >
              <svg
                width="270"
                height="100"
                viewBox="0 0 513 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-[1.1rem] 2xl:-top-[1.5rem] -left-[1.6rem] 2xl:-left-5 xl:w-[14rem] 1_5xl:w-[15.8rem] 2xl:w-[16.7rem]"
              >
                <path
                  d="M450.39 5.98555L513 84H0L46.2989 7.69978C49.1997 2.91927 54.3858 0 59.9776 0H437.912C442.764 0 447.353 2.20158 450.39 5.98555Z"
                  fill="white"
                />
              </svg>

              <button
                type="button"
                className="w-full h-full absolute z-10 flex items-center justify-center"
                onClick={() => handleTabChange(1)}
              >
                <p
                  className={`${MaisonNeue} font-extrabold text-nestedTabs xl:text-nestedTabs-xl 1_5xl:text-nestedTabs-1_5xl pt-[0.9rem] 2xl:pt-[0.3rem] xl:pr-4 1_5xl:pr-0`}
                >
                  SWEATSHIRTS
                </p>
              </button>
            </div>
          </div>
          <div
            className={`relative w-[32%] h-[3rem] z-0 ${currentSlide === 2 ? 'z-50' : 'z-0'}`}
          >
            <div
              className={`category-tab__trapezoid-parent absolute w-full h-full`}
            >
              <svg
                width="257"
                height="105"
                viewBox="0 0 558 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-[1.18rem] 2xl:-top-[1.4rem] -left-[1.1rem] 2xl:-left-[1rem] xl:w-[12.8rem] 1_5xl:w-[14.3rem] 2xl:w-[16.1rem]"
              >
                <path
                  d="M495.237 7.34909L558 105H0L46.6496 9.00659C49.327 3.49723 54.9149 0 61.0404 0H481.777C487.222 0 492.293 2.76883 495.237 7.34909Z"
                  fill="white"
                />
              </svg>

              <button
                type="button"
                className="w-full h-full absolute z-10 flex items-center justify-center"
                onClick={() => handleTabChange(2)}
              >
                <p
                  className={`${MaisonNeue} font-extrabold text-nestedTabs xl:text-nestedTabs-xl 1_5xl:text-nestedTabs-1_5xl pt-[0.9rem] 2xl:pt-[0.3rem]`}
                >
                  HOODIES
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:w-[36rem] 1_5xl:w-[40rem] 2xl:w-[45rem] p-8 category-tab__shadow z-30 bg-[#FFFFFF] category-tab__content">
          <p className={`${Roboto} xl:text-[1rem] 1_5xl:text-lg 2xl:text-xl`}>
            {tabContents}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <button
                aria-label="Previous slide"
                onClick={onLeftArrowClick}
                className={`flex items-center justify-center rounded-full border-2 border-black w-[2.3rem] h-[2.3rem] pr-[0.2rem] bg-black`}
              >
                <LeftArrow color={`#FFFFFF`} width={26} height={18} />
              </button>

              {Array.from({ length: carouselImagesLength }).map((__, index) => (
                <Pagination key={index} isActive={currentSlide === index} />
              ))}
              <button
                aria-label="Next slide"
                onClick={onRightArrowClick}
                className={`flex items-center justify-center rounded-full border-2 border-black w-[2.3rem] h-[2.3rem] pl-[0.2rem] bg-black`}
              >
                <RightArrow color={`#FFFFFF`} width={26} height={18} />
              </button>
            </div>
            <SecondaryButton isLink link={buttonHref}>
              {buttonText}
            </SecondaryButton>
          </div>
        </div>
      </div>
      <CategoryTabMedium
        handleTabChange={handleTabChange}
        onLeftArrowClick={onLeftArrowClick}
        onRightArrowClick={onRightArrowClick}
        tabSelected={currentSlide}
        currentSlide={currentSlide}
        carouselImagesLength={carouselImagesLength}
        tabContents={tabContents}
        buttonText={buttonText}
        buttonHref={buttonHref}
      />
    </>
  );
};

export default CategoryTab;
