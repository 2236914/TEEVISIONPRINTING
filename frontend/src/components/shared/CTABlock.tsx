'use client';

import React from 'react';
import Link from 'next/link';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';

interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

interface CTABlockProps {
  title?: string;
  subtitle?: string;
  buttons?: CTAButton[];
  variant?: 'primary' | 'dark';
}

// Default icons
const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
);

const DEFAULT_BUTTONS: CTAButton[] = [
  { 
    label: 'Contact Us Today', 
    href: '/contact', 
    variant: 'secondary',
    icon: <PhoneIcon />
  },
  { 
    label: 'Request Quote', 
    href: '/request-a-quote', 
    variant: 'primary',
    icon: <QuoteIcon />
  },
];

const CTABlock = ({
  title = 'READY TO GET STARTED?',
  subtitle = 'This streamlined approach allows us to deliver dependable screen printing services Philadelphia customers can count on',
  buttons = DEFAULT_BUTTONS,
  variant = 'primary',
}: CTABlockProps) => {
  const styles = {
    primary: {
      bg: 'bg-[#FFC107]',
      titleColor: 'text-black',
      subtitleColor: 'text-black/80',
    },
    dark: {
      bg: 'bg-[#1a1a1a]',
      titleColor: 'text-white',
      subtitleColor: 'text-white/80',
    },
  };

  const currentStyle = styles[variant];

  const getButtonStyles = (buttonVariant: 'primary' | 'secondary') => {
    if (variant === 'primary') {
      // On yellow background
      if (buttonVariant === 'primary') {
        return 'bg-black text-white hover:bg-gray-800';
      }
      return 'bg-white text-black hover:bg-gray-100 border border-black/10';
    } else {
      // On dark background
      if (buttonVariant === 'primary') {
        return 'bg-[#FFC107] text-black hover:bg-[#e6b000]';
      }
      return 'bg-white text-black hover:bg-gray-100';
    }
  };

  return (
    <section className={`w-full ${currentStyle.bg} py-10 md:py-16 px-4`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className={`${Termina} ${currentStyle.titleColor} text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4`}>
          {title}
        </h2>

        {/* Subtitle */}
        <p className={`${MaisonNeue} ${currentStyle.subtitleColor} text-sm md:text-base max-w-2xl mx-auto mb-6 md:mb-8`}>
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={`${MaisonNeue} inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-200 ${getButtonStyles(button.variant)}`}
            >
              {button.icon}
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
