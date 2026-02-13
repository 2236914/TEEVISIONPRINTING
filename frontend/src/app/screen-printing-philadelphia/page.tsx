import React from 'react';
import type { Metadata } from 'next';

import ScreenPrintingPhiladelphia from '@/components/services/screen-printing/NewScreenPrinting/UnderScreenprinting/ScreenPrintingPhiladelphia';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';

export const metadata: Metadata = {
  title: 'Screen Printing Philadelphia | Tee Vision Printing',
  description:
    'Need a trusted screen printing Philadelphia? We offer custom screen printing services in Philadelphia, PA for apparel, events, and brands. Get a quote now!',
  keywords:
    'Screen Printing Philadelphia',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/screen-printing-philadelphia',
  },
};

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute z-[60] w-full">
        <MainNavigation />
      </div>
      <ScreenPrintingPhiladelphia />
      
      <Footer />
    </div>
  );
};

export default page;