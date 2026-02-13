'use client';

import React from 'react';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Delivery from '@/utilities/SVGs/Delivery';
import Needle from '@/utilities/SVGs/Needle';
import QuickCube from '@/utilities/SVGs/QuickCube';
import Scissors from '@/utilities/SVGs/Scissors';

interface Feature {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  mobileIcon?: React.ReactNode;
}

interface FeaturesBarProps {
  features?: Feature[];
  variant?: 'light' | 'primary';
  showBorder?: boolean;
}

const DEFAULT_FEATURES: Feature[] = [
  { 
    title: 'SCREEN PRINTING ORDER', 
    subtitle: 'STARTING AT 12 PIECES', 
    icon: <Needle width={48} height={48} />,
    mobileIcon: <Needle width={20} height={20} />
  },
  { 
    title: 'PREMIUM INKS', 
    subtitle: 'PERFECT FOR VIBRANT PRINTS', 
    icon: <Scissors width={48} height={48} />,
    mobileIcon: <Scissors width={20} height={20} />
  },
  { 
    title: 'QUICK TURNAROUND', 
    subtitle: '7-14 DAYS', 
    icon: <QuickCube width={48} height={48} />,
    mobileIcon: <QuickCube width={20} height={20} />
  },
  { 
    title: 'FREE DELIVERY', 
    subtitle: 'ANYWHERE IN UNITED STATES', 
    icon: <Delivery width={48} height={48} />,
    mobileIcon: <Delivery width={20} height={20} />
  },
];

const FeaturesBar = ({ 
  features = DEFAULT_FEATURES,
  variant = 'light',
  showBorder = true,
}: FeaturesBarProps) => {
  const styles = {
    light: {
      bg: 'bg-white',
      iconColor: 'text-black',
      titleColor: 'text-black',
      subtitleColor: 'text-gray-600',
    },
    primary: {
      bg: 'bg-[#FFC107]',
      iconColor: 'text-black',
      titleColor: 'text-black',
      subtitleColor: 'text-black/70',
    },
  };

  const currentStyle = styles[variant];
  const borderClass = showBorder ? 'border-b-4 border-[#FFC107]' : '';
  // Primary variant doesn't need yellow border
  const finalBorderClass = variant === 'primary' ? '' : borderClass;

  return (
    <section className={`w-full ${currentStyle.bg} py-2 md:py-5 ${finalBorderClass}`}>
      <div className="max-w-7xl mx-auto px-0 md:px-4">
        {/* Horizontally scrollable on mobile, justified on desktop */}
        <div className="flex items-center md:justify-between gap-4 md:gap-4 flex-nowrap overflow-x-auto scrollbar-hide px-4 md:px-0">
          {features.map((feature, index) => (
            <div
              className="flex items-center gap-2 md:gap-3 flex-shrink-0 md:flex-shrink md:flex-1 justify-center"
              key={index}
            >
              {/* Mobile icon (smaller) */}
              <div className={`${currentStyle.iconColor} flex-shrink-0 md:hidden`}>
                {feature.mobileIcon || feature.icon}
              </div>
              {/* Desktop icon */}
              <div className={`${currentStyle.iconColor} flex-shrink-0 hidden md:block`}>
                {feature.icon}
              </div>
              {/* Text content */}
              <div className="flex flex-col min-w-0">
                <p className={`${MaisonNeue} font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm ${currentStyle.titleColor} uppercase tracking-tight leading-tight whitespace-nowrap`}>
                  {feature.title}
                </p>
                <p className={`${MaisonNeue} text-[7px] sm:text-[8px] md:text-[10px] lg:text-xs ${currentStyle.subtitleColor} uppercase leading-tight whitespace-nowrap`}>
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
