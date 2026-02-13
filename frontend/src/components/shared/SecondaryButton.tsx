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

const SecondaryButton: React.FC<PropTypes> = ({
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
        className={`${MaisonNeue} ${fullwidth && `w-full ${desktopFullWidth ? `xl:w-full` : `xl:w-fit`}`} w-fit btn bg-transparent border-[0.2rem] border-primaryT font-extrabold md:py-6 xl:py-4 text-button md:text-button-md lg:text-button rounded-md md:px-[1.8rem] xl:px-4 transition transform hover:scale-105 hover:bg-transparent hover:border-primaryT ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${MaisonNeue} ${fullwidth && `w-full ${desktopFullWidth ? `xl:w-full` : `xl:w-fit`}`} w-fit btn bg-transparent border-[0.2rem] border-primaryT font-extrabold md:py-6 xl:py-4 text-button md:text-button-md lg:text-button rounded-md md:px-[1.8rem] xl:px-4 transition transform hover:scale-105 hover:bg-transparent hover:border-primaryT ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
