'use client';
import React from 'react';
import Link from 'next/link';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type PropTypes = {
  children: React.ReactNode;
  className?: string;
  desktopFullWidth?: boolean;
  disabled?: boolean;
  fullwidth?: boolean;
  isDiv?: boolean;
  isLink?: boolean;
  link?: string;
  onClick?: () => void;
};

const PrimaryRounded: React.FC<PropTypes> = ({
  children,
  onClick,
  fullwidth,
  desktopFullWidth,
  isDiv,
  isLink,
  link = '/',
  disabled,
  className,
}) => {
  const initialClassName = `${MaisonNeue} ${fullwidth && `w-full ${desktopFullWidth ? `xl:w-full` : `xl:w-fit`}`} btn bg-primaryT border-primaryT font-extrabold border-[0.2rem] py-2.5 px-4 md:py-4 md:px-6 xl:py-3 xl:px-5 text-xs sm:text-sm md:text-button-md lg:text-button rounded-full transition transform hover:scale-105 hover:bg-primaryT hover:border-primaryT whitespace-nowrap leading-none ${className}`;

  if (isLink) {
    return (
      <Link href={link} className={initialClassName}>
        {children}
      </Link>
    );
  }

  if (isDiv) {
    return <div className={initialClassName}>{children}</div>;
  }

  return (
    <button className={initialClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default PrimaryRounded;
