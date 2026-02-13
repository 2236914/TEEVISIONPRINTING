'use client';

import React, { memo, useCallback, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import Delivery from '@/utilities/SVGs/Delivery';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Needle from '@/utilities/SVGs/Needle';
import QuickCube from '@/utilities/SVGs/QuickCube';
import Scissors from '@/utilities/SVGs/Scissors';
import Termina from '@/utilities/fonts/Termina/Termina';
import ScreenPrintingSchema from '@/components/schemas/ScreenPrintingSchema';

// Lazy load the modal wrapper - this is the key!
const RequestAQuoteModalGeneralServerWrapper = dynamic(
  () =>
    import(
      '@/components/shared/RequestAQuoteModal/RequestAQuoteModalGeneralServerWrapper'
    ),
  {
    ssr: true, // Changed to true - allow SSR
    loading: () => (
      <div className="w-full xl:w-fit">
        <div
          className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-[#FFC107] border-[#FFC107] font-extrabold border-[0.2rem] text-button md:text-button-md lg:text-[1.15rem] rounded-md transition transform hover:scale-105 hover:bg-[#FFD54F] hover:border-[#FFD54F] min-w-[280px] flex items-center justify-center`}
          style={{ height: '64px' }}
        >
          REQUEST FREE QUOTE
        </div>
      </div>
    ),
  }
);

const bullet = '\u2022';

// Lazy loaded components
const ImageModal = dynamic(
  () => import('@/components/past-projects/components/ImageModal'),
  {
    loading: () => <div className="w-full h-full bg-gray-200 animate-pulse" />,
  }
);

interface Project {
  alt: string;
  imageSrc: string;
}

interface Product {
  image: string;
  link: string;
  name: string;
  price: string;
  rating: number;
}

const PROJECTS: Project[] = [
  { 
    imageSrc: '/screen-printing/new-screen-printing/61-converted-from-png.webp',
    alt: 'Custom t shirts screen printing: UFO graphic design' 
  },
  { 
    imageSrc: '/screen-printing/new-screen-printing/62-converted-from-png.webp',
    alt: 'custom screen print t-shirt featuring branded logo'
   },
  { 
    imageSrc: '/screen-printing/new-screen-printing/63-converted-from-png.webp',
    alt: 'Black custom t shirts screen print featuring illustrated chicken logo' 
  },
  { 
    imageSrc: '/screen-printing/new-screen-printing/64-converted-from-png.webp',
    alt: 'White custom screen printed t shirts featuring branded graphic'
   },
];

const DESCRIPTIONS = [
  {
    title: 'Screen Print Orders',
    subtitle: 'Starting 12 pieces',
    icon: <Needle width={52} height={52} />,
  },
  {
    title: 'Premium Inks',
    subtitle: 'Perfect for Vibrant Prints',
    icon: <Scissors width={52} height={52} />,
  },
  {
    title: 'Quick Turnaround',
    subtitle: '1-2 weeks',
    icon: <QuickCube width={52} height={52} />,
  },
  {
    title: 'Free Delivery',
    subtitle: 'Anywhere in United States',
    icon: <Delivery width={52} height={52} />,
  },
];

// Product data for each category
const PRODUCT_DATA: Record<string, Product[]> = {
  'T-SHIRTS': [
    {
      name: 'Gildan Adult Softstyle® T-Shirt (G640)',
      rating: 5.0,
      price: '$7.57 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/1-converted-from-png.webp',
      link: '/products/view/gildan-adult-softstyle-t-shirt-g640',
    },
    {
      name: 'AS Colour Classic Tee (5026)',
      rating: 5.0,
      price: '$16 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/5026_classic_tee_loose-converted-from-jfif.webp',
      link: '/products/view/as-colour-classic-tee-5026',
    },
    {
      name: 'Gildan Hammer™ Adult T-Shirt (H000)',
      rating: 5.0,
      price: '$9.37 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/1 (1)-converted-from-png.webp',
      link: '/products/view/gildan-hammer-adult-t-shirt-h000',
    },
    {
      name: 'Gildan Adult Heavy Cotton™ T-Shirt (G500)',
      rating: 5.0,
      price: '$6.36 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/1 (2)-converted-from-png.webp',
      link: '/products/view/gildan-adult-heavy-cotton-t-shirt-g5000',
    },
  ],
  SWEATSHIRTS: [
    {
      name: 'Gildan Softstyle® Full-Zip Hooded Sweatshirt (SF600)',
      rating: 5.0,
      price: '$34.07 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/sweatshirts/215-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/gildan-softstyle-full-zip-hooded-sweatshirt-sf600',
    },
    {
      name: 'Independent Trading Co. Heavyweight Hooded Sweatshirt',
      rating: 5.0,
      price: '$30.93 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/sweatshirts/Logo (30)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/independent-apparel-heavyweight-hooded-sweatshirt',
    },
    {
      name: 'Independent Trading Co. Heavyweight Crewneck Sweatshirt (IND3000)',
      rating: 5.0,
      price: '$30.54 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/sweatshirts/1-converted-from-jfif.webp',
      link: 'https://www.teevisionprinting.com/products/view/independent-trading-co-heavyweight-crewneck-sweatshirt-ind300',
    },
    {
      name: 'Independent Trading Co. Heavyweight Hooded Sweatshirt (IND4000)',
      rating: 5.0,
      price: '$40.02 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/sweatshirts/independent_trading_co._ind4000_alpine_green_front_high_model-converted-from-jfif.webp',
      link: 'https://www.teevisionprinting.com/products/view/independent-trading-co-heavyweight-hooded-sweatshirt-ind4000',
    },
  ],
  'LONG-SLEEVE SHIRTS': [
    {
      name: 'Gildan Adult Heavy Cotton™ Long-Sleeve T-Shirt (G540)',
      rating: 5.0,
      price: '$11.51 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/long sleeve/1 (3)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/gildan-adult-heavy-cotton-long-sleeve-t-shirt-g540',
    },
    {
      name: 'BELLA + CANVAS FWD Fashion Womens Crop Long Sleeve Tee (6501)',
      rating: 5.0,
      price: '$11.45 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/long sleeve/1 (4)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/bella--canvas-fwd-fashion-womens-crop-long-sleeve-tee-6501',
    },
  ],
  POLOS: [
    {
      name: 'Gildan Adult Jersey Polo (G880)',
      rating: 5.0,
      price: '$13.68 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/polos/1 (5)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/gildan-adult-jersey-polo-g880',
    },
    {
      name: 'Port Authority Silk Touch Polo - K500',
      rating: 5.0,
      price: '$18.93 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/polos/1 (6)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/port-authority-silk-touch-polo---k500-',
    },
    {
      name: 'UltraClub Adult Cool & Dry Long-Sleeve Mesh Piqué Polo (8210LS)',
      rating: 5.0,
      price: '$26.15 / Shirt (per 100 orders)',
      image:
        '/screen-printing/new-screen-printing/polos/1 (7)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/ultraclub-adult-cool--dry-long-sleeve-mesh-piqu-polo-8210ls',
    },
  ],
};

// Shared Components
const NavigationButton = ({
  direction,
  label,
  onClick,
}: {
  direction: 'prev' | 'next';
  label: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`p-3 rounded-full transition-colors ${
      direction === 'next'
        ? 'bg-[#fcb318] hover:bg-[#e5a516]'
        : 'bg-gray-300 hover:bg-gray-400'
    }`}
    aria-label={label}
  >
    <svg
      className={`w-6 h-6 ${direction === 'prev' ? 'rotate-180' : ''}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

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
    <span className={`${MaisonNeue} text-sm text-gray-600 ml-1`}>
      ({rating})
    </span>
  </div>
);

// Product Card Component
const ProductCard = memo(({ product }: { product: Product }) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
    <div className="relative w-full h-64 bg-gray-50 flex-shrink-0">
      <Image
        src={product.image}
        fill
        alt={product.name}
        className="object-contain p-4"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        quality={75}
      />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className={`${MaisonNeue} font-bold text-sm md:text-base mb-2`}>
        {product.name}
      </h3>
      <StarRating rating={product.rating} />
      <p className={`${MaisonNeue} font-bold text-base md:text-lg mt-2 mb-4`}>
        {product.price}
      </p>
      <Link href={product.link} className="mt-auto">
        <button
          className={`${MaisonNeue} w-full py-2 px-4 border-2 border-[#FFC107] text-[#FFC107] font-bold rounded-full hover:bg-[#FFC107] hover:text-black transition-colors`}
        >
          View Details
        </button>
      </Link>
    </div>
  </div>
));
ProductCard.displayName = 'ProductCard';

// Product Tabs Header Component
const ProductTabsHeader = memo(
  ({
    activeTab,
    setActiveTab,
  }: {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  }) => {
    const tabs = ['T-SHIRTS', 'SWEATSHIRTS', 'LONG-SLEEVE SHIRTS', 'POLOS'];

    return (
      <>
        {/* Mobile Dropdown */}
        <div className="block md:hidden mb-0">
          <select
            value={activeTab}
            onChange={(event) => setActiveTab(event.target.value)}
            className={`${MaisonNeue} w-full px-6 py-4 font-bold text-base bg-white text-black border-2 border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-[#FFC107]`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '3rem',
            }}
          >
            {tabs.map((tab) => (
              <option key={tab} value={tab}>
                {tab}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-wrap gap-0 justify-start mb-0">
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
      </>
    );
  }
);
ProductTabsHeader.displayName = 'ProductTabsHeader';

// Product Grid Component
const ProductGrid = memo(({ activeTab }: { activeTab: string }) => {
  return (
    <div className="w-full">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCT_DATA[activeTab].map((product, index) => (
          <ProductCard key={`${activeTab}-${index}`} product={product} />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <Link href="https://www.teevisionprinting.com/products/category/t-shirts">
          <button
            className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-3 px-8 rounded-full transition-colors`}
          >
            View More
          </button>
        </Link>
      </div>
    </div>
  );
});
ProductGrid.displayName = 'ProductGrid';

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
          <NavigationButton
            onClick={prevSlide}
            direction="prev"
            label="Previous image"
          />
          <NavigationButton
            onClick={nextSlide}
            direction="next"
            label="Next image"
          />
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
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="w-[6rem] h-[6rem] md:w-[15rem] md:h-[15rem] xl:w-[18rem] xl:h-[18rem]"
          >
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

const AnotherScreenPrinting = () => {
  const [activeTab, setActiveTab] = useState('T-SHIRTS');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <main className="bg-white">
      <ScreenPrintingSchema />
      {/* Noise Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feBlend mode="multiply" in="SourceGraphic" />
        </filter>
      </svg>

      {/* Hero Section */}
      <section className="w-full relative flex mt-[5rem] xl:mt-[6rem] overflow-hidden bg-[#1a1a1a]">
        <div className="flex flex-col w-full z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-12 xl:px-24 py-16 md:py-20 xl:py-24">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-8 text-white">
              <div>
                <p
                  className={`${MaisonNeue} text-base md:text-lg xl:text-3xl font-normal uppercase tracking-wide text-white`}
                >
                  BRING YOUR DESIGN TO LIFE WITH
                </p>
                <h1
                  className={`${Termina} uppercase font-black text-6xl md:text-7xl xl:text-8xl 2xl:text-7xl mt-2 leading-[0.9]`}
                >
                  <span className="text-[#FFC107]">CUSTOM SCREEN </span>
                  <br />
                  <span className="text-white">PRINTING</span>
                </h1>
              </div>
              <p
                className={`${MaisonNeue} text-base md:text-lg xl:text-xl text-gray-300 max-w-2xl leading-relaxed`}
              >
                Custom screen printing services that bring your ideas to life on
                T-Shirts, hoodies, tote bags and more.
              </p>

              {/* CTA Buttons - WRAPPED IN SUSPENSE */}
              <div className="flex flex-col md:flex-row gap-4 w-full xl:w-fit items-stretch mt-4">
                <Suspense
                  fallback={
                    <div className="w-full xl:w-fit">
                      <div
                        className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-[#FFC107] border-[#FFC107] font-extrabold border-[0.2rem] text-button md:text-button-md lg:text-[1.15rem] rounded-md min-w-[280px] flex items-center justify-center`}
                        style={{ height: '64px' }}
                      >
                        REQUEST FREE QUOTE
                      </div>
                    </div>
                  }
                >
                  <RequestAQuoteModalGeneralServerWrapper className="w-full xl:w-fit">
                    <div
                      className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-[#FFC107] border-[#FFC107] font-extrabold border-[0.2rem] text-button md:text-button-md lg:text-[1.15rem] rounded-md transition transform hover:scale-105 hover:bg-[#FFD54F] hover:border-[#FFD54F] min-w-[280px] flex items-center justify-center`}
                      style={{ height: '64px' }}
                    >
                      REQUEST FREE QUOTE
                    </div>
                  </RequestAQuoteModalGeneralServerWrapper>
                </Suspense>
                <Link href="/products" className="w-full xl:w-fit">
                  <div
                    className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-transparent border-[#FFC107] text-[#FFC107] font-extrabold border-[0.2rem] text-button md:text-button-md lg:text-[1.15rem] rounded-md transition transform hover:scale-105 hover:bg-[#FFC107] hover:text-black min-w-[280px] flex items-center justify-center cursor-pointer`}
                    style={{ height: '64px' }}
                  >
                    VIEW OUR PRODUCTS
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[700px] aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/screen-printing/new-screen-printing/Screen Printing (16)-converted-from-png.webp"
                  fill
                  alt="Screen printing process with green ink"
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 800px"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Section with Icons */}
      <section className="bg-[#FFC107] w-full relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-6 md:p-8 max-w-7xl mx-auto">
          {DESCRIPTIONS.map((description) => (
            <div
              className={`flex flex-col items-center text-center ${MaisonNeue} text-black`}
              key={description.title}
            >
              <div className="mb-2">{description.icon}</div>
              <p className="font-bold text-base md:text-lg">
                {description.title}
              </p>
              <p className="text-sm md:text-md">{description.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Prints Section */}
      <section className="mx-auto flex-col gap-5 items-center justify-center p-4 xl:p-1">
        <div className="w-full flex justify-center p-8 py-8 xl:py-12 bg-[#ffffff]">
          <div className="max-w-[75rem] w-full">
            <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center">
              <div className="flex flex-col gap-4">
                <h2
                  className={`${Termina} font-black text-[1.0rem] md:text-[1rem] leading-tight xl:text-[2rem]`}
                >
                  Featured Screen Printing Prints
                </h2>
              </div>
            </div>
            <div className="mt-8">
              <FeaturedPrintsCarousel projects={PROJECTS} />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="https://www.teevisionprinting.com/contact"
            className={`${MaisonNeue} bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-7 rounded-full transition-colors flex items-center justify-center gap-2 text-base`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Get Started in Minutes
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full bg-white">
        <div className="w-full flex justify-center">
          <div className="max-w-[75rem] w-full px-8">
            <div className="text-center mb-8">
              <h2
                className={`${Termina} font-black text-[#FFC107] text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4`}
              >
                <span className="text-[#000000]">BEST </span>PRODUCTS FOR SCREEN
                PRINTING
              </h2>
              <p
                className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}
              >
                We offer custom printed T shirts, tote bags, uniforms, hoodies
                and other apparel. Each product is selected for print
                compatibility, comfort, and durability—so your investment lasts.
                Get these custom printed apparel perfect for businesses, events,
                and teams.
              </p>
            </div>

            {/* Tabs on white background */}
            <ProductTabsHeader
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>

        {/* Products on gray background - full width */}
        <div className="w-full bg-[#f3f3f3] py-8">
          <div className="max-w-[75rem] mx-auto px-8">
            <ProductGrid activeTab={activeTab} />
          </div>
        </div>
      </section>

      {/* What is Screen Printing Section */}
      <section className="w-full flex justify-center py-8 xl:py-12 bg-white">
        <div className="max-w-[75rem] w-full px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h2
                className={`${Termina} font-black text-[2rem] md:text-[1.2rem] xl:text-[2.2rem] leading-tight`}
              >
                <span className="text-black">WHAT IS CUSTOM</span>
                <br />
                <span className="text-[#FFC107]">SCREEN PRINTING AND</span>
                <br />
                <span className="text-[#FFC107]">WHY IT WORKS</span>
              </h2>
              <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                Custom screen printing is a popular printing technique that uses a mesh screen, ink, and a squeegee to transfer designs onto fabric or other materials. Each color in the design is applied using a separate screen, creating vibrant, long-lasting prints that don&apos;t fade easily. It&apos;s ideal for custom T-shirts, hoodies, tote bags, and uniforms. Unlike digital prints, custom screen print shirts maintain their appearance after repeated washing, making them ideal for logos, branding, and bulk apparel orders.
              </p>
              <ul>
                <li>✔ Best for large quantities</li>
                <li>✔ Highly cost-effective</li>
                <li>✔ Professional, long-lasting finish</li>
              </ul>
              <Link
                href="https://www.teevisionprinting.com/contact"
                className={`${MaisonNeue} bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-7 rounded-full transition-colors flex items-center justify-center gap-2 text-base`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Talk to Our Screen Printing Expert Today
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
              <Image
                src="/screen-printing/new-screen-printing/65-converted-from-png.webp"
                fill
                alt="Screen printing services for custom apparel production"
                className="object-cover rounded-lg"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Screen Printing Methods Section */}
      <section className="w-full flex justify-center py-8 xl:py-12 bg-white">
        <div className="max-w-[75rem] w-full px-8">
          <div className="text-center mb-8">
            <h2
              className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-3`}
            >
              <span className="text-[#FFC107]">SCREEN PRINTING</span>{' '}
              <span className="text-black">METHODS</span>
            </h2>
            <p
              className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto`}
            >
              At Tee Vision Printing, we use several screen printing methods to
              achieve the best results for every design, fabric, and order size
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Plastisol Ink */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px] md:h-[450px]">
                <Image
                  src="/screen-printing/new-screen-printing/66-converted-from-png.webp"
                  fill
                  alt="Plastisol ink used in professional screen printing"
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className={`${Termina} font-black text-xl md:text-2xl mb-3 uppercase`}
                  >
                    PLASTISOL INK
                  </h3>
                  <p
                    className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}
                  >
                    The most popular option for{' '}
                    <strong>custom screen printed apparel</strong>, offering:
                  </p>
                  <br />
                  <ul
                    className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}
                  >
                    <li>{bullet} Bright, opaque colors</li>
                    <li>{bullet} Excellent durability</li>
                    <li>{bullet} Consistent, professional finish</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Metallic and UV Ink */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px] md:h-[450px]">
                <Image
                  src="/screen-printing/new-screen-printing/67-converted-from-png.webp"
                  fill
                  alt="Metallic and UV ink used in professional screen printing"
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className={`${Termina} font-black text-xl md:text-2xl mb-3 uppercase`}
                  >
                    METALLIC AND UV INK
                  </h3>
                  <p
                    className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}
                  >
                    Create eye-catching apparel with:
                  </p>
                  <br />
                  <ul
                    className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}
                  >
                    <li>
                      {bullet} <strong>Metallic inks</strong> for a premium,
                      reflective look
                    </li>
                    <li>
                      {bullet} <strong>UV inks</strong> that glow in the dark
                      for high-impact designs
                    </li>
                    <li>{bullet} Consistent, professional finish</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Puff Print */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px] md:h-[450px]">
                <Image
                  src="/screen-printing/new-screen-printing/68-converted-from-png.webp"
                  fill
                  alt="Puff print screen printing creating raised ink texture on fabric"
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className={`${Termina} font-black text-xl md:text-2xl mb-3 uppercase`}
                  >
                    PUFF PRINT
                  </h3>
                  <p
                    className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}
                  >
                    Add 3D textured dimension to your apparel
                  </p>
                  <br />
                  <ul
                    className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}
                  >
                    <li>
                      {bullet} Ideal for bold logos, intricate details, and unique patterns
                    </li>
                    <li>
                      {bullet} Enhances the visual appeal with a soft, squishy
                      texture
                    </li>
                    <li>
                      {bullet} Perfect for adding emphasis to specific design
                      elements
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Simulated Process */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px] md:h-[450px]">
                <Image
                  src="/screen-printing/new-screen-printing/69-converted-from-png.webp"
                  fill
                  alt="Screen printing applies vibrant colors using simulated process technique"
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className={`${Termina} font-black text-xl md:text-2xl mb-3 uppercase`}
                  >
                    SIMULATED PROCESS
                  </h3>
                  <p
                    className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}
                  >
                    Ideal for complex artwork and photos
                  </p>
                  <br />
                  <ul
                    className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}
                  >
                    <li>{bullet} Print detailed, full-color designs</li>
                    <li>{bullet} No separate screens for each color</li>
                    <li>{bullet} Great for photos and shading</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Industry Section */}
      <section className="w-full flex justify-center py-8 xl:py-12 bg-white">
        <div className="max-w-[75rem] w-full px-8">
          <div className="text-center mb-8">
            <h2
              className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3rem] leading-tight`}
            >
              <span className="text-black">CUSTOM SCREEN PRINTING</span>
              <br />
              <span className="text-[#FFC107]">SERVICES BY INDUSTRY</span>
            </h2>
            <p
              className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto`}
            >
              Outfit your team in style with custom business apparel that makes
              a lasting impression. From staff shirts and café uniforms to gym
              tees and promotional giveaways, our premium screen printing helps
              your brand look professional, polished, and unified. Perfect for
              restaurants, offices, retail shops, and corporate events.
            </p>
            <p
              className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto`}
            >
              Built for real-world use, our{' '}
              <strong>custom screen printing services</strong> support:
            </p>
          </div>

          {/* Business - Large Card */}
          <div className="relative overflow-hidden rounded-lg mb-6 shadow-lg">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/screen-printing/new-screen-printing/70-converted-from-png.webp"
                fill
                alt="Screen printing creating custom designs for business branding on various products"
                className="object-cover"
                loading="lazy"
                sizes="100vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <h3
                  className={`${Termina} font-black text-4xl md:text-5xl xl:text-6xl mb-4 uppercase`}
                >
                  BUSINESS
                </h3>
              </div>
            </div>
          </div>

          {/* Four Industry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Non-Profit */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer h-[350px] shadow-lg">
              <Image
                src="/screen-printing/new-screen-printing/76-converted-from-png.webp"
                fill
                alt="Screen printing services for non-profit organizations with custom designs for events and fundraising"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6">
                <div
                  className={`${Termina} bg-[#FFC107] text-black font-black py-3 px-8 rounded-full text-sm md:text-base uppercase shadow-lg`}
                >
                  NON PROFIT
                </div>
              </div>
            </div>

            {/* Fashion */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer h-[350px] shadow-lg">
              <Image
                src="/screen-printing/new-screen-printing/77-converted-from-png.webp"
                fill
                alt="Screen printing services for fashion brands creating custom designs for shirts and other apparel"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6">
                <div
                  className={`${Termina} bg-[#FFC107] text-black font-black py-3 px-8 rounded-full text-sm md:text-base uppercase shadow-lg`}
                >
                  FASHION
                </div>
              </div>
            </div>

            {/* Fitness */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer h-[350px] shadow-lg">
              <Image
                src="/screen-printing/new-screen-printing/72-converted-from-png.webp"
                fill
                alt="Screen printing services for fitness and sports brands creating custom designs for activewear and apparel"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6">
                <div
                  className={`${Termina} bg-[#FFC107] text-black font-black py-3 px-8 rounded-full text-sm md:text-base uppercase shadow-lg`}
                >
                  FITNESS
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer h-[350px] shadow-lg">
              <Image
                src="/screen-printing/new-screen-printing/78-converted-from-png.webp"
                fill
                alt="Screen printing services for schools, colleges and universities"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6">
                <div
                  className={`${Termina} bg-[#FFC107] text-black font-black py-3 px-8 rounded-full text-sm md:text-base uppercase shadow-lg`}
                >
                  EDUCATION
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <p
              className={`${MaisonNeue} text-base md:text-lg text-gray-700 text-center justify-center max-w-4xl mx-auto`}
            >
              We provide reliable customer service and consistent quality. Our
              apparel keeps your team looking professional and unified.
            </p>
          </div>
        </div>
      </section>

      {/* Request Digital Mockup Section */}
      <section className="w-full flex justify-center py-12 xl:py-16 bg-[#2a2a2a] overflow-hidden">
        <div className="max-w-[75rem] w-full flex flex-col xl:flex-row items-center gap-6 xl:gap-10 px-8 relative">
          {/* Left Side - Text Content */}
          <div className="w-full xl:w-[60%] flex flex-col items-center xl:items-start text-center xl:text-left">
            <h2
              className={`${Termina} font-black text-white text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-6 leading-tight`}
            >
              SEARCHING FOR CUSTOM SCREEN PRINTING NEAR ME?
            </h2>
            <p
              className={`${MaisonNeue} text-white text-base md:text-lg mb-8 max-w-[650px] leading-relaxed`}
            >
              If you’re searching for{' '}
              <strong>custom screen printing near me</strong>, we provide
              trusted local service with nationwide reach. Our streamlined
              process, <strong>quick turnaround</strong>, and nationwide
              shipping make us a go-to partner for{' '}
              <strong>local businesses</strong> and organizations alike.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://www.teevisionprinting.com/contact"
                className={`${MaisonNeue} bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-7 rounded-full transition-colors flex items-center justify-center gap-2 text-base`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Request a Designer
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full xl:w-[53%] xl:absolute xl:right-0 xl:translate-x-[15%]">
            <div className="relative w-full h-[400px] xl:h-[600px]">
              <Image
                src="/screen-printing/new-screen-printing/73-converted-from-png.webp"
                fill
                alt="Digital Mockup Preview"
                className="object-contain scale-[1.8] sm:scale-[1.4] xl:scale-125"
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 800px"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Screen Printing Section */}
      <section className="w-full flex justify-center py-8 xl:py-12 bg-white">
        <div className="max-w-[75rem] w-full px-8">
          <div className="gap-8 xl:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6">
              <h2 className={`${Termina} font-black text-[2rem] text-center md:text-[1.2rem] xl:text-[2.2rem] leading-tight`}>
                <span className="text-black">SEARCHING FOR</span>
                < br/>
                <span className="text-[#FFC107]">&quot;CUSTOM SCREEN PRINTING NEAR ME&quot;?</span>
              </h2>
              <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                If you’re searching for custom screen printing near me, we provide trusted local service with nationwide reach. Our streamlined process, quick turnaround, and nationwide shipping make us a go-to partner for local businesses and organizations alike.
              </p>
              <RequestAQuoteModalGeneralServerWrapper
                className={`${MaisonNeue} bg-[#fcb318] hover:bg-[#e5a516] text-black py-3 px-7 rounded-full transition-colors flex items-center justify-center gap-2 text-base`}
              >
                Request a Quote
              </RequestAQuoteModalGeneralServerWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="w-full bg-white py-8 xl:py-12">
        <div className="max-w-[75rem] mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2
              className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3.5rem] mb-4`}
            >
              <span className="text-black">FREQUENTLY ASKED </span>
              <span className="text-[#FFC107]">QUESTIONS</span>
            </h2>
            <p
              className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto`}
            >
              Got questions? Explore our Frequently Asked Questions to learn
              more about our services, products, and policies all in one place.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-5xl mx-auto space-y-4">
            <div
              className={`${openFaqIndex === 0 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3
                  className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}
                >
                  Are screen printed t-shirts good quality?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 0 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 0 && (
                <div className="px-6 md:px-8 pb-6">
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    Screen printed t-shirts are durable. They’re perfect for
                    bright, bold designs since the thick ink layers stay strong
                    through wear and washing.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`${openFaqIndex === 1 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3
                  className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}
                >
                  How do I order screen printed t-shirts?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 1 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 1 && (
                <div className="px-6 md:px-8 pb-6">
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    We provide artwork assistance and design support.
                  </p>
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    Our in-house graphic designers provide complete artwork
                    assistance, including:
                  </p>
                  <br />
                  <ul
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    <li>-Free digital mockups</li>
                    <li>-Artwork review and optimization</li>
                    <li>-Expert guidance for screen print orders</li>
                  </ul>
                  <br />
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    We ensure accurate color matching, clean separations, and
                    designs optimized for screen printing.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`${openFaqIndex === 2 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3
                  className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}
                >
                  What’s the minimum order for custom screen print shirts?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 2 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 2 && (
                <div className="px-6 md:px-8 pb-6">
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    We start at just 12 pieces.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`${openFaqIndex === 3 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3
                  className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}
                >
                  How long do screen printed shirts last?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 3 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 3 && (
                <div className="px-6 md:px-8 pb-6">
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    With proper care, our custom screen printed t-shirts last
                    for years without fading or cracking.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`${openFaqIndex === 4 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3
                  className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}
                >
                  How fast is production?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 4 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 4 && (
                <div className="px-6 md:px-8 pb-6">
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    Most orders ship within 1–2 weeks, depending on order size.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`${openFaqIndex === 5 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => toggleFaq(5)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3
                  className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}
                >
                  Do you ship nationwide?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 5 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 5 && (
                <div className="px-6 md:px-8 pb-6">
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    Yes, we ship anywhere in the U.S.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`${openFaqIndex === 6 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => toggleFaq(6)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3
                  className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}
                >
                  What is screen printing best for?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 6 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 6 && (
                <div className="px-6 md:px-8 pb-6">
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    Bulk orders with simple, bold designs such as logos or
                    school names are ideal for{' '}
                    <span className="text-[#FFC107]">
                      <a href="https://www.teevisionprinting.com/blog/what-is-screen-printing">
                        screen printing
                      </a>
                    </span>
                  </p>
                </div>
              )}
            </div>

            <div
              className={`${openFaqIndex === 7 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => toggleFaq(7)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3
                  className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}
                >
                  Is screen printing better than DTG?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 7 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 7 && (
                <div className="px-6 md:px-8 pb-6">
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    For high-volume runs, screen printing is more cost-effective
                    and durable. Learn the difference{' '}
                    <span className="text-[#FFC107]">
                      <a href="https://www.teevisionprinting.com/blog/dtg-vs-screen-printing">
                        here
                      </a>
                    </span>
                  </p>
                </div>
              )}
            </div>

            <div
              className={`${openFaqIndex === 8 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => toggleFaq(8)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3
                  className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}
                >
                  Can I use multiple ink colors?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 8 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 8 && (
                <div className="px-6 md:px-8 pb-6">
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    Yes, use{' '}
                    <span className="text-[#FFC107]">
                      <a href="https://www.teevisionprinting.com/blog/spot-color-screen-printing">
                        spot color printing
                      </a>
                    </span>{' '}
                    to separate and layer colors for precise results.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`${openFaqIndex === 9 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => toggleFaq(9)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3
                  className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}
                >
                  Which fabrics are best for screen printing?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 9 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 9 && (
                <div className="px-6 md:px-8 pb-6">
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    We recommend cotton or blends. Use this{' '}
                    <span className="text-[#FFC107]">
                      <a href="https://www.teevisionprinting.com/blog/choose-fabric-custom-tshirts">
                        fabric guide
                      </a>
                    </span>{' '}
                    to choose the best one.
                  </p>
                </div>
              )}
            </div>

            <div
              className={`${openFaqIndex === 10 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}
            >
              <button
                onClick={() => toggleFaq(10)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3
                  className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}
                >
                  Can I print sweatshirts or hoodies?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 10 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 10 && (
                <div className="px-6 md:px-8 pb-6">
                  <p
                    className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}
                  >
                    Yes. Compare apparel in our{' '}
                    <span className="text-[#FFC107]">
                      <a href="https://www.teevisionprinting.com/blog/sweater-vs-sweatshirt">
                        sweater vs sweatshirt
                      </a>
                    </span>{' '}
                    guide.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="w-full flex justify-center">
          <div className="max-w-[75rem] w-full px-8">
            <div className="text-center mb-8">
              <h2
                className={`${Termina} font-black text-[#FFC107] text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4`}
              >
                <span className="text-[#000000]">
                  READY TO ORDER CUSTOM PRINTED SHIRTS, HOODIES, AND OTHER
                  APPAREL?{' '}
                </span>
              </h2>
              <p
                className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}
              >
                Whether you need custom screen print shirts, business apparel,
                or branded promotional items, we make the process fast, simple,
                and reliable.
              </p>
              <p
                className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}
              >
                <strong>Next Steps:</strong>
              </p>
              <ul
                className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}
              >
                <li>Get a free quote</li>
                <li>Request a digital mockup</li>
                <li>Speak with our screen printing expert</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="https://www.teevisionprinting.com/contact"
            className={`${MaisonNeue} bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-7 rounded-full transition-colors flex items-center justify-center gap-2 text-base`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Get Started in Minutes
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AnotherScreenPrinting;
