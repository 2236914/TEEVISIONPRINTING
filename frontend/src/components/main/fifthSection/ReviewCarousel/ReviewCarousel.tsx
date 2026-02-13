'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import type SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line no-restricted-imports
import './ReviewCarousel.css';

import Account from '@/utilities/SVGs/Account';
import LeftArrow from '@/utilities/SVGs/LeftArrow';
import RightArrow from '@/utilities/SVGs/RightArrow';

const reviews = [
  {
    title: 'I would highly recommend Tee Vision Printing',
    content:
      'They offered a really quick turn around time, helped redraw my designs and were very communicative throughout the entire process. The shirts turned out amazing!!',
    authorName: 'Elli',
    authorDescription: 'CRO APO',
    imageSrc: '/main/fifthSection/Elli.png',
  },
  {
    title: 'Excellent Customer Service',
    content:
      'Thank you to everyone at Tee Vision Printing for making Beet Dude come to life! Not only did our t-shirts turn out great- honestly they really blew us away- but the digital images really honored the original artwork.',
    authorName: 'Nicole Hehn',
    authorDescription: 'Beet Dude',
    imageSrc: '/main/fifthSection/Beet Dude.png',
  },
  {
    title: 'Use These Guys!',
    content:
      'I have purchased twice already from Tee Vision Printing even after the first order had a snafu.  So why did I chance it again? I did so because Benji and Darko made everyting right at a near-immediate pace and without any comment other than, "We are so sorry.  Let us make it right!"',
    authorName: 'Stuart Margel',
    authorDescription: 'The Standard',
    imageSrc: '/main/fifthSection/The Standard.png',
  },
  {
    title: 'Tee Vision was a pleasure to work with.',
    content:
      'From a customer service perspective, they always responded quickly and accommodated any requests I had. They completed all my projects in a timely manner and the quality of the printing was very high. Would recommend to anyone looking to make custom shirts in the Philadelphia area!',
    authorName: 'Spencer Lovejoy',
    authorDescription: 'LoveJoy',
    imageSrc: '/main/fifthSection/LoveJoy.png',
  },
  {
    title: 'They made the best shirts for our school team!',
    content:
      'Communication was timely and they took the time to adjust our designs and answer questions- always in a kind and patient way.  We would absolutely use them again! Thanks Benji, Darko & Team!!',
    authorName: 'Dana Feldman',
    authorDescription: 'Cabin John Middle School',
    imageSrc: '/main/fifthSection/Cabin John Middle School.png',
  },
  {
    title: 'Very Personable and Professional company.',
    content:
      'They always do a great job on our t-shirts for the University and for our charity events.  Have been using them for years and will continue to use them in the future.  Great work!!',
    authorName: 'Michael Huber',
    authorDescription: 'Arcadua University',
    imageSrc: '/main/fifthSection/Arcadia University.png',
  },
];

const ReviewCarousel = () => {
  const swiperRef = useRef<SwiperCore>();
  const [slidesPerView, setSlidesPerView] = useState(1);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (screen.width >= 1280) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView(); // Set initial value
    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
    <div className="review_carousel h-full relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        className="mySwiper"
        loop={true}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.title + index}>
            <div className="flex flex-col w-[15rem] md:w-[25rem] xl:w-[18rem] xl:h-[32rem] 1_5xl:w-[22.2rem] xl:h-[35rem] bg-white shadow-xl rounded-xl p-4 pb-12 xl:pb-4">
              <div className="w-full flex justify-center">
                <Image
                  src={review.imageSrc}
                  alt={review.authorName}
                  width={200}
                  height={200}
                  className="w-[10rem] 1_5xl:w-[13rem]"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  quality={70}
                />
              </div>
              <div className="flex flex-col mt-4">
                <div className="">
                  <h3 className="text-lg font-bold text-center leading-snug">
                    {review.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-4">
                    <Account width={35} height={35} className="h-full" />
                    <div className="w-full">
                      <p className="text-[0.8rem] font-medium">
                        {review.authorName}
                      </p>
                      <p className="text-[0.6rem] font-medium">
                        {review.authorDescription}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-xs font-medium mt-2">{review.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-[30%] right-4 xl:top-60 xl:-right-[0rem] 1_5xl:-right-[1.2rem] z-20">
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
      <div className="absolute xl:hidden top-[30%] left-4 z-20">
        <button
          aria-label="Previous slide"
          onClick={handleNextSlide}
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
  );
};

export default ReviewCarousel;
