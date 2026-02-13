import React from 'react';
import Link from 'next/link';

import RequestAQuoteModalGeneralServerWrapper from '@/components/shared/RequestAQuoteModal/RequestAQuoteModalGeneralServerWrapper';

import PerksCardSection from '@/components/main/firstSection/components/PerksCardSection/PerksCardSection';
import RightSection from '@/components/main/firstSection/components/RightSection/RightSection';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';

const FirstSection = () => {
  return (
    <section className="min-h-screen xl:h-screen 1_5xl:h-full 2xl:h-screen pb-12 bg-white xl:pt-0 1_5xl:pt-20 2xl:pt-0">
      <div className="flex justify-center items-center h-full xl:px-12 xl:pl-16">
        <div className="flex flex-col xl:flex-row w-full xl:max-w-[90rem] 1_5xl:max-w-[90rem] xl:gap-8">
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-col pt-32 md:pt-36 xl:pt-36 gap-4 px-8 xl:px-0">
              <h1
                className={`${Termina} 2xl:text-hero xl:text-text-hero-xl 1_5xl:text-hero-1_5xl md:text-hero-main-md text-hero-main-sm leading-none font-black`}
              >
                CUSTOM T SHIRTS: MATCH YOUR STYLE AND BRAND
              </h1>
              <h2
                className={`${MaisonNeue} xl:text-[1.1rem] 1_5xl:text-body md:text-body-md text-body-sm w-full xl:w-[33rem]`}
              >
                Whether it&apos;s one tee or a thousand, <span className="text-[#ffc107]"><a href='https://www.teevisionprinting.com/blog/sweater-vs-sweatshirt'>Tee Vision Printing</a></span> brings
                your design to life with vibrant color, premium fabrics, 
                custom t shirts and pro-level craftsmanship
              </h2>
            </div>
            <div className="flex items-start gap-4 mt-8 w-full px-8 xl:px-0">
              <RequestAQuoteModalGeneralServerWrapper className="w-full xl:w-fit">
                <div
                  className={`${MaisonNeue} w-full xl:py-6 xl:px-8 h-full btn bg-primaryT border-primaryT font-extrabold border-[0.2rem] md:py-6 text-button md:text-button-md lg:text-[1.15rem] rounded-md md:px-[1.8rem] transition transform hover:scale-105 hover:bg-primaryT hover:border-primaryT`}
                >
                  REQUEST A QUOTE
                </div>
              </RequestAQuoteModalGeneralServerWrapper>

              <div className="hidden xl:block">
                <Link
                  href="/products"
                  className={`${MaisonNeue} xl:py-6 xl:px-8 h-full w-fit btn bg-transparent border-[0.2rem] border-primaryT font-extrabold md:py-6 text-button md:text-button-md lg:text-[1.15rem] rounded-md md:px-[1.8rem] transition transform hover:scale-105 hover:bg-transparent hover:border-primaryT`}
                >
                  VIEW OUR CATALOG
                </Link>
              </div>
            </div>
            <PerksCardSection />
          </div>
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;