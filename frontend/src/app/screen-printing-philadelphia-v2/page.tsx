import type { Metadata } from 'next';
import { Suspense } from 'react';

import Footer from '@/components/shared/Footer/Footer';
import ScreenPrintingPhiladelphiaV2 from '@/components/services/screen-printing/NewScreenPrinting/UnderScreenprinting/ScreenPrintingPhiladelphiaV2';
import ScreenPrintingPhiladelphiaV2Navbar from './ScreenPrintingPhiladelphiaV2Navbar';

// SEO Metadata - optimized for ads landing page
export const metadata: Metadata = {
  title: 'Screen Printing Philadelphia | Custom T-Shirts & Apparel | Tee Vision',
  description:
    'Philadelphia\'s trusted screen printing experts. Custom t-shirts, hoodies & uniforms with fast turnaround. Free quotes, local delivery. 500+ businesses served.',
  keywords: [
    'screen printing Philadelphia',
    'custom t-shirts Philadelphia',
    'screen printing company Philadelphia',
    'custom screen printing Philadelphia PA',
    'bulk screen printing Philadelphia',
    'Philadelphia screen printing services',
  ].join(', '),
  alternates: {
    canonical: 'https://www.teevisionprinting.com/screen-printing-philadelphia',
  },
  openGraph: {
    title: 'Screen Printing Philadelphia | Tee Vision Printing',
    description:
      'Trusted by 500+ Philadelphia businesses. Custom screen printing for t-shirts, hoodies, uniforms & more. Fast turnaround, free local delivery.',
    url: 'https://www.teevisionprinting.com/screen-printing-philadelphia',
    siteName: 'Tee Vision Printing',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.teevisionprinting.com/screen-printing/screen-printing-philadelphia/1.png',
        width: 1200,
        height: 630,
        alt: 'Screen Printing Philadelphia - Tee Vision Printing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screen Printing Philadelphia | Tee Vision Printing',
    description:
      'Trusted by 500+ Philadelphia businesses. Custom screen printing with fast turnaround & free local delivery.',
    images: ['https://www.teevisionprinting.com/screen-printing/screen-printing-philadelphia/1.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ScreenPrintingPhiladelphiaV2Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Client-side navbar with interactive elements */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <ScreenPrintingPhiladelphiaV2Navbar />
      </Suspense>
      
      {/* Main content */}
      <Suspense fallback={<div className="flex-1 bg-white" />}>
        <ScreenPrintingPhiladelphiaV2 />
      </Suspense>
      
      <Footer />
    </div>
  );
};

export default ScreenPrintingPhiladelphiaV2Page;
