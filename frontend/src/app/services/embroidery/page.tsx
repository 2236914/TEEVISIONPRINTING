import React from 'react';
import type { Metadata } from 'next';

import NewEmbroidery from '@/components/services/embroidery/NewEmbroidery';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';

export const metadata: Metadata = {
  title:
    'Custom Embroidery Services | Custom, Durable, Stylish',
  description:
    'Professional shirt embroidery with crisp stitching and durable threads. Ideal for logos, uniforms & branding. Fast turnaround & no minimums!',
  keywords:
    'embroidery services, custom embroidery, high-quality embroidery, custom apparel, custom clothing, TeeVisionPrinting, Philadelphia, t-shirt embroidery, garment embroidery, embroidery Philadelphia, custom embroidery Philadelphia, custom design, custom shirts, custom t-shirts, custom apparel, custom clothing, custom hats, custom caps, custom bags, custom totes, custom sweatshirts, custom hoodies, custom long sleeve, custom short sleeve, custom masks, custom face masks, custom t-shirts philadelphia, custom shirts philadelphia, custom apparel philadelphia, custom clothing philadelphia, custom hats philadelphia, custom caps philadelphia, custom bags philadelphia, custom totes philadelphia, custom sweatshirts philadelphia, custom hoodies philadelphia, custom long sleeve philadelphia, custom short sleeve philadelphia, custom masks philadelphia, custom face masks philadelphia, t-shirts philadelphia, printing philadelphia, custom philadelphia, design philadelphia, shirts philadelphia, apparel philadelphia, clothing philadelphia, philadelphia t-shirts, philadelphia printing, philadelphia custom, philadelphia design, philadelphia shirts, philadelphia apparel, philadelphia clothing',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/services/embroidery',
  },
};

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute z-[60] w-full">
        <MainNavigation />
      </div>
      <NewEmbroidery />
      <Footer />
    </div>
  );
};

export default page;