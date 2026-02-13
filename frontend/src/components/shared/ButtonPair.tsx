'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type ButtonConfig = {
  icon?: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary';
};

type PropTypes = {
  primaryButton: ButtonConfig;
  secondaryButton: ButtonConfig;
  className?: string;
};

const ButtonPair: React.FC<PropTypes> = ({
  primaryButton,
  secondaryButton,
  className = '',
}) => {
  const getButtonClasses = (variant: 'primary' | 'secondary') => {
    const base = `
      ${MaisonNeue}
      inline-flex items-center justify-center gap-2
      py-2.5 px-5 md:py-3 md:px-6
      rounded-full
      font-bold
      text-xs md:text-sm
      uppercase
      tracking-wide
      transition-all duration-200
      whitespace-nowrap
      active:scale-[0.98]
    `;

    if (variant === 'primary') {
      return `${base} bg-black text-white hover:bg-primaryT hover:text-black`;
    }
    // secondary - outline style
    return `${base} bg-white border-2 border-black text-black hover:bg-black hover:text-white`;
  };

  const renderButton = (config: ButtonConfig) => {
    const classes = getButtonClasses(config.variant);
    const content = (
      <>
        {config.icon && <span className="shrink-0">{config.icon}</span>}
        <span>{config.label}</span>
      </>
    );

    if (config.href) {
      return (
        <Link href={config.href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button onClick={config.onClick} className={classes}>
        {content}
      </button>
    );
  };

  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto ${className}`}>
      {renderButton(secondaryButton)}
      {renderButton(primaryButton)}
    </div>
  );
};

export default ButtonPair;
