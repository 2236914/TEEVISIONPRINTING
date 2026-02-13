'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import type SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line no-restricted-imports
import './RightSection.css';

import CategoryTab from '@/components/main/firstSection/components/RightSection/components/CategoryTab/CategoryTab';
import TrapezoidBackground from '@/components/main/firstSection/components/RightSection/components/TrapezoidBackground';

const carouselImages = [
  '/main/firstSection/tshirt.png',
  '/main/firstSection/sweatshirt.png',
  '/main/firstSection/hoodies.png',
];

const RightSection = () => {
  const swiperRef = useRef<SwiperCore>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const onRightArrowClick = () => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const onLeftArrowClick = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentSlide(swiper.realIndex);
  };

  const handleTabChange = (tab: number) => {
    setCurrentSlide(tab);
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(currentSlide);
    }
  }, [currentSlide]);

  return (
    <div className="right-section_carousel">
      <div className="relative xl:mb-4">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          className="mySwiper"
          loop={true}
        >
          {carouselImages.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                height={400}
                width={400}
                alt={`Carousel Image ${index + 1}`}
                className="z-0 xl:z-50 w-auto h-full pt-6 xl:pt-12"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                quality={70}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute flex items-end left-0 bottom-0 w-full px-8 xl:px-6 2xl:px-12">
          <TrapezoidBackground />
        </div>
      </div>
      <CategoryTab
        onRightArrowClick={onRightArrowClick}
        onLeftArrowClick={onLeftArrowClick}
        currentSlide={currentSlide}
        carouselImagesLength={carouselImages.length}
        handleTabChange={handleTabChange}
      />
    </div>
  );
};

export default RightSection;
