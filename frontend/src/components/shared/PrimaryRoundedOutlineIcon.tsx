'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type PropTypes = {
  children: React.ReactNode;
  icon?: ReactNode;
  className?: string;
  desktopFullWidth?: boolean;
  fullwidth?: boolean;
  isLink?: boolean;
  link?: string;
  onClick?: () => void;
};

const PrimaryRoundedOutlineIcon: React.FC<PropTypes> = ({
  children,
  icon,
  onClick,
  fullwidth,
  className,
  desktopFullWidth,
  isLink,
  link = '/',
}) => {
  const baseClassName = `${MaisonNeue} ${fullwidth && `w-full ${desktopFullWidth ? `xl:w-full` : `xl:w-fit`}`} w-fit btn bg-transparent border-[0.2rem] border-primaryT font-extrabold py-2.5 px-4 md:py-4 md:px-6 xl:py-3 xl:px-5 text-xs sm:text-sm md:text-button-md lg:text-button rounded-full transition transform hover:scale-105 hover:bg-transparent hover:border-black hover:text-primaryT inline-flex items-center justify-center gap-1.5 whitespace-nowrap leading-none ${className}`;

  const content = (
    <>
      {icon && <span className="inline-flex items-center justify-center shrink-0">{icon}</span>}
      <span className="inline-flex items-center">{children}</span>
    </>
  );

  if (isLink) {
    return (
      <Link href={link} className={baseClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClassName} onClick={onClick}>
      {content}
    </button>
  );
};

export default PrimaryRoundedOutlineIcon;
