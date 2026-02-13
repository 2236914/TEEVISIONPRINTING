import React from 'react';
import Image from 'next/image';

import DTGCarousel from '@/components/services/direct-to-garment-printing/carousel/DTGCarousel';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import Termina from '@/utilities/fonts/Termina/Termina';
import Delivery from '@/utilities/SVGs/Delivery';
import Eyes from '@/utilities/SVGs/Eyes';
import Flower from '@/utilities/SVGs/Flower';
import QuickCube from '@/utilities/SVGs/QuickCube';

const DirectToGarmentPrinting = () => {
  const descriptions = [
    {
      title: 'DTG Orders',
      subtitle: 'Starting 12 pieces',
      icon: <Flower width={52} height={52} />,
    },
    {
      title: 'High Detail',
      subtitle: 'Perfect for Long Lasting Prints',
      icon: <Eyes width={52} height={52} />,
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

  const dtgPrints = [
    {
      label: 'UPENN Event Shirts',
      imageSrc: '/direct-to-garment-printing/alpha-phi-omega-shirts.png',
    },
    {
      label: 'Beet Squad Project',
      imageSrc: '/direct-to-garment-printing/beet-squad-project.png',
    },
    {
      label: 'Euphoria Shirts',
      imageSrc: '/direct-to-garment-printing/euphoria-shirts.png',
    },
    {
      label: 'Shirts',
      imageSrc: '/direct-to-garment-printing/gc-shirt.png',
    },
    {
      label: 'Martin Amini 2023 Merch',
      imageSrc: '/direct-to-garment-printing/martini-amini-2023-merch.png',
    },
    {
      label: 'Studio Ghibli Shirts',
      imageSrc: '/direct-to-garment-printing/sutdio-ghibli-shirts.png',
    },
    {
      label: 'Swayzee Logistics Company Shirts',
      imageSrc:
        '/direct-to-garment-printing/swayzee-logistics-company-shirts.png',
    },
    {
      label: 'Tomorrow Energy Hoodies',
      imageSrc: '/direct-to-garment-printing/tomorrow-energy-hoodies.png',
    },
  ];

  const dtgImages = [
    {
      imageSrc: '/direct-to-garment-printing/featured-1.jpg',
      alt: 'Featured 1',
    },
    {
      imageSrc: '/direct-to-garment-printing/featured-2.png',
      alt: 'Featured 2',
    },
    {
      imageSrc: '/direct-to-garment-printing/featured-3.webp',
      alt: 'Featured 3',
    },
    {
      imageSrc: '/direct-to-garment-printing/featured-4.webp',
      alt: 'Featured 4',
    },
  ];

  const designServices = [
    {
      label: 'Logo Package',
      descriptions:
        'For those who wants an original or a redesign of their logo',
      imageSrc: '/screen-printing/logo-package.png',
    },
    {
      label: 'Brand Identity Pack',
      descriptions:
        'For those who needs an entire merch collection logo and designs',
      imageSrc: '/screen-printing/brand-identity-pack.png',
    },
    {
      label: 'Merch Drop',
      descriptions:
        'For those who needs assistance with printing and delivering their merch',
      imageSrc: '/screen-printing/merch-drop.webp',
    },
  ];

  return (
    <div>
      <section className="w-full relative flex xl:mt-20">
        <div className="bg-black absolute w-full h-full z-0">
          <Image
            src="/direct-to-garment-printing/dtg-bg.png"
            layout="fill"
            alt="Dark t-shirt with a printed graphic, illustrating custom t-shirt design and direct-to-garment printing."
            className="opacity-50 object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
        <div className="flex flex-col gap-12 w-full z-[1] px-8 md:px-12 xl:px-0 pb-20">
          <div className="flex flex-col gap-2 items-center justify-center w-full pt-48">
            <div className="flex flex-col items-center max-w-[85rem]">
              <h1
                className={`${Termina} uppercase font-black text-3xl md:text-4xl xl:text-5xl text-white text-center`}
              >
                Print Detailed Full Colored Designs
              </h1>
              <div className="flex w-[90%] items-center gap-4">
                <div className="h-[0.2rem] flex-grow bg-white" />
                <p
                  className={`${Termina} text-white font-black text-md md:text-xl xl:text-2xl uppercase text-center`}
                >
                  Through <span className="block xl:inline">DTG Prints</span>
                </p>
                <div className="h-[0.2rem] flex-grow bg-white" />
              </div>
            </div>
          </div>
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
      </section>
      <section className="mt-12">
        <div className="flex flex-col items-center w-full">
          <div className="text-black p-8 w-full xl:w-[50rem] xl:rounded-lg">
            <h2
              className={`${Roboto} uppercase text-4xl font-black text-center`}
            >
              Featured DTG Prints
            </h2>
          </div>
          <div className="bg-white px-8 pb-8 flex items-center justify-center w-full">
            <div className=" w-full xl:w-[70rem]">
              <DTGCarousel contents={dtgPrints} />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-12 items-center justify-center px-4 pb-4 xl:px-12 xl:pb-12 mt-12">
        <div className="flex md:flex-row flex-col flex-wrap justify-center gap-12 px-8">
          {dtgImages.map((image) => {
            return (
              <div
                className="flex flex-col items-center gap-4 sm:w-[17rem] w-[13rem] h-[22rem] relative"
                key={image.alt}
              >
                <Image
                  src={image.imageSrc}
                  layout="fill"
                  alt={image.alt}
                  className="rounded-2xl sm:w-[17rem] w-[13rem] relative object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-12 items-center justify-center px-4 xl:px-12 pt-12 pb-32">
        <h2
          className={`${Roboto} uppercase text-3xl xl:text-4xl font-black text-center`}
        >
          If you&apos;re in need of design services, we have
        </h2>
        <div className="flex md:flex-row flex-col flex-wrap justify-center gap-4 px-8">
          {designServices.map((designService) => {
            return (
              <div
                className="flex flex-col items-center gap-2 sm:w-[20rem] w-[15rem]"
                key={designService.label}
              >
                <Image
                  src={designService.imageSrc}
                  width={300}
                  height={300}
                  alt={designService.label}
                  className="rounded-2xl sm:w-[20rem] w-[15rem]"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                />
                <div className="flex items-center flex-col text-center">
                  <h3 className={`${MaisonNeue} text-2xl font-bold`}>
                    {designService.label}
                  </h3>
                  <p className={`${MaisonNeue} text-lg`}>
                    {designService.descriptions}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default DirectToGarmentPrinting;