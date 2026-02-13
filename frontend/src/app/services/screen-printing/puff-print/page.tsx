import React from 'react';
import type { Metadata } from 'next';

import PuffPrint from '@/components/services/screen-printing/NewScreenPrinting/UnderScreenprinting/PuffPrint';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';

export const metadata: Metadata = {
  title: ' Puff Printing T-Shirts | TeeVision Printing',
  description:
    'Discover premium puff printing at TeeVision. Create bold, raised 3D designs on custom t-shirts and apparel with high-quality prints that stand out.',
  keywords:
    'puff printing philadelphia, puff printing philadelphia, puff print manufacturer, puff screen printing, puff ink screen printing, puff printing Philadephia, puff print screen printing, puff ink printing',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/services/screen-printing/puff-print',
  },
};

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute z-[60] w-full">
        <MainNavigation />
      </div>
      <PuffPrint />
      <Footer />
    </div>
  );
};

export default page;