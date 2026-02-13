import React from 'react';
import type { Metadata } from 'next';

import PastProjectsBody from '@/components/past-projects/PastProjectsBody';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import PastProjectsSchema from '@/components/schemas/PastProjectsSchema';

export const metadata: Metadata = {
  title: 'Custom Tee Shirts | Fast, Affordable Printing - TeeVision',
  description: 'Design your own custom tee shirts with TeeVision Printing. High-quality, fast turnaround, and bulk discounts. Perfect for events, brands, or teams.',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/past-projects',
  },
};

const page = () => {
  return (
    <main>
      <div className="absolute z-[60] w-full">
        <PastProjectsSchema />
        <MainNavigation />
      </div>
      <PastProjectsBody />
      <Footer />
    </main>
  );
};

export default page;
