'use client';

import React, { useState } from 'react';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

interface TopBannerProps {
  phoneNumber?: string;
  text?: string;
  variant?: 'dark' | 'primary';
  closable?: boolean;
  onClose?: () => void;
}

const TopBanner = ({ 
  phoneNumber = '123-456-789',
  text = 'Talk with expert',
  variant = 'dark',
  closable = false,
  onClose,
}: TopBannerProps) => {
  // Internal state only used when onClose is not provided (uncontrolled mode)
  const [internalVisible, setInternalVisible] = useState(true);
  
  // Use controlled mode if onClose is provided
  const isControlled = onClose !== undefined;

  const styles = {
    dark: {
      bg: 'bg-[#1a1a1a]',
      text: 'text-white',
      hover: 'hover:text-[#FFC107]',
      closeHover: 'hover:bg-white/10',
    },
    primary: {
      bg: 'bg-[#FFC107]',
      text: 'text-black',
      hover: 'hover:text-gray-700',
      closeHover: 'hover:bg-black/10',
    },
  };

  const currentStyle = styles[variant];

  const handleClose = () => {
    if (isControlled) {
      // Controlled mode: just call the callback, parent handles visibility
      onClose();
    } else {
      // Uncontrolled mode: use internal state
      setInternalVisible(false);
    }
  };

  // In uncontrolled mode, hide if internal state is false
  if (!isControlled && !internalVisible) {
    return null;
  }

  return (
    <div className={`w-full ${currentStyle.bg} py-3 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 relative">
        <span className={`${MaisonNeue} ${currentStyle.text} text-sm`}>{text}</span>
        <a 
          href={`tel:${phoneNumber.replace(/-/g, '')}`}
          className={`${MaisonNeue} ${currentStyle.text} text-sm flex items-center gap-2 ${currentStyle.hover} transition-colors`}
        >
          <svg 
            className="w-4 h-4" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          {phoneNumber}
        </a>
        
        {/* Close Button */}
        {closable && (
          <button
            onClick={handleClose}
            className={`absolute right-4 p-1 rounded-full ${currentStyle.text} ${currentStyle.closeHover} transition-colors`}
            aria-label="Close banner"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default TopBanner;
