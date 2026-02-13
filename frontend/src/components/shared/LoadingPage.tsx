import React from 'react';

import Clothes from '@/utilities/SVGs/Clothes';

const LoadingPage = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-[90]">
      <div className="w-full flex flex-col items-center justify-center gap-4 text-center">
        <span className="loading loading-ball loading-lg" />
        <Clothes width={40} height={40} />
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl">Please wait...</p>
          <p className="text-xl">We are preparing the clothes</p>
        </div>
      </div>
      <div className="absolute bottom-0 h-4 w-full bg-primaryMinimalist" />
    </div>
  );
};

export default LoadingPage;
