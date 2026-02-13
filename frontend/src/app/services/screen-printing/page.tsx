import React from 'react';
import type { Metadata } from 'next';

import AnotherScreenPrinting from '@/components/services/screen-printing/NewScreenPrinting/AnotherScreenPrinting';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';

export const metadata: Metadata = {
  title: 'Custom Screen Printing Services | Tee Vision Printing',
  description:
    'High-quality custom screen printing for t-shirts, hoodies, & more. Vibrant prints, affordable, low-minimum, quick turn around, and nationwide shipping.',
  keywords:
    'screen printing services, custom screen printing, high-quality prints, custom t-shirts, printing services, TeeVisionPrinting, Philadelphia, custom apparel, custom clothing, t-shirt printing, garment printing, screen printing Philadelphia, custom screen printing Philadelphia, custom design, custom shirts, custom t-shirts, custom apparel, custom clothing, custom hats, custom caps, custom bags, custom totes, custom sweatshirts, custom hoodies, custom long sleeve, custom short sleeve, custom t-shirts philadelphia, custom shirts philadelphia, custom apparel philadelphia, custom clothing philadelphia, custom hats philadelphia, custom caps philadelphia, custom bags philadelphia, custom totes philadelphia, custom sweatshirts philadelphia, custom hoodies philadelphia, custom long sleeve philadelphia, custom short sleeve philadelphia, t-shirts philadelphia, printing philadelphia, custom philadelphia, design philadelphia, shirts philadelphia, apparel philadelphia, clothing philadelphia, philadelphia t-shirts, philadelphia printing, philadelphia custom, philadelphia design, philadelphia shirts, philadelphia apparel, philadelphia clothing',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/services/screen-printing',
  },
};

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute z-[60] w-full">
        <MainNavigation />
      </div>
      <AnotherScreenPrinting />
      <Footer />
    </div>
  );
};

export default page;