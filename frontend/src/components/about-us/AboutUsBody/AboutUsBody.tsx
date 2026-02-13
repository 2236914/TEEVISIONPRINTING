import React from 'react';
import Image from 'next/image';

import SixthSectionServerWrapper from '@/components/main/sixthSection/SixthSectionServerWrapper';

import MemberCard from '@/components/about-us/MemberCard';
import FifthSection from '@/components/main/fifthSection/FifthSection';
import AboutUsSchema from '@/components/schemas/AboutSchema';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import Termina from '@/utilities/fonts/Termina/Termina';

const AboutUsBody = () => {
  const members = [
    {
      name: 'Sae Choi',
      role: 'Founder',
      imageSrc: '/about-us/sae.jpeg',
    },
    {
      name: 'Sean Park',
      role: 'Operations + Sales',
      imageSrc: '/about-us/sean.jpeg',
    },
    {
      name: 'Jose Olmedo',
      role: 'Print Production',
      imageSrc: '/about-us/jose.jpeg',
    },
    {
      name: 'Darko Voislavovic',
      role: 'Operations + Designer',
      imageSrc: '/about-us/darko.jpeg',
    },
  ];

  return (
    <main className="w-full min-h-screen mt-[5rem] xl:mt-[6rem] bg-white">
      <AboutUsSchema />
      <section className="w-full flex flex-col items-center justify-center bg-white">
        <div className="w-full h-[10rem] xl:h-[20rem] bg-black">
          <Image
            src="/about-us/bg.png"
            width={2000}
            height={2000}
            alt="Large automatic screen printing machine, perfect for bulk screen print shirts and custom t-shirt production."
            className="opacity-50 object-cover w-full h-full"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>
        <div className="flex flex-col items-center w-full h-full max-w-[70rem] px-8 pt-4 pb-16 xl:pb-24 text-[1rem] xl:text-[1.2rem] text-center">
          <Image
            src="/icon.png"
            alt="Icon"
            width={200}
            height={200}
            className="w-[8rem] xl:w-[12rem]"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
          <h1
            className={`${Termina} block text-[2rem] xl:text-[3rem] font-blac text-black text-center`}
          >
            <span>About Tee vision</span>
          </h1>
          <p className="mt-6">
            With over a decade of experience in the screen printing industry,
            we’ve mastered the art of screenprinting. We’ve worked with huge
            businesses, brands, and individuals to create exactly what they
            wanted and deliver it on time. Whether you need vibrant graphics,
            detailed prints, or unique custom work, we’re here to make it work.
          </p>
          <p className="mt-4">
            Let’s create something incredible together—one print at a time!
          </p>
        </div>
      </section>
      <section className="flex justify-center bg-[#F7F7F8]">
        <div className="flex flex-col items-center xl:flex-row gap-8 px-8 py-8 xl:py-16 max-w-[70rem]">
          <div
            className={`${Roboto} xl:w-[50%] w-full text-center xl:text-left text-[1rem] xl:text-[1.2rem]`}
          >
            <h2 className={`${Termina} font-black text-[2rem] xl:text-[3rem]`}>
              Our Vision
            </h2>
            <p className="mt-6">
              Making you happy with our quality of service and timely delivery,
              whether you’re a business, corporation, school, brand, or
              influencer.
            </p>
            <p className="mt-4">
              We’ll show you how much we care and what results we provide.
            </p>
          </div>
          <video
            className="sm:w-[30rem] md:w-[35rem] xl:w-[30rem]"
            controls
            loop
          >
            <source
              src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/about-us/Video.mp4"
              type="video/mp4"
            />
            <track kind="captions" />
          </video>
        </div>
      </section>
      <section className="w-full bg-white">
        <div className="flex flex-col items-center justify-center py-8 xl:py-16">
          <h2 className="text-center">
            <span className={`${MaisonNeue} text-[1.5rem] xl:text-[2rem]`}>
              Meet
            </span>
            <span
              className={`${Termina} block text-[2rem] xl:text-[3rem] font-black`}
            >
              The Team
            </span>
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center">
            {members.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
      <FifthSection />
      <SixthSectionServerWrapper />
    </main>
  );
};

export default AboutUsBody;
