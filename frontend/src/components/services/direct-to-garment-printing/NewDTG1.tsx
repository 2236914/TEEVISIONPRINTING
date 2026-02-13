'use client';

import React, { memo, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';
import Delivery from '@/utilities/SVGs/Delivery';
import Needle from '@/utilities/SVGs/Needle';
import QuickCube from '@/utilities/SVGs/QuickCube';
import Scissors from '@/utilities/SVGs/Scissors';
import DTGPrintingSchema from '@/components/schemas/DTGPrintingSchema';
import RequestAQuoteModalGeneralServerWrapper from '@/components/shared/RequestAQuoteModal/RequestAQuoteModalGeneralServerWrapper';

// Lazy load heavy components
const ImageModal = dynamic(() => import('@/components/past-projects/components/ImageModal'), {
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse" />,
});

// Types
interface Testimonial {
  image: string;
  name: string;
  quote: string;
  title: string;
}

interface Project {
  imageSrc: string;
}

interface Product {
  image: string;
  link: string;
  name: string;
  price: string;
  rating: number;
}

const bullet = '\u2022';

// Constants - ALL DATA IS STATICALLY DEFINED (NO FETCHING)
const TESTIMONIALS: Testimonial[] = [
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/21.png',
    quote: 'Tee Vision has done such an awesome job printing my tote bags. Joe was incredibly helpful every step of the way and ensured that the job was done well and that the totes arrived in time for my event. They&apos;re now my go-to company for all of my totes! Highly recommend!',
    name: 'Stephanie Pogas',
    title: 'Business Owner',
  },
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/22.png',
    quote: 'My husband and I placed a fairly large order with Tee Vision. T-shirts, tote bags and sweatshirts. All turned out very nice with awesome detail. My husband has pretty intricate designs which can sometimes be tricky with screen printing. They did a great job making sure everything came out crisp. Great customer service and professional!',
    name: 'Lauren Bockmeyer',
    title: 'Jay Productions',
  },
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/23.png',
    quote: 'Thank you Sean and his team for always taking great care of us! We have orders shirts for our company many times and will not go anywhere else! They are truly the best! Looking forward to growing together and will be calling you guys soon for the next batch! Highly recommended by the Element Granite & Quartz Team ---If you see our guys on your job site, you can Thank Tee Vision for making us look good!',
    name: 'Vinny Dip',
    title: 'Event Coordinator',
  },
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/Screen+Printing+(5).png',
    quote: 'The team at Tee Vision Printing delivered a high-quality product and fast turnaround for an incredible value. Joe provided thorough communication from the initial quote through pickup. Looking forward to working with them again for future projects.',
    name: 'Alyssa Marino',
    title: 'Sports Club Manager',
  },
];

const PROJECTS: Project[] = [
  { imageSrc: '/direct-to-garment-printing/NewDTG/1-converted-from-png.webp' },
  { imageSrc: '/direct-to-garment-printing/NewDTG/2-converted-from-png.webp' },
  { imageSrc: '/direct-to-garment-printing/NewDTG/3-converted-from-png.webp' },
  { imageSrc: '/direct-to-garment-printing/NewDTG/4-converted-from-png.webp' },
];

const DESCRIPTIONS = [
  { title: 'Screen Print Orders', subtitle: 'Starting 12 pieces', icon: <Needle width={52} height={52} /> },
  { title: 'Premium Inks', subtitle: 'Perfect for Vibrant Prints', icon: <Scissors width={52} height={52} /> },
  { title: 'Quick Turnaround', subtitle: '1-2 weeks', icon: <QuickCube width={52} height={52} /> },
  { title: 'Free Delivery', subtitle: 'Anywhere in United States', icon: <Delivery width={52} height={52} /> },
];

