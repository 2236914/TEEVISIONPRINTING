import React from 'react';
import type { Metadata } from 'next';

import CustomTshirtPrinting from '@/components/services/screen-printing/NewScreenPrinting/UnderScreenprinting/CustomTshirtPrinting';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';

export const metadata: Metadata = {
  title: 'Custom T Shirt Printing Philadelphia | Tee Vision',
  description:
    'Top-rated custom T shirt printing in Philadelphia. Fast service, bulk discounts, and expert design help-visit Tee Vision for local quality you can trust.',
  keywords:
    'custom t-shirt printing Philadelphia, t-shirt printing Philadelphia',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/custom-t-shirt-printing-philadelphia',
  },
};

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute z-[60] w-full">
        <MainNavigation />
      </div>
      <CustomTshirtPrinting />
      <Footer />
    </div>
  );
};

export default page;