'use client';
import React, { ReactNode } from 'react';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type IconNavPillItem = {
  id: string;
  label: string;
  icons?: ReactNode[];
};

type PropTypes = {
  items: IconNavPillItem[];
  activeId: string;
  onSelect: (id: string) => void;
  variant?: 'filled' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Keep pills in one line with horizontal scroll on overflow */
  scrollable?: boolean;
  className?: string;
};

const IconNavPill: React.FC<PropTypes> = ({
  items,
  activeId,
  onSelect,
  variant = 'filled',
  size = 'md',
  scrollable = false,
  className = '',
}) => {
  const sizeClasses = {
    xs: 'py-1 px-2 text-[9px] md:text-[10px] gap-1',
    sm: 'py-1.5 px-2.5 md:px-3 text-[10px] md:text-xs gap-1.5 md:gap-2',
    md: 'py-2 px-3 md:px-4 text-xs md:text-sm gap-2 md:gap-3',
    lg: 'py-2.5 px-4 md:px-5 text-sm md:text-base gap-2.5 md:gap-3',
  };

  const iconSizeClasses = {
    xs: '[&>svg]:w-3 [&>svg]:h-3',
    sm: '[&>svg]:w-3.5 [&>svg]:h-3.5 md:[&>svg]:w-4 md:[&>svg]:h-4',
    md: '[&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-5 md:[&>svg]:h-5',
    lg: '[&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6',
  };

  const getItemClasses = (isActive: boolean) => {
    const base = `
      ${MaisonNeue}
      ${sizeClasses[size]}
      rounded-full
      font-bold
      uppercase
      inline-flex items-center justify-center
      transition-all duration-200
      cursor-pointer
      whitespace-nowrap
    `;

    if (variant === 'filled') {
      return isActive
        ? `${base} bg-primaryT text-black`
        : `${base} bg-transparent text-black hover:bg-primaryT/20`;
    }

    // outline variant
    return isActive
      ? `${base} bg-primaryT border-2 border-primaryT text-black`
      : `${base} bg-transparent border-2 border-black/20 text-black hover:border-primaryT`;
  };

  return (
    <div
      className={`
        inline-flex items-center
        bg-background4 rounded-full
        p-1
        gap-1
        ${scrollable ? 'overflow-x-auto scrollbar-hide max-w-full' : 'flex-wrap'}
        ${className}
      `}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={getItemClasses(isActive)}
          >
            <span>{item.label}</span>
            {item.icons && item.icons.length > 0 && (
              <span className={`inline-flex items-center gap-1 ${iconSizeClasses[size]}`}>
                {item.icons.map((icon, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center shrink-0"
                  >
                    {icon}
                  </span>
                ))}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default IconNavPill;
