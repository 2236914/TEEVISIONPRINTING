import React from 'react';
import type { Metadata } from 'next';

import CustomCrewneck from '@/components/landing-pages/CustomCrewneck';

export const metadata: Metadata = {
  title: 'Custom Crewneck Sweatshirts | Tee Vision Printing',
  description:
    'Create custom crewneck sweatshirts with screen printing, embroidery, or DTG. Premium heavyweight and pigment-dyed options for teams, events, and businesses. Fast turnaround and bulk discounts from our Philly print shop.',
  keywords:
    'custom crewneck sweatshirt printing Philadelphia, printed crewneck sweatshirts, custom embroidery crewneck Philadelphia, heavyweight crewneck sweatshirts bulk, pigment-dyed crewneck',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/custom-crewneck-sweatshirts',
  },
};

export default function CustomCrewneckPage() {
  return <CustomCrewneck />;
}