'use client';

import React, { memo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';
import Delivery from '@/utilities/SVGs/Delivery';
import Needle from '@/utilities/SVGs/Needle';
import QuickCube from '@/utilities/SVGs/QuickCube';
import Scissors from '@/utilities/SVGs/Scissors';
import CustomTShirtPrintingPhiladelphiaSchema from '@/components/schemas/CustomTShirtPrintingPhiladelphiaSchema';
import RequestAQuoteModalGeneralServerWrapper from '@/components/shared/RequestAQuoteModal/RequestAQuoteModalGeneralServerWrapper';

const DESCRIPTIONS = [
  { title: 'Screen Print Orders', subtitle: 'Starting 12 pieces', icon: <Needle width={52} height={52} /> },
  { title: 'Premium Inks', subtitle: 'Perfect for Vibrant Prints', icon: <Scissors width={52} height={52} /> },
  { title: 'Quick Turnaround', subtitle: '1-2 weeks', icon: <QuickCube width={52} height={52} /> },
  { title: 'Free Delivery', subtitle: 'Anywhere in United States', icon: <Delivery width={52} height={52} /> },
];


// Product data for each category
interface Product {
  image: string;
  link: string;
  name: string;
  price: string;
  rating: number;
}

const PRODUCT_DATA: Record<string, Product[]> = {
  'T-SHIRTS': [
    {
      name: 'Gildan Adult Softstyle® T-Shirt (G640)',
      rating: 5.0,
      price: '$13.19 / shirt',
      image: '/screen-printing/new-screen-printing/1-converted-from-png.webp',
      link: '/products/view/gildan-adult-softstyle-t-shirt-g640'
    },
    {
      name: 'AS Colour Classic Tee (5026)',
      rating: 5.0,
      price: '$21.62 / shirt',
      image: '/screen-printing/new-screen-printing/5026_classic_tee_loose-converted-from-jfif.webp',
      link: '/products/view/as-colour-classic-tee-5026'
    },
    {
      name: 'Gildan Hammer™ Adult T-Shirt (H000)',
      rating: 5.0,
      price: '$14.99 / shirt',
      image: '/screen-printing/new-screen-printing/1 (1)-converted-from-png.webp',
      link: '/products/view/gildan-hammer-adult-t-shirt-h000'
    },
    {
      name: 'Gildan Adult Heavy Cotton™ T-Shirt (G500)',
      rating: 5.0,
      price: '$11.98 / shirt',
      image: '/screen-printing/new-screen-printing/1 (2)-converted-from-png.webp',
      link: '/products/view/gildan-adult-heavy-cotton-t-shirt-g5000'
    }
  ],
  'SWEATSHIRTS': [
    {
      name: 'Gildan Softstyle® Full-Zip Hooded Sweatshirt (SF600)',
      rating: 5.0,
      price: '$37.91 / shirt',
      image: '/screen-printing/new-screen-printing/sweatshirts/215-converted-from-png.webp',
      link: '/products/view/gildan-softstyle-full-zip-hooded-sweatshirt-sf600'
    },
    {
      name: 'Independent Trading Co. Heavyweight Hooded Sweatshirt',
      rating: 5.0,
      price: '$36.94 / shirt',
      image: '/screen-printing/new-screen-printing/sweatshirts/Logo (30)-converted-from-png.webp',
      link: '/products/view/independent-apparel-heavyweight-hooded-sweatshirt'
    },
    {
      name: 'Independent Trading Co. Heavyweight Crewneck Sweatshirt (IND3000)',
      rating: 5.0,
      price: '$36.16 / shirt',
      image: '/screen-printing/new-screen-printing/sweatshirts/1-converted-from-jfif.webp',
      link: '/products/view/independent-trading-co-heavyweight-crewneck-sweatshirt-ind300'
    },
    {
      name: 'Independent Trading Co. Heavyweight Hooded Sweatshirt (IND4000)',
      rating: 5.0,
      price: '$46.03 / shirt',
      image: '/screen-printing/new-screen-printing/sweatshirts/independent_trading_co._ind4000_alpine_green_front_high_model-converted-from-jfif.webp',
      link: '/products/view/independent-trading-co-heavyweight-hooded-sweatshirt-ind4000'
    }
  ],
  'LONG-SLEEVE SHIRTS': [
    {
      name: 'Gildan Adult Heavy Cotton™ Long-Sleeve T-Shirt (G540)',
      rating: 5.0,
      price: '$17.13 / shirt',
      image: '/screen-printing/new-screen-printing/long sleeve/1 (3)-converted-from-png.webp',
      link: '/products/view/gildan-adult-heavy-cotton-t-shirt-g5000'
    },
    {
      name: 'BELLA + CANVAS FWD Fashion Womens Crop Long Sleeve Tee (6501)',
      rating: 5.0,
      price: '$17.07 / shirt',
      image: '/screen-printing/new-screen-printing/long sleeve/1 (4)-converted-from-png.webp',
      link: '/products/view/bella--canvas-fwd-fashion-womens-crop-long-sleeve-tee-6501'
    }
  ],
  'POLOS': [
    {
      name: 'Gildan Adult Jersey Polo (G880)',
      rating: 5.0,
      price: '$19.3 / shirt',
      image: '/screen-printing/new-screen-printing/polos/1 (5)-converted-from-png.webp',
      link: '/products/view/gildan-adult-jersey-polo-g880'
    },
    {
      name: 'Port Authority Silk Touch Polo - K500',
      rating: 5.0,
      price: '$24.55 / shirt',
      image: '/screen-printing/new-screen-printing/polos/1 (6)-converted-from-png.webp',
      link: '/products/view/port-authority-silk-touch-polo---k500-'
    },
    {
      name: 'UltraClub Adult Cool & Dry Long-Sleeve Mesh Piqué Polo (8210LS)',
      rating: 5.0,
      price: '$31.77 / shirt',
      image: '/screen-printing/new-screen-printing/polos/1 (7)-converted-from-png.webp',
      link: '/products/view/ultraclub-adult-cool--dry-long-sleeve-mesh-piqu-polo-8210ls'
    }
  ],
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

// Product Tabs Header Component (dropdown on mobile, tabs on desktop)
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

// Product Grid Component (products and view more button)
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

// Main Component
const NewScreenPrinting = () => {
  const [activeCategory, setActiveCategory] = useState('T-SHIRTS');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <main className="bg-white">
          <CustomTShirtPrintingPhiladelphiaSchema />
      {/* Hero Section */}
      <section className="w-full relative flex overflow-hidden min-h-[600px] -mt-[5rem] xl:-mt-[6rem] pt-[5rem] xl:pt-[6rem]">
        {/* Background Image with Overlay */}
        <div className="absolute w-full h-full top-0 left-0 z-0">
          <Image
            src="/screen-printing/custom-tshirt-printing/54-converted-from-png (1).webp"
            fill
            alt="Custom t-shirt printing background"
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="flex flex-col w-full z-[1]">
          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 xl:px-24 pt-24 pb-16 md:pt-32 md:pb-24 xl:pt-72 xl:pb-40">
            <p className={`${Termina} text-[#FFC107] text-sm md:text-lg xl:text-5xl font-bold uppercase tracking-wide mb-3 md:mb-5 xl:mb-6`}>
              CUSTOM T-SHIRT PRINTING
            </p>
            <h1 className={`${Termina} uppercase font-black text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl text-white leading-[1.1] mb-4 md:mb-6 xl:mb-8`}>
              PHILADELPHIA
            </h1>
            <p className={`${MaisonNeue} text-sm md:text-lg xl:text-xl text-white max-w-md md:max-w-3xl leading-relaxed mb-6 md:mb-10 xl:mb-12 px-2`}>
              Design your own custom t-shirt that fits your style, brand, or event. We use high-quality printing to make your design stand out and last.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full max-w-sm md:max-w-2xl px-4 md:px-0">
              <RequestAQuoteModalGeneralServerWrapper className="w-full md:flex-1">
                <div
                  className={`${MaisonNeue} w-full py-4 md:py-5 px-6 md:px-10 btn bg-[#FFC107] font-black text-black text-sm md:text-base lg:text-lg xl:text-xl rounded-xl transition transform hover:scale-105 hover:bg-[#FFD54F] flex items-center justify-center uppercase tracking-wide shadow-lg`}
                  style={{ height: 'auto' }}
                >
                  REQUEST A QUOTE
                </div>
              </RequestAQuoteModalGeneralServerWrapper>
              <Link href="/past-projects" className="w-full md:flex-1">
                <div
                  className={`${MaisonNeue} w-full py-4 md:py-5 px-6 md:px-10 btn bg-white text-black font-black text-sm md:text-base lg:text-lg xl:text-xl rounded-xl transition transform hover:scale-105 hover:bg-gray-100 flex items-center justify-center cursor-pointer uppercase tracking-wide shadow-lg`}
                  style={{ height: 'auto' }}
                >
                  VIEW MY PORTFOLIO
                </div>
              </Link>
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

      {/* Proud to Print for Philadelphia Section */}
      <section className="w-full flex justify-center py-8 md:py-12 xl:py-14 bg-white">
        <div className="max-w-7xl w-full px-6 md:px-8 xl:px-12">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className={`${Termina} font-black text-3xl md:text-4xl xl:text-5xl mb-4`}>
              <span className="text-black">PROUD TO PRINT CUSTOM T-SHIRTS IN </span>
              <span className="text-[#FFC107]">PHILADELPHIA</span>
            </h2>
            <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 max-w-3xl mx-auto`}>
              From Center City restaurants to Fishtown breweries, we&apos;ve helped hundreds of local businesses create custom apparel that represents their brand.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Cards Grid - Shows all 3 cards side by side on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Card 1 - Restaurant Staff Uniforms */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-[#FFC107]">
                {/* Image Section */}
                <div className="relative h-64">
                  <Image
                    src="/screen-printing/custom-tshirt-printing/33-converted-from-png.webp"
                    fill
                    alt="Restaurant Staff Uniforms"
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                    <span className={`${MaisonNeue} text-xs font-bold text-black uppercase`}>FISHTOWN</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className={`${Termina} font-black text-xl md:text-2xl mb-3`}>
                    <span className="text-black">RESTAURANT STAFF</span>
                    <br />
                    <span className="text-[#FFC107]">UNIFORMS</span>
                  </h3>
                  <p className={`${MaisonNeue} text-sm md:text-base text-gray-700 mb-4 leading-relaxed`}>
                    Professional custom t-shirts that keep your staff looking sharp and unified for durability and comfort during every shift.
                  </p>
                </div>
              </div>

              {/* Card 2 - Temple Student Organization */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-[#FFC107]">
                {/* Image Section */}
                <div className="relative h-64">
                  <Image
                    src="/screen-printing/custom-tshirt-printing/34-converted-from-png.webp"
                    fill
                    alt="Temple Student Organization"
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                    <span className={`${MaisonNeue} text-xs font-bold text-black uppercase`}>RITTENHOUSE</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className={`${Termina} font-black text-xl md:text-2xl mb-3`}>
                    <span className="text-black">TEMPLE STUDENT</span>
                    <br />
                    <span className="text-[#FFC107]">ORGANIZATION</span>
                  </h3>
                  <p className={`${MaisonNeue} text-sm md:text-base text-gray-700 mb-4 leading-relaxed`}>
                    Stylish custom t-shirts for university clubs, student events, and fundraisers. Affordable pricing and fast turnaround for tight student budgets.
                  </p>
                </div>
              </div>

              {/* Card 3 - Local Brewery Merchandise */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-[#FFC107]">
                {/* Image Section */}
                <div className="relative h-64">
                  <Image
                    src="/screen-printing/custom-tshirt-printing/35-converted-from-png.webp"
                    fill
                    alt="Local Brewery Merchandise"
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                    <span className={`${MaisonNeue} text-xs font-bold text-black uppercase`}>KOGE BREWING</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className={`${Termina} font-black text-xl md:text-2xl mb-3`}>
                    <span className="text-black">LOCAL BREWERY</span>
                    <br />
                    <span className="text-[#FFC107]">MERCHANDISE</span>
                  </h3>
                  <p className={`${MaisonNeue} text-sm md:text-base text-gray-700 mb-4 leading-relaxed`}>
                    Custom t-shirts and hoodies designed for Philly&apos;s favorite breweries. Bold, comfortable, and durable apparel to expand your brand.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows - Commented out for now */}
            {/* <div className="flex gap-3 justify-center">
              <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded hover:bg-gray-800 transition">
                ←
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded hover:bg-gray-800 transition">
                →
              </button>
            </div> */}
          </div>

          {/* View More Button */}
          {/* <div className="flex justify-center">
            <Link href="/portfolio">
              <button className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-4 px-12 rounded-full transition transform hover:scale-105 shadow-lg uppercase tracking-wide`}>
                VIEW MORE
              </button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Featured Custom T-shirt Prints Section */}
      <section className="w-full bg-white py-8 md:py-12 xl:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
          {/* Section Header with Navigation Arrows */}
          <div className="flex items-center justify-between mb-8">
            <h2 className={`${Termina} font-black text-2xl md:text-3xl xl:text-4xl`}>
              <span className="text-black">Featured Custom </span>
              <span className="text-[#FFC107]">T-shirt Prints</span>
            </h2>
            <div className="flex gap-3">
              <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded hover:bg-gray-800 transition">
                ←
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded hover:bg-gray-800 transition">
                →
              </button>
            </div>
          </div>

          {/* Images Grid - 2 rows x 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {/* Row 1 */}
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/screen-printing/custom-tshirt-printing/25-converted-from-png.webp"
                fill
                alt="Custom printed t-shirt design 1"
                className="object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/screen-printing/custom-tshirt-printing/26-converted-from-png.webp"
                fill
                alt="Custom printed t-shirt design 2"
                className="object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/screen-printing/custom-tshirt-printing/27-converted-from-png.webp"
                fill
                alt="Custom printed t-shirt design 3"
                className="object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/screen-printing/custom-tshirt-printing/28-converted-from-png.webp"
                fill
                alt="Custom printed t-shirt design 4"
                className="object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>

            {/* Row 2 */}
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/screen-printing/custom-tshirt-printing/29-converted-from-png.webp"
                fill
                alt="Custom printed t-shirt design 5"
                className="object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/screen-printing/custom-tshirt-printing/30-converted-from-png.webp"
                fill
                alt="Custom printed t-shirt design 6"
                className="object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/screen-printing/custom-tshirt-printing/31-converted-from-png.webp"
                fill
                alt="Custom printed t-shirt design 7"
                className="object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/screen-printing/custom-tshirt-printing/32-converted-from-png.webp"
                fill
                alt="Custom printed t-shirt design 8"
                className="object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
          </div>

          {/* Bottom Text Marquee */}
          <div className="bg-[#2a2a2a] py-3 md:py-4 overflow-hidden">
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-marquee {
                animation: marquee 20s linear infinite;
              } 
            `}</style>
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(10)].map((__, index) => (
                <div key={index} className={`${MaisonNeue} flex items-center text-sm md:text-base px-4`}>
                  <span className="text-white font-normal">YOUR DESIGN.</span>
                  <span className="text-[#FFC107] font-bold ml-2">YOUR SHIRT.</span>
                  <span className="text-white font-normal ml-4">YOUR DESIGN.</span>
                  <span className="text-[#FFC107] font-bold ml-2">YOUR SHIRT.</span>
                  <span className="text-white font-normal ml-4">YOUR DESIGN.</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - UPDATED WITH NEW DESIGN */}
      <section className="w-full bg-white">
        <div className="w-full flex justify-center">
          <div className="max-w-[75rem] w-full px-8">
            <div className="text-center mb-8 pt-8 md:pt-12 xl:pt-14">
              <h2 className={`${Termina} font-black text-[#FFC107] text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-4`}>
                <span className="text-[#000000]">BEST </span>PRODUCTS FOR SCREEN PRINTING
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                Discover our most popular products for screen printing, including custom T-shirts, hoodies, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/custom-sweatshirts'>sweatshirts</a></span>, tote bags, and uniforms. Each item is crafted for comfort and durability, making them perfect for businesses, events, and teams that want their designs to stand out and last.
              </p>
            </div>
            
            {/* Tabs on white background */}
            <ProductTabsHeader activeTab={activeCategory} setActiveTab={setActiveCategory} />
          </div>
        </div>

        {/* Products on gray background - full width */}
        <div className="w-full bg-[#f3f3f3] py-8">
          <div className="max-w-[75rem] mx-auto px-8">
            <ProductGrid activeTab={activeCategory} />
          </div>
        </div>
      </section>

      {/* Your Vision, Our Craft Section */}
      <section className="w-full bg-[#f3f3f3] pt-0 pb-8 md:pb-12 xl:pb-14">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
          <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12">
            {/* Left side - Image */}
            <div className="w-full xl:w-1/2">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src="/screen-printing/custom-tshirt-printing/36-converted-from-png.webp"
                  fill
                  alt="Screen printing process with custom t-shirt"
                  className="object-cover rounded-lg"
                  loading="lazy"
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full xl:w-1/2 flex flex-col">
              <h2 className={`${Termina} font-black text-3xl md:text-4xl xl:text-5xl mb-6 leading-tight`}>
                <span className="text-black">Your Vision, Our Craft, Philadelphia&apos;s Custom T-Shirt Expert</span>
              </h2>
              
              <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 mb-8 leading-relaxed`}>
                Have an idea you&apos;re ready to wear? At Tee Vision Printing, we bring your creativity to life through premium custom t-shirts in Philadelphia. Whether it&apos;s for your business, event, or personal collection, our team delivers high-quality prints, detailed craftsmanship, and unbeatable value. Let&apos;s make your design stand out the Philly way.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="w-full sm:flex-1">
                  <button
                    className={`${MaisonNeue} w-full py-4 px-8 bg-[#FFC107] font-bold text-black text-sm md:text-base rounded-full transition transform hover:scale-105 hover:bg-[#FFD54F] uppercase tracking-wide shadow-md cursor-pointer whitespace-nowrap text-center h-full`}
                  >
                    REQUEST A DESIGN
                  </button>
                </Link>
                
                <RequestAQuoteModalGeneralServerWrapper className="w-full sm:flex-1">
                  <div
                    className={`${MaisonNeue} w-full py-4 px-8 bg-white border-2 border-black text-black font-bold text-sm md:text-base rounded-full transition transform hover:scale-105 hover:bg-gray-50 uppercase tracking-wide cursor-pointer whitespace-nowrap text-center shadow-md h-full`}
                  >
                    REQUEST A QUOTE
                  </div>
                </RequestAQuoteModalGeneralServerWrapper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Digital Mockup Section */}
      <section className="w-full flex justify-center py-8 md:py-12 xl:py-14 bg-[#2a2a2a] overflow-hidden">
        <div className="max-w-[75rem] w-full flex flex-col xl:flex-row items-center gap-4 xl:gap-8 px-8 relative">
          <div className="w-full xl:w-[53%] xl:absolute xl:left-0 xl:-translate-x-[15%]">
            <div className="relative w-full h-[450px] md:h-[550px] xl:h-[650px]">
              <Image
                src="/screen-printing/custom-tshirt-printing/Embroidery-converted-from-png.webp"
                fill
                alt="Digital Mockup Preview"
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 800px"
                quality={85}
              />
            </div>
          </div>

          <div className="w-full xl:w-[60%] xl:ml-auto flex flex-col items-center xl:items-start text-center xl:text-left xl:pl-8">
            <h2 className={`${Termina} font-black text-white text-[2rem] md:text-[2.5rem] xl:text-[2.5rem] mb-6 leading-tight`}>
              REQUEST A DIGITAL MOCKUP
            </h2>
            
            <p className={`${MaisonNeue} text-white text-base md:text-lg mb-8 max-w-[650px]`}>
              Our live assistants are here to help you achieve designs from start to finish. Check out our{' '}
              <span className="underline cursor-pointer hover:text-[#fcb318]">FAQs</span>,{' '}
              <span className="underline cursor-pointer hover:text-[#fcb318]">send us an email</span>, or give us a call.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://www.teevisionprinting.com/contact"
                className="bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Request a designer
              </Link>
              
              <Link 
                href="https://www.teevisionprinting.com/contact"
                className="bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Submit a Design +
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="w-full bg-white py-8 md:py-12 xl:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className={`${Termina} font-black text-3xl md:text-4xl xl:text-5xl mb-4`}>
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
                  How long does it take to get my custom t-shirts in Philadelphia?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 0 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 0 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                    Our standard turnaround time for custom t-shirts in Philadelphia is 7-10 business days after you approve your design. If you need your order sooner, rush services and same-day quotes are available upon request.
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
                  What is the minimum order for custom t-shirts?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 1 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 1 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                  We can print as few or as many shirts as you need. While there’s no strict minimum, we recommend 12 or more for the best pricing on custom t-shirt printing Philadelphia customers love.</p>
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
                  Can I see my design before its printed?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 2 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 2 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                  Yes! We provide a free digital mockup for every order. You&apos;ll get to review your custom t-shirt design and approve it before production begins — ensuring every detail is exactly how you want it.</p>
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
                  What kind of shirts can I customize?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 3 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 3 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                  We offer a wide range of custom t-shirts in Philadelphia, including premium cotton tees, performance wear, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/custom-polo-shirts'>polos</a></span>, and hoodies. Our team will help you choose the best option for your brand or event.</p>
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
                  Do you deliver outside Philadelphia?
                </h3>
                <span className="text-2xl font-bold text-black flex-shrink-0">
                  {openFaqIndex === 4 ? '×' : '+'}
                </span>
              </button>
              {openFaqIndex === 4 && (
                <div className="px-6 md:px-8 pb-6">
                  <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                  Absolutely! While we specialize in Philadelphia custom t-shirts, we also ship orders nationwide. Local pickup and free delivery are available within the Philly area for added convenience.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Philly Businesses Choose Us Section */}
      <section className="w-full bg-[#2a2a2a] py-8 md:py-12 xl:py-14 relative overflow-hidden">
        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-white transform -rotate-12 origin-top-left" style={{ top: '20%' }} />
          <div className="absolute top-0 left-0 w-full h-px bg-white transform -rotate-12 origin-top-left" style={{ top: '80%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className={`${Termina} font-black text-3xl md:text-4xl xl:text-5xl mb-4`}>
              <span className="text-white">WHY </span>
              <span className="text-[#FFC107]">PHILLY BUSINESSES </span>
              <span className="text-white">CHOOSE US</span>
            </h2>
            <p className={`${MaisonNeue} text-base md:text-lg text-white max-w-4xl mx-auto`}>
              We&apos;re more than just a screen printer—we&apos;re your local partner in success
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 md:mb-14">
            {/* Feature 1 - Local Pickup & Delivery */}
            <div className="bg-transparent border-4 border-[#FFC107] rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#FFC107]/10 transition">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src="/screen-printing/custom-tshirt-printing/56-converted-from-png (1).webp"
                  fill
                  alt="Local Pickup & Delivery icon"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-3`}>
                LOCAL PICKUP & DELIVERY
              </h3>
              <p className={`${MaisonNeue} text-sm md:text-base text-white leading-relaxed`}>
                Free delivery throughout Philadelphia. Convenient pickup at our location for last-minute needs.
              </p>
            </div>

            {/* Feature 2 - Support Small Business */}
            <div className="bg-transparent border-4 border-[#FFC107] rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#FFC107]/10 transition">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src="/screen-printing/custom-tshirt-printing/57-converted-from-png.webp"
                  fill
                  alt="Support Small Business icon"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-3`}>
                SUPPORT SMALL BUSINESS
              </h3>
              <p className={`${MaisonNeue} text-sm md:text-base text-white leading-relaxed`}>
                No minimums for local Philly businesses. We understand small business needs and budgets.
              </p>
            </div>

            {/* Feature 3 - Fast Turnaround */}
            <div className="bg-transparent border-4 border-[#FFC107] rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#FFC107]/10 transition">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src="/screen-printing/custom-tshirt-printing/58-converted-from-png.webp"
                  fill
                  alt="Fast Turnaround icon"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-3`}>
                FAST TURNAROUND
              </h3>
              <p className={`${MaisonNeue} text-sm md:text-base text-white leading-relaxed`}>
                Rush orders available for last-minute Philadelphia events, grand openings, and urgent deadlines.
              </p>
            </div>

            {/* Feature 4 - Union Friendly */}
            <div className="bg-transparent border-4 border-[#FFC107] rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#FFC107]/10 transition">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src="/screen-printing/custom-tshirt-printing/59-converted-from-png.webp"
                  fill
                  alt="Union Friendly icon"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-3`}>
                UNION FRIENDLY
              </h3>
              <p className={`${MaisonNeue} text-sm md:text-base text-white leading-relaxed`}>
                We work with Philadelphia unions and understand the importance of quality union-made apparel.
              </p>
            </div>
          </div>

          {/* We Serve All of Philadelphia Subsection */}
          <div className="text-center mb-10">
            <h3 className={`${Termina} font-black text-3xl md:text-4xl xl:text-5xl mb-4`}>
              <span className="text-white">WE SERVE ALL OF </span>
              <span className="text-[#FFC107]">PHILADELPHIA</span>
            </h3>
            <p className={`${MaisonNeue} text-base md:text-lg text-white max-w-4xl mx-auto`}>
              Professional screen printing services for every neighborhood in the city
            </p>
          </div>

          {/* Neighborhoods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Row 1 */}
            <div className="bg-transparent border-4 border-[#FFC107] rounded-xl p-6 text-center hover:bg-[#FFC107]/10 transition">
              <h4 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-2`}>
                CENTER CITY
              </h4>
              <p className={`${MaisonNeue} text-sm md:text-base text-white`}>
                Corporate & Restaurants
              </p>
            </div>

            <div className="bg-transparent border-4 border-[#FFC107] rounded-xl p-6 text-center hover:bg-[#FFC107]/10 transition">
              <h4 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-2`}>
                FISHTOWN
              </h4>
              <p className={`${MaisonNeue} text-sm md:text-base text-white`}>
                Breweries & Retail
              </p>
            </div>

            <div className="bg-transparent border-4 border-[#FFC107] rounded-xl p-6 text-center hover:bg-[#FFC107]/10 transition">
              <h4 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-2`}>
                UNIVERSITY CITY
              </h4>
              <p className={`${MaisonNeue} text-sm md:text-base text-white`}>
                Campus Organizations
              </p>
            </div>

            <div className="bg-transparent border-4 border-[#FFC107] rounded-xl p-6 text-center hover:bg-[#FFC107]/10 transition">
              <h4 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-2`}>
                SOUTH PHILLY
              </h4>
              <p className={`${MaisonNeue} text-sm md:text-base text-white`}>
                Sports & Community
              </p>
            </div>

            {/* Row 2 */}
            <div className="bg-transparent border-4 border-[#FFC107] rounded-xl p-6 text-center hover:bg-[#FFC107]/10 transition">
              <h4 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-2`}>
                NORTHERN LIBERTIES
              </h4>
              <p className={`${MaisonNeue} text-sm md:text-base text-white`}>
                Creative Businesses
              </p>
            </div>

            <div className="bg-transparent border-4 border-[#FFC107] rounded-xl p-6 text-center hover:bg-[#FFC107]/10 transition">
              <h4 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-2`}>
                MANAYUNK
              </h4>
              <p className={`${MaisonNeue} text-sm md:text-base text-white`}>
                Retails & Events
              </p>
            </div>

            <div className="bg-transparent border-4 border-[#FFC107] rounded-xl p-6 text-center hover:bg-[#FFC107]/10 transition">
              <h4 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-2`}>
                OLD CITY
              </h4>
              <p className={`${MaisonNeue} text-sm md:text-base text-white`}>
                Tours & Gift Shops
              </p>
            </div>

            <div className="bg-transparent border-4 border-[#FFC107] rounded-xl p-6 text-center hover:bg-[#FFC107]/10 transition">
              <h4 className={`${Termina} font-black text-xl md:text-2xl text-[#FFC107] mb-2`}>
                PORT RICHMOND
              </h4>
              <p className={`${MaisonNeue} text-sm md:text-base text-white`}>
                Industrial & Union
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewScreenPrinting;