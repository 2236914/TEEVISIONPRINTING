import React from 'react';

import ReviewCarousel from '@/components/main/fifthSection/ReviewCarousel/ReviewCarousel';
import YellowUnderline from '@/components/main/secondSection/components/YellowUnderline';
import PrimaryButton from '@/components/shared/PrimaryButton';
import Roboto from '@/utilities/fonts/Roboto';
import Termina from '@/utilities/fonts/Termina/Termina';

// Extract SVG components for better performance
const DesktopCardBackground = () => (
  <svg
    width="300"
    height="310"
    viewBox="0 0 332 338"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-reviewCard absolute top-0 w-full h-full hidden xl:block"
    aria-hidden="true"
  >
    <path
      d="M0 16C0 7.16345 7.16344 0 16 0L223.883 0C228.901 0 233.736 1.88648 237.428 5.28512L281.104 45.4891L325.262 87.3659C329.245 91.1425 331.5 96.3896 331.5 101.878V322C331.5 330.837 324.337 338 315.5 338H16C7.16344 338 0 330.837 0 322L0 16Z"
      fill="white"
    />
  </svg>
);

const MobileCardBackground = () => (
  <svg
    width="248"
    height="96"
    viewBox="0 0 248 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-reviewCard absolute top-0 w-full h-full block xl:hidden"
    aria-hidden="true"
  >
    <path
      d="M0 9.99999C0 4.47715 4.47715 0 10 0H215.703C217.711 0 219.645 0.754593 221.122 2.11405L232.783 12.8481L244.522 23.9806C246.114 25.4913 247.017 27.5901 247.017 29.7854V85.4662C247.017 90.9891 242.539 95.4662 237.017 95.4662H10C4.47715 95.4662 0 90.9891 0 85.4662V9.99999Z"
      fill="white"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    width="64"
    height="62"
    viewBox="0 0 64 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    <path
      d="M30.0979 1.8541C30.6966 0.0114741 33.3034 0.0114803 33.9021 1.8541L40.0825 20.8754C40.3503 21.6994 41.1182 22.2574 41.9846 22.2574H61.9848C63.9222 22.2574 64.7278 24.7366 63.1604 25.8754L46.9799 37.6312C46.2789 38.1405 45.9856 39.0432 46.2533 39.8673L52.4337 58.8885C53.0324 60.7312 50.9235 62.2634 49.356 61.1246L33.1756 49.3688C32.4746 48.8595 31.5254 48.8595 30.8244 49.3688L14.644 61.1246C13.0765 62.2634 10.9676 60.7312 11.5663 58.8885L17.7467 39.8673C18.0144 39.0432 17.7211 38.1405 17.0201 37.6312L0.839643 25.8754C-0.727785 24.7366 0.0777726 22.2574 2.01522 22.2574H22.0154C22.8818 22.2574 23.6497 21.6994 23.9175 20.8754L30.0979 1.8541Z"
      fill="#FFCD00"
    />
  </svg>
);

const FifthSection = () => {
  return (
    <section 
      className="relative flex justify-center bg-white w-full h-[58rem] md:h-[65rem] xl:h-[62rem] drop-shadow-secondSectionTabBody"
      aria-labelledby="reviews-heading"
    >
      <div className="flex flex-col items-center w-full z-10 max-w-[90rem]">
        <div className="w-full flex flex-col items-center px-8">
          <div className="flex flex-col xl:flex-row justify-between pt-12 xl:pt-32 1_5xl:pt-40 w-full">
            {/* Header Section */}
            <div className="flex flex-col gap-2 xl:gap-4">
              <h2
                id="reviews-heading"
                className={`${Termina} text-hero-sm xl:text-text-hero-xl 1_5xl:text-hero-1_5xl md:text-hero-md leading-none font-black text-white`}
              >
                GOOGLE REVIEWS
              </h2>
              {/* Responsive underlines - consolidated */}
              <YellowUnderline 
                width={150} 
                className="md:hidden" 
              />
              <YellowUnderline 
                width={250} 
                className="hidden md:block xl:hidden" 
              />
              <YellowUnderline 
                width={380} 
                className="hidden xl:block w-[60%]" 
              />
            </div>

            {/* Description and CTA */}
            <div className="flex flex-col w-full xl:w-[30rem] gap-4 xl:gap-8 items-end">
              <p
                className={`${Roboto} mt-4 md:mt-8 xl:mt-0 text-[0.8rem] md:text-2xl xl:text-[1rem] 1_5xl:text-lg text-white xl:text-right`}
              >
                Hear from businesses and organizations who trust Tee Vision
                Printing for their custom apparel needs.
              </p>
              <div className="flex justify-end h-fit w-full pt-0 md:pt-8 xl:pt-0">
                <PrimaryButton
                  isLink
                  link="https://www.google.com/search?hl=en-PH&gl=ph&q=Tee+Vision+Printing,+920+E+Hunting+Park+Ave,+Philadelphia,+PA+19124,+United+States&ludocid=7121634296098158465&lsig=AB86z5Vv1c-Df59fyV6XK3k21i0I&hl=en&gl=PH#lrd=0x89c6b7cabf19bf4b:0x62d520a9072b7781,1"
                  fullwidth
                  aria-label="Read more Google reviews"
                >
                  READ MORE REVIEWS
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>

        {/* Rating and Carousel Section */}
        <div className="flex 2xl:px-0 xl:px-8 1_5xl:px-8 w-full flex-col xl:flex-row gap-2 xl:gap-8 items-center xl:items-start xl:mt-16 h-full pt-8 xl:pt-0">
          {/* Rating Card */}
          <div 
            className="relative w-[15rem] h-[6rem] md:w-[28rem] md:h-[9.6rem] xl:w-[18rem] xl:h-[13rem] 1_5xl:w-[28rem] 1_5xl:h-[9.6rem] xl:min-w-[18rem] xl:min-h-[13rem] 1_5xl:min-w-[13rem] 1_5xl:min-h-[18rem]"
            role="img"
            aria-label="4.9 star rating"
          >
            <DesktopCardBackground />
            <MobileCardBackground />

            <div className="flex xl:flex-col gap-4 items-center justify-center h-full">
              <p
                className={`${Termina} text-6xl md:text-7xl xl:text-5xl 1_5xl:text-7xl font-black text-black z-10`}
                aria-label="Rating of 4.9 out of 5"
              >
                4.9
              </p>
              <div className="w-[3rem] md:w-[4rem] xl:w-[3rem] 1_5xl:w-[4rem] z-10">
                <StarIcon />
              </div>
            </div>
          </div>

          {/* Review Carousel */}
          <div className="w-full">
            <ReviewCarousel />
          </div>
        </div>
      </div>

      {/* Background layers */}
      <div className="absolute top-0 flex flex-col w-full pointer-events-none" aria-hidden="true">
        <div className="bg-darkGrey h-[18rem] md:h-[27rem] xl:h-[30rem] 1_5xl:h-[35rem]" />
        <div className="bg-white h-[40rem] md:h-[38rem] xl:h-[27rem]" />
      </div>
    </section>
  );
};

export default FifthSection;