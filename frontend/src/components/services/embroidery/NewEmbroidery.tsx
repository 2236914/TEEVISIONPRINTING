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
import EmbroiderySchema from '@/components/schemas/EmbroiderySchema';
import RequestAQuoteModalServerWrapperGeneral from '@/components/shared/RequestAQuoteModal/RequestAQuoteModalGeneralServerWrapper';

// Lazy loaded components
const ImageModal = dynamic(() => import('@/components/past-projects/components/ImageModal'), {
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse" />,
});

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

const PROJECTS: Project[] = [
  { imageSrc: '/embroidery/newembroidery/14-converted-from-png.webp' },
  { imageSrc: '/embroidery/newembroidery/15-converted-from-png (1).webp' },
  { imageSrc: '/embroidery/newembroidery/16-converted-from-png.webp' },
  { imageSrc: '/embroidery/newembroidery/17-converted-from-png.webp' },
];

const DESCRIPTIONS = [
  { title: 'Screen Print Orders', subtitle: 'Starting 12 pieces', icon: <Needle width={52} height={52} /> },
  { title: 'Premium Inks', subtitle: 'Perfect for Vibrant Prints', icon: <Scissors width={52} height={52} /> },
  { title: 'Quick Turnaround', subtitle: '1-2 weeks', icon: <QuickCube width={52} height={52} /> },
  { title: 'Free Delivery', subtitle: 'Anywhere in United States', icon: <Delivery width={52} height={52} /> },
];

// Industry Carousel Component
const IndustryCarousel = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const industryImages = [
    '/embroidery/newembroidery/20-converted-from-png.webp',
    '/embroidery/newembroidery/21-converted-from-png.webp',
    '/embroidery/newembroidery/22-converted-from-png.webp',
    '/embroidery/newembroidery/23-converted-from-png.webp'
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % industryImages.length);
  }, [industryImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + industryImages.length) % industryImages.length);
  }, [industryImages.length]);

  // Auto-advance carousel every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full">
      {/* Desktop - Show all 4 images */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-4">
        {industryImages.map((image, idx) => (
          <div key={idx} className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src={image}
              fill
              alt={`Custom embroidery example ${idx + 1}`}
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 25vw"
              quality={85}
            />
          </div>
        ))}
      </div>

      {/* Mobile/Tablet - Carousel */}
      <div className="lg:hidden">
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
          <Image
            src={industryImages[currentIndex]}
            fill
            alt={`Custom embroidery example ${currentIndex + 1}`}
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw"
            quality={85}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 mt-6 justify-center">
          <NavigationButton onClick={prevSlide} direction="prev" label="Previous image" />
          <NavigationButton onClick={nextSlide} direction="next" label="Next image" />
        </div>

        {/* Indicators */}
        <div className="flex gap-2 mt-4 justify-center">
          {industryImages.map((_image, index) => (
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
    </div>
  );
});
IndustryCarousel.displayName = 'IndustryCarousel';

// Product data for each category
const PRODUCT_DATA: Record<string, Product[]> = {
  'T-SHIRTS': [
    {
      name: 'Gildan Adult Softstyle® T-Shirt (G640)',
      rating: 5.0,
      price: '$7.57 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/1-converted-from-png.webp',
      link: '/products/view/gildan-adult-softstyle-t-shirt-g640'
    },
    {
      name: 'AS Colour Classic Tee (5026)',
      rating: 5.0,
      price: '$16 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/5026_classic_tee_loose-converted-from-jfif.webp',
      link: '/products/view/as-colour-classic-tee-5026'
    },
    {
      name: 'Gildan Hammer™ Adult T-Shirt (H000)',
      rating: 5.0,
      price: '$9.37 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/1 (1)-converted-from-png.webp',
      link: '/products/view/gildan-hammer-adult-t-shirt-h000'
    },
    {
      name: 'Gildan Adult Heavy Cotton™ T-Shirt (G500)',
      rating: 5.0,
      price: '$6.36 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/1 (2)-converted-from-png.webp',
      link: '/products/view/gildan-adult-heavy-cotton-t-shirt-g5000'
    }
  ],
  'SWEATSHIRTS': [
    {
      name: 'Gildan Softstyle® Full-Zip Hooded Sweatshirt (SF600)',
      rating: 5.0,
      price: '$34.07 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/sweatshirts/215-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/gildan-softstyle-full-zip-hooded-sweatshirt-sf600'
    },
    {
      name: 'Independent Trading Co. Heavyweight Hooded Sweatshirt',
      rating: 5.0,
      price: '$30.93 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/sweatshirts/Logo (30)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/independent-apparel-heavyweight-hooded-sweatshirt'
    },
    {
      name: 'Independent Trading Co. Heavyweight Crewneck Sweatshirt (IND3000)',
      rating: 5.0,
      price: '$30.54 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/sweatshirts/1-converted-from-jfif.webp',
      link: 'https://www.teevisionprinting.com/products/view/independent-trading-co-heavyweight-crewneck-sweatshirt-ind300'
    },
    {
      name: 'Independent Trading Co. Heavyweight Hooded Sweatshirt (IND4000)',
      rating: 5.0,
      price: '$40.02 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/sweatshirts/independent_trading_co._ind4000_alpine_green_front_high_model-converted-from-jfif.webp',
      link: 'https://www.teevisionprinting.com/products/view/independent-trading-co-heavyweight-hooded-sweatshirt-ind4000'
    }
  ],
  'LONG-SLEEVE SHIRTS': [
    {
      name: 'Gildan Adult Heavy Cotton™ Long-Sleeve T-Shirt (G540)',
      rating: 5.0,
      price: '$11.51 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/long sleeve/1 (3)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/gildan-adult-heavy-cotton-long-sleeve-t-shirt-g540'
    },
    {
      name: 'BELLA + CANVAS FWD Fashion Womens Crop Long Sleeve Tee (6501)',
      rating: 5.0,
      price: '$11.45 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/long sleeve/1 (4)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/bella--canvas-fwd-fashion-womens-crop-long-sleeve-tee-6501'
    }
  ],
  'POLOS': [
    {
      name: 'Gildan Adult Jersey Polo (G880)',
      rating: 5.0,
      price: '$13.68 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/polos/1 (5)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/gildan-adult-jersey-polo-g880'
    },
    {
      name: 'Port Authority Silk Touch Polo - K500',
      rating: 5.0,
      price: '$18.93 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/polos/1 (6)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/port-authority-silk-touch-polo---k500-'
    },
    {
      name: 'UltraClub Adult Cool & Dry Long-Sleeve Mesh Piqué Polo (8210LS)',
      rating: 5.0,
      price: '$26.15 / Shirt (per 100 orders)',
      image: '/screen-printing/new-screen-printing/polos/1 (7)-converted-from-png.webp',
      link: 'https://www.teevisionprinting.com/products/view/ultraclub-adult-cool--dry-long-sleeve-mesh-piqu-polo-8210ls'
    }
  ],
};

// Shared Components
const NavigationButton = ({ direction, label, onClick }: { direction: 'prev' | 'next'; label: string; onClick: () => void }) => (
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
    <span className={`${MaisonNeue} text-sm text-gray-600 ml-1`}>({rating})</span>
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
      <h3 className={`${MaisonNeue} font-bold text-sm md:text-base mb-2`}>{product.name}</h3>
      <StarRating rating={product.rating} />
      <p className={`${MaisonNeue} font-bold text-base md:text-lg mt-2 mb-4`}>{product.price}</p>
      <Link href={product.link} className="mt-auto">
        <button className={`${MaisonNeue} w-full py-2 px-4 border-2 border-[#FFC107] text-[#FFC107] font-bold rounded-full hover:bg-[#FFC107] hover:text-black transition-colors`}>
          View Details
        </button>
      </Link>
    </div>
  </div>
));
ProductCard.displayName = 'ProductCard';

