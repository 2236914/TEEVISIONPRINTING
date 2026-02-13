import React from 'react';
import type { Metadata } from 'next';

import CustomHoodies from '@/components/landing-pages/CustomHoodies';

export const metadata: Metadata = {
  title: 'Custom Hoodies Printing in Philadelphia | Tee Vision',
  description:
    'Design high-quality custom hoodies in Philadelphia with Tee Vision Printing. Fast turnaround, bulk discounts, and premium screen printing services.',
  keywords:
    'custom hoodies',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/custom-hoodies',
  },
};

export default function CustomHoodiesPage() {
  return <CustomHoodies />;
}