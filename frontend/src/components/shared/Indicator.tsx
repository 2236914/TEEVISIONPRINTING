'use client';
import React, { ReactNode } from 'react';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type PropTypes = {
  icon?: ReactNode;
  label: string;
  variant?: 'primary' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
};

const Indicator: React.FC<PropTypes> = ({
  icon,
  label,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
}) => {
  const sizeClasses = {
    sm: 'py-1 px-2 md:px-2.5 text-[10px] md:text-xs gap-1',
    md: 'py-1.5 px-2.5 md:px-3 text-xs md:text-sm gap-1 md:gap-1.5',
    lg: 'py-2 px-3 md:px-4 text-sm md:text-base gap-1.5 md:gap-2',
  };

  const variantClasses = {
    primary: 'bg-primaryT text-black',
    outline: 'bg-transparent border-2 border-primaryT text-black',
    subtle: 'bg-primaryT/20 text-black',
  };

  const baseClasses = `
    ${MaisonNeue}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    rounded-full
    font-bold
    uppercase
    inline-flex items-center justify-center
    whitespace-nowrap
    transition-all duration-200
    ${onClick || href ? 'cursor-pointer hover:scale-105' : ''}
    ${className}
  `;

  const content = (
    <>
      {icon && (
        <span className="inline-flex items-center justify-center shrink-0">
          {icon}
        </span>
      )}
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {content}
      </button>
    );
  }

  return <span className={baseClasses}>{content}</span>;
};

export default Indicator;