// Product data for each category
const PRODUCT_DATA: Record<string, Product[]> = {
  'T-SHIRTS': [
    {
      name: 'Los Angeles Apparel Garment Dye Crew Neck T-Shirt (1801GD)',
      rating: 5.0,
      price: '$19.02 / Shirt (per 100 orders)',
      image: '/direct-to-garment-printing/NewDTG/Los Angeles Apparel Garment Dye Crew Neck T-Shirt (1801GD)-converted-from-png.webp',
      link: '/products/view/los-angeles-apparel-garment-dye-crew-neck-t-shirt-1801gd'
    },
    {
      name: 'AS Colour Classic Tee (5026)',
      rating: 5.0,
      price: '$16 / Shirt (per 100 orders)',
      image: '/direct-to-garment-printing/NewDTG/AS Colour Classic Tee (5026)-converted-from-jpg.webp',
      link: '/products/view/as-colour-classic-tee-5026'
    },
    {
      name: 'Gildan Hammer™ Adult T-Shirt (H000)',
      rating: 5.0,
      price: '$9.37 / Shirt (per 100 orders)',
      image: '/direct-to-garment-printing/NewDTG/Gildan Hammer™ Adult T-Shirt (H000)-converted-from-png.webp',
      link: '/products/view/gildan-hammer-adult-t-shirt-h000'
    }
  ],
  'HOODIES': [
    {
      name: 'Independent Trading Co. Heavyweight Hooded Sweatshirt (IND4000)',
      rating: 5.0,
      price: '$40.02 / Shirt (per 100 orders)',
      image: '/direct-to-garment-printing/NewDTG/Independent Trading Co. Heavyweight Hooded Sweatshirt (IND4000)-converted-from-jpg.webp',
      link: '/products/view/independent-trading-co-heavyweight-hooded-sweatshirt-ind4000'
    }
  ]
};

// Shared Components
const NavigationButton = memo(({ direction, label, onClick }: { direction: 'prev' | 'next'; label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`p-3 rounded-full transition-colors ${
      direction === 'next' ? 'bg-[#fcb318] hover:bg-[#e5a516]' : 'bg-gray-300 hover:bg-gray-400'
    }`}
    aria-label={label}
  >
    <svg className={`w-6 h-6 ${direction === 'prev' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  </button>
));
NavigationButton.displayName = 'NavigationButton';

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((__, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-[#FFC107]' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    <span className={`${MaisonNeue} text-sm text-gray-600 ml-1`}>({rating})</span>
  </div>
);

// Product Card Component
const ProductCard = memo(({ product }: { product: Product }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
    <div className="relative w-full h-64 bg-gray-200">
      <Image
        src={product.image}
        fill
        alt={product.name}
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        quality={75}
      />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <div className="flex-grow">
        <h3 className={`${MaisonNeue} font-bold text-sm md:text-base mb-2 min-h-[3rem]`}>{product.name}</h3>
      </div>
      <div className="mt-auto">
        <StarRating rating={product.rating} />
        <p className={`${MaisonNeue} font-bold text-base md:text-lg mt-2 mb-4`}>{product.price}</p>
        <Link href={product.link}>
          <button className={`${MaisonNeue} w-full py-2 px-4 border-2 border-[#FFC107] text-[#FFC107] font-bold rounded-full hover:bg-[#FFC107] hover:text-black transition-colors`}>
            View Details
          </button>
        </Link>
      </div>
    </div>
  </div>
));
ProductCard.displayName = 'ProductCard';

// Product Tabs Header Component
const ProductTabsHeader = memo(({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['T-SHIRTS', 'HOODIES'];

  return (
    <div className="flex flex-wrap gap-0 justify-start mb-0">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`${MaisonNeue} px-6 py-3 font-bold transition-all ${
            activeTab === tab
              ? 'bg-white text-black'
              : 'bg-[#e8e8e8] text-gray-700 hover:bg-[#d8d8d8]'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
});
ProductTabsHeader.displayName = 'ProductTabsHeader';

// Product Grid Component
const ProductGrid = memo(({ activeTab }: { activeTab: string }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCT_DATA[activeTab].map((product, index) => (
          <ProductCard key={`${activeTab}-${index}`} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="https://www.teevisionprinting.com/products">
          <button className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-3 px-8 rounded-full transition-colors`}>
            View More
          </button>
        </Link>
      </div>
    </div>
  );
});
ProductGrid.displayName = 'ProductGrid';

// Testimonial Components
const TestimonialCard = memo(({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg relative">
    <div className="absolute -top-4 left-6">
      <span className="text-[#fcb318] text-6xl font-bold">&quot;</span>
    </div>
    
    <div className="w-32 h-32 mx-auto mb-4 mt-6 relative">
      <Image
        src={testimonial.image}
        fill
        alt={`${testimonial.name}'s review`}
        className="object-contain"
        loading="lazy"
        sizes="128px"
        quality={75}
      />
    </div>

    <p className={`${MaisonNeue} text-center text-sm italic mb-6`}>
      {testimonial.quote}
    </p>

    <div className="text-center">
      <p className={`${Termina} font-bold text-lg`}>{testimonial.name}</p>
      <p className={`${MaisonNeue} text-sm text-gray-600`}>{testimonial.title}</p>
    </div>
  </div>
));
TestimonialCard.displayName = 'TestimonialCard';

const TestimonialsCarousel = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const visibleTestimonials = [
    TESTIMONIALS[currentIndex],
    TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length],
  ];

  return (
    <div className="relative">
      <div className="flex gap-4 overflow-hidden">
        <div className="w-full xl:hidden">
          <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} />
        </div>
        
        <div className="hidden xl:flex gap-4">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="w-1/2">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-6 justify-center xl:justify-end">
        <NavigationButton onClick={prevSlide} direction="prev" label="Previous testimonial" />
        <NavigationButton onClick={nextSlide} direction="next" label="Next testimonial" />
      </div>
    </div>
  );
});
TestimonialsCarousel.displayName = 'TestimonialsCarousel';

