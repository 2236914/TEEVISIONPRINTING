'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';

type QuickQuoteSideModalProps = {
  /** Logo image at the top */
  logoSrc?: string;
  /** CTA text - use \n for line breaks */
  text?: string;
  /** Pixels scrolled before showing (default 400) */
  scrollThreshold?: number;
};

/**
 * Side tab UI for "Need a Quick Quote?" CTA.
 * Wrap with RequestAQuoteModalGeneralServerWrapper to open the quote modal on click.
 */
const QuickQuoteSideModal: React.FC<QuickQuoteSideModalProps> = ({
  logoSrc = '/icon.ico',
  text = 'NEED A\nQUICK\nQUOTE?',
  scrollThreshold = 400,
}) => {
    const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a stable default position for SSR to avoid sticky hydration issues with usePathname in Layouts
  // Then switch to correct position on client mount
  const isSppV2 = mounted && pathname === '/screen-printing-philadelphia-v2';
  
  const positionClasses = isSppV2
    ? 'bottom-36 right-0'
    : 'top-1/2 -translate-y-1/2 right-0';

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > scrollThreshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollThreshold]);

  return (
    <div
      className={`fixed z-40 cursor-pointer group transition-all duration-300 ${positionClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
    >
      <div className="bg-[#1a1a1a] rounded-l-2xl shadow-xl flex flex-col items-center w-[72px] md:w-[88px] py-4 px-2 gap-3 hover:scale-[1.03] transition-transform duration-200">
        {/* TVP Logo */}
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
          <Image
            src={logoSrc}
            alt="TVP Logo"
            fill
            className="object-contain"
            sizes="48px"
          />
        </div>

        {/* Text */}
        <div className={`${Termina} flex flex-col items-center text-center`}>
          <span className="text-white text-[11px] md:text-[13px] font-black uppercase leading-tight tracking-wide">
            {text.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </span>
        </div>

        {/* Arrow */}
        <div className="flex justify-center mt-1">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:-translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 12H5m0 0l5-5m-5 5l5 5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default QuickQuoteSideModal;
