import React from 'react';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';

const BGCard = () => {
  return (
    <svg
      width="800"
      height="342"
      viewBox="0 0 912 342"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="xl:w-[45rem] 1_5xl:w-[50rem]"
    >
      <g filter="url(#filter0_d_437_679)">
        <path
          d="M45 46C45 37.1634 52.1634 30 61 30H759.383C764.401 30 769.236 31.8865 772.928 35.2851L816.604 75.4891L860.762 117.366C864.745 121.142 867 126.39 867 131.878V266C867 274.837 859.837 282 851 282H61C52.1635 282 45 274.837 45 266V46Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_437_679"
          x="0"
          y="0"
          width="912"
          height="342"
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
            result="effect1_dropShadow_437_679"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_437_679"
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
      viewBox="0 0 435 287"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      <g filter="url(#filter0_d_426_681)">
        <path
          d="M45 40C45 34.4771 49.4772 30 55 30H345.351C347.137 30 348.872 30.598 350.279 31.6986L368.848 46.223L387.02 60.8658C388.904 62.3845 390 64.6747 390 67.095V216.5C390 222.023 385.523 226.5 380 226.5H55C49.4772 226.5 45 222.023 45 216.5V40Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_426_681"
          x="0"
          y="0"
          width="435"
          height="286.5"
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
            result="effect1_dropShadow_426_681"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_426_681"
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
      width="100"
      height="130"
      viewBox="0 0 56 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[3.5rem] md:w-[5rem] xl:w-[4rem]"
    >
      <path
        d="M42.8397 66.0427H21.0244C20.5269 66.0427 20.1375 65.6454 20.1267 65.1622L20.1051 57.7954H13.4967C11.2254 57.7954 9.32184 56.1739 8.97574 53.9403L7.39665 43.7493H2.97303C1.97799 43.7493 1.05865 43.266 0.507052 42.4499C-0.0445489 41.6338 -0.152706 40.6029 0.215028 39.6901L5.16862 25.515C5.22269 9.53593 14.8595 0 30.9749 0C44.8514 0 55.321 9.95473 55.321 23.1525C55.3426 23.6573 55.8834 36.6618 48.6369 45.5749C46.1168 48.6783 44.6351 52.3617 44.3647 56.2169L43.7266 65.2051C43.6941 65.6669 43.3048 66.032 42.8397 66.032V66.0427ZM21.9221 64.2601H42.0069L42.5801 56.0987C42.8829 51.8784 44.4945 47.8514 47.2417 44.458C54.0556 36.0497 53.5364 23.3136 53.5256 23.1848C53.5256 10.9534 43.8239 1.77188 30.9749 1.77188C15.9302 1.77188 6.95321 10.7064 6.95321 25.6654C6.95321 25.762 6.93157 25.8587 6.89913 25.9553L1.89146 40.3129C1.72923 40.721 1.77249 41.1291 1.9888 41.4619C2.20512 41.7948 2.57285 41.9774 2.97303 41.9774H8.17538C8.61882 41.9774 8.98656 42.2996 9.06227 42.7291L10.7495 53.6718C10.955 55.0356 12.1231 56.0236 13.5075 56.0236H21.0028C21.5003 56.0236 21.8897 56.4209 21.9005 56.9041L21.9221 64.2709V64.2601Z"
        fill="black"
      />
      <path
        d="M34.2412 34.9864H26.2592C25.7617 34.9864 25.3615 34.5891 25.3615 34.0951C25.3615 31.7863 24.4854 30.0574 23.0686 27.9956C22.0843 26.5566 21.5652 24.8814 21.5652 23.131C21.5652 20.8329 22.4953 18.6637 24.161 17.0314C25.8374 15.3884 28.0222 14.5508 30.3475 14.5293C35.074 14.583 38.9136 18.4489 38.9136 23.1417C38.9136 24.8921 38.3836 26.5781 37.3885 28.017C35.9825 30.0467 35.1173 31.7648 35.1173 34.0951C35.1173 34.5891 34.7171 34.9864 34.2195 34.9864H34.2412ZM27.1136 33.2146H33.3867C33.5814 30.8735 34.5548 29.0157 35.9392 27.0184C36.7288 25.8801 37.1398 24.5377 37.1398 23.1524C37.1398 19.4261 34.0898 16.3549 30.3367 16.3119C28.4872 16.2582 26.7567 16.9992 25.4264 18.2986C24.0961 19.5979 23.3606 21.3161 23.3606 23.1417C23.3606 24.527 23.7716 25.8586 24.5503 27.0076C25.9347 29.0265 26.919 30.895 27.1136 33.2253V33.2146Z"
        fill="black"
      />
      <path
        d="M18.0393 29.2843C17.6823 29.2843 17.3471 29.0696 17.2064 28.7152C17.0334 28.2534 17.2605 27.7487 17.7148 27.5662L19.5102 26.8789C19.9753 26.7071 20.4836 26.9326 20.6675 27.3836C20.8405 27.8454 20.6134 28.3501 20.1591 28.5326L18.3637 29.2199C18.2556 29.2629 18.1474 29.2843 18.0393 29.2843Z"
        fill="black"
      />
      <path
        d="M19.3805 21.3272C19.3156 21.3272 19.2507 21.3272 19.1858 21.3057L17.3255 20.8976C16.8388 20.7902 16.5359 20.3177 16.6441 19.8452C16.7522 19.3727 17.2281 19.0613 17.704 19.1687L19.5643 19.5768C20.051 19.6841 20.3539 20.1566 20.2457 20.6291C20.1592 21.048 19.7806 21.3272 19.3696 21.3272H19.3805Z"
        fill="black"
      />
      <path
        d="M23.0253 15.5069C22.7982 15.5069 22.5711 15.421 22.398 15.2492L21.0893 13.9713C20.7432 13.6277 20.7324 13.0693 21.0893 12.7149C21.4354 12.3713 21.9979 12.3605 22.3548 12.7149L23.6635 13.9928C24.0096 14.3364 24.0204 14.8948 23.6635 15.2492C23.4904 15.421 23.2633 15.5177 23.0253 15.5177V15.5069Z"
        fill="black"
      />
      <path
        d="M30.3693 12.8328C29.8717 12.8328 29.4716 12.4355 29.4716 11.9415V10.0729C29.4716 9.57897 29.8717 9.18164 30.3693 9.18164C30.8668 9.18164 31.267 9.57897 31.267 10.0729V11.9415C31.267 12.4355 30.8668 12.8328 30.3693 12.8328Z"
        fill="black"
      />
      <path
        d="M42.6341 29.2837C42.526 29.2837 42.4178 29.2622 42.3097 29.2193L40.5143 28.532C40.0492 28.3602 39.8221 27.8447 40.0059 27.383C40.1898 26.9212 40.6981 26.7064 41.1632 26.8782L42.9586 27.5655C43.4237 27.7373 43.6508 28.2528 43.4669 28.7146C43.3263 29.0689 42.991 29.2837 42.6341 29.2837Z"
        fill="black"
      />
      <path
        d="M41.3579 21.3272C40.9469 21.3272 40.5792 21.048 40.4818 20.6291C40.3737 20.1459 40.6873 19.6734 41.1632 19.5768L43.0235 19.1687C43.5102 19.0613 43.9861 19.3727 44.0835 19.8452C44.1916 20.3285 43.878 20.801 43.4021 20.8976L41.5418 21.3057C41.4769 21.3164 41.412 21.3272 41.3471 21.3272H41.3579Z"
        fill="black"
      />
      <path
        d="M37.7023 15.5068C37.4751 15.5068 37.2372 15.4209 37.0641 15.2383C36.718 14.8947 36.718 14.3256 37.0641 13.9819L38.3728 12.704C38.7298 12.3604 39.2922 12.3604 39.6383 12.704C39.9844 13.0477 39.9844 13.6168 39.6383 13.9604L38.3296 15.2383C38.1565 15.4102 37.9294 15.4961 37.7023 15.4961V15.5068Z"
        fill="black"
      />
      <path
        d="M33.9168 38.1322H26.5837C26.0862 38.1322 25.686 37.7349 25.686 37.2409C25.686 36.7469 26.0862 36.3496 26.5837 36.3496H33.9168C34.4143 36.3496 34.8145 36.7469 34.8145 37.2409C34.8145 37.7349 34.4143 38.1322 33.9168 38.1322Z"
        fill="black"
      />
      <path
        d="M32.3701 41.0541H28.1088C27.6112 41.0541 27.2111 40.6568 27.2111 40.1628C27.2111 39.6688 27.6112 39.2715 28.1088 39.2715H32.3701C32.8677 39.2715 33.2678 39.6688 33.2678 40.1628C33.2678 40.6568 32.8677 41.0541 32.3701 41.0541Z"
        fill="black"
      />
    </svg>
  );
};

const InHouseServiceCard = () => {
  const title = 'In-House Design Assistance';
  const description = `Need a little help? Our expert designers are here to refine your vision or create something new to match your brand.`;
  return (
    <div className="relative h-full xl:w-[42rem] xl:h-[15rem] online-service-card">
      <div className="relative w-full h-full pb-8 md:pb-12 xl:pb-4 z-10">
        <div className="flex items-center w-full h-full px-8 md:px-24 xl:px-4 xl:pr-8">
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

export default InHouseServiceCard;
