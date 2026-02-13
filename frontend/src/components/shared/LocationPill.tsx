'use client';
import React from 'react';
import Link from 'next/link';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type PropTypes = {
  label: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
};

const LocationPill: React.FC<PropTypes> = ({
  label,
  href,
  onClick,
  isActive = false,
  className = '',
}) => {
  const baseClasses = `
    ${MaisonNeue}
    inline-flex items-center justify-center
    px-4 py-3 md:px-6 md:py-4
    rounded-xl
    border-2
    font-bold
    text-xs md:text-sm
    uppercase
    tracking-wide
    text-center
    transition-all duration-200
    whitespace-nowrap
    ${isActive
      ? 'bg-primaryT border-primaryT text-black'
      : 'bg-transparent border-primaryT text-primaryT hover:bg-primaryT hover:text-black'
    }
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
};

export default LocationPill;
