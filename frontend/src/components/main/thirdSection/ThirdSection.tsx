import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import YellowUnderline from '@/components/main/secondSection/components/YellowUnderline';
import PastProjectCarousel from '@/components/main/thirdSection/components/PastProjectCarousel/PastProjectCarousel';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';

const projectsFromTile = [
  {
    title: 'Euphoria',
    date: 'December 25,2022',
    imageSrc: '/main/thirdSection/proj1.webp',
  },
  {
    title: 'Resolution Games',
    date: 'December 25,2022',
    imageSrc: '/main/thirdSection/proj2.webp',
  },
  {
    title: 'Cap and Stem',
    date: 'December 25,2022',
    imageSrc: '/main/thirdSection/proj3.webp',
  },
  {
    title: 'Sonic Studios',
    date: 'December 25,2022',
    imageSrc: '/main/thirdSection/proj4.webp',
  },
  {
    title: 'Skateboard Shop',
    date: 'December 25,2022',
    imageSrc: '/main/thirdSection/proj5.webp',
  },
  {
    title: 'Amini',
    date: 'December 25,2022',
    imageSrc: '/main/thirdSection/proj6.webp',
  },
  {
    title: 'Seek Joy',
    date: 'December 25,2022',
    imageSrc: '/main/thirdSection/proj7.webp',
  },
  {
    title: 'Mishimoto',
    date: 'December 25,2022',
    imageSrc: '/main/thirdSection/proj8.webp',
  },
];

const customerCompanyLogos = [
  '/main/thirdSection/springboardLogo.png',
  '/main/thirdSection/chrisChoLogo.png',
  '/main/thirdSection/martinAminiLogo.png',
  '/main/thirdSection/midAtlanticLogo.png',
  '/main/thirdSection/providenceChurchLogo.png',
];

const ThirdSection = () => {
  return (
    <section className="w-full flex items-center justify-center bg-white">
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col xl:flex-row justify-between pt-12 md:pt-16 xl:pt-36 xl:max-w-[90rem] w-full px-8">
            <div className="flex flex-col xl:gap-2">
              <h2
                className={`${Termina} text-hero-sm md:text-hero-md xl:text-text-hero-xl 1_5xl:text-hero-1_5xl font-black text-darkGrey`}
              >
                OUR PAST PROJECTS
              </h2>
              <div className="xl:flex hidden w-full justify-center">
                <YellowUnderline width={400} className="w-[50%]" />
              </div>
              <div className="block xl:hidden md:hidden">
                <YellowUnderline width={150} />
              </div>
              <div className="hidden md:block xl:hidden">
                <YellowUnderline width={250} />
              </div>
            </div>
            <div className="xl:w-[30rem] mt-4 xl:mt-0">
              <p className="text-darkGrey xl:text-right text-md md:text-2xl xl:text-[1rem] 1_5xl:text-lg">
                Take a look at the custom apparel we’ve created for businesses
                and events. Quality prints, standout designs, and happy
                clients—your brand could be next!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center mt-4 md:mt-12 xl:mt-8">
          <PastProjectCarousel />
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 mt-8 xl:mt-16">
          {projectsFromTile.map((project, index) => (
            <div className="relative group" key={index}>
              <Image
                src={project.imageSrc}
                width={300}
                height={300}
                alt={project.title}
                className="w-full h-auto object-contain"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                quality={70}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4 xl:p-8">
                  <h3
                    className={`${MaisonNeue} text-[1.2rem] md:text-[1.7rem] xl:text-[1.5rem] font-extrabold leading-none`}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-darkGrey">
          <Marquee pauseOnHover={true} className="flex w-fit" autoFill={true}>
            <div className="flex gap-36 mr-36">
              {customerCompanyLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-[6rem] md:w-[8rem] xl:w-[11rem]">
                    <Image
                      src={logo}
                      width={150}
                      height={150}
                      alt="customer company logo"
                      className="w-full"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    />
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
