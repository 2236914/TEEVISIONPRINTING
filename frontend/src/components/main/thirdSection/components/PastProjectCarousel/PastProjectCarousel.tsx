'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

import type SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line no-restricted-imports
import './PastProjectCarousel.css';

import Pagination from '@/components/main/firstSection/components/RightSection/components/pagination/Pagination';
import SecondaryButton from '@/components/shared/SecondaryButton';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import LeftArrow from '@/utilities/SVGs/LeftArrow';
import RightArrow from '@/utilities/SVGs/RightArrow';

const pastProjects = [
  {
    title: 'Manor College University Merch',
    date: 'March 2021 - Present',
    description:
      'For the past few years, we’ve partnered with top universities such as Manor College to create high-quality merchandise for their valued students. We’re committed to keeping everything budget-friendly and ensuring timely delivery every time they reach out to us because we understand how it matters to their students and their reputation. ',
    imageSrc: '/main/thirdSection/pastProj1.webp',
    imageSrcSmall: '/main/thirdSection/pastProj1-sm.png',
  },
  {
    title: 'Sonic Studios Tech Pack',
    date: 'July 2022 - August 2022',
    description:
      'Sonic Studios approached us to handle their tech packs, bringing a wide range of designs—from screen printed shirts to embroidered caps and bags. With us, there are no limits to what you can make and we’re here to take on the challenge and make sure we get to the end together.',
    imageSrc: '/main/thirdSection/pastProj2.webp',
    imageSrcSmall: '/main/thirdSection/pastProj2-sm.webp',
  },
  {
    title: '12 Labours Crossfit Apparel',
    date: 'April 2022 - Present',
    description:
      '12 Labours CrossFit reached out to us for performance shirts for an upcoming event they were hosting. The designs included athletic wear made from fabrics that can be tricky to print on. But we were confident in our abilities, and after demonstrating our expertise, they were glad to trust us with the job. ',
    imageSrc: '/main/thirdSection/pastProj3.webp',
    imageSrcSmall: '/main/thirdSection/pastProj3-sm.png',
  },
];

const PastProjectCarousel = () => {
  const swiperRef = useRef<SwiperCore>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <div className="past-project-carousel h-full relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
        loop={true}
        onSlideChange={handleSlideChange}
      >
        {pastProjects.map((project, index) => (
          <SwiperSlide key={project.title + index}>
            <div className="w-full flex flex-col-reverse xl:flex-row max-w-[75rem]">
              <div className="xl:min-w-[22rem] xl:max-w-[28rem] bg-darkGrey rounded-br-xl rounded-bl-xl xl:rounded-tl-xl xl:rounded-br-none">
                <div className="w-full p-8 xl:p-8 text-white">
                  <h3
                    className={`${MaisonNeue} text-h3-small md:text-h3-md xl:text-[1.5rem] 1_5xl:text-[1.8rem] font-extrabold leading-none`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${MaisonNeue} text-[0.8rem] md:text-[1.2rem] xl:text-[0.8rem] font-bold text-left`}
                  >
                    {project.date}
                  </p>
                  <p
                    className={`${Roboto} mt-4 text-[0.8rem] md:text-[1.2rem] xl:text-[0.75rem] 1_5xl:text-[0.8rem]`}
                  >
                    {project.description}
                  </p>
                  <SecondaryButton
                    fullwidth
                    className="text-white px-[3rem] mt-8"
                    isLink
                    link="/products"
                  >
                    View Products
                  </SecondaryButton>
                </div>
              </div>
              <div className="hidden xl:block w-full h-full">
                <Image
                  src={project.imageSrc}
                  width={400}
                  height={400}
                  alt="Past Project Image"
                  className="w-full h-full"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  quality={70}
                />
              </div>
              <div className="block xl:hidden w-full h-full">
                <Image
                  src={project.imageSrcSmall}
                  width={200}
                  height={200}
                  alt="Past Project Image"
                  className="w-full h-full rounded-tl-xl"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  quality={70}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" w-full h-full flex gap-4 xl:gap-8 flex-row-reverse items-center justify-center xl:absolute xl:inset-0">
        <div className="xl:absolute xl:top-[50%] xl:-right-[3rem] z-20">
          <button
            aria-label="Next slide"
            onClick={handleNextSlide}
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

        <div className="flex justify-center gap-2 xl:hidden">
          {pastProjects.map((__, index) => (
            <Pagination key={index} isActive={currentSlide === index} />
          ))}
        </div>

        <div className="xl:absolute xl:top-[50%] xl:-left-[3rem] z-20">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className={`flex items-center justify-center rounded-full border-2 border-black w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] xl:h-[2.3rem] xl:w-[2.3rem] bg-black p-[0.3rem] pr-[0.5rem] md:p-[1rem] md:pr-[1.2rem] xl:pr-[0.5rem] xl:p-[0.4rem]`}
          >
            <LeftArrow
              color={`#FFFFFF`}
              width={26}
              height={18}
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
      <div className="hidden xl:flex justify-center gap-4 w-full">
        {pastProjects.map((__, index) => (
          <Pagination key={index} isActive={currentSlide === index} />
        ))}
      </div>
    </div>
  );
};

export default PastProjectCarousel;
