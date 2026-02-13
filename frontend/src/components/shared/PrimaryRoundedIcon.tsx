'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type PropTypes = {
  children: React.ReactNode;
  icon?: ReactNode;
  className?: string;
  desktopFullWidth?: boolean;
  disabled?: boolean;
  fullwidth?: boolean;
  isDiv?: boolean;
  isLink?: boolean;
  link?: string;
  onClick?: () => void;
};

const PrimaryRoundedIcon: React.FC<PropTypes> = ({
  children,
  icon,
  onClick,
  fullwidth,
  desktopFullWidth,
  isDiv,
  isLink,
  link = '/',
  disabled,
  className,
}) => {
  const initialClassName = `${MaisonNeue} ${fullwidth && `w-full ${desktopFullWidth ? `xl:w-full` : `xl:w-fit`}`} btn bg-primaryT border-primaryT font-extrabold border-[0.2rem] py-2.5 px-4 md:py-4 md:px-6 xl:py-3 xl:px-5 text-xs sm:text-sm md:text-button-md lg:text-button rounded-full transition transform hover:scale-105 hover:bg-black hover:border-black hover:text-primaryT inline-flex items-center justify-center gap-1.5 whitespace-nowrap leading-none ${className}`;

  const content = (
    <>
      {icon && <span className="inline-flex items-center justify-center shrink-0">{icon}</span>}
      <span className="inline-flex items-center">{children}</span>
    </>
  );

  if (isLink) {
    return (
      <Link href={link} className={initialClassName}>
        {content}
      </Link>
    );
  }

  if (isDiv) {
    return <div className={initialClassName}>{content}</div>;
  }

  return (
    <button className={initialClassName} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default PrimaryRoundedIcon;
