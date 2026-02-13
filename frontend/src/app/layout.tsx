import { Slide, ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';
import Script from 'next/script';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';

import Providers from '@/app/Providers';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// eslint-disable-next-line no-restricted-imports
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';

import RequestAQuoteModalGeneralServerWrapper from '@/components/shared/RequestAQuoteModal/RequestAQuoteModalGeneralServerWrapper';
import QuickQuoteSideModal from '@/components/shared/QuickQuoteSideModal';
import Roboto from '@/utilities/fonts/Roboto';

export const metadata: Metadata = {
  title: 'Custom T Shirts for Any Style | Tee Vision Printing',
  description:
    'Design your own customize t shirts with Tee Vision Printing. High-quality materials, endless styles, fast delivery. Start customizing yours today!.',
  keywords:
    't-shirts, printing, custom, design, shirts, apparel, clothing, philadelphia, long sleeve, short sleeve, hoodies, sweatshirts, hats, caps, bags, totes, custom t-shirts, custom shirts, custom apparel, custom clothing, custom hats, custom caps, custom bags, custom totes, custom sweatshirts, custom hoodies, custom long sleeve, custom short sleeve, custom t-shirts philadelphia, custom shirts philadelphia, custom apparel philadelphia, custom clothing philadelphia, custom hats philadelphia, custom caps philadelphia, custom bags philadelphia, custom totes philadelphia, custom sweatshirts philadelphia, custom hoodies philadelphia, custom long sleeve philadelphia, custom short sleeve philadelphia, t-shirts philadelphia, printing philadelphia, custom philadelphia, design philadelphia, shirts philadelphia, apparel philadelphia, clothing philadelphia, philadelphia t-shirts, philadelphia printing, philadelphia custom, philadelphia design, philadelphia shirts, philadelphia apparel, philadelphia clothing, screen printing, custom branding, direct-to-garment printing, embroidery, custom t-shirt printing, custom apparel, custom clothing, screen printing philadelphia, custom branding philadelphia, direct-to-garment printing philadelphia, embroidery philadelphia, custom t-shirt printing philadelphia, custom apparel philadelphia, custom clothing philadelphia',
  alternates: {
    canonical: 'https://www.teevisionprinting.com',
  },
  verification: {
    google: 'w935iNlFpek7qkg70stsdDRrGUgdGzjuSpsl2Rs5owo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Roboto} bg-background5`}>
      <Providers>
        {/* Defer Ahrefs analytics - load after page is interactive */}
        <Script
          id="ahrefs-analytics"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="kZMQTaGVKTipaX/yoXap7A"
          strategy="lazyOnload"
        />
        <body>
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="dark"
            transition={Slide}
          />
          {children}

          {/* Quick quote side tab - fixed on right edge */}
          <RequestAQuoteModalGeneralServerWrapper className="contents">
            <QuickQuoteSideModal />
          </RequestAQuoteModalGeneralServerWrapper>
          
          {/* Move analytics to bottom and use deferred strategy */}
          <Analytics />
          <GoogleAnalytics gaId="G-ETR61WNS1T" />
        </body>
      </Providers>
    </html>
  );
}