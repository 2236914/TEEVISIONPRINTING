import type { Metadata } from 'next';

import DesignerBodyWrapper from '@/components/designer/DesignerBodyWrapper';

import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';

export const metadata: Metadata = {
  title: 'Design Your Own Custom T-Shirt Online | TeeVisionPrinting',
  description:
    'Design the perfect custom t-shirt with our easy-to-use online tool. Add your logo and text, get a live preview, and order today!',
  keywords:
    't-shirts, printing, custom, design, shirts, apparel, clothing, philadelphia, long sleeve, short sleeve, hoodies, sweatshirts, hats, caps, bags, totes, masks, face masks, custom masks, custom face masks, custom t-shirts, custom shirts, custom apparel, custom clothing, custom hats, custom caps, custom bags, custom totes, custom sweatshirts, custom hoodies, custom long sleeve, custom short sleeve, custom masks, custom face masks, custom t-shirts philadelphia, custom shirts philadelphia, custom apparel philadelphia, custom clothing philadelphia, custom hats philadelphia, custom caps philadelphia, custom bags philadelphia, custom totes philadelphia, custom sweatshirts philadelphia, custom hoodies philadelphia, custom long sleeve philadelphia, custom short sleeve philadelphia, custom masks philadelphia, custom face masks philadelphia, t-shirts philadelphia, printing philadelphia, custom philadelphia, design philadelphia, shirts philadelphia, apparel philadelphia, clothing philadelphia, philadelphia t-shirts, philadelphia printing, philadelphia custom, philadelphia design, philadelphia shirts, philadelphia apparel, philadelphia clothing',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/designer/online',
  },
};

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {}
      <h1 className="sr-only">Designer Tool of TeeVision</h1>
      <div className="absolute z-[60] w-full">
        <MainNavigation />
      </div>
      <DesignerBodyWrapper />
      <Footer />
    </main>
  );
};

export default page;
