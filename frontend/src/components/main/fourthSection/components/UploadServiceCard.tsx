import React from 'react';

// eslint-disable-next-line no-restricted-imports
import './ServiceCard.css';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';

const BGCard = () => {
  return (
    <svg
      width="800"
      height="304"
      viewBox="0 0 912 304"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="xl:w-[45rem] 1_5xl:w-[50rem]"
    >
      <g filter="url(#filter0_d_109_278)">
        <path
          d="M45 46C45 37.1634 52.1634 30 61 30H759.855C764.321 30 768.659 31.495 772.177 34.2466L816.135 68.6296L859.049 103.211C863.761 107.008 866.5 112.733 866.5 118.784V228C866.5 236.837 859.337 244 850.5 244H61C52.1635 244 45 236.837 45 228V46Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_109_278"
          x="0"
          y="0"
          width="911.5"
          height="304"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="15" />
          <feGaussianBlur stdDeviation="22.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_109_278"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_109_278"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const BGCardSmall = () => {
  return (
    <svg
      width="1000"
      height="600"
      viewBox="0 0 435 235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      <g filter="url(#filter0_d_426_679)">
        <path
          d="M45 40C45 34.4771 49.4772 30 55 30H345.351C347.137 30 348.872 30.598 350.279 31.6986L368.848 46.223L387.02 60.8658C388.904 62.3845 390 64.6747 390 67.095V165C390 170.523 385.523 175 380 175H55C49.4772 175 45 170.523 45 165V40Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_426_679"
          x="0"
          y="0"
          width="435"
          height="235"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="15" />
          <feGaussianBlur stdDeviation="22.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_426_679"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_426_679"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const Icon = () => {
  return (
    <svg
      width="70"
      height="61"
      viewBox="0 0 85 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[3.5rem] md:w-[5rem] xl:w-[4rem]"
    >
      <g clipPath="url(#clip0_110_464)">
        <path
          d="M78.9761 71H6.02388C2.69577 71 0 68.3276 0 65.0283V5.97165C0 2.6724 2.69577 0 6.02388 0H78.9761C82.3042 0 85 2.6724 85 5.97165V65.0283C85 68.3276 82.3042 71 78.9761 71ZM6.02388 2.72189C4.2267 2.72189 2.74569 4.17356 2.74569 5.97165V65.0283C2.74569 66.8099 4.21006 68.2781 6.02388 68.2781H78.9761C80.7733 68.2781 82.2543 66.8264 82.2543 65.0283V5.97165C82.2543 4.19006 80.7899 2.72189 78.9761 2.72189H6.02388Z"
          fill="black"
        />
        <path
          d="M25.4268 30.9309C20.1684 30.9309 15.8751 26.6914 15.8751 21.462C15.8751 16.2327 20.1517 11.9932 25.4268 11.9932C30.7019 11.9932 34.9785 16.2327 34.9785 21.462C34.9785 26.6914 30.7019 30.9309 25.4268 30.9309ZM25.4268 14.7315C21.6827 14.7315 18.6208 17.7504 18.6208 21.4785C18.6208 25.2067 21.666 28.2255 25.4268 28.2255C29.1876 28.2255 32.2328 25.2067 32.2328 21.4785C32.2328 17.7504 29.1876 14.7315 25.4268 14.7315Z"
          fill="black"
        />
        <path
          d="M1.38101 60.1622C1.03155 60.1622 0.682102 60.0303 0.415853 59.7663C-0.116645 59.2385 -0.116645 58.3642 0.415853 57.8363L16.6238 41.7689C17.1563 41.241 18.0382 41.241 18.5707 41.7689L30.735 53.8277L64.3655 20.4887C64.6152 20.2247 64.9646 20.0928 65.3307 20.0928C65.6968 20.0928 66.0462 20.2412 66.2958 20.4887L84.018 38.0572C84.5505 38.5851 84.5505 39.4594 84.018 39.9873C83.4855 40.5152 82.6036 40.5152 82.0711 39.9873L65.314 23.3755L31.6835 56.7145C31.151 57.2424 30.269 57.2424 29.7365 56.7145L17.5723 44.6557L2.34616 59.7663C2.07991 60.0303 1.73046 60.1622 1.38101 60.1622Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_110_464">
          <rect width="85" height="71" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const UploadServiceCard = () => {
  const title = 'Upload Your Design';
  const description = `If you already have artwork, just upload your file, and we’ll take care of the rest.`;
  return (
    <div className="relative h-full xl:w-[42rem] xl:h-[13rem] upload-service-card">
      <div className="relative w-full h-full xl:pb-4 pb-8 md:pb-12 z-10">
        <div className="flex items-center justify-center w-full h-full px-8 md:px-24 xl:px-0 xl:py-0 xl:pr-8">
          <div className="w-[12rem] md:w-[20rem] xl:w-[15rem] flex items-center justify-center">
            <Icon />
          </div>
          <div className="flex flex-col flex-grow w-full pr-8 xl:pr-0">
            <h3 className={`${MaisonNeue} font-bold`}>{title}</h3>
            <p className={`${Roboto} `}>{description}</p>
          </div>
        </div>
      </div>
      <div className="hidden xl:block xl:absolute xl:-top-10 xl:-left-10">
        <BGCard />
      </div>
      <div className="xl:hidden absolute top-0 w-full h-full flex items-center">
        <BGCardSmall />
      </div>
    </div>
  );
};

export default UploadServiceCard;
