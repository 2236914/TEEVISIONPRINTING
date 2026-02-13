'use client';

import React from 'react';
import Image from 'next/image';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line no-restricted-imports
import './DTGCarousel.css';

import Roboto from '@/utilities/fonts/Roboto';
import useWindowSize from '@/utilities/useWindowSize';

type PropTypes = {
  contents: Array<{
    imageSrc: string;
    label: string;
  }>;
};

const DTGCarousel: React.FC<PropTypes> = ({ contents }) => {
  const { width: windowWidthSize } = useWindowSize();
  const numberOfSlides =
    windowWidthSize < 640
      ? 1
      : windowWidthSize < 768
        ? 1
        : windowWidthSize < 1025
          ? 2
          : windowWidthSize < 1280
            ? 3
            : 3;

  return (
    <div className="dtg__carousel relative">
      <Swiper
        className="mySwiper"
        slidesPerView={numberOfSlides}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        loop={true}
      >
        {contents.map((content, index) => (
          <SwiperSlide key={content.label + index}>
            <div className="flex flex-col">
              <div
                className="flex flex-col items-center justify-center gap-4 sm:w-[17rem] w-[13rem] h-[22rem] relative"
                key={content.label}
              >
                <Image
                  src={content.imageSrc}
                  layout="fill"
                  alt="Image"
                  className="rounded-2xl sm:w-[17rem] w-[13rem] relative object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                />
              </div>
              <h4 className={`${Roboto} text-md text-center font-bold`}>
                {content.label}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DTGCarousel;
