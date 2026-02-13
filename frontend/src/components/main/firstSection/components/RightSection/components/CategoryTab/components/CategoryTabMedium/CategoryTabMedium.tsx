import React from 'react';

// eslint-disable-next-line no-restricted-imports
import './CategoryTabMedium.css';

import Pagination from '@/components/main/firstSection/components/RightSection/components/pagination/Pagination';
import SecondaryButton from '@/components/shared/SecondaryButton';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import LeftArrow from '@/utilities/SVGs/LeftArrow';
import RightArrow from '@/utilities/SVGs/RightArrow';

type PropTypes = {
  buttonHref: string;
  buttonText: string;
  carouselImagesLength: number;
  currentSlide: number;
  handleTabChange: (tab: number) => void;
  onLeftArrowClick: () => void;
  onRightArrowClick: () => void;
  tabContents: string;
  tabSelected: number;
};

const CategoryTabMedium: React.FC<PropTypes> = ({
  handleTabChange,
  onLeftArrowClick,
  onRightArrowClick,
  tabSelected,
  currentSlide,
  carouselImagesLength,
  tabContents,
  buttonText,
  buttonHref,
}) => {
  return (
    <div className="flex xl:hidden flex-col px-8 pt-8">
      <div className="flex w-full">
        <div
          className={`category-tab-medium relative ${
            tabSelected === 0 ? 'z-50' : 'z-10'
          } `}
        >
          <div
            className={`category-tab-medium__trapezoid-parent absolute w-full h-full`}
          >
            <svg
              width="200"
              height="120"
              viewBox="0 0 164 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute h-full top-[0.1rem] category-tab-medium__first-trapezoid"
            >
              <path
                d="M122.573 7.09634L163.35 57.65H0V19.419C0 8.69416 8.54123 0 19.0774 0H107.829C113.539 0 118.949 2.60388 122.573 7.09634Z"
                fill="white"
              />
            </svg>

            <button
              type="button"
              className="w-full h-full absolute z-10 flex items-center justify-center"
              onClick={() => handleTabChange(0)}
            >
              <p
                className={`${MaisonNeue} font-extrabold text-nestedTabs xl:text-nestedTabs-xl`}
              >
                <svg
                  width="52"
                  height="50"
                  viewBox="0 0 33 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="category-tab-medium__icon"
                >
                  <path
                    d="M24.7094 7.31982V24.415C24.7094 24.875 24.5267 25.3161 24.2014 25.6414C23.8762 25.9666 23.435 26.1494 22.975 26.1494H10.025C9.56504 26.1494 9.1239 25.9666 8.79864 25.6414C8.47338 25.3161 8.29065 24.875 8.29065 24.415V7.31982"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.7094 13.0086L27.837 14.2631L31.6122 8.55121L24.7094 1.89699L21.3909 0.850586C21.3909 0.850586 20.8128 3.26137 16.5 3.26137C12.1872 3.26137 11.6091 0.850586 11.6091 0.850586L8.29063 1.89699L1.38782 8.55121L5.16297 14.2631L8.29063 13.0086"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </button>
          </div>
          <div />
        </div>
        <div
          className={`category-tab-medium relative ${
            tabSelected === 1 ? 'z-50' : 'z-10'
          }`}
        >
          <div
            className={`category-tab-medium__trapezoid-parent absolute w-full h-full`}
          >
            <svg
              width="200"
              height="120"
              viewBox="0 0 164 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute h-full top-[0.1rem] -left-4 category-tab-medium__second-trapezoid"
            >
              <path
                d="M119.405 2.98754L163.352 57.6538H0L32.7075 3.84468C34.1586 1.45738 36.75 0 39.5437 0H113.17C115.594 0 117.887 1.09867 119.405 2.98754Z"
                fill="white"
              />
            </svg>

            <button
              type="button"
              className="w-full h-full absolute z-10 flex items-center justify-center -left-1"
              onClick={() => handleTabChange(1)}
            >
              <p
                className={`${MaisonNeue} font-extrabold text-nestedTabs xl:text-nestedTabs-xl`}
              >
                <svg
                  width="51"
                  height="52"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="category-tab-medium__icon"
                >
                  <path
                    d="M26.1056 13.7651V28.3281C26.1056 28.7881 25.9278 29.2292 25.6113 29.5545C25.2949 29.8798 24.8657 30.0625 24.4181 30.0625H11.5818C11.1343 30.0625 10.7051 29.8798 10.3886 29.5545C10.0721 29.2292 9.89435 28.7881 9.89435 28.3281V13.7651"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.8231 30.0625V31.2188C24.8231 31.5254 24.7046 31.8195 24.4936 32.0363C24.2826 32.2532 23.9965 32.375 23.6981 32.375H12.3019C12.0035 32.375 11.7174 32.2532 11.5064 32.0363C11.2954 31.8195 11.1769 31.5254 11.1769 31.2188V30.0625"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.89435 27.0621L8.8706 31.7565H6.22123C4.83748 26.351 6.33935 16.6385 7.17748 12.1002C7.32082 11.3386 7.61182 10.6145 8.03316 9.97085C8.4545 9.32725 8.99755 8.77738 9.62998 8.35398L11.5256 7.08789"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.4744 7.11133L26.37 8.37742C27.0042 8.80276 27.5484 9.35536 27.9698 10.0021C28.3912 10.6488 28.6813 11.3763 28.8225 12.141C29.6606 16.6562 31.1625 26.3687 29.7787 31.7973H27.1237L26.1056 27.1029"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 11.0135C13.0275 10.7938 11.8125 8.516 11.5481 7.26725C11.5015 7.04668 11.5188 6.81694 11.5978 6.60634C11.6767 6.39574 11.8139 6.2135 11.9925 6.08209L13.8881 4.67725C13.8881 4.67725 12.24 8.47553 18 11.0366"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 11.0135C22.9725 10.7938 24.1875 8.516 24.4519 7.26725C24.4984 7.04668 24.4812 6.81694 24.4022 6.60634C24.3232 6.39574 24.186 6.2135 24.0075 6.08209L22.1119 4.67725C22.1119 4.67725 23.76 8.47553 18 11.0366"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.1119 4.67725H13.8881"
                    stroke="#1E1D1D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4462 15.5V10.6553"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5369 15.5V10.6553"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </button>
          </div>
        </div>
        <div
          className={`category-tab-medium relative z-0 ${
            tabSelected === 2 ? 'z-50' : 'z-0'
          }`}
        >
          <div
            className={`category-tab-medium__trapezoid-parent absolute w-full h-full`}
          >
            <svg
              width="164"
              height="58"
              viewBox="0 0 164 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute h-full -left-9 top-[0.1rem] category-tab-medium__second-trapezoid"
            >
              <path
                d="M119.405 2.98754L163.352 57.6538H0L32.7075 3.84468C34.1586 1.45738 36.75 0 39.5437 0H113.17C115.594 0 117.887 1.09867 119.405 2.98754Z"
                fill="white"
              />
            </svg>

            <button
              type="button"
              className="w-full h-full absolute z-10 flex items-center justify-center -left-4"
              onClick={() => handleTabChange(2)}
            >
              <p
                className={`${MaisonNeue} font-extrabold text-nestedTabs xl:text-nestedTabs-xl`}
              >
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="category-tab-medium__icon"
                >
                  <path
                    d="M8.08909 14.8459C8.08909 14.8459 8.17628 10.4866 4.5144 5.42969"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.911 27.7401V14.846L25.265 28.7088H28.3166L26.4857 5.42977L20.1888 2.29102C18.0963 4.38352 12.865 4.38352 10.7725 2.29102L4.47566 5.42977L2.68347 28.7088H5.73503L8.0891 14.846V27.7401C8.0891 27.997 8.19116 28.2434 8.37284 28.4251C8.55451 28.6068 8.80092 28.7088 9.05785 28.7088H21.9422C22.1992 28.7088 22.4456 28.6068 22.6272 28.4251C22.8089 28.2434 22.911 27.997 22.911 27.7401Z"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.9109 14.8459C22.9109 14.8459 22.8238 10.4866 26.4856 5.42969"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.2082 2.29102C20.2082 2.29102 20.276 6.48086 15.5 6.48086C10.7241 6.48086 10.7919 2.29102 10.7919 2.29102"
                    stroke="#1E1D1D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-8 w-full p-8 category-tab-medium__shadow z-30 bg-[#FFFFFF] category-tab-medium__content">
        <p className={`${Roboto} text-md md:text-2xl`}>{tabContents}</p>
        <div className="flex flex-col-reverse gap-4">
          <div className="flex gap-4">
            <button
              onClick={onLeftArrowClick}
              className={`flex items-center justify-center rounded-full border-2 border-black w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] bg-black p-[0.3rem] pr-[0.5rem] md:p-[1rem] md:pr-[1.2rem]`}
            >
              <LeftArrow
                color={`#FFFFFF`}
                width={26}
                height={18}
                className="w-full h-full"
              />
            </button>
            <div className="flex gap-2 items-center">
              {Array.from({ length: carouselImagesLength }).map((__, index) => (
                <Pagination key={index} isActive={currentSlide === index} />
              ))}
            </div>
            <button
              onClick={onRightArrowClick}
              className={`flex items-center justify-center rounded-full border-2 border-black w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] bg-black p-[0.3rem] pl-[0.5rem] md:p-[1rem] md:pl-[1.2rem]`}
            >
              <RightArrow
                color={`#FFFFFF`}
                width={26}
                height={18}
                className="w-full h-full"
              />
            </button>
          </div>
          <SecondaryButton isLink link={buttonHref} fullwidth>
            {buttonText}
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabMedium;
