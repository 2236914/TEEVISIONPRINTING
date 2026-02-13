import React from 'react';

// eslint-disable-next-line no-restricted-imports
import './ServiceCard.css';

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
      width="1200"
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
      width="70"
      height="85"
      viewBox="0 0 106 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[4rem] md:w-[6rem] xl:w-[5rem]"
    >
      <path
        d="M10.2092 10.0302C11.4115 10.0302 12.3862 9.0537 12.3862 7.84909C12.3862 6.64449 11.4115 5.66797 10.2092 5.66797C9.00681 5.66797 8.0321 6.64449 8.0321 7.84909C8.0321 9.0537 9.00681 10.0302 10.2092 10.0302Z"
        fill="black"
      />
      <path
        d="M17.1527 10.0302C18.355 10.0302 19.3297 9.0537 19.3297 7.84909C19.3297 6.64449 18.355 5.66797 17.1527 5.66797C15.9503 5.66797 14.9756 6.64449 14.9756 7.84909C14.9756 9.0537 15.9503 10.0302 17.1527 10.0302Z"
        fill="black"
      />
      <path
        d="M24.0961 10.0302C25.2985 10.0302 26.2732 9.0537 26.2732 7.84909C26.2732 6.64449 25.2985 5.66797 24.0961 5.66797C22.8938 5.66797 21.9191 6.64449 21.9191 7.84909C21.9191 9.0537 22.8938 10.0302 24.0961 10.0302Z"
        fill="black"
      />
      <path
        d="M70.3258 80.239H5.29423C2.37498 80.239 0 77.8596 0 74.9349V5.3041C0 2.37941 2.37498 0 5.29423 0H81.0957C84.0149 0 86.3899 2.37941 86.3899 5.3041V72.6877C86.3899 73.4477 85.7797 74.0591 85.021 74.0591C84.2623 74.0591 83.6521 73.4477 83.6521 72.6877V5.3041C83.6521 3.88306 82.4976 2.74293 81.0792 2.74293H5.29423C3.87584 2.74293 2.72133 3.89959 2.72133 5.3041V74.9349C2.72133 76.3559 3.87584 77.5126 5.29423 77.5126H70.3258C71.0845 77.5126 71.6947 78.1239 71.6947 78.884C71.6947 79.6441 71.0845 80.2555 70.3258 80.2555V80.239Z"
        fill="black"
      />
      <path
        d="M85.021 15.7136H1.36891C0.610238 15.7136 0 15.1023 0 14.3422C0 13.5821 0.610238 12.9707 1.36891 12.9707H85.021C85.7797 12.9707 86.3899 13.5821 86.3899 14.3422C86.3899 15.1023 85.7797 15.7136 85.021 15.7136Z"
        fill="black"
      />
      <path
        d="M65.8067 57.3706C65.4604 57.3706 65.114 57.2384 64.8501 56.974L59.259 51.3725L59.0281 51.6038C58.5004 52.1326 57.6262 52.1326 57.0985 51.6038C56.5707 51.0751 56.5707 50.2158 57.0985 49.6706L58.286 48.4809C58.7972 47.9686 59.7043 47.9686 60.2156 48.4809L66.7633 55.0408C67.2911 55.5695 67.2911 56.4453 66.7633 56.974C66.4994 57.2384 66.1531 57.3706 65.8067 57.3706Z"
        fill="black"
      />
      <path
        d="M58.1045 64.7236C57.7582 64.7236 57.4118 64.5914 57.148 64.327L50.7817 57.9489C50.2539 57.4201 50.2539 56.5444 50.7817 56.0156L51.8372 54.9581C52.365 54.4293 53.2391 54.4293 53.7669 54.9581C54.2947 55.4868 54.2947 56.3461 53.7669 56.8914L53.6844 56.974L59.0941 62.3937C59.6219 62.9225 59.6219 63.7983 59.0941 64.327C58.8302 64.5914 58.4839 64.7236 58.1375 64.7236H58.1045Z"
        fill="black"
      />
      <path
        d="M49.7756 57.8002C47.1697 57.8002 44.5639 56.8088 42.5847 54.8259C33.2827 45.5066 37.4059 28.8672 37.5874 28.1732C37.7193 27.661 38.1481 27.2644 38.6759 27.1653C39.2037 27.0661 39.7314 27.2975 40.0448 27.7436C44.5804 34.3696 48.7531 36.1376 52.0846 37.5587C53.8989 38.3353 55.6306 39.0623 56.983 40.4173C60.9413 44.3995 60.9413 50.8602 56.983 54.8259C55.0039 56.8088 52.398 57.8002 49.7921 57.8002H49.7756ZM39.682 31.825C38.9893 36.7986 38.4945 46.8615 44.5144 52.8927C47.4171 55.8008 52.1506 55.8008 55.0534 52.8927C57.9561 49.9845 57.9561 45.2422 55.0534 42.334C54.0638 41.3426 52.7279 40.7808 51.0126 40.0538C47.9779 38.7649 43.9701 37.063 39.682 31.8084V31.825Z"
        fill="black"
      />
      <path
        d="M101.052 104C99.9801 104 98.8915 103.653 97.9844 102.926C96.4011 101.67 94.4219 100.166 92.2284 98.4645C73.0306 83.7584 54.4596 68.6723 56.6861 60.0635C56.7521 59.8321 56.8676 59.6173 57.049 59.4356L62.2608 54.2141C62.5741 53.9001 63.0359 53.7514 63.4812 53.834C74.9438 56.0813 90.2657 76.4715 100.425 89.9878C102.141 92.2681 103.674 94.3005 104.977 95.9694C106.528 97.9357 106.346 100.761 104.582 102.546C103.625 103.504 102.355 104 101.085 104H101.052ZM99.6667 100.794C100.557 101.488 101.827 101.422 102.619 100.629C103.411 99.836 103.493 98.5636 102.8 97.6714C101.497 96.0025 99.9471 93.937 98.2318 91.6567C89.1442 79.5614 74.0532 59.4851 63.6462 56.7092L59.259 61.1045C58.088 68.9036 82.2007 87.3771 93.8942 96.3329C96.1042 98.0349 98.0834 99.555 99.6832 100.811L99.6667 100.794Z"
        fill="black"
      />
      <path
        d="M29.3244 47.5222H10.6709C9.91224 47.5222 9.302 46.9109 9.302 46.1508C9.302 45.3907 9.91224 44.7793 10.6709 44.7793H29.3079C30.0666 44.7793 30.6768 45.3907 30.6768 46.1508C30.6768 46.9109 30.0666 47.5222 29.3079 47.5222H29.3244Z"
        fill="black"
      />
      <path
        d="M32.9034 53.5701H10.374C9.61536 53.5701 9.00513 52.9587 9.00513 52.1986C9.00513 51.4385 9.61536 50.8271 10.374 50.8271H32.9034C33.662 50.8271 34.2723 51.4385 34.2723 52.1986C34.2723 52.9587 33.662 53.5701 32.9034 53.5701Z"
        fill="black"
      />
      <path
        d="M36.4823 59.617H10.0607C9.30201 59.617 8.69177 59.0056 8.69177 58.2455C8.69177 57.4854 9.30201 56.874 10.0607 56.874H36.4823C37.241 56.874 37.8513 57.4854 37.8513 58.2455C37.8513 59.0056 37.241 59.617 36.4823 59.617Z"
        fill="black"
      />
      <path
        d="M28.8791 41.4743H11.0997C10.3411 41.4743 9.73083 40.863 9.73083 40.1029V34.9144C9.73083 34.1543 10.3411 33.543 11.0997 33.543H28.8791C29.6378 33.543 30.248 34.1543 30.248 34.9144V40.1029C30.248 40.863 29.6378 41.4743 28.8791 41.4743ZM12.4687 38.7479H27.5102V36.2859H12.4687V38.7479Z"
        fill="black"
      />
    </svg>
  );
};

const OnlineServiceCard = () => {
  const title = 'Online Design Studio';
  const description = `Use our intuitive online design tool to create a custom design directly on our website, complete with fonts, colors, and layout options.`;
  return (
    <div className="relative h-full xl:w-[42rem] xl:h-[15rem] online-service-card mt-4 xl:mt-0">
      <div className="relative w-full h-full pb-8 md:pb-12 xl:pb-4 z-10">
        <div className="flex items-center w-full h-full px-8 md:px-24 xl:px-0 xl:pr-8">
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

export default OnlineServiceCard;
