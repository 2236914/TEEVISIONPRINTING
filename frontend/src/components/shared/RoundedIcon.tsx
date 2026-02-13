'use client';
import React, { ReactNode } from 'react';

type PropTypes = {
  icon: ReactNode;
  variant?: 'primary' | 'black' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

const RoundedIcon: React.FC<PropTypes> = ({
  icon,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-7 h-7 md:w-8 md:h-8',
    md: 'w-9 h-9 md:w-10 md:h-10',
    lg: 'w-11 h-11 md:w-12 md:h-12',
    xl: 'w-12 h-12 md:w-14 md:h-14',
  };

  const iconSizeClasses = {
    sm: '[&>svg]:w-3.5 [&>svg]:h-3.5 md:[&>svg]:w-4 md:[&>svg]:h-4',
    md: '[&>svg]:w-4.5 [&>svg]:h-4.5 md:[&>svg]:w-5 md:[&>svg]:h-5',
    lg: '[&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6',
    xl: '[&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7',
  };

  const variantClasses = {
    primary: 'bg-primaryT text-black',
    black: 'bg-black text-white',
    white: 'bg-white text-black shadow-md',
    outline: 'bg-transparent border-2 border-black text-black',
  };

  return (
    <div
      className={`
        inline-flex items-center justify-center
        rounded-full
        shrink-0
        ${sizeClasses[size]}
        ${iconSizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {icon}
    </div>
  );
};

export default RoundedIcon;
