import React from 'react';
import type { Metadata } from 'next';

import CustomLongSleeve from '@/components/landing-pages/CustomLongSleeve';

export const metadata: Metadata = {
  title: 'Custom Long Sleeve Shirts | Quality Apparel | Tee Vision',
  description:
    'Create your own custom long sleeve shirts with high-quality prints. Perfect for teams, events, or personal use. Durable, stylish, and fully customizable.',
  keywords:
    'Custom Long Sleeve Shirts',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/custom-long-sleeve',
  },
};

export default function CustomLongSleevePage() {
  return <CustomLongSleeve />;
}