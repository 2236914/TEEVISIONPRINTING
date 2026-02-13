'use client';
import React, { ReactNode } from 'react';

type PropTypes = {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
};

const RoundedCard: React.FC<PropTypes> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-3 md:p-4',
    md: 'p-4 md:p-6',
    lg: 'p-6 md:p-8',
  };

  const variantClasses = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border border-gray-200',
    dark: 'bg-black/80 text-white',
  };

  return (
    <div
      className={`
        rounded-[25px]
        ${paddingClasses[padding]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default RoundedCard;
