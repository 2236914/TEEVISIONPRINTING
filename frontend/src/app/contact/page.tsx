import type { Metadata } from 'next';

import SixthSectionServerWrapper from '@/components/main/sixthSection/SixthSectionServerWrapper';

import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import ContactSchema from '@/components/schemas/ContactSchema';

export const metadata: Metadata = {
  title: 'Cheap Custom Shirts | Quality Printing, Low Prices - TeeVision',
  description:
    'Get cheap custom shirts without sacrificing quality. TeeVision offers fast, affordable printing with volume discounts—perfect for events, teams, or promotions.',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/contact',
  },
};

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <ContactSchema />
      <div className="absolute z-[60] w-full">
        <MainNavigation />
      </div>
      <div className="mt-20 md:mt-32 xl:mt-24">
        {}
        <h1 className="sr-only">Contact TeeVision Printing</h1>

        <SixthSectionServerWrapper />
      </div>
      <div className="w-full flex items-center justify-center mb-16">
        <div className="w-full h-[20rem] md:h-[50rem] max-w-[75rem] px-8 xl:px-0">
          <iframe
            title="teevision-google-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.869911668919!2d-75.11162422328594!3d40.011353271507765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7cabf19bf4b%3A0x62d520a9072b7781!2sTee%20Vision%20Printing!5e0!3m2!1sen!2sph!4v1737077263809!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{
              border: '4px solid #FFCD00',
              borderWidth: 4,
              borderRadius: '0.75rem',
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;