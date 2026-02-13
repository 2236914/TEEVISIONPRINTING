'use client';
import React, { ReactNode, ButtonHTMLAttributes } from 'react';

type PropTypes = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  variant?: 'primary' | 'black' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
};

const RoundedIconButton: React.FC<PropTypes> = ({
  icon,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
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
    primary: `
      bg-primaryT text-black
      hover:bg-black hover:text-primaryT
      active:scale-95
    `,
    black: `
      bg-black text-white
      hover:bg-primaryT hover:text-black
      active:scale-95
    `,
    white: `
      bg-white text-black shadow-md
      hover:bg-primaryT hover:shadow-lg
      active:scale-95
    `,
    outline: `
      bg-transparent border-2 border-black text-black
      hover:bg-black hover:text-white hover:border-black
      active:scale-95
    `,
  };

  const baseClasses = `
    inline-flex items-center justify-center
    rounded-full
    shrink-0
    cursor-pointer
    transition-all duration-200 ease-in-out
    ${sizeClasses[size]}
    ${iconSizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {icon}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {icon}
    </button>
  );
};

export default RoundedIconButton;
