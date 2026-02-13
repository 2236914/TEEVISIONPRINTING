import React from 'react';
import Image from 'next/image';

import InHouseServiceCard from '@/components/main/fourthSection/components/InHouseServiceCard';
import OnlineServiceCard from '@/components/main/fourthSection/components/OnlineServiceCard';
import UploadServiceCard from '@/components/main/fourthSection/components/UploadServiceCard';
import YellowUnderline from '@/components/main/secondSection/components/YellowUnderline';
import Roboto from '@/utilities/fonts/Roboto';
import Termina from '@/utilities/fonts/Termina/Termina';

const FourthSection = () => {
  return (
    <section className="w-full justify-center flex bg-white pt-8 xl:pt-20 pb-12 xl:px-8 2xl:px-0">
      <div className="flex flex-col w-full max-w-[90rem]">
        <div className="flex flex-col relative">
          <div className="flex flex-col gap-2 xl:gap-4 w-full px-8 xl:px-0">
            <h2
              className={`${Termina} text-hero-sm md:text-hero-md xl:text-text-hero-xl 1_5xl:text-hero-1_5xl font-black leading-none`}
            >
              Screen Printing Services for{' '}
              <span className="xl:block">Custom Apparel</span>
            </h2>
            <div className="hidden xl:flex w-full">
              <YellowUnderline width={380} className="w-[20%]" />
            </div>
            <div className="flex md:hidden">
              <YellowUnderline width={150} />
            </div>
            <div className="hidden md:block xl:hidden">
              <YellowUnderline width={250} />
            </div>
            <div className="hidden xl:block xl:absolute xl:top-24 xl:right-0">
              <Image
                width={700}
                height={700}
                src="/main/fourthSection/yourDesignHere.png"
                alt="jacket"
                className="w-[35rem] h-[30rem] object-contain"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                quality={70}
              />
              <div className="flex items-center ml-8 mt-8">
                <video
                  className="rounded-xl xl:w-[30rem] drop-shadow-videoShadow"
                  controls
                  loop
                >
                  <source
                    src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/main/fourthSection/vid.mp4"
                    type="video/mp4"
                  />
                  <track kind="captions" />
                </video>
              </div>
            </div>
          </div>
          <div
            className={`${Roboto} w-full mt-4 md:mt-8 xl:mt-8 xl:max-w-[38rem] 1_5xl:max-w-[45rem] text-[0.8rem] md:text-2xl xl:text-[1rem] 1_5xl:text-lg`}
          >
            <p className="px-8 xl:px-0">
              Tee Vision Printing specializes in screen printing that delivers
              vibrant colors and a durable finish on every item. From custom
              t-shirts to <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/custom-hoodies'>hoodies</a></span> and hats, we ensure your brand’s designs are
              printed with precision and quality.
            </p>
            <Image
              width={400}
              height={400}
              src="/main/fourthSection/yourDesignHere.png"
              alt="jacket"
              className="w-full h-auto max-w-[400px] xl:hidden mt-4 px-8"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              quality={70}
            />

            <p className="mt-8 px-8 xl:px-0">
              We offer multiple ways to get your design ready for print:
            </p>
            <div className="relative flex flex-col w-full mt-12 md:mt-24 xl:mt-8">
              <UploadServiceCard />
              <OnlineServiceCard />
              <InHouseServiceCard />
            </div>
          </div>
          <div className="flex xl:hidden justify-center pt-4 px-8 w-full">
            <video
              className="rounded-xl sm:w-[30rem] md:w-[35rem] xl:w-[30rem] drop-shadow-videoShadow"
              controls
              loop
            >
              <source
                src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/main/fourthSection/vid.mp4"
                type="video/mp4"
              />
              <track kind="captions" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
