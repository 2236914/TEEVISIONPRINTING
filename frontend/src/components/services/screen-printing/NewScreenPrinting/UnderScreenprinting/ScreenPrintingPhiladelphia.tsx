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

const bullet = '\u2022';

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
      link: '/products/view/gildan-adult-heavy-cotton-long-sleeve-t-shirt-g540'
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
const StarRating = memo(({ rating }: { rating: number }) => (
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
));
StarRating.displayName = 'StarRating';

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

const ScreenPrintingPhiladelphia = () => {
  const [activeCategory, setActiveCategory] = useState('T-SHIRTS');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="mt-[5rem] xl:mt-[5rem] w-full overflow-hidden">
        {/* Hero Section */}
        <section className="relative w-full h-[750px] flex items-center justify-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/screen-printing/screen-printing-philadelphia/1.png"
              alt="Screen printing process"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-white mb-8">
              <span className={`${Termina} block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#f9a825] tracking-tight leading-none mb-2`} style={{ fontWeight: 900, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                SCREEN PRINTING
              </span>
              <span className={`${Termina} block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none`} style={{ fontWeight: 900, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                PHILADELPHIA
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <p className={`${MaisonNeue} text-white text-sm md:text-base leading-relaxed`}>
                Trusted by more than 500 local restaurants, breweries, and organizations across Philadelphia, Tee Vision Printing leads the way in Screen Printing Philadelphia.
              </p>
              <p className={`${MaisonNeue} text-white text-sm md:text-base leading-relaxed`}>
                We specialize in high-quality custom T-shirts, hoodies, tote bags, and staff uniforms, perfect for showcasing your brand or event. Enjoy same-day quotes, fast turnaround, and free local delivery from the city&apos;s most reliable screen printing experts in Philadelphia.
              </p>
              <p className={`${MaisonNeue} text-white text-sm md:text-base leading-relaxed`}>
                Enjoy same-day quotes, fast turnaround, and free local delivery from printing experts in Philadelphia.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <RequestAQuoteModalGeneralServerWrapper>
                <button className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] border-[#FFC107] hover:border-[#FFD54F] text-black font-extrabold py-4 px-12 rounded-md text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide border-[0.2rem] min-w-[280px]`}>
                  REQUEST FREE QUOTE
                </button>
              </RequestAQuoteModalGeneralServerWrapper>
            </div>
          </div>
        </section>

        {/* Info Bar Section - Yellow Background with Icons */}
        <section className="w-full bg-[#FFC107] py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {DESCRIPTIONS.map((description) => (
                <div
                  className={`flex flex-col items-center text-center ${MaisonNeue} text-black`}
                  key={description.title}
                >
                  <div className="mb-3">{description.icon}</div>
                  <p className="font-bold text-sm md:text-base mb-1">{description.title}</p>
                  <p className="text-xs md:text-sm">{description.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Proud to Print for Philadelphia Section */}
<section className="py-16 px-4 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className={`${Termina} text-4xl md:text-5xl font-black mb-4`}>
        PROUD TO PRINT FOR <span className="text-[#FFC107]">PHILADELPHIA</span>
      </h2>
      <p className={`${MaisonNeue} text-gray-700 text-base max-w-3xl mx-auto`}>
        From Center City restaurants to Fishtown breweries, we&apos;ve helped hundreds of local businesses create custom apparel that represents their brand.
      </p>
    </div>

    {/* Portfolio Cards */}
    <div className="relative">
      {/* Desktop View - Show 3 cards */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg overflow-hidden border-4 border-[#FFC107] hover:shadow-xl transition-shadow duration-300">
          <div className="bg-white flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/screen-printing/screen-printing-philadelphia/2.png"
                alt="Local Brewery Merchandise T-shirt"
                width={400}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className={`${Termina} text-xl font-black mb-2 uppercase`}>
              LOCAL BREWERY
            </h3>
            <h4 className={`${Termina} text-xl font-black text-[#FFC107] mb-3 uppercase`}>
              MERCHANDISE
            </h4>
            <p className={`${MaisonNeue} text-gray-700 text-sm leading-relaxed`}>
              Empower your cause with high-quality shirts from our Philadelphia custom t-shirt experts. Ideal for charity runs, awareness events, and fundraisers.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg overflow-hidden border-4 border-[#FFC107] hover:shadow-xl transition-shadow duration-300">
          <div className="bg-white flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/screen-printing/screen-printing-philadelphia/3.png"
                alt="Local Brewery Merchandise T-shirt"
                width={400}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className={`${Termina} text-xl font-black mb-2 uppercase`}>
              LOCAL BREWERY
            </h3>
            <h4 className={`${Termina} text-xl font-black text-[#FFC107] mb-3 uppercase`}>
              MERCHANDISE
            </h4>
            <p className={`${MaisonNeue} text-gray-700 text-sm leading-relaxed`}>
              Empower your cause with high-quality shirts from our Philadelphia custom t-shirt experts. Ideal for charity runs, awareness events, and fundraisers.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg overflow-hidden border-4 border-[#FFC107] hover:shadow-xl transition-shadow duration-300">
          <div className="bg-white flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/screen-printing/screen-printing-philadelphia/4.png"
                alt="Local Brewery Merchandise T-shirt"
                width={400}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className={`${Termina} text-xl font-black mb-2 uppercase`}>
              LOCAL BREWERY
            </h3>
            <h4 className={`${Termina} text-xl font-black text-[#FFC107] mb-3 uppercase`}>
              MERCHANDISE
            </h4>
            <p className={`${MaisonNeue} text-gray-700 text-sm leading-relaxed`}>
              Empower your cause with high-quality shirts from our Philadelphia custom t-shirt experts. Ideal for charity runs, awareness events, and fundraisers.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View - Show 1 card */}
      <div className="md:hidden mb-8">
        <div className="bg-white rounded-lg overflow-hidden border-4 border-[#FFC107]">
          <div className="bg-white flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/screen-printing/screen-printing-philadelphia/2.png"
                alt="Local Brewery Merchandise T-shirt"
                width={350}
                height={450}
                className="object-contain"
              />
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className={`${Termina} text-xl font-black mb-2 uppercase`}>
              LOCAL BREWERY
            </h3>
            <h4 className={`${Termina} text-xl font-black text-[#FFC107] mb-3 uppercase`}>
              MERCHANDISE
            </h4>
            <p className={`${MaisonNeue} text-gray-700 text-sm leading-relaxed`}>
              Empower your cause with high-quality shirts from our Philadelphia custom t-shirt experts. Ideal for charity runs, awareness events, and fundraisers.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="flex gap-2 justify-center">
        <button className="w-16 h-2 rounded-full bg-[#FFC107]" aria-label="Slide 1" />
        <button className="w-16 h-2 rounded-full bg-gray-300" aria-label="Slide 2" />
      </div>
    </div>
  </div>
</section>

        {/* We Serve All of Philadelphia Section */}
        <section className="py-16 px-4 bg-[#2b2b2b]">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className={`${Termina} text-4xl md:text-5xl font-bold text-white mb-4`}>
                WE SERVE ALL OF <span className="text-[#FFC107]">PHILADELPHIA</span>
              </h2>
            </div>

            {/* Grid Layout - All items visible, no scrolling */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {/* Northern Liberties */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    NORTHERN
                  </h3>
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    LIBERTIES
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  We work closely with creative studios, startups, and independent brands in Northern Liberties, providing custom screen printing that reflects bold ideas and modern design.
                </p>
              </div>

              {/* Manayunk */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    MANAYUNK
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  From retail shops to local events, Manayunk businesses rely on our custom screen printing Philadelphia services for stylish, durable apparel that represents their brand both in-store and out in the community.
                </p>
              </div>

              {/* Old City */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    OLD CITY
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  Serving museums, tour companies, and gift shops, we create high-quality printed apparel and merchandise designed to capture Philadelphia’s history and character.
                </p>
              </div>

              {/* Port Richmond */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    PORT
                  </h3>
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    RICHMOND
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  Our screen printing services support industrial businesses, warehouses, and growing urban brands in Port Richmond, offering reliable solutions for uniforms and promotional apparel.
                </p>
              </div>

              {/* Center City */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    CENTER CITY
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  In the heart of Philadelphia, we provide professional screen printing for corporate offices, restaurants, hotels, and service businesses, ensuring clean, consistent branding across all apparel.
                </p>
              </div>

              {/* Fishtown */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    FISHTOWN
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  From popular breweries to retail shops and music venues, Fishtown clients trust us for custom apparel that matches the neighborhood’s creative energy and style.
                </p>
              </div>

              {/* University City */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    UNIVERSITY CITY
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  We proudly serve universities, student organizations, research groups, and campus events, delivering custom screen printing for clubs, staff, and promotional campaigns.
                </p>
              </div>

              {/* South Philly */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    SOUTH PHILLY
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  Supporting sports teams, community organizations, restaurants, and local events, our South Philadelphia clients depend on us for durable, eye-catching custom apparel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="w-full bg-white">
          <div className="w-full flex justify-center">
            <div className="max-w-[75rem] w-full px-8">
              <div className="text-center mb-8 pt-8">
                <h2 className={`${Termina} text-4xl md:text-5xl font-black mb-4`}>
                  <span className="text-black">BEST </span>
                  <span className="text-[#FFC107]">PRODUCTS FOR SCREEN PRINTING</span>
                </h2>
                <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-8`}>
                  Discover our most popular products for screen printing, including custom T-shirts, hoodies, sweatshirts, tote bags, and uniforms. Each item is crafted for comfort and durability, making them perfect for businesses, events, and teams that want their designs to stand out and last.
                </p>
              </div>
              
              {/* Category Tabs */}
              <ProductTabsHeader activeTab={activeCategory} setActiveTab={setActiveCategory} />
            </div>
          </div>

          {/* Product Grid on light gray background */}
          <div className="w-full bg-[#f3f3f3] py-8">
            <div className="max-w-[75rem] mx-auto px-8">
              <ProductGrid activeTab={activeCategory} />
            </div>
          </div>
        </section>

        {/* Screen Printing Philadelphia with Image */}
        <section className="py-8 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Side - Text Content */}
              <div className="lg:w-1/2">
                <h2 className="mb-6">
                  <span className={`${Termina} block text-5xl md:text-6xl lg:text-7xl font-black text-[#FFC107] tracking-tight leading-none mb-2`}>
                    SCREEN
                  </span>
                  <span className={`${Termina} block text-5xl md:text-6xl lg:text-7xl font-black text-[#FFC107] tracking-tight leading-none mb-2`}>
                    PRINTING
                  </span>
                  <span className={`${Termina} block text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none`}>
                    PHILADELPHIA
                  </span>
                </h2>
                <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                  Puff print is a unique screen printing technique that adds a 3D, raised texture to your design. The ink expands when heat is applied, creating a soft, puffy effect that stands out both visually and by touch.
                </p>
              </div>

              {/* Right Side - Image */}
              <div className="lg:w-1/2 relative min-h-[400px] w-full">
                <Image
                  src="/screen-printing/screen-printing-philadelphia/5.png"
                  alt="RESPECT screen printed design"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Screen Printing Methods Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className={`${Termina} text-4xl md:text-5xl font-black mb-4`}>
                <span className="text-[#FFC107]">TYPES OF</span> SCREEN PRINTING
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
              We use several proven screen printing methods to match your design, fabric, and project needs. Each method offers a different look, feel, and level of durability, helping us deliver high-quality results for businesses across Philadelphia and nationwide.
              </p>
            </div>

            {/* Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Plastisol Ink */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <div className="relative h-96">
                  <Image
                    src="/screen-printing/screen-printing-philadelphia/6.png"
                    alt="Plastisol Ink"
                    fill
                    className="object-cover rounded-lg scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className={`${Termina} text-2xl font-black mb-2`}>PLASTISOL INK</h3>
                    <p className={`${MaisonNeue} text-sm leading-relaxed`}>
                      The most widely used ink in the apparel printing industry. Plastisol ink is durable, versatile, and it can be mixed to obtain almost any color.
                    </p>
                  </div>
                </div>
              </div>

              {/* UV Ink */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <div className="relative h-96">
                  <Image
                    src="/screen-printing/screen-printing-philadelphia/7.png"
                    alt="UV Ink"
                    fill
                    className="object-cover rounded-lg scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className={`${Termina} text-2xl font-black mb-2`}>UV INK</h3>
                    <p className={`${MaisonNeue} text-sm leading-relaxed`}>
                      UV Ink is fluorescent, but when activated in the sunlight, it turns a vibrant cyan, magenta, or yellow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Puff Print */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <div className="relative h-96">
                  <Image
                    src="/screen-printing/screen-printing-philadelphia/8.png"
                    alt="Puff Print"
                    fill
                    className="object-cover rounded-lg scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className={`${Termina} text-2xl font-black mb-2`}>PUFF PRINT</h3>
                    <p className={`${MaisonNeue} text-sm leading-relaxed`}>
                      When puff additive is mixed with plastisol ink, during the curing process, the ink rises. This effect gives off eye-catching look and feel to your print.
                    </p>
                  </div>
                </div>
              </div>

              {/* Simulated Process */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <div className="relative h-96">
                  <Image
                    src="/screen-printing/screen-printing-philadelphia/9.png"
                    alt="Simulated Process"
                    fill
                    className="object-cover rounded-lg scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className={`${Termina} text-2xl font-black mb-2`}>SIMULATED PROCESS</h3>
                    <p className={`${MaisonNeue} text-sm leading-relaxed`}>
                      This technique is used to recreate highly detailed or photorealistic artwork or screen printing. Colors and transparency, fades, are converted into halftone dots.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We Serve All of Philadelphia Section */}
        <section className="py-16 px-4 bg-[#2b2b2b]">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className={`${Termina} text-4xl md:text-5xl font-bold text-white mb-4`}>
                Our Screen Printing <span className="text-[#FFC107]">Process</span>
              </h2>
              <p className={`${Termina} text-white mb-4`}>
                We follow a proven process to ensure accuracy and quality on every order:
              </p>
            </div>

            {/* Grid Layout - All items visible, no scrolling */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Northern Liberties */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    Design Consultation
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  Review artwork, garment selection, and print placement
                </p>
              </div>

              {/* Manayunk */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    Proof Approval
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  Digital mockups will be provided by our graphic designers before production
                </p>
              </div>

              {/* Old City */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    Professional Printing
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  Precision printing using industry-standard equipment
                </p>
              </div>

              {/* Port Richmond */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    Quality Control
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                  Every item inspected for consistency
                </p>
              </div>

              {/* Center City */}
              <div className="border-2 border-[#FFC107] rounded-lg px-4 py-2 hover:bg-[#FFC107] transition-all duration-300 group cursor-pointer text-center flex flex-col">
                <div className="h-10 flex flex-col justify-center">
                  <h3 className={`${MaisonNeue} text-[#FFC107] font-bold text-xs sm:text-sm group-hover:text-black`}>
                    Pickup or Delivery
                  </h3>
                </div>
                <p className={`${MaisonNeue} text-white text-xs mt-1 group-hover:text-black`}>
                   Convenient local service in Philadelphia
                </p>
              </div>
            </div>
            <br />
            <p className={`${MaisonNeue} text-white text-lg text-center`}>
                This streamlined approach allows us to deliver dependable <strong>screen printing services Philadelphia</strong> customers can count on.
              </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className={`${Termina} text-5xl md:text-6xl font-black mb-4 uppercase`}>SERVICES</h2>
              <p className={`${MaisonNeue} text-gray-700 text-lg`}>
                Custom screen printing for every Philadelphia occasion and business need.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Embroidery */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="p-4">
                  <h3 className={`${Termina} text-[#FFC107] font-black text-xl mb-4 uppercase`}>EMBROIDERY</h3>
                </div>
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src="/screen-printing/screen-printing-philadelphia/10.png"
                    alt="Embroidery service - black polo shirt"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className={`${MaisonNeue} text-gray-700 text-sm leading-relaxed`}>
                    Premium embroidery services with crisp, durable designs for a clean and polished look.
                  </p>
                </div>
              </div>

              {/* DTF */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="p-4">
                  <h3 className={`${Termina} text-[#FFC107] font-black text-xl mb-4 uppercase`}>DTF</h3>
                </div>
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src="/screen-printing/screen-printing-philadelphia/11.png"
                    alt="DTF printing service - black tote bag"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className={`${MaisonNeue} text-gray-700 text-sm leading-relaxed`}>
                    Eye-friendly DTF printing on tote bags, lasting prints perfect for everyday use.
                  </p>
                </div>
              </div>

              {/* Screen Printing */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="p-4">
                  <h3 className={`${Termina} text-[#FFC107] font-black text-xl mb-4 uppercase`}>SCREEN<br />PRINTING</h3>
                </div>
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src="/screen-printing/screen-printing-philadelphia/12.png"
                    alt="Screen printing service - black t-shirt"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className={`${MaisonNeue} text-gray-700 text-sm leading-relaxed`}>
                    High-quality T-shirt screen printing that delivers vibrant colors, durable designs, and a perfect finish for every style.
                  </p>
                </div>
              </div>

              {/* DTG */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="p-4">
                  <h3 className={`${Termina} text-[#FFC107] font-black text-xl mb-4 uppercase`}>DTG</h3>
                </div>
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src="/screen-printing/screen-printing-philadelphia/13.png"
                    alt="DTG printing service - black sweatshirt"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className={`${MaisonNeue} text-gray-700 text-sm leading-relaxed`}>
                    Premium hoodie screen printing with bold, long-lasting designs and a soft, comfortable feel for everyday wear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Screen Printing Designs Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header with Navigation */}
            <div className="flex justify-between items-center mb-12">
              <h2 className={`${Termina} text-4xl md:text-5xl font-black`}>
                FEATURED SCREEN PRINTING <span className="text-[#FFC107]">DESIGNS</span>
              </h2>
              <div className="flex gap-4">
                <button 
                  className="w-12 h-12 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
                  aria-label="Previous designs"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="w-12 h-12 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
                  aria-label="Next designs"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Design Grid - 2 rows of 4 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Row 1 */}
              <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="/screen-printing/screen-printing-philadelphia/14.png"
                  alt="Black hoodie with embroidered design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="/screen-printing/screen-printing-philadelphia/15.png"
                  alt="RokStar Chicken Complex t-shirt design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="/screen-printing/screen-printing-philadelphia/16.png"
                  alt="Purple Cobras black t-shirt design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="/screen-printing/screen-printing-philadelphia/17.png"
                  alt="Baltiere Urban Culture black t-shirt"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Row 2 */}
              <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="/screen-printing/screen-printing-philadelphia/18.png"
                  alt="Mishimoto black t-shirt with yellow text"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="/screen-printing/screen-printing-philadelphia/19.png"
                  alt="Car interior illustration t-shirt design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="/screen-printing/screen-printing-philadelphia/20.png"
                  alt="White t-shirt with green leaf designs"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src="/screen-printing/screen-printing-philadelphia/21.png"
                  alt="Green Sonic polo shirt"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Request a Digital Mockup Section */}
        <section className="w-full flex justify-center py-12 xl:py-24 bg-[#2a2a2a] overflow-hidden">
          <div className="max-w-[75rem] w-full flex flex-col xl:flex-row items-center gap-4 xl:gap-8 px-8 relative">
            <div className="w-full xl:w-[53%] xl:absolute xl:left-0 xl:-translate-x-[15%]">
              <div className="relative w-full h-[350px] xl:h-[550px]">
                <Image
                  src="/screen-printing/screen-printing-philadelphia/22.png"
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
                REQUEST A DIGITAL MOCKUP
              </h2>
              
              <p className={`${MaisonNeue} text-white text-base md:text-lg mb-8 max-w-[650px]`}>
                Our live assistants are here to help you achieve designs from start to finish. Check out our{' '}
                <span className="underline cursor-pointer hover:text-[#fcb318]">FAQs</span>,{' '}
                <span className="underline cursor-pointer hover:text-[#fcb318]">send us an email</span>, or give us a call.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`${MaisonNeue} bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Submit a Design +
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className={`${Termina} text-center text-4xl md:text-5xl font-black mb-4`}>
                <span className="text-[#FFC107]">Why Choose Our </span> <br />
                <span>Philadelphia Screen Printing Company</span>
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
              Choosing the right printing partner makes all the difference. Our Philadelphia screen printing team focuses on quality, consistency, and customer satisfaction from start to finish.
              </p>
              <br />
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                <strong>What sets us apart:</strong>
              </p>
              <ul>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                  {bullet} Locally owned and operated in Philadelphia, PA
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                  {bullet} Premium inks and professional printing equipment
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                  {bullet} Competitive pricing for small and bulk orders
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                  {bullet} Fast turnaround and rush services available
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                  {bullet} Dedicated customer service from design to delivery
                </li>
              </ul>
              <br />
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                We understand the needs of local businesses and organizations, which is why so many customers choose us as their go-to <strong>screen printing company Philadelphia</strong> wide.
              </p>
            </div>
            </div>
          </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className={`${Termina} text-center text-4xl md:text-5xl font-black mb-4`}>
                <span className="text-[#FFC107]">What Our </span> <br />
                <span>Philadelphia Clients Say</span>
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
              Our reputation as a trusted <strong>screen printing company in Philadelphia</strong>  is built on real results and satisfied customers. Many of our new clients come from referrals and repeat business, a testament to our commitment to quality and service.
              </p>
            </div>
            </div>
          </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className={`${Termina} text-center text-4xl md:text-5xl font-black mb-4`}>
                <span className="text-[#FFC107]">Why Choose Our </span> <br />
                <span>Philadelphia Screen Printing Company</span>
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
              Pricing depends on garment type, print size, color designs, and order quantity. We offer:
              </p>
              <br />
              <ul>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                  {bullet} Competitive pricing for bulk orders
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                  {bullet} Clear, upfront quotes
                </li>
                <li className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                  {bullet} Rush screen printing services when available
                </li>
              </ul>
              <br />
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                Contact us for a fast, accurate quote tailored to your project.
              </p>
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
                    How long does screen printing take in Philadelphia?
                  </h3>
                  <span className="text-2xl font-bold text-black flex-shrink-0">
                    {openFaqIndex === 0 ? '×' : '+'}
                  </span>
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 md:px-8 pb-6">
                    <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                      Our standard turnaround time for screen printing Philadelphia projects is 7-10 business days after artwork approval. Need it sooner? Contact our team through our <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/contact'>Contact Page </a></span> — we often accommodate rush orders depending on project size and complexity.
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
                    What&apos;s the minimum order for screen printing?

                  </h3>
                  <span className="text-2xl font-bold text-black flex-shrink-0">
                    {openFaqIndex === 1 ? '×' : '+'}
                  </span>
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-6 md:px-8 pb-6">
                    <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                      At Tee Vision Printing, we handle both small and large print runs. While there&apos;s no strict minimum, we recommend ordering at least 12 pieces for the best pricing on custom screen printing Philadelphia customers rely on. Explore our apparel options in the<span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/t-shirts'>T-Shirts</a></span> and <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/sweatshirts-hoodies'>Sweatshirts and Hoodies</a></span> categories.
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
                    Can I get a digital proof before production?
                  </h3>
                  <span className="text-2xl font-bold text-black flex-shrink-0">
                    {openFaqIndex === 2 ? '×' : '+'}
                  </span>
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 md:px-8 pb-6">
                    <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                      Absolutely! We provide a free digital mockup before printing begins so you can approve colors, placement, and design details. Learn more about our services on the <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/services/screen-printing'>Screen Printing</a></span>
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
                    What types of garments can you print on?
                  </h3>
                  <span className="text-2xl font-bold text-black flex-shrink-0">
                    {openFaqIndex === 3 ? '×' : '+'}
                  </span>
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 md:px-8 pb-6">
                    <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                      We offer screen printing services in Philadelphia for a wide range of apparel — including <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/t-shirts'>t-shirts</a></span>, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/polos'>polos</a></span>, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/sweatshirts-hoodies'>sweatshirts and hoodies</a></span>, <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/products/category/tote-bags-more'>tote bags</a></span>, and more. Our experts will help you choose the best fabric and print method for your design.
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
                    Do you offer delivery or pickup options?
                  </h3>
                  <span className="text-2xl font-bold text-black flex-shrink-0">
                    {openFaqIndex === 4 ? '×' : '+'}
                  </span>
                </button>
                {openFaqIndex === 4 && (
                  <div className="px-6 md:px-8 pb-6">
                    <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                      Yes! We offer free local delivery across Philadelphia and convenient in-store pickup. Whether you&apos;re in Center City, Fishtown, or South Philly, Tee Vision Printing makes the process simple and fast. Learn more about us on our <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/about'>About Page</a></span> or view out <span className="text-[#FFC107]"><a href='https://www.teevisionprinting.com/past-projects'>Past Projects</a></span> for inspiration.
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
                    Do you serve businesses outside Philadelphia?
                  </h3>
                  <span className="text-2xl font-bold text-black flex-shrink-0">
                    {openFaqIndex === 5 ? '×' : '+'}
                  </span>
                </button>
                {openFaqIndex === 5 && (
                  <div className="px-6 md:px-8 pb-6">
                    <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                      Yes, while we focus on Philadelphia, PA, we also serve nationwide.
                      </p>
                  </div>
                )}
              </div>
              {/* FAQ Item 7 */}
              <div className={`${openFaqIndex === 6 ? 'bg-gray-100' : 'bg-[#E8EAF6]'} rounded-3xl overflow-hidden transition-colors`}>
                <button 
                  onClick={() => toggleFaq(6)}
                  className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition"
                >
                  <h3 className={`${MaisonNeue} font-bold text-lg md:text-xl text-black pr-4`}>
                    How much does screen printing typically cost?
                  </h3>
                  <span className="text-2xl font-bold text-black flex-shrink-0">
                    {openFaqIndex === 6 ? '×' : '+'}
                  </span>
                </button>
                {openFaqIndex === 6 && (
                  <div className="px-6 md:px-8 pb-6">
                    <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                      Screen printing pricing varies based on the garment type, design complexity, and order quantity.
                      </p>
                      <p className={`${MaisonNeue} text-base md:text-lg text-gray-700 leading-relaxed`}>
                      For the most accurate cost estimate, we recommend requesting a free quote — including your garment choice and artwork — so we can tailor pricing to your project.
                      </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
<section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className={`${Termina} text-center text-4xl md:text-5xl font-black mb-4`}>
                <span className="text-[#FFC107]">Get a Free Quote for </span> <br />
                <span>Screen Printing in Philadelphia</span>
              </h2>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
              Ready to get started with professional <strong>screen printing Philadelphia</strong> services?
              </p>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
              Contact our team today for a free quote and expert guidance on your next custom screen-printed apparel.
              </p>
              <p className={`${MaisonNeue} text-gray-700 text-base md:text-lg leading-relaxed`}>
                We are proud to be a dependable <strong>screen printing company Philadelphia</strong> businesses trust for quality and reliability.
              </p>
            </div>
            </div>
            <div className="flex justify-center">
             <RequestAQuoteModalGeneralServerWrapper>
                  <div className={`${MaisonNeue} bg-white border-2 border-[#FFC107] hover:bg-[#FFC107] text-black font-bold py-3 px-8 rounded-full transition-colors text-center cursor-pointer`}>
                    REQUEST A QUOTE
                  </div>
                </RequestAQuoteModalGeneralServerWrapper>
                </div>
          </section>
      </main>
    </div>
  );
};

export default ScreenPrintingPhiladelphia;