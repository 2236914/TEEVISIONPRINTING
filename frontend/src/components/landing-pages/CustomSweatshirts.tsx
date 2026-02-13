'use client';

import React, { memo, useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import Delivery from '@/utilities/SVGs/Delivery';
import Needle from '@/utilities/SVGs/Needle';
import QuickCube from '@/utilities/SVGs/QuickCube';
import Scissors from '@/utilities/SVGs/Scissors';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import CustomSweatshirtsSchema from '@/components/schemas/CustomSweatshirtsSchema';
import RequestAQuoteModalGeneralServerWrapper from '@/components/shared/RequestAQuoteModal/RequestAQuoteModalGeneralServerWrapper';

const RequestAQuoteModalServerWrapperSmall = dynamic(
  () => import('@/components/shared/RequestAQuoteModal/RequestAQuoteModalGeneralServerWrapper'),
  { 
    ssr: false,
    loading: () => (
      <div className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-3 px-8 rounded-full transition-colors text-center cursor-pointer`}>
        REQUEST A QUOTE
      </div>
    )
  }
);

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
  { imageSrc: '/custom-sweatshirts/new2-converted-from-png.webp' },
  { imageSrc: '/custom-sweatshirts/new3-converted-from-png.webp' },
  { imageSrc: '/custom-sweatshirts/new4-converted-from-png.webp' },
  { imageSrc: '/custom-sweatshirts/new5-converted-from-png.webp' },
];

const DESCRIPTIONS = [
  { title: 'Screen Print Orders', subtitle: 'Starting 12 pieces', icon: <Needle width={52} height={52} /> },
  { title: 'Premium Inks', subtitle: 'Perfect for Vibrant Prints', icon: <Scissors width={52} height={52} /> },
  { title: 'Quick Turnaround', subtitle: '1-2 weeks', icon: <QuickCube width={52} height={52} /> },
  { title: 'Free Delivery', subtitle: 'Anywhere in United States', icon: <Delivery width={52} height={52} /> },
];

// Product data for sweatshirts
const PRODUCT_DATA: Record<string, Product[]> = {
  'CREWNECK SWEATSHIRTS': [
    {
      name: 'Independent Trading Co. Heavyweight Crewneck Sweatshirt (IND3000)',
      rating: 5.0,
      price: '$36.16 / sweatshirt',
      image: '/screen-printing/new-screen-printing/sweatshirts/1-converted-from-jfif.webp',
      link: '/products/view/independent-trading-co-heavyweight-crewneck-sweatshirt-ind300'
    },
    {
      name: 'Gildan - Unisex Heavy Blend™ Crewneck Sweatshirt (18000)',
      rating: 5.0,
      price: '$28.50 / sweatshirt',
      image: '/custom-hooodies/gildan---unisex-heavy-blend-crewneck-sweatshirt-18000-converted-from-png.webp',
      link: '/products/view/gildan---unisex-heavy-blend-crewneck-sweatshirt-18000'
    },
    {
      name: 'Gildan Unisex Hammer™ Maxweight Crewneck Sweatshirt (19000)',
      rating: 5.0,
      price: '$32.75 / sweatshirt',
      image: '/custom-hooodies/gildan-unisex-hammer-maxweight-crewneck-sweatshirt-19000-converted-from-png.webp',
      link: '/products/view/gildan-unisex-hammer-maxweight-crewneck-sweatshirt-19000'
    },
    {
      name: 'Independent Trading Co. Midweight Pigment-Dyed Crewneck Sweatshirt (PRM3500)',
      rating: 5.0,
      price: '$38.90 / sweatshirt',
      image: '/custom-hooodies/independent-trading-co-midweight-pigment-dyed-crewneck-sweatshirt-prm3500-converted-from-png.webp',
      link: '/products/view/independent-trading-co-midweight-pigment-dyed-crewneck-sweatshirt-prm3500'
    }
  ],
  'PULLOVER SWEATSHIRTS': [

  ],
  'ZIP-UP SWEATSHIRTS': [
  ]
};

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
  const tabs = ['CREWNECK SWEATSHIRTS', 'PULLOVER SWEATSHIRTS', 'ZIP-UP SWEATSHIRTS'];

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
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCT_DATA[activeTab].map((product, index) => (
          <ProductCard key={`${activeTab}-${index}`} product={product} />
        ))}
      </div>

      {/* View More Button */}
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
  const [selectedImage, setSelectedImage] = useState('');

  const itemsPerView = 4;
  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleImageClick = useCallback((imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => setIsModalOpen(false), []);

  const handleModalKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setIsModalOpen(false);
    }
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${
            currentIndex === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
          }`}
          aria-label="Previous images"
        >
          <svg className="w-6 h-6 rotate-180" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Images Container */}
        <div className="flex-1 overflow-hidden">
          <div 
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 cursor-pointer"
                style={{ width: `calc(${100 / itemsPerView}% - 12px)` }}
                onClick={() => handleImageClick(project.imageSrc)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleImageClick(project.imageSrc);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View featured sweatshirt design ${index + 1}`}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={project.imageSrc}
                    fill
                    alt={`Featured sweatshirt design ${index + 1}`}
                    className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="25vw"
                    quality={85}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${
            currentIndex === maxIndex
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#fcb318] hover:bg-[#e5a516] text-black'
          }`}
          aria-label="Next images"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        <div 
          className="h-1 bg-[#FFC107] rounded-full transition-all duration-300"
          style={{ width: `${100 / (maxIndex + 1)}%`, maxWidth: '120px' }}
        />
        <div 
          className="h-1 bg-gray-300 rounded-full transition-all duration-300"
          style={{ width: `${(maxIndex * 100) / (maxIndex + 1)}%`, maxWidth: '120px' }}
        />
      </div>

      {/* Modal for full size view */}
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
              src={selectedImage}
              fill
              alt="Featured sweatshirt full size"
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
const CustomSweatshirts = () => {
  const [activeTab, setActiveTab] = useState('CREWNECK SWEATSHIRTS');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // 🔥 INSTANT LOADING: Prefetch modal component after page loads
  // Fixed: Properly handle the promise with void operator
  useEffect(() => {
    const timer = setTimeout(() => {
      void import('@/components/shared/RequestAQuoteModal/RequestAQuoteModalServerWrapper');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };
  return (
    <main className="bg-white">
              <CustomSweatshirtsSchema />
      <div className="absolute z-[60] w-full">
        <MainNavigation />
      </div>
      {/* Noise Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend mode="multiply" in="SourceGraphic" />
        </filter>
      </svg>

      {/* Hero Section */}
      <section className="w-full relative flex overflow-hidden bg-[#1a1a1a]">
        <div className="flex flex-col w-full z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-12 xl:px-24 py-16 md:py-20 xl:py-24 pt-32 md:pt-36 xl:pt-40">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-8 text-white">
              <div>
                <p className={`${MaisonNeue} text-base md:text-lg xl:text-3xl font-normal uppercase tracking-wide text-white`}>
                  BRING YOUR DESIGN TO LIFE WITH
                </p>
                <h1 className={`${Termina} uppercase font-black text-6xl md:text-7xl xl:text-8xl 2xl:text-7xl mt-2 leading-[0.9]`}>
                  <span className="text-[#FFC107]">CUSTOM</span>
                  <br />
                  <span className="text-[#FFC107]">SWEATSHIRTS</span>
                </h1>
              </div>
              <p className={`${MaisonNeue} text-base md:text-lg xl:text-xl text-gray-300 max-w-2xl leading-relaxed`}>
                Custom sweatshirts designed to showcase your ideas on durable, high-quality apparel including <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/polos'>polos</a></span>, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/sweatshirts-hoodies/hooded-sweatshirts'>hoodies</a></span>, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/t-shirts'>T-shirts</a></span>, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/tote-bags-more/tote-bag'>tote bags</a></span>, and more.
              </p>
              
              {/* CTA Buttons - BANNER USES RequestAQuoteModalServerWrapper */}
              <div className="flex flex-col md:flex-row gap-4 w-full xl:w-fit items-stretch mt-4">
                <RequestAQuoteModalGeneralServerWrapper className="w-full xl:w-fit">
                  <div
                    className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-[#FFC107] border-[#FFC107] font-extrabold border-[0.2rem] !text-black text-button md:text-button-md lg:text-[1.15rem] rounded-md transition transform hover:scale-105 hover:bg-[#FFD54F] hover:border-[#FFD54F] min-w-[280px] flex items-center justify-center`}
                    style={{ height: '64px' }}
                  >
                    REQUEST A QUOTE
                  </div>
                </RequestAQuoteModalGeneralServerWrapper>
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

            {/* Right Side - Hero Image (sweatshirts display) */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[700px] aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/custom-sweatshirts/new1-converted-from-png.webp"
                  fill
                  alt="Colorful custom sweatshirts display"
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

      {/* Featured Sweatshirt Designs Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[75rem] mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className={`${Termina} font-black text-[2.5rem] md:text-[3rem] xl:text-[3.5rem] mb-4`}>
              <span className="text-black">FEATURED </span>
              <span className="text-[#FFC107]">SWEATSHIRT DESIGNS</span>
            </h2>
          </div>

          {/* Carousel for all screen sizes */}
          <FeaturedPrintsCarousel projects={PROJECTS} />
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full bg-white">
        <div className="w-full flex justify-center">
          <div className="max-w-[75rem] w-full px-8">
            <div className="text-center mb-8">
              <h2 className={`${Termina} font-black text-[#FFC107] text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4`}>
                <span className="text-[#000000]">SEE OUR </span>SWEATSHIRT COLLECTIONS
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                Discover More About our Products
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

      {/* Printing Methods Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[75rem] mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className={`${Termina} font-black text-[2.5rem] md:text-[3rem] xl:text-[3.5rem] mb-4`}>
              <span className="text-[#FFC107]">CUSTOM SWEATSHIRTS PRINTING METHODS</span>
            </h2>
            <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto`}>
              At Tee Vision Printing, we create custom sweatshirts using reliable printing methods for bold, long-lasting designs. Click to see which method fits your sweatshirt project.
            </p>
          </div>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Screen Printing */}
            <Link href="/services/screen-printing" className="group">
              <div className="relative overflow-hidden rounded-lg border-4 border-transparent hover:border-[#FFC107] transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 flex-grow">
                  <Image
                    src="/custom-sweatshirts/Screen Printing-converted-from-png.webp"
                    fill
                    alt="Screen Printing method"
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="bg-[#FFC107] p-4 h-24 flex flex-col justify-center">
                  <h3 className={`${Termina} font-black text-lg text-black uppercase leading-tight`}>
                    SCREEN PRINTING
                  </h3>
                  <p className={`${MaisonNeue} text-sm text-black mt-1`}>
                    Learn More about our Service →
                  </p>
                </div>
              </div>
            </Link>

            {/* Embroidery */}
            <Link href="/services/embroidery" className="group">
              <div className="relative overflow-hidden rounded-lg border-4 border-transparent hover:border-[#FFC107] transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 flex-grow">
                  <Image
                    src="/custom-sweatshirts/Embroidery-converted-from-png.webp"
                    fill
                    alt="Embroidery method"
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="bg-[#FFC107] p-4 h-24 flex flex-col justify-center">
                  <h3 className={`${Termina} font-black text-lg text-black uppercase leading-tight`}>
                    EMBROIDERY
                  </h3>
                  <p className={`${MaisonNeue} text-sm text-black mt-1`}>
                    Learn More about our Service →
                  </p>
                </div>
              </div>
            </Link>

            {/* DTG (Direct to Garment) */}
            <Link href="/services/dtg" className="group">
              <div className="relative overflow-hidden rounded-lg border-4 border-transparent hover:border-[#FFC107] transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 flex-grow">
                  <Image
                    src="/custom-sweatshirts/Direct to Garment-converted-from-png.webp"
                    fill
                    alt="DTG Direct to Garment method"
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="bg-[#FFC107] p-4 h-24 flex flex-col justify-center">
                  <h3 className={`${Termina} font-black text-lg text-black uppercase leading-tight`}>
                    DTG (DIRECT TO GARMENT)
                  </h3>
                  <p className={`${MaisonNeue} text-sm text-black mt-1`}>
                    Learn More about our Service →
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

{/* See Other Collection Section */}
<section className="w-full bg-white py-16">
  <div className="max-w-[75rem] mx-auto px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className={`${Termina} font-black text-[2.5rem] md:text-[3rem] xl:text-[3.5rem] mb-4`}>
        <span className="text-black">SEE OTHER </span>
        <span className="text-[#FFC107]">COLLECTION</span>
      </h2>
    </div>

    {/* Collection Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {/* Hoodies */}
      <div className="flex flex-col items-center">
        <div className="relative w-full aspect-square mb-4 overflow-hidden">
          <Image
            src="/custom-sweatshirts/6(1)-converted-from-png.webp"
            fill
            alt="Polo Shirts Collection"
            className="object-contain scale-[1.82]"
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 25vw"
            quality={85}
          />
        </div>
        <Link href="/products/category/sweatshirts-hoodies/hooded-sweatshirts" className="group w-full">
          <div className="bg-[#FFC107] px-4 py-2 group-hover:bg-[#FFD54F] transition-colors w-full text-center">
            <h3 className={`${Termina} font-black text-sm md:text-base text-black uppercase`}>
              HOODIES
            </h3>
          </div>
        </Link>
      </div>

      {/* Long Sleeve */}
      <div className="flex flex-col items-center">
        <div className="relative w-full aspect-square mb-4 overflow-hidden">
          <Image
            src="/custom-sweatshirts/7(1)-converted-from-png.webp"
            fill
            alt="Long Sleeve Collection"
            className="object-contain scale-[1.82]"
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 25vw"
            quality={85}
          />
        </div>
        <Link href="/products/category/t-shirts/long-sleeve-t-shirt" className="group w-full">
          <div className="bg-[#FFC107] px-4 py-2 group-hover:bg-[#FFD54F] transition-colors w-full text-center">
            <h3 className={`${Termina} font-black text-sm md:text-base text-black uppercase`}>
              LONG SLEEVE
            </h3>
          </div>
        </Link>
      </div>

      {/* Polo Shirt */}
      <div className="flex flex-col items-center">
        <div className="relative w-full aspect-square mb-4 overflow-hidden">
          <Image
            src="/custom-sweatshirts/8(1)-converted-from-png.webp"
            fill
            alt="Sweatshirt Collection"
            className="object-contain scale-[1.82]"
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 25vw"
            quality={85}
          />
        </div>
        <Link href="/products/category/polos/polo" className="group w-full">
          <div className="bg-[#FFC107] px-4 py-2 group-hover:bg-[#FFD54F] transition-colors w-full text-center">
            <h3 className={`${Termina} font-black text-sm md:text-base text-black uppercase`}>
              POLO SHIRT
            </h3>
          </div>
        </Link>
      </div>

      {/* Crewneck */}
      <div className="flex flex-col items-center">
        <div className="relative w-full aspect-square mb-4 overflow-hidden">
          <Image
            src="/custom-sweatshirts/9(1)-converted-from-png.webp"
            fill
            alt="Crewneck Collection"
            className="object-contain scale-[1.82]"
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 25vw"
            quality={85}
          />
        </div>
        <Link href="/products/category/t-shirts/crewneck-t-shirt" className="group w-full">
          <div className="bg-[#FFC107] px-4 py-2 group-hover:bg-[#FFD54F] transition-colors w-full text-center">
            <h3 className={`${Termina} font-black text-sm md:text-base text-black uppercase`}>
              CREWNECK
            </h3>
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Our Custom Sweatshirts Are Great Section */}
      <section className="w-full bg-[#f5f5f5] py-8">
        <div className="max-w-[75rem] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
              <Image
                src="/custom-sweatshirts/try-1.png"
                fill
                alt="Custom sweatshirts collection"
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col gap-6">
              <h2 className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3.5rem] leading-tight`}>
                <span className="text-black">Our Custom Sweatshirts</span>
                <br />
                <span className="text-black">Are Great!</span>
              </h2>
              <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>  
                Got a design in mind? <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/'>Tee Vision Printing</a></span> brings your ideas to life with premium custom sweatshirts in Philadelphia. Perfect for business, events, or personal use with high-quality prints, great value, and standout Philly style.
              </p>

              {/* CTA Buttons - THIS SECTION USES RequestAQuoteModalServerWrapperSmall */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/designer/online">
                  <div className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-3 px-8 rounded-full transition-colors text-center cursor-pointer`}>
                    REQUEST A DESIGN
                  </div>
                </Link>
                
                <RequestAQuoteModalServerWrapperSmall>
                  <div className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-3 px-8 rounded-full transition-colors text-center cursor-pointer`}>
                    REQUEST A QUOTE
                  </div>
                </RequestAQuoteModalServerWrapperSmall>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Screen Printing Products by Industry Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[75rem] mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3.5rem] leading-tight mb-4`}>
              <span className="text-[#FFC107]">BROWSE SCREEN PRINTING</span>
              <br />
              <span className="text-black">PRODUCTS BY INDUSTRY</span>
            </h2>
            <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-4xl mx-auto`}>
              Outfit your team in style with custom business apparel and custom polo shirts that make a lasting impression. From staff shirts and café uniforms to gym tees and promotional giveaways, our premium <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/services/screen-printing'>screen printing</a></span> helps your brand look professional, polished, and unified. Perfect for restaurants, offices, retail shops, and corporate events.
            </p>
          </div>

          {/* Large Featured Card */}
          <div className="relative overflow-hidden rounded-lg mb-6 group cursor-pointer">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/custom-hooodies/13-converted-from-png.webp"
                fill
                alt="Small Business custom apparel"
                className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                loading="lazy"
                sizes="100vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <h3 className={`${Termina} font-black text-4xl md:text-5xl xl:text-6xl text-white uppercase`}>
                  SMALL<br />BUSINESS
                </h3>
                <Link href="/products">
                  <div className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-3 px-6 rounded-full transition-colors`}>
                    VIEW PRODUCTS →
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Four Industry Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Non Profit */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="relative h-[300px]">
                <Image
                  src="/custom-hooodies/14-converted-from-png.webp"
                  fill
                  alt="Non Profit custom apparel"
                  className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className={`${Termina} font-black text-2xl text-white uppercase mb-3`}>
                    NON PROFIT
                  </h3>
                  <Link href="/#">
                    <div className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-2 px-4 rounded-full transition-colors text-sm inline-block`}>
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Clothing Brands */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="relative h-[300px]">
                <Image
                  src="/custom-hooodies/15-converted-from-png.webp"
                  fill
                  alt="Clothing Brands custom apparel"
                  className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className={`${Termina} font-black text-2xl text-white uppercase mb-3`}>
                    CLOTHING<br />BRANDS
                  </h3>
                  <Link href="/#">
                    <div className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-2 px-4 rounded-full transition-colors text-sm inline-block`}>
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Fitness */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="relative h-[300px]">
                <Image
                  src="/custom-hooodies/16-converted-from-png.webp"
                  fill
                  alt="Fitness custom apparel"
                  className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className={`${Termina} font-black text-2xl text-white uppercase mb-3`}>
                    FITNESS
                  </h3>
                  <Link href="/#">
                    <div className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-2 px-4 rounded-full transition-colors text-sm inline-block`}>
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="relative h-[300px]">
                <Image
                  src="/custom-hooodies/17-converted-from-png.webp"
                  fill
                  alt="Education custom apparel"
                  className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className={`${Termina} font-black text-2xl text-white uppercase mb-3`}>
                    EDUCATION
                  </h3>
                  <Link href="/#">
                    <div className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-2 px-4 rounded-full transition-colors text-sm inline-block`}>
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Digital Mockup Section */}
      <section className="w-full flex justify-center py-12 xl:py-16 bg-[#2a2a2a] overflow-hidden">
        <div className="max-w-[75rem] w-full flex flex-col xl:flex-row items-center gap-6 xl:gap-10 px-8 relative">
          {/* Left Side - Text Content */}
          <div className="w-full xl:w-[60%] flex flex-col items-center text-center">
            <h2 className={`${Termina} font-black text-white text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-6 leading-tight`}>
              REQUEST A DIGITAL MOCKUP OR DESIGNER
            </h2>
            
            <p className={`${MaisonNeue} text-white text-base md:text-lg mb-8 max-w-[650px] leading-relaxed`}>
              Our expert design team is ready to bring your custom sweatshirts vision to life. Get a free digital mockup or work with our professional designers to create the perfect look for your team.
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
                src="/custom-sweatshirts/11-converted-from-png.webp"
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
              Got questions about custom sweatshirts? Explore our Frequently Asked Questions to learn more about our products, printing process, and ordering.
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
                  What printing techniques do you offer custom sweatshirts?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 0 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 0 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    We offer several customization options for sweatshirts, including <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/services/screen-printing'>screen printing</a></span>, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/services/direct-to-garment-printing'>DTG printing</a></span>, DTF/heat-transfer, and <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/services/embroidery'>embroidery</a></span>. Each method provides a different look and feel, depending on your design and order size.
                  </p>
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
                  How long will it take to receive my custom sweatshirt order?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 1 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 1 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    Your custom sweatshirt typically arrives in just 5–8 days! Every piece is made-to-order with premium care, and we keep you updated at every step. Fast, reliable, and crafted exactly how you want to <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/contact'>place your order today!</a></span>
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
                  What styles are available for custom sweatshirts? 
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 2 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 2 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    We offer a range of styles: <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/sweatshirts-hoodies/hooded-sweatshirts'>comfy hoodies</a></span>, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/sweatshirts-hoodies/crewneck-sweatshirts'>classic crewnecks</a></span>, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/sweatshirts-hoodies/zip-ups'>zip-up sweatshirts</a></span>, raglan sleeves, and oversized fits. Choose your color, size and design  and we&apos;ll make it exactly the way you want. Order now and wear your style!
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
                  Are there discounts for bulk orders of custom sweatshirts?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 3 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 3 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    Absolutely! We offer special discounts on bulk custom sweatshirt orders, with savings increasing based on the quantity you choose. The more you order, the more you save <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/contact'>message us today</a></span> to get your best offer!
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
                  What are the best materials for custom sweatshirts?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 4 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 4 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    For the softest, most durable custom sweatshirts, we recommend cotton, cotton-poly blends, French terry, or fleece  perfect for everyday wear or premium merch. Ready to bring your unique designs to life? <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/contact'>Contact us</a></span> today to get started!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CustomSweatshirts;