// Featured Prints Components
const FeaturedPrintsCarousel = memo(({ projects }: { projects: Project[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const handleImageClick = useCallback(() => setIsModalOpen(true), []);
  const handleModalClose = useCallback(() => setIsModalOpen(false), []);

  const handleImageKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsModalOpen(true);
    }
  }, []);

  const handleModalKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsModalOpen(false);
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Mobile Carousel */}
      <div className="xl:hidden">
        <div className="relative w-full flex items-center justify-center px-4 mb-8">
          <div 
            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] cursor-pointer"
            onClick={handleImageClick}
            onKeyDown={handleImageKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`View featured print ${currentIndex + 1} in full size`}
          >
            <Image
              src={projects[currentIndex].imageSrc}
              fill
              alt={`Featured print ${currentIndex + 1}`}
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 640px) 300px, 400px"
              quality={75}
            />
          </div>
        </div>
        
        <div className="flex gap-2 mt-6 justify-center">
          <NavigationButton onClick={prevSlide} direction="prev" label="Previous image" />
          <NavigationButton onClick={nextSlide} direction="next" label="Next image" />
        </div>
        
        <div className="flex gap-2 mt-4 justify-center">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#fcb318] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden xl:flex flex-wrap justify-center gap-2 xl:gap-4">
        {projects.map((project, index) => (
          <div key={index} className="w-[6rem] h-[6rem] md:w-[15rem] md:h-[15rem] xl:w-[18rem] xl:h-[18rem]">
            <ImageModal imageSrc={project.imageSrc} />
          </div>
        ))}
      </div>

      {/* Modal for mobile */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleModalClose}
          onKeyDown={handleModalKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Close image modal"
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={projects[currentIndex].imageSrc}
              fill
              alt={`Featured print ${currentIndex + 1}`}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              quality={90}
            />
          </div>
        </div>
      )}
    </div>
  );
});

FeaturedPrintsCarousel.displayName = 'FeaturedPrintsCarousel';

// Main Component
const NewDTG = () => {
  const [activeTab, setActiveTab] = useState('T-SHIRTS');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <main className="bg-white">
      <DTGPrintingSchema />
      {/* Noise Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend mode="multiply" in="SourceGraphic" />
        </filter>
      </svg>

      {/* Hero Section */}
      <section className="w-full relative flex mt-[5rem] xl:mt-[6rem] overflow-hidden">
        <div 
          className="absolute w-full h-full z-0"
          style={{
            backgroundColor: '#2a2a2a',
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 50%), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)`,
            filter: 'url(#noiseFilter)',
          }}
        >
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)' }} />
        </div>

        <div className="flex flex-col w-full z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-12 xl:px-24 pt-0 pb-0">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-8 text-white">
              <div>
                <p className={`${Termina} text-lg md:text-xl xl:text-2xl font-medium uppercase tracking-wide`}>
                  FULL COLORS. NO LIMITS
                </p>
                <h1 className={`${Termina} uppercase font-black text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl mt-0 leading-[0.9]`}>
                  <span className="text-[#FFC107]">CUSTOM </span>
                  <br />
                  <span className="text-white">DTG PRINTING.</span>
                </h1>
              </div>
              <p className={`${MaisonNeue} text-lg md:text-xl xl:text-2xl text-gray-300 max-w-2xl leading-relaxed`}>
                Bring your designs to life with unmatched detailed and variant colors.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 w-full xl:w-fit items-stretch mt-4">
                <RequestAQuoteModalGeneralServerWrapper className="w-full xl:w-fit">
                  <div
                    className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-[#FFC107] border-[#FFC107] font-extrabold border-[0.2rem] text-button md:text-button-md lg:text-[1.15rem] rounded-md transition transform hover:scale-105 hover:bg-[#FFD54F] hover:border-[#FFD54F] min-w-[280px] flex items-center justify-center`}
                    style={{ height: '64px' }}
                  >
                    REQUEST FREE QUOTE
                  </div>
                </RequestAQuoteModalGeneralServerWrapper>
                <Link href="/contact" className="w-full xl:w-fit">
                  <div
                    className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-transparent border-[#FFC107] text-[#FFC107] font-extrabold border-[0.2rem] text-button md:text-button-md lg:text-[1.15rem] rounded-md transition transform hover:scale-105 hover:bg-[#FFC107] hover:text-black min-w-[280px] flex items-center justify-center cursor-pointer`}
                    style={{ height: '64px' }}
                  >
                    REQUEST A DESIGN
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative w-full max-w-[1000px] xl:max-w-[1000px] aspect-square transform scale-100 lg:scale-125 -mb-16 lg:-mb-24 z-0">
                <Image
                  src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/embroidery/12.png"
                  fill
                  alt="DTG printing example showing detailed full-color design"
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1000px, 1000px"
                  quality={85}
                />
              </div>
            </div>
          </div>

          {/* Yellow Section with Icons */}
          <div className="bg-[#FFC107] w-full relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-6 md:p-8 max-w-7xl mx-auto">
              {DESCRIPTIONS.map((description) => (
                <div
                  className={`flex flex-col items-center text-center ${MaisonNeue} text-black`}
                  key={description.title}
                >
                  <div className="mb-2">{description.icon}</div>
                  <p className="font-bold text-base md:text-lg">{description.title}</p>
                  <p className="text-sm md:text-md">{description.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Prints Section */}
      <section className="mx-auto flex-col gap-5 items-center justify-center p-4 xl:p-1">
        <div className="w-full flex justify-center p-8 py-8 xl:py-12 bg-[#ffffff]">
          <div className="max-w-[75rem] w-full">
            <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center">
              <div className="flex flex-col gap-4">
                <h2 className={`${Termina} font-black text-[1.0rem] md:text-[1rem] leading-tight xl:text-[2rem]`}>
                  Featured DTG Prints
                </h2>
              </div>
            </div>
            <div className="mt-8">
              <FeaturedPrintsCarousel projects={PROJECTS} />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full bg-white">
        <div className="w-full flex justify-center">
          <div className="max-w-[75rem] w-full px-8">
            <div className="text-center mb-8">
              <h2 className={`${Termina} font-black text-[#FFC107] text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4`}>
                <span className="text-[#000000]">BEST </span>PRODUCTS FOR DTG PRINTING
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                Bring your designs to life with high-quality DTG printing. We offer vibrant, durable prints for t-shirts, hoodies, polos, and totes crafted with precision and detail. Each item is perfect for showcasing intricate, full-color designs with photographic quality.
              </p>
            </div>
            
            {/* Tabs on white background */}
            <ProductTabsHeader activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>

        {/* Products on gray background - full width */}
        <div className="w-full bg-[#f3f3f3] py-8">
          <div className="max-w-[75rem] mx-auto px-8">
            <ProductGrid activeTab={activeTab} />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#2a2a2a] py-16 xl:py-24 relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-8 md:px-12 xl:px-16">

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center relative z-10">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <h2 className={`${Termina} text-white font-black text-3xl md:text-4xl xl:text-5xl uppercase leading-tight`}>
                WHY CHOOSE OUR DIRECT TO GARMENT PRINTING SERVICE
              </h2>
              <p className={`${MaisonNeue} text-[#FFC107] text-lg md:text-xl`}>
                <strong>Your Vision, Our Expertise</strong>
              </p>
              <p className={`${MaisonNeue} text-white text-base md:text-lg leading-relaxed max-w-2xl`}>
                Our <strong>DTG prints</strong> are designed for creators, brands, and businesses that demand quality without compromise.
              </p>
              <p className={`${MaisonNeue} text-[#FFC107] text-lg md:text-xl`}>
                <strong>Make a Lasting Impression</strong>
              </p>
              <ul>
                <li className={`${MaisonNeue} text-white text-base md:text-lg leading-relaxed max-w-2xl`}>
                  ✓ Lead your industry with merch people actually want to wear
                </li>
                <li className={`${MaisonNeue} text-white text-base md:text-lg leading-relaxed max-w-2xl`}>
                  ✓ Perfect for employee uniforms and customer giveaways
                </li>
                <li className={`${MaisonNeue} text-white text-base md:text-lg leading-relaxed max-w-2xl`}>
                  ✓ Professional finishing with strict quality control
                </li>
              </ul>
            </div>
            {/* Right Side - Spacer for mobile */}
            <div className="xl:hidden min-h-[300px]" />
          </div>
        </div>
        
        {/* Large Image positioned at bottom right - absolute positioning */}
        <div className="absolute bottom-0 right-0 w-[50%] xl:w-[45%] h-[60%] xl:h-[80%] pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/direct-to-garment-printing/NewDTG/5-converted-from-png.webp"
              fill
              alt="White t-shirt with Urban Culture design"
              className="object-contain object-bottom-right"
              style={{ objectPosition: 'bottom right' }}
              loading="lazy"
              sizes="(max-width: 1200px) 50vw, 45vw"
              quality={85}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white mt-10">
        <div className="w-full flex justify-center">
          <div className="max-w-[75rem] w-full px-8">
            <div className="mb-8">
              <h2 className={`${Termina} text-center font-black text-[#FFC107] text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4`}>
                <span className="text-[#000000]">DIRECT TO GARMENT PRINTING <br /></span>FOR CORPORATE BRANDING & MERCH
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                Our direct to garment printing solutions support:
              </p>
              <ul>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} <strong>Corporate branding</strong>
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Employee uniforms
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Event apparel
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Startups and clothing brands
                </li>
              </ul>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                DTG allows advanced <strong>customization techniques</strong>, including detailed artwork placement, <strong>garment labels</strong>, and flexible <strong>garment setup</strong> options.
              </p>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                Explore our full <span className="text-[#FFC107]"><a href = "https://www.teevisionprinting.com/products">product catalog</a></span> to find the right garment for your design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F5F5] mt-10">
        <div className="w-full flex justify-center">
          <div className="max-w-[75rem] w-full px-8">
            <div className="mb-8">
              <h2 className={`${Termina} text-center font-black text-[#FFC107] text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4 mt-8`}>
                <span className="text-[#000000]">VIBRANT PRINTS DESIGNED<br /></span>FOR PERFORMANCE & STYLE
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                <strong>Vibrant Prints</strong> aren’t just about color. They’re about consistency, accuracy, and longevity.
              </p>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                Our DTG prints deliver:
              </p>
              <ul>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Rich blacks and bold whites
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Smooth gradients
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Crisp fine lines
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Professional-grade color accuracy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DTG Print Max Dimensions Section */}
      <section className="w-full bg-white pt-12 md:pt-16 lg:pt-20 px-6 md:px-12 lg:px-20 pb-0">
        <div className="max-w-[100rem] mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className={`${Termina} text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-6`}>
              DTG PRINT <span className="text-[#FFC107]">MAX DIMENSIONS</span>
            </h2>
            <div className={`${MaisonNeue} text-base md:text-lg text-gray-700 space-y-2 max-w-4xl mx-auto`}>
              <p>
                These dimensions apply to front and back torso area of tees, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/custom-long-sleeve'>longsleeves</a></span>, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/custom-crewneck-sweatshirts'>crewneck sweaters</a></span>, and hoodies.
              </p>
              <p className="font-semibold">Front/back - up to 16x20&quot;</p>
              <p>To keep graphics above a hoodie pocket, max height is approx. 10.5&quot;</p>
            </div>
          </div>

          {/* Products Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[105rem] mx-auto -mb-4">
            {/* T-Shirt */}
            <div className="flex flex-col items-center -mr-8 md:-mr-12 lg:-mr-16">
              <div className="relative w-full max-w-[1100px] aspect-square flex items-center justify-center">
                <Image
                  src="/direct-to-garment-printing/NewDTG/6-converted-from-png.webp"
                  fill
                  alt="Black t-shirt showing 16x20 print area dimensions"
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 1100px"
                  quality={90}
                />
              </div>
            </div>

            {/* Hoodie */}
            <div className="flex flex-col items-center -ml-8 md:-ml-12 lg:-ml-16">
              <div className="relative w-full max-w-[1100px] aspect-square flex items-center justify-center">
                <Image
                  src="/direct-to-garment-printing/NewDTG/7-converted-from-png.webp"
                  fill
                  alt="Black hoodie showing 16x20 print area dimensions above pocket"
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 1100px"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How This Process Works Section */}
      <section className="w-full bg-[#F5F5F5] py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-4 md:mb-8">
            <h2 className={`${Termina} text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4`}>
              HOW THIS <span className="text-[#FFC107]">PROCESS WORKS</span>
            </h2>
            <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto`}>
              a method where a printer sprays ink directly onto fabric to create designs, just like printing on paper. The ink soaks into the cloth, making the print soft, detailed, and long-lasting.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-4 border-[#FFC107] flex items-center justify-center">
                  <span className={`${Termina} text-2xl font-black`}>1</span>
                </div>
              </div>
              <h3 className={`${Termina} text-xl md:text-2xl font-black mb-4 uppercase`}>
                CHOOSE <span className="text-[#FFC107]">PRODUCT/S</span>
              </h3>
              <div className={`${MaisonNeue} text-gray-700 space-y-2 mb-6 flex-grow`}>
                <p className="flex items-start gap-2">
                  <span className="text-[#FFC107] mt-1">✓</span>
                  <span>Select product to print on</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#FFC107] mt-1">✓</span>
                  <span>Select colors, sizes</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#FFC107] mt-1">✓</span>
                  <span>Select print types, locations</span>
                </p>
              </div>
              <Link 
                href="https://www.teevisionprinting.com/products" className={`${MaisonNeue} w-full bg-[#FFC107] text-center hover:bg-[#e5a516] text-black font-bold py-3 px-6 rounded-full transition-colors uppercase`}>
                VIEW OUR PRODUCTS
              </Link>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-4 border-[#FFC107] flex items-center justify-center">
                  <span className={`${Termina} text-2xl font-black`}>2</span>
                </div>
              </div>
              <h3 className={`${Termina} text-xl md:text-2xl font-black mb-4 uppercase`}>
                UPLOAD <span className="text-[#FFC107]">ARTWORK</span>
              </h3>
              <div className={`${MaisonNeue} text-gray-700 space-y-2 mb-6 flex-grow`}>
                <p className="flex items-start gap-2">
                  <span className="text-[#FFC107] mt-1">✓</span>
                  <span>Upload artwork file(s) as well as any special instructions</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#FFC107] mt-1">✓</span>
                  <span>Your artwork is checked for optimal quality and resolution</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#FFC107] mt-1">✓</span>
                  <span>Your account rep will review & guide you through the rest</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#FFC107] mt-1">✓</span>
                  <span>Once approved, we&apos;ll begin your order</span>
                </p>
              </div>
              <Link 
                href="https://www.teevisionprinting.com/contact" className={`${MaisonNeue} w-full bg-[#FFC107] text-center hover:bg-[#e5a516] text-black font-bold py-3 px-6 rounded-full transition-colors uppercase`}>
                REQUEST A DESIGNER
              </Link>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-4 border-[#FFC107] flex items-center justify-center">
                  <span className={`${Termina} text-2xl font-black`}>3</span>
                </div>
              </div>
              <h3 className={`${Termina} text-xl md:text-2xl font-black mb-4 uppercase`}>
                MAKE A LASTING <span className="text-[#FFC107]">IMPRESSION</span>
              </h3>
              <div className={`${MaisonNeue} text-gray-700 space-y-2 mb-6 flex-grow`}>
                <p className="flex items-start gap-2">
                  <span className="text-[#FFC107] mt-1">✓</span>
                  <span>Lead the pack in your industry with employees and customers that actually want to wear your merch</span>
                </p>
              </div>
              <Link 
                href="https://www.teevisionprinting.com/products" className={`${MaisonNeue} w-full bg-[#FFC107] text-center hover:bg-[#e5a516] text-black font-bold py-3 px-6 rounded-full transition-colors uppercase`}>
                VIEW OUR PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white mt-10 mb-8">
        <div className="w-full flex justify-center">
          <div className="max-w-[75rem] w-full px-8">
            <div className="mb-8">
              <h2 className={`${Termina} text-center font-black text-[#FFC107] text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4`}>
                What Is DTG Printing?
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-4`}>
                <strong>DTG</strong> printing—also known as <strong>Direct-to-garment printing</strong> is a modern <strong>printing process</strong> that uses <strong>inkjet technology</strong> to <strong>apply aqueous textile inks</strong> directly onto fabric.
              </p>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                Unlike traditional <strong>screen printing</strong> or <strong>silk screen printing</strong>, DTG is a <strong>digital printing technique</strong> that excels at:
              </p>
              <ul>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Multi-color artwork
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} High-resolution files
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Complex gradients
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                  {bullet} Small runs and on-demand production
                </li>
              </ul>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                The ink absorbs into <strong>natural fibers</strong>, resulting in soft, breathable prints.
              </p>
            </div>
          </div>
        </div>
      </section>

            <section className="w-full bg-[#F5F5F5] mt-10 mb-8">
        <div className="w-full flex justify-center">
          <div className="max-w-[75rem] w-full px-8">
            <div className="mb-8">
              <h2 className={`${Termina} text-center font-black text-[#000000] text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4`}>
                Searching for <br /><span className="text-[#FFC107]">&quot;DTG Printing Near Me&quot;?</span>
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-4`}>
                We provide fast, reliable DTG printing with hands-on support and quick turnaround times.
              </p>
              <ul>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Faster production & delivery
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Easy communication with real experts
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto`}>
                  {bullet} Reliable quality you can trust
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="https://www.teevisionprinting.com/contact"
            className={`${MaisonNeue} bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-7 rounded-full transition-colors flex items-center justify-center gap-2 text-base`}
          >
            Get Your Quote Now
          </Link>
        </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Digital Mockup Section */}
      <section className="w-full flex justify-center py-12 xl:py-24 bg-[#2a2a2a] overflow-hidden">
        <div className="max-w-[75rem] w-full flex flex-col xl:flex-row items-center gap-4 xl:gap-8 px-8 relative">
          <div className="w-full xl:w-[53%] xl:absolute xl:left-0 xl:-translate-x-[15%]">
            <div className="relative w-full h-[350px] xl:h-[550px]">
              <Image
                src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/Screen+Printing+(9).png"
                fill
                alt="Digital Mockup Preview"
                className="object-contain scale-[2] sm:scale-150 xl:scale-125"
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 800px"
                quality={75}
              />
            </div>
          </div>

          <div className="w-full xl:w-[60%] xl:ml-auto flex flex-col items-center xl:items-start text-center xl:text-left xl:pl-8">
            <h2 className={`${Termina} font-black text-white text-[2rem] md:text-[2.5rem] xl:text-[2.5rem] mb-6 leading-tight`}>
              QUICK TURNAROUND DTG PRINTING <br /> ACROSS THE UNITED STATES
            </h2>
            <p className={`${MaisonNeue} text-white text-base md:text-lg mb-8 max-w-[650px]`}>
              We provide <strong>quick turnaround</strong> times without sacrificing quality. Whether you need a few shirts or scaled production, our workflow supports both custom orders and <strong>bulk orders</strong> efficiently.
            </p>
            <p className={`${MaisonNeue} text-white text-base md:text-lg mb-8 max-w-[650px]`}>
              Serving creators, businesses, and brands throughout the <strong>United States</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://www.teevisionprinting.com/contact"
                className="bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Have Questions? Let’s Print
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="w-full bg-white py-8 xl:py-12">
        <div className="max-w-[75rem] mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3.5rem] mb-4`}>
              <span className="text-black">FREQUENTLY ASKED </span>
              <span className="text-[#FFC107]">QUESTIONS</span>
            </h2>
            <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto`}>
              Got questions? Explore our Frequently Asked Questions to learn more about our services, products, and policies all in one place.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-5xl mx-auto space-y-4">

            <div className={`${openFaqIndex === 0 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(0)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  What does DTG printing mean?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 0 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 0 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                   DTG means direct to garment printing.
                  </p>
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                   <strong>DTG printing</strong>, also known as <strong>direct to garment printing</strong>, is a modern digital printing method where ink is sprayed directly onto fabric—similar to printing on paper. The ink soaks into the fibers, resulting in a soft feel, exceptional detail, and long-lasting prints.
                  </p>
                </div>
              )}
            </div>

            <div className={`${openFaqIndex === 1 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  What is DTG printing best for?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 1 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 1 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                   DTG is ideal for short-run, full-color designs and photographic images. It allows unlimited colors and intricate detail.
                  </p>
                </div>
              )}
            </div>

            <div className={`${openFaqIndex === 2 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  Is DTG printing better than screen printing?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 2 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 2 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    <strong>DTG Printing</strong>
                    <ul>
                      <li>
                        {bullet} Best for short runs and detailed artwork
                      </li>
                      <li>
                        {bullet} Unlimited colors
                      </li>
                      <li>
                        {bullet} Faster setup, no screens required
                      </li>
                    </ul>
                  </p>
                  <br />
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    <strong>Screen Printing / Silk Screen Printing</strong>
                    <ul>
                      <li>
                        {bullet} Best for <strong>bulk orders</strong>
                      </li>
                      <li>
                        {bullet} Limited colors
                      </li>
                      <li>
                        {bullet} Lower cost per unit at scale
                      </li>
                    </ul>
                  </p>
                  <br />
                  <p  className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    If your design requires complexity, gradients, or photographic detail, DTG is the superior <strong>printing technique</strong>.
                  </p>
                </div>
              )}
            </div>

            <div className={`${openFaqIndex === 3 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  Can I print full-color photos with DTG?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 3 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 3 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    Yes, but white base layers may be added for visibility. Learn more from our <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/blog/choose-fabric-custom-tshirts'> fabric guide</a></span>.
                  </p>
                </div>
              )}
            </div>

            <div className={`${openFaqIndex === 4 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(4)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  Which fabrics are best for DTG printing?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 4 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 4 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    100% cotton, light-colored <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/blog/choose-fabric-custom-tshirts'> blank shirts</a></span> are best for absorption and clarity.
                  </p>
                </div>
              )}
            </div>

            <div className={`${openFaqIndex === 5 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(5)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  What&apos;s the minimum order quantity for DTG?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 5 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 5 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    Absolutely. It&apos;s preferred by many when launching a <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/blog/how-to-start-a-clothing-brand'>clothing brand</a></span>.
                  </p>
                </div>
              )}
            </div>

            <div className={`${openFaqIndex === 6 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(6)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  Is DTG printing good quality?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 6 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 6 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    Our <strong>custom DTG printing</strong> uses <strong>Premium Inks</strong>, including <strong>water-based inks</strong>, <strong>D2 inks</strong>, and other advanced formulations
                  </p>
                  <br />
                  <ul>
                    <li className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                      ✔ Eco-friendly items with low environmental impact
                    </li>
                    <li className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                      ✔ Excellent wash resistance through a controlled <strong>curing process</strong>
                    </li>
                    <li className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                      ✔ Smooth finish with long-lasting vibrancy
                    </li>
                  </ul>
                  <br />
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    This makes DTG an ideal choice for <strong>sustainable fashion</strong> and brands that care about quality and the planet
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#F5F5F5] mt-10 mb-10">
        <div className="w-full flex justify-center">
          <div className="max-w-[75rem] w-full px-8">
            <div className="mb-8">
              <h2 className={`${Termina} text-center font-black text-[#FFC107] text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4 mt-8`}>
                <span className="text-[#000000]">Start Your</span> Custom DTG Order
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                From concept to completion, our <strong>Direct to Garment printing</strong> services make it easy to create premium <strong>custom apparel</strong> with no limits on color or creativity.
              </p>
            </div>
          <RequestAQuoteModalGeneralServerWrapper
            className={`${MaisonNeue} bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-7 rounded-full transition-colors flex items-center justify-center gap-2 text-base`}
          >
            Request a Digital Mockup
          </RequestAQuoteModalGeneralServerWrapper>
          </div>
          
        </div>

      </section>
    </main>
  );
};

export default NewDTG;