import React from 'react';
import type { Metadata } from 'next';

import CustomSweatshirts from '@/components/landing-pages/CustomSweatshirts';

export const metadata: Metadata = {
  title: 'Custom Sweatshirts | Premium Custom Apparel | Tee Vision',
  description:
    'Design your own custom sweatshirts with high-quality prints. Perfect for teams, events, or personal use. Durable, stylish, and fully customizable.',
  keywords:
    'Custom Sweatshirts',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/custom-sweatshirts',
  },
};

export default function CustomSweatshirtsPage() {
  return <CustomSweatshirts />;
}