// Product Tabs Header Component
const ProductTabsHeader = memo(({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
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
            paddingRight: '3rem'
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
        {projects.map((project, idx) => (
          <div key={idx} className="w-[6rem] h-[6rem] md:w-[15rem] md:h-[15rem] xl:w-[18rem] xl:h-[18rem]">
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
const NewNewEmbroidery = () => {
  const [activeTab, setActiveTab] = useState('T-SHIRTS');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <main className="bg-white">
      <EmbroiderySchema />
      {/* Noise Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
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
                <p className={`${MaisonNeue} text-base md:text-lg xl:text-3xl font-normal uppercase tracking-wide text-white`}>
                  WHERE EVERY STITCH TELLS YOUR STORY
                </p>
                <h1 className={`${Termina} uppercase font-black text-6xl md:text-7xl xl:text-8xl 2xl:text-8xl mt-2 leading-[0.9]`}>
                  <span className="text-[#FFC107]">CUSTOM </span>
                  <br />
                  <span className="text-white">EMBROIDERY</span>
                </h1>
              </div>
              <p className={`${MaisonNeue} text-base md:text-lg xl:text-xl text-gray-300 max-w-2xl leading-relaxed`}>
                Custom Emboidery allowed your business, or staff look more professional with higher quality decoration. By Embroidering your custom apparel it  elevates your brand or personal style to the next level. Recommended for uniforms,  events, or high-end merch.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col w-full xl:w-fit items-start mt-4">
                <RequestAQuoteModalServerWrapperGeneral className="w-full xl:w-fit">
                  <div
                    className={`${MaisonNeue} w-full py-3 px-12 xl:py-3 xl:px-16 h-auto btn bg-[#FFC107] border-[#FFC107] font-extrabold border-[0.2rem] rounded-full transition transform hover:scale-105 hover:bg-[#FFD54F] hover:border-[#FFD54F] flex flex-col items-center justify-center uppercase min-w-[420px]`}
                  >
                    <span className="text-base md:text-lg font-black leading-none tracking-wide">REQUEST AN CUSTOM</span>
                    <span className="text-base md:text-lg font-black leading-none tracking-wide">EMBROIDERY QUOTE</span>
                  </div>
                </RequestAQuoteModalServerWrapperGeneral>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[700px] aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/embroidery/newembroidery/14-converted-from-png.webp"
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
              <p className="font-bold text-base md:text-lg">{description.title}</p>
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
                <h2 className={`${Termina} font-black text-[#FFC107] text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4`}>
                  FEATURED EMBROIDERY PICKS
                </h2>
                <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                Discover our most popular embroidered apparel and accessories. Each stitch adds a touch of professionalism and durability to your brand, whether its on polos, caps, or work uniforms.
                </p>
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
                <span className="text-[#000000]">BEST PRODUCTS FOR </span>CUSTOM EMBROIDERY
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                Bring your designs to life with high-quality embdoidery in Philadelphia. We offer vibrant, durable prints for t-shirts, hoodies, polos, and totes  crafted with precision and local pride.
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

      {/* Screen Printing Methods Section */}
      <section className="w-full flex justify-center py-8 xl:py-12 bg-white">
        <div className="max-w-[75rem] w-full px-8">
          <div className="text-center mb-8">
            <h2 className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-3`}>
              <span className="text-[#FFC107]">EMBROIDERY </span>{' '}
              <span className="text-black">STYLING</span>
            </h2>
            <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto`}>
              These dimensions apply to front and back torso area of tees, longsleeves, crewneck sweaters, and
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Flat Stitch */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px] md:h-[450px]">
                <Image
                  src="/embroidery/newembroidery/37-converted-from-png.webp"
                  fill
                  alt="Flat stitch embroidery method"
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={`${Termina} font-black text-xl md:text-2xl mb-3 uppercase`}>
                    FLAT STITCH EMBROIDERY
                  </h3>
                  <p className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}>
                    The most popular embroidery option we provide. Using polyester thread, this technique can be applied for most design types. If your design is big or small, simple or detailed, flat stitch embroidery is usually the way to go.
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Puff */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px] md:h-[450px]">
                <Image
                  src="/embroidery/newembroidery/38-converted-from-png.webp"
                  fill
                  alt="3D puff embroidery method"
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={`${Termina} font-black text-xl md:text-2xl mb-3 uppercase`}>
                    3D PUFF EMBROIDERY
                  </h3>
                  <p className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}>
                    We place foam underneath the stitching to create a 3D look. Most commonly used for sports logos on caps. This technique helps the graphic stand out on garments, and looks best with a solid color design.
                  </p>
                </div>
              </div>
            </div>

            {/* Flat + 3D */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px] md:h-[450px]">
                <Image
                  src="/embroidery/newembroidery/39-converted-from-png.webp"
                  fill
                  alt="Flat stitch plus 3D puff combination method"
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={`${Termina} font-black text-xl md:text-2xl mb-3 uppercase`}>
                    FLAT STITCH + 3D PUFF
                  </h3>
                  <p className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}>
                    We can combine these two techniques to add depth to your designs.
                  </p>
                </div>
              </div>
            </div>

            {/* Applique */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px] md:h-[450px]">
                <Image
                  src="/embroidery/newembroidery/40-converted-from-png.webp"
                  fill
                  alt="Applique twill embroidery method"
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={`${Termina} font-black text-xl md:text-2xl mb-3 uppercase`}>
                    APPLIQUE TWILL
                  </h3>
                  <p className={`${MaisonNeue} text-xs md:text-sm leading-relaxed`}>
                    Also known as tackle twill - This process uses cut out shapes of twill material and we embroider stitch around the edges. If your graphic has large areas of a single solid color, we can use the twill material for this clean look.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embroidery Max Dimensions Section */}
      <section className="w-full flex justify-center py-8 xl:py-12 bg-white">
        <div className="max-w-[75rem] w-full px-8">
          <div className="text-center mb-8">
            <h2 className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4`}>
              EMBROIDERY <span className="text-[#FFC107]">MAX DIMENSIONS</span>
            </h2>
            <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-2`}>
              These dimensions apply to front and back torso area of tees, longsleeves, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/custom-crewneck-sweatshirts'>crewneck sweaters</a></span>, and hoodies.
            </p>
            <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-1`}>
              Front/back - up to 16x20&quot;
            </p>
            <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto`}>
              To keep graphics above a hoodie pocket, max height is approx. 10.5&quot;
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto aspect-[16/10]">
            <Image
              src="/embroidery/newembroidery/19-converted-from-png.webp"
              fill
              alt="Embroidery maximum dimensions guide showing placement areas on various garments"
              className="object-contain"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              quality={90}
            />
          </div>
        </div>
      </section>

      {/* Custom Embroidery By Industry Carousel Section */}
      <section className="w-full flex justify-center py-8 xl:py-12 bg-white">
        <div className="max-w-[75rem] w-full px-8">
          <div className="text-center mb-8">
            <h2 className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4`}>
              CUSTOM EMBROIDERY <span className="text-[#FFC107]">BY INDUSTRY</span>
            </h2>
            <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto`}>
              All Hand Digitized & Reviewed For Ultimate Stitch Quality
            </p>
          </div>

          <IndustryCarousel />
        </div>
      </section>
      
      {/* Request Digital Mockup Section */}
      <section className="w-full flex justify-center py-12 xl:py-16 bg-[#2a2a2a] overflow-hidden">
        <div className="max-w-[75rem] w-full flex flex-col xl:flex-row items-center gap-6 xl:gap-10 px-8 relative">
          {/* Left Side - Text Content */}
          <div className="w-full xl:w-[60%] flex flex-col items-center xl:items-start text-center xl:text-left">
            <h2 className={`${Termina} font-black text-white text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-6 leading-tight`}>
              REQUEST A DIGITAL MOCKUP OR DESIGNER
            </h2>
            
            <p className={`${MaisonNeue} text-white text-base md:text-lg mb-8 max-w-[650px] leading-relaxed`}>
              Our live assistants are here to help you achieve designs from start to finish. Check out our{' '}
              <span className="underline cursor-pointer hover:text-[#fcb318]">FAQs</span>,{' '}
              <span className="underline cursor-pointer hover:text-[#fcb318]">send us an email</span>, or give us a call.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://www.teevisionprinting.com/contact"
                className={`${MaisonNeue} bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-7 rounded-full transition-colors flex items-center justify-center gap-2 text-base`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Request a designer
              </Link>
              
              <Link 
                href="https://www.teevisionprinting.com/contact"
                className={`${MaisonNeue} bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-7 rounded-full transition-colors flex items-center justify-center gap-2 text-base`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                Digital Mockup →
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full xl:w-[53%] xl:absolute xl:right-0 xl:translate-x-[15%]">
            <div className="relative w-full h-[400px] xl:h-[600px]">
              <Image
                src="/embroidery/newembroidery/24-converted-from-png.webp"
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
            {/* FAQ Item 1 */}
            <div className={`${openFaqIndex === 0 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(0)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                 What&apos;s the difference between embroidery and printing?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 0 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 0 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    Embroidery uses thread stitched into the fabric, offering a more upscale look and longer durability than printed methods like  <span className="text-[#FFC107]"><a href="https://www.teevisionprinting.com/blog/what-is-screen-printing">screen printing</a></span>.                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className={`${openFaqIndex === 1 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  Is embroidery good for t shirts?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 1 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 1 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    Yes, especially for logos, initials, and simple designs. It&apos;s excellent for events, uniforms, and <span className="text-[#FFC107]"><a href="https://www.teevisionprinting.com/blog/creative-merch-ideas">custom gifts</a></span>.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className={`${openFaqIndex === 2 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  Can you embroider small details?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 2 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 2 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    Absolutely. Learn what&apos;s possible in our <span className="text-[#FFC107]"><a href="https://www.teevisionprinting.com/blog/guide-to-embroidery-stitches">embroidery stitch guide</a></span>.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className={`${openFaqIndex === 3 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  What types of shirts work best for embroidery?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 3 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 3 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    Mid-weight cotton and blends are ideal. For options, see our <span className="text-[#FFC107]"><a href="https://www.teevisionprinting.com/blog/blank-tshirt">blank t shirt collection</a></span>.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className={`${openFaqIndex === 4 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(4)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  Do you offer embroidery for jackets or sweatshirts?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 4 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 4 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    Yes! Refer to our <span className="text-[#FFC107]"><a href="https://www.teevisionprinting.com/blog/sweater-vs-sweatshirt">sweater vs sweatshirt </a></span>post to select the best garment.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 6 */}
            <div className={`${openFaqIndex === 5 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
              <button 
                onClick={() => toggleFaq(5)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
              >
                <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                  What&apos;s the minimum order?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 5 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 5 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    We offer flexible quantities, perfect for individuals or businesses. <span className="text-[#FFC107]"><a href="https://www.teevisionprinting.com/contact">Contact us </a></span>for bulk pricing or one-off orders.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewNewEmbroidery;