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

const PrimaryButton: React.FC<PropTypes> = ({
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
  const initialClassName = `${MaisonNeue} ${fullwidth && `w-full ${desktopFullWidth ? `xl:w-full` : `xl:w-fit`}`} h-full btn bg-primaryT border-primaryT font-extrabold border-[0.2rem] py-3 px-4 md:py-6 md:px-[1.8rem] xl:py-4 xl:px-4 text-xs sm:text-sm md:text-button-md lg:text-button rounded-md transition transform hover:scale-105 hover:bg-primaryT hover:border-primaryT whitespace-nowrap ${className}`;

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

export default PrimaryButton;
