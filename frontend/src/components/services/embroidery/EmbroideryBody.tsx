import React from 'react';
import Image from 'next/image';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import Termina from '@/utilities/fonts/Termina/Termina';
import Delivery from '@/utilities/SVGs/Delivery';
import Needle from '@/utilities/SVGs/Needle';
import QuickCube from '@/utilities/SVGs/QuickCube';
import Scissors from '@/utilities/SVGs/Scissors';

const EmbroideryBody = () => {
  const descriptions = [
    {
      title: 'Embroidery Orders',
      subtitle: 'Starting 12 pieces',
      icon: <Needle width={52} height={52} />,
    },
    {
      title: 'Durable',
      subtitle: 'Perfect for Long Lasting Prints',
      icon: <Scissors width={52} height={52} />,
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

  const embroideredProducts = [
    {
      label: 'Manor College Classic Beanies ',
      imageSrc: '/embroidery/manor-college-classic-beanies.webp',
    },
    {
      label: 'Fuji Mountain Hats',
      imageSrc: '/embroidery/fuji-mountain-hats.png',
    },
    {
      label: 'Euphoria Hats',
      imageSrc: '/embroidery/euphoria-hats.png',
    },
    {
      label: 'D&S Concrete and Masonry Jackets',
      imageSrc: '/embroidery/ds-concrete-and-masonry-jackets.webp',
    },
  ];

  const embroideredImages = [
    {
      imageSrc: '/embroidery/sanuki-udon.jpg',
      alt: 'Sanuki Udon',
    },
    {
      imageSrc: '/embroidery/collective-temporality.jpg',
      alt: 'Collective Temporality',
    },
    {
      imageSrc: '/embroidery/columbia.jpg',
      alt: 'Columbia',
    },
    {
      imageSrc: '/embroidery/franco-metal-works.jpg',
      alt: 'Franco Metal Works',
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
    <main>
      <section className="w-full relative flex mt-0 xl:mt-20">
        <div className="bg-black absolute w-full h-full z-0">
          <Image
            src="/embroidery/embroidery-bg.png"
            layout="fill"
            alt="Multiple embroidery machines working on t-shirt designs, ideal for custom t-shirt design and bulk production."
            className="opacity-50 object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
        <div className="flex flex-col gap-12 w-full z-[1] px-8 md:px-12 xl:px-0 pb-20">
          <div className="flex flex-col gap-2 items-center justify-center w-full pt-48">
            <div className="flex flex-col items-center max-w-[80rem]">
              <h1
                className={`${Termina} uppercase font-black text-3xl md:text-4xl xl:text-5xl text-white text-center`}
              >
                Make it more Premium
              </h1>
              <div className="flex w-[90%] items-center gap-4">
                <div className="h-[0.2rem] flex-grow bg-white" />
                <p
                  className={`${Termina} text-white font-black text-xl md:text-xl xl:text-2xl uppercase text-center`}
                >
                  with Embroidery
                </p>
                <div className="h-[0.2rem] flex-grow bg-white" />
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
      <section className="flex flex-col gap-12 items-center justify-center p-4 xl:p-12 pt-12 mt-12">
        <h2
          className={`${Roboto} uppercase text-3xl xl:text-4xl font-black text-center`}
        >
          Featured Embroidered Items
        </h2>
        <div className="flex md:flex-row flex-col flex-wrap justify-center gap-16 px-8">
          {embroideredProducts.map((product) => {
            return (
              <div
                className="flex flex-col items-center gap-4 sm:w-[17rem] w-[13rem]"
                key={product.label}
              >
                <Image
                  src={product.imageSrc}
                  width={300}
                  height={300}
                  alt={product.label}
                  className="rounded-2xl sm:w-[17rem] w-[13rem]"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                />
                <div className="flex items-center flex-col text-center">
                  <h3 className={`${MaisonNeue} text-2xl font-bold`}>
                    {product.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-12 items-center justify-center px-4 pb-4 xl:px-12 xl:pb-12 mt-12">
        <div className="flex md:flex-row flex-col flex-wrap justify-center gap-16 px-8">
          {embroideredImages.map((image) => {
            return (
              <div
                className="flex flex-col items-center gap-4 sm:w-[17rem] w-[13rem]"
                key={image.alt}
              >
                <Image
                  src={image.imageSrc}
                  width={300}
                  height={300}
                  alt={image.alt}
                  className="rounded-2xl sm:w-[17rem] w-[13rem]"
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
    </main>
  );
};

export default EmbroideryBody;
