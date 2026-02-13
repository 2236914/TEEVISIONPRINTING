import React from 'react';
import Image from 'next/image';

import PrimaryButton from '@/components/shared/PrimaryButton';
import RequestAQuoteModalServerWrapper from '@/components/shared/RequestAQuoteModal/RequestAQuoteModalServerWrapper';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import Termina from '@/utilities/fonts/Termina/Termina';
import Delivery from '@/utilities/SVGs/Delivery';
import Ink from '@/utilities/SVGs/Ink';
import PhotoPrints from '@/utilities/SVGs/PhotoPrints';
import QuickCube from '@/utilities/SVGs/QuickCube';


const StartScreenPrinting = () => {
  const descriptions = [
    {
      title: 'Screen Print Orders',
      subtitle: 'Starting 12 pieces',
      icon: <PhotoPrints width={52} height={52} />,
    },
    {
      title: 'Premium Inks',
      subtitle: 'Perfect for Vibrant Prints',
      icon: <Ink width={52} height={52} />,
    },
    {
      title: 'Quick Turnaround',
      subtitle: '1-2 weeks',
      icon: <QuickCube width={52} height={52} />,
    },
    {
      title: 'Free Delivery',
      subtitle: 'Anywhere in United States',
      icon: <Delivery width={52} height={52} />,
    },
  ];

  return (
      <main className="bg-white">
      <section className="w-full relative flex mt-[5rem] xl:mt-[6rem]">
        <div className="bg-black absolute w-full h-full z-0">
          <Image
            src="/screen-printing/screen-printing-bg.png"
            layout="fill"
            alt="Screen printing a green design on a t-shirt, highlighting custom t-shirt design and silk screen printing."
            className="opacity-50 object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
        <div className="flex flex-col gap-12 w-full z-[1] px-8 md:px-12 xl:px-0 pb-20">
          <div className="flex flex-col gap-8 items-center justify-center w-full pt-32">
            <div className="flex flex-col items-center max-w-[80rem]">
              <h1
                className={`${Termina} uppercase font-black text-3xl md:text-4xl xl:text-5xl text-white text-center`}
              >
                Get Bold, Long-Lasting Prints with{' '}
                <span className="bg-yellow-400 text-[#fdcb00] px-2 py-1 rounded">
                  Screen Printing
                </span>
              </h1>
            </div>
            
            {/* Subheading and Buttons */}
            <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
              <p className={`${MaisonNeue} text-white text-lg md:text-2xl`}>
                Experience the craftsmanship of pro-grade screen printing—superb clarity, rich detail, and prints that last.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-4 w-full xl:w-fit items-stretch">
                <RequestAQuoteModalServerWrapper className="w-full xl:w-fit">
                  <div
                    className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-primaryT border-primaryT font-extrabold border-[0.2rem] md:py-4 text-button md:text-button-md lg:text-[1.15rem] rounded-md md:px-[2.5rem] transition transform hover:scale-105 hover:bg-primaryT hover:border-primaryT min-w-[280px] flex items-center justify-center`}
                    style={{ height: '64px' }}
                  >
                   REQUEST FREE QUOTE
                  </div>
                </RequestAQuoteModalServerWrapper>
                <a href="/products" className="w-full xl:w-fit">
                  <div
                    className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-transparent border-primaryT text-primaryT font-extrabold border-[0.2rem] md:py-4 text-button md:text-button-md lg:text-[1.15rem] rounded-md md:px-[2.5rem] transition transform hover:scale-105 hover:bg-primaryT hover:text-black min-w-[280px] flex items-center justify-center cursor-pointer`}
                    style={{ height: '64px' }}
                  >
                   EXPLORE OUR COLLECTION
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-center w-full gap-16 bg-primaryT p-8 rounded-md xl:rounded-none">
              {descriptions.map((description) => (
                <div
                  className={`flex flex-col items-center ${MaisonNeue}`}
                  key={description.title}
                >
                  {description.icon}
                  <p className="font-bold text-lg">{description.title}</p>
                  <p className="text-md ">{description.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is Screen Printing? */}
      <section className="flex max-w-[1440px] mx-auto flex-col gap-8 items-center justify-center p-4 xl:p-12 pt-12">
        <h2
          className={`${Roboto} uppercase text-3xl xl:text-4xl font-black text-center`}
        >
          What is Screen Printing?
        </h2>
        <div className="flex flex-col lg:flex-row w-full gap-4">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <Image
              src="/screen-printing/what-is-screen-printing.jpg"
              width={500}
              height={500}
              alt="Colorful paint buckets for screen printing, ideal for custom t-shirt design and personalized apparel."
              className="mt-4 rounded-[18px]"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className={`${MaisonNeue} text-[18px] mt-4`}>
              Screen printing is a popular and proven method for printing custom
              designs onto garments and other surfaces. It works by pushing ink
              through a mesh screen onto fabric, one color at a time. Each
              screen is created specifically for the design, allowing for sharp
              detail and vibrant color.
            </p>
            <p className={`${MaisonNeue} text-[18px] mt-4`}>
              This technique is especially well-suited for T-shirts, hoodies,
              tote bags, and other apparel because of its bold finish and
              lasting durability.
            </p>
            <p className={`${MaisonNeue} text-[18px] mt-4`}>
              Beyond the process itself, screen printing offers unmatched
              quality, consistency, and value. It{"'"}s ideal for projects that
              require high-volume production without sacrificing detail or color
              accuracy. The thick ink used in screen printing creates vivid,
              long-lasting designs that won{"'"}t fade or crack easily, making
              it perfect for everyday wear, frequent washing, or outdoor use.
            </p>
            <p className={`${MaisonNeue} text-[18px] mt-4`}>
              With options for specialty inks and large surface coverage, screen
              printing also provides creative flexibility—helping brands,
              businesses, and organizations make a strong visual impact with
              every print.
            </p>
            <div className="mt-6">
              <PrimaryButton isLink link="/products">
                Order Now
              </PrimaryButton>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
};

export default StartScreenPrinting;