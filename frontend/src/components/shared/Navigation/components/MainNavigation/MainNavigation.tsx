import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MobileNavigationTrapezoid from '@/components/shared/Navigation/components/MainNavigation/components/MobileNavigationTrapezoid/MobileNavigationTrapezoid';
import NavigationTrapezoid from '@/components/shared/Navigation/components/MainNavigation/components/NavigationTrapezoid/NavigationTrapezoid';
import Instagram from '@/utilities/SVGs/Instagram';
import Linkedin from '@/utilities/SVGs/Linkedin';

const MainNavigation = () => {
  return (
    <>
      <div className="h-[6rem] bg-[#1E1D1D] w-full hidden xl:block">
        <div className="flex w-full h-full">
          <div className="bg-[#1E1D1D] flex items-center justify-center w-1/4">
            <Link href="/">
              <Image
                src="/main/logo.png"
                width={130}
                height={130}
                alt="logo"
                className="w-[11rem] h-auto object-contain"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                loading="eager"
              />
            </Link>
          </div>
          <NavigationTrapezoid />
          <div className="bg-[#1E1D1D] flex gap-4 items-center justify-center w-1/4">
            <Link
              aria-label="Instagram"
              href="https://www.instagram.com/teevisionprint"
            >
              <Instagram
                width={80}
                height={100}
                className="w-[2.5rem] h-[2.5rem]"
              />
            </Link>
            <Link
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/tee-vision-printing/"
            >
              <Linkedin
                width={80}
                height={100}
                className="w-[2.5rem] h-[2.5rem]"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[5rem] md:h-[6rem] bg-[#1E1D1D] w-full block xl:hidden">
        <div className="flex w-full h-full">
          <div className="w-1/2 bg-[#1E1D1D] flex-grow flex items-center justify-center pl-4 pr-8">
            <Link href="/">
              <Image
                src="/main/logo.png"
                width={100}
                height={100}
                alt="logo"
                className="w-[8rem] h-auto object-contain"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                loading="eager"
              />
            </Link>
          </div>
          <MobileNavigationTrapezoid />
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
