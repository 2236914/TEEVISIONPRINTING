import React from 'react';
import type { Metadata } from 'next';

import CustomPoloShirts from '@/components/landing-pages/CustomPoloShirts';

export const metadata: Metadata = {
  title: 'Custom Polo Shirts | Premium Custom Apparel | Tee Vision',
  description:
    'Get high-quality custom polo shirts for your team, business, or event. Stylish, durable, and fully customizable. Order today and make your brand stand out.',
  keywords:
    'Custom Polo Shirts',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/custom-polo-shirts',
  },
};

export default function CustomPoloShirtsPage() {
  return <CustomPoloShirts />;
}