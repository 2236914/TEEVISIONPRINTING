'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Only load the heavy modal when user clicks
const RequestAQuoteModalGeneralServerWrapper = dynamic(
  () => import('./RequestAQuoteModalGeneralServerWrapper'),
  {
    ssr: false,
    loading: () => null, // Don't show loading state
  }
);

type Props = {
  children: React.ReactNode;
  className?: string;
};

const LightweightModalTrigger: React.FC<Props> = ({ children, className }) => {
  const [isModalLoaded, setIsModalLoaded] = useState(false);

  const handleClick = () => {
    setIsModalLoaded(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsModalLoaded(true);
    }
  };

  return (
    <>
      <div 
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        className={className}
        aria-label="Open quote request form"
      >
        {children}
      </div>
      
      {isModalLoaded && (
        <RequestAQuoteModalGeneralServerWrapper className={className}>
          {children}
        </RequestAQuoteModalGeneralServerWrapper>
      )}
    </>
  );
};

export default LightweightModalTrigger;