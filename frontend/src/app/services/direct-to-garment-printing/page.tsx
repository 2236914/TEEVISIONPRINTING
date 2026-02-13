import React from 'react';
import type { Metadata } from 'next';

import NewDTG1 from '@/components/services/direct-to-garment-printing/NewDTG1';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';

export const metadata: Metadata = {
  title: 'Custom DTG Printing Services | Tee Vision Printing',
  description:
    'High-quality DTG printing with vibrant, full-color results. Custom direct to garment printing for t-shirts, hoodies & more. Fast turnaround',
  keywords:
    'DTG printing',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/services/direct-to-garment-printing',
  },
};

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="absolute z-[60] w-full">
        <MainNavigation />
      </div>
      <NewDTG1 />
      <Footer />
    </main>
  );
};

export default page;