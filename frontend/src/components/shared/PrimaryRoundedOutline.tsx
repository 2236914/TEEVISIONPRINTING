'use client';
import React from 'react';
import Link from 'next/link';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type PropTypes = {
  children: React.ReactNode;
  className?: string;
  desktopFullWidth?: boolean;
  fullwidth?: boolean;
  isLink?: boolean;
  link?: string;
  onClick?: () => void;
};

const PrimaryRoundedOutline: React.FC<PropTypes> = ({
  children,
  onClick,
  fullwidth,
  className,
  desktopFullWidth,
  isLink,
  link = '/',
}) => {
  if (isLink) {
    return (
      <Link
        href={link}
        className={`${MaisonNeue} ${fullwidth && `w-full ${desktopFullWidth ? `xl:w-full` : `xl:w-fit`}`} w-fit btn bg-transparent border-[0.2rem] border-primaryT font-extrabold py-2.5 px-4 md:py-4 md:px-6 xl:py-3 xl:px-5 text-xs sm:text-sm md:text-button-md lg:text-button rounded-full transition transform hover:scale-105 hover:bg-transparent hover:border-primaryT whitespace-nowrap leading-none ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${MaisonNeue} ${fullwidth && `w-full ${desktopFullWidth ? `xl:w-full` : `xl:w-fit`}`} w-fit btn bg-transparent border-[0.2rem] border-primaryT font-extrabold py-2.5 px-4 md:py-4 md:px-6 xl:py-3 xl:px-5 text-xs sm:text-sm md:text-button-md lg:text-button rounded-full transition transform hover:scale-105 hover:bg-transparent hover:border-primaryT whitespace-nowrap leading-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryRoundedOutline;
