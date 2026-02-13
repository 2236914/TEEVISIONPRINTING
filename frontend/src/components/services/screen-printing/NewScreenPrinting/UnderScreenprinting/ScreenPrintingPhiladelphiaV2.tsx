'use client';

import React, { memo, useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';
import AutoScrollMarquee from '@/components/shared/AutoScrollMarquee';
import MixedTitle from '@/components/shared/MixedTitle';
import PrimaryRoundedIcon from '@/components/shared/PrimaryRoundedIcon';
import NavPill from '@/components/shared/NavPill';
import LocationPill from '@/components/shared/LocationPill';
import RoundedIconButton from '@/components/shared/RoundedIconButton';
import Indicator from '@/components/shared/Indicator';
import RoundedInput from '@/components/shared/RoundedInput';
import FeaturesBar from '@/components/shared/FeaturesBar';
import FAQAccordion from '@/components/shared/FAQAccordion';
import PhoneIcon from '@/components/shared/icons/PhoneIcon';
import TvpFlagIcon from '@/components/shared/icons/TvpFlagIcon';

// Marquee Icons
const TShirtIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 21H8a1 1 0 0 1-1-1V10H5a1 1 0 0 1-.707-1.707l3-3A1 1 0 0 1 8 5h2a2 2 0 0 0 4 0h2a1 1 0 0 1 .707.293l3 3A1 1 0 0 1 19 10h-2v10a1 1 0 0 1-1 1z"/>
  </svg>
);

const HoodieIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 3H15a3 3 0 0 1-6 0H6.5L2 8l3 2v11h14V10l3-2L17.5 3zM12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
  </svg>
);

const HatIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6 2 10c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4 0-4-4.48-8-10-8zm0 18c-5.52 0-10-1.34-10-3 0-.78.68-1.5 1.85-2.1C4.59 15.57 5.5 16 6.5 16h11c1 0 1.91-.43 2.65-1.1C21.32 15.5 22 16.22 22 17c0 1.66-4.48 3-10 3z"/>
  </svg>
);

const BagIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2z"/>
  </svg>
);

const MARQUEE_ITEMS_DATA = [
  { iconType: 'tshirt', label: 'Custom T-Shirts', href: '/custom-t-shirt-printing-philadelphia' },
  { iconType: 'hoodie', label: 'Sweats & Hoodies', href: '/custom-hoodies' },
  { iconType: 'hat', label: 'Hats & Polos', href: '/custom-polo-shirts' },
  { iconType: 'bag', label: 'Totes & More', href: '/products' },
  { iconType: 'flag', label: 'Get A Quote', href: '/request-a-quote' },
] as const;

const SHOWCASE_ITEMS = [
  {
    image: '/screen-printing/screen-printing-philadelphia/2.png',
    industry: 'SMALL BUSINESS',
    city: 'FISHTOWN',
    name: 'HAM & BONE',
  },
  {
    image: '/screen-printing/screen-printing-philadelphia/3.png',
    industry: 'SMALL BUSINESS',
    city: 'CENTER CITY',
    name: 'CUZZOS COFFEE CLUB',
  },
  {
    image: '/screen-printing/screen-printing-philadelphia/4.png',
    industry: 'SCHOOL',
    city: 'JENKINTOWN',
    name: 'MANOR COLLEGE',
  },
  {
    image: '/screen-printing/screen-printing-philadelphia/5.png',
    industry: 'NON PROFIT',
    city: 'PHILADELPHIA',
    name: 'SAVE THE DOGS',
  },
];

const PRODUCT_NAV_ITEMS = [
  { id: 'popular', label: 'Popular' },
  { id: 't-shirts', label: 'T-Shirts' },
  { id: 'hoodies', label: 'Hoodies' },
  { id: 'polo-shirts', label: 'Polo Shirts' },
  { id: 'sweatshirts', label: 'Sweatshirts' },
];

const PHILLY_LOCATIONS = [
  {
    label: 'Northern Liberties',
    description: 'We work closely with creative studios, startups, and independent brands in Northern Liberties, providing custom screen printing that reflects bold ideas and modern design.'
  },
  {
    label: 'Manayunk',
    description: 'From retail shops to local events, Manayunk businesses rely on our custom screen printing Philadelphia services for stylish, durable apparel that represents their brand both in-store and out in the community.'
  },
  {
    label: 'Old City',
    description: 'Serving museums, tour companies, and gift shops, we create high-quality printed apparel and merchandise designed to capture Philadelphia’s history and character.'
  },
  {
    label: 'Port Richmond',
    description: 'Our screen printing services support industrial businesses, warehouses, and growing urban brands in Port Richmond, offering reliable solutions for uniforms and promotional apparel.'
  },
  {
    label: 'Center City',
    description: 'In the heart of Philadelphia, we provide professional screen printing for corporate offices, restaurants, hotels, and service businesses, ensuring clean, consistent branding across all apparel.'
  },
  {
    label: 'Fishtown',
    description: 'From popular breweries to retail shops and music venues, Fishtown clients trust us for custom apparel that matches the neighborhood’s creative energy and style.'
  },
  {
    label: 'University City',
    description: 'We proudly serve universities, student organizations, research groups, and campus events, delivering custom screen printing for clubs, staff, and promotional campaigns.'
  },
  {
    label: 'South Philly',
    description: 'Supporting sports teams, community organizations, restaurants, and local events, our South Philadelphia clients depend on us for durable, eye-catching custom apparel.'
  },
];

const MapPinIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const LeafIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
  </svg>
);

const PriceTagIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
  </svg>
);

const Clock24Icon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    <text x="12" y="16" fontSize="5" fontWeight="bold" textAnchor="middle" fill="currentColor" className="hidden">24</text>
  </svg>
);

const TrainIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"/>
  </svg>
);

const WHY_CHOOSE_US_ITEMS = [
  { text: 'Locally owned and operated in Philadelphia, PA', Icon: MapPinIcon },
  { text: 'Premium inks and professional printing equipment', Icon: LeafIcon },
  { text: 'High-Quality, Affordable Screen Printing for Any Order Size. (Small or bulk orders)', Icon: PriceTagIcon },
  { text: 'Clear, upfront quotes', Icon: ShieldCheckIcon },
  { text: 'Fast turnaround and reliable Rush Screen Printing Services', Icon: Clock24Icon },
  { text: 'Printing and screen printing services when available', Icon: TrainIcon },
];

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const ScreenPrintIndicatorIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-primaryT flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

const YellowDot = () => (
  <span className="w-2.5 h-2.5 bg-primaryT rounded-full flex-shrink-0 mt-1.5" />
);

const UploadIcon = () => (
  <svg className="w-8 h-8 text-primaryT" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z" />
  </svg>
);

const SCREEN_PRINTING_TYPES = [
  {
    title: 'PLASTISOL INK',
    image: '/screen-printing/screen-printing-philadelphia/6.png',
    description: 'The most widely used ink in the apparel printing industry. Plastisol ink is durable, versatile, and it can be mixed to obtain almost any color.',
  },
  {
    title: 'UV INK',
    image: '/screen-printing/screen-printing-philadelphia/7.png',
    description: 'UV Ink is fluorescent, but when activated in the sunlight, it turns a vibrant cyan, magenta, or yellow.',
  },
  {
    title: 'PUFF PRINT',
    image: '/screen-printing/puff-print.png',
    description: 'When puff additive is mixed with plastisol ink, during the curing process, the ink rises. This effect gives off eye-catching look and feel to your print.',
  },
  {
    title: 'SIMULATED PROCESS',
    image: '/screen-printing/screen-printing-philadelphia/8.png',
    description: 'This technique is used to recreate highly detailed or photorealistic artwork or screen printing. Colors and transparency, fades, are converted into halftone dots.',
  },
];

const FEATURED_DESIGNS = [
  '/screen-printing/screen-printing-philadelphia/9.png',
  '/screen-printing/screen-printing-philadelphia/10.png',
  '/screen-printing/screen-printing-philadelphia/11.png',
  '/screen-printing/screen-printing-philadelphia/12.png',
  '/screen-printing/screen-printing-philadelphia/13.png',
  '/screen-printing/screen-printing-philadelphia/14.png',
  '/screen-printing/screen-printing-philadelphia/15.png',
  '/screen-printing/screen-printing-philadelphia/16.png',
];

const SCREEN_PRINTING_BENEFITS = [
  'Best for large quantities',
  'Highly cost-effective',
  'Professional, long-lasting finish',
];

const SERVICES_DATA = [
  {
    title: 'EMBROIDERY',
    image: '/screen-printing/screen-printing-philadelphia/17.png',
    description: 'Premium embroidery services with crisp, durable designs for a clean and polished look.',
    href: '/embroidery',
  },
  {
    title: 'DTF',
    image: '/screen-printing/screen-printing-philadelphia/18.png',
    description: 'Eye-friendly DTF printing on tote bags, lasting prints perfect for everyday use.',
    href: '/dtf-printing',
  },
  {
    title: 'SCREEN PRINTING',
    image: '/screen-printing/screen-printing-philadelphia/19.png',
    description: 'High-quality T-shirt screen printing that delivers vibrant colors, durable designs, and a perfect finish for every style.',
    href: '/screen-printing-philadelphia',
  },
  {
    title: 'DTG',
    image: '/screen-printing/screen-printing-philadelphia/20.png',
    description: 'Premium hoodie screen printing with bold, long-lasting designs and a soft, comfortable feel for everyday wear.',
    href: '/dtg-printing',
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: 'DESIGN CONSULTATION',
    description: 'We follow a proven process to ensure accuracy—review artwork, garment selection, and print placement and quality on every order.',
  },
  {
    number: 2,
    title: 'PROOF APPROVAL',
    description: 'Digital mockups will be provided by our graphic designers before production.',
  },
  {
    number: 3,
    title: 'PROFESSIONAL PRINTING',
    description: 'Precision printing using industry-standard equipment.',
  },
  {
    number: 4,
    title: 'QUALITY CONTROL',
    description: 'Every item inspected for consistency.',
  },
  {
    number: 5,
    title: 'PICKUP OR DELIVERY',
    description: 'Convenient local service in Philadelphia.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'How long does screen printing take in Philadelphia?',
    answer: 'Our standard turnaround time for screen printing Philadelphia projects is 7-10 business days after artwork approval. Need it sooner? Contact our team — we often accommodate rush orders depending on project size and complexity.',
  },
  {
    question: "What's the minimum order for screen printing?",
    answer: "At Tee Vision Printing, we handle both small and large print runs. While there's no strict minimum, we recommend ordering at least 12 pieces for the best pricing on custom screen printing Philadelphia customers rely on.",
  },
  {
    question: 'Can I get a digital proof before production?',
    answer: "Absolutely! We provide a free digital mockup before printing begins so you can approve colors, placement, and design details.",
  },
  {
    question: 'What types of garments can you print on?',
    answer: 'We offer screen printing services in Philadelphia for a wide range of apparel — including t-shirts, polos, sweatshirts and hoodies, tote bags, and more. Our experts will help you choose the best fabric and print method for your design.',
  },
  {
    question: 'Do you offer delivery or pickup options?',
    answer: "Yes! We offer free local delivery across Philadelphia and convenient in-store pickup. Whether you're in Center City, Fishtown, or South Philly, Tee Vision Printing makes the process simple and fast.",
  },
  {
    question: 'Do you serve businesses outside Philadelphia?',
    answer: 'Yes, while we focus on Philadelphia, PA, we also serve nationwide.',
  },
  {
    question: 'How much does screen printing typically cost?',
    answer: 'Screen printing pricing varies based on the garment type, design complexity, and order quantity. For the most accurate cost estimate, we recommend requesting a free quote — including your garment choice and artwork — so we can tailor pricing to your project.',
  },
];

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

const ProductCard = memo(({ product }: { product: Product }) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
    <div className="relative w-full h-48 xs:h-56 sm:h-64 bg-gray-50 flex-shrink-0">
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
      <Link href={product.link} className="mt-auto block">
        <button className={`${MaisonNeue} w-full min-h-[44px] py-2 px-4 border-2 border-[#FFC107] text-[#FFC107] font-bold rounded-full hover:bg-[#FFC107] hover:text-black transition-colors text-sm xs:text-base`}>
          View Details
        </button>
      </Link>
    </div>
  </div>
));
ProductCard.displayName = 'ProductCard';

const ProductTabsHeader = memo(({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['T-SHIRTS', 'SWEATSHIRTS', 'LONG-SLEEVE SHIRTS', 'POLOS'];

  return (
    <>
      <div className="block md:hidden">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className={`${MaisonNeue} w-full min-h-[44px] px-4 xs:px-6 py-3 xs:py-4 font-bold text-sm xs:text-base bg-white text-black border-2 border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-[#FFC107]`}
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

      <div className="hidden md:flex flex-wrap gap-0 justify-start">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${MaisonNeue} min-h-[44px] px-4 md:px-6 py-3 font-bold text-sm md:text-base transition-all ${
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

const ProductGrid = memo(({ activeTab }: { activeTab: string }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
        {PRODUCT_DATA[activeTab].map((product, index) => (
          <ProductCard key={`${activeTab}-${index}`} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6 xs:mt-8">
        <Link href="https://www.teevisionprinting.com/products" className="block w-full xs:w-auto">
          <button className={`${MaisonNeue} w-full xs:w-auto min-h-[44px] bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-3 px-6 xs:px-8 rounded-full transition-colors text-sm md:text-base`}>
            View More
          </button>
        </Link>
      </div>
    </div>
  );
});
ProductGrid.displayName = 'ProductGrid';

const ArrowUpIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </svg>
);

const ICON_MAP: Record<string, React.ReactNode> = {
  tshirt: <TShirtIcon />,
  hoodie: <HoodieIcon />,
  hat: <HatIcon />,
  bag: <BagIcon />,
  flag: <TvpFlagIcon />,
};

const ScreenPrintingPhiladelphiaV2 = () => {
  const [activeProductNav, setActiveProductNav] = useState('popular');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState<number | null>(null);

  useEffect(() => {
    setActiveLocation(null);
    setActiveProcessStep(null);
  }, []);

  const handleLocationClick = (index: number) => {
    setActiveLocation(prev => (prev === index ? null : index));
  };

  const handleProcessStepClick = (index: number) => {
    setActiveProcessStep(prev => (prev === index ? null : index));
  };

  const marqueeItems = useMemo(() => 
    MARQUEE_ITEMS_DATA.map((item) => ({
      icon: ICON_MAP[item.iconType],
      label: item.label,
      href: item.href,
    })), 
  []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <button
        onClick={scrollToTop}
        className={`
          fixed z-50 bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8
          w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14
          rounded-full bg-primaryT hover:bg-primaryT/90 text-black
          shadow-lg hover:shadow-xl flex items-center justify-center
          transition-all duration-300
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
          hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-primaryT focus:ring-offset-2
        `}
        aria-label="Scroll to top"
        type="button"
      >
        <ArrowUpIcon />
      </button>

      <main className="w-full overflow-hidden">
        <section className="relative w-full min-h-[100svh] flex items-center justify-center pt-28 xs:pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 xs:pb-20 sm:pb-24 md:pb-28 lg:pb-32">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/screen-printing/screen-printing-philadelphia/1.png"
              alt="Screen printing process"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto flex flex-col items-center">
            {/* Title */}
            <h1 className="mb-2 sm:mb-4">
              <span className={`${Termina} block text-[clamp(1.75rem,5vw,5rem)] font-black tracking-tight leading-[1]`}>
                <span className="text-primaryT block sm:inline">SCREEN PRINTING</span>{` `}
                <span className="text-white block sm:inline sm:ml-4">PHILADELPHIA</span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <h2 className={`${MaisonNeue} text-white font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 max-w-4xl leading-tight`}>
              Custom T-Shirt Printing for Businesses, Schools &amp; Events
            </h2>
            
            {/* Description */}
            <div className="max-w-sm xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
              <p className={`${MaisonNeue} text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed font-medium`}>
                Professional Philadelphia screen printing for bulk custom T-shirts, hoodies, polos, and uniforms. Fast turnaround, competitive pricing, same-day quotes, and free local delivery.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 w-full mb-16 sm:mb-20">
              <PrimaryRoundedIcon
                icon={<PhoneIcon />}
                isLink
                link="/request-a-quote"
                className="w-full xs:w-auto min-h-[50px] sm:min-h-[60px] text-sm xs:text-base sm:text-lg px-8 sm:px-12 uppercase tracking-wide"
              >
                REQUEST A SCREEN PRINTING QUOTE
              </PrimaryRoundedIcon>
              
              {/* Trust Text */}
              <div className={`${MaisonNeue} text-white/90 text-xs xs:text-sm sm:text-base space-y-1 font-medium`}>
                 <p>Serving Center City, Fishtown, Northern Liberties, South Philly &amp; Beyond</p>
                 <p className="text-white font-bold">Trusted by 500+ businesses and organizations</p>
              </div>
            </div>
          </div>

          {/* Yellow Marquee Bar */}
          <div className="absolute bottom-0 left-0 w-full z-20">
            <AutoScrollMarquee 
              items={marqueeItems} 
              speed="medium" 
              pauseOnHover={true}
            />
          </div>
        </section>

        {/* Features Bar - Using shared component */}
        <FeaturesBar variant="light" showBorder={true} />

        <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 xs:mb-10 md:mb-12">
              <MixedTitle
                size="xl"
                centered
                words={[
                  'TRUSTED BY',
                  { text: 'PHILADELPHIA', color: 'yellow' },
                ]}
                className="mb-2"
              />
              <h3 className={`${Termina} text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight uppercase`}>
                BUSINESSES & ORGANIZATIONS
              </h3>
              <p className={`${MaisonNeue} text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-3 xs:mt-4 md:mt-6 px-2 sm:px-0`}>
                From restaurants and breweries to schools, nonprofits, and local trades, organizations across Philadelphia trust us for reliable screen printing.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 md:gap-6">
              {SHOWCASE_ITEMS.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col group"
                >
                  <div className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden mb-2 xs:mb-3 md:mb-4 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-400 text-xs">Image Placeholder</span>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="text-center flex flex-col gap-0.5">
                    <h4 className={`${Termina} text-sm sm:text-base md:text-lg font-black text-black uppercase leading-tight`}>
                      {item.industry}
                    </h4>
                    <p className={`${MaisonNeue} text-xs sm:text-sm md:text-base text-primaryT font-bold uppercase`}>
                      {item.city}
                    </p>
                    <p className={`${MaisonNeue} text-xs sm:text-sm md:text-base text-primaryT font-bold uppercase`}>
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-[#f9f9f9]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 xs:mb-8 md:mb-10">
              <MixedTitle
                size="xl"
                centered
                words={[
                  { text: 'BEST PRODUCTS', color: 'yellow' },
                  'FOR SCREEN PRINTING',
                ]}
                className="mb-4"
              />
              <p className={`${MaisonNeue} text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg max-w-4xl mx-auto px-2 sm:px-0`}>
                Discover our most popular products for screen printing, including custom T-shirts, hoodies, sweatshirts, tote bags, and uniforms. Each item is crafted for comfort and durability, making them perfect for businesses, events, and teams that want their designs to stand out and last.
              </p>
            </div>

            <div className="flex justify-center mb-6 xs:mb-8 md:mb-10 overflow-x-hidden px-2 sm:px-0">
              <NavPill
                items={PRODUCT_NAV_ITEMS}
                activeId={activeProductNav}
                onSelect={setActiveProductNav}
                variant="filled"
                size="md"
                scrollable
                className="max-w-full"
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 md:gap-6 mb-6 xs:mb-8 md:mb-10">
              {PRODUCT_DATA['T-SHIRTS'].map((product, index) => (
                <div key={index} className="flex flex-col">
                  {/* Product Image - Square aspect ratio */}
                  <Link href={product.link} className="relative aspect-square bg-white rounded-2xl overflow-hidden mb-3 md:mb-4 group block">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </Link>
                  {/* Product Info */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <Link href={product.link}>
                        <h4 className={`${MaisonNeue} text-xs sm:text-sm font-bold text-black leading-tight mb-1 line-clamp-2 hover:text-primaryT transition-colors`}>
                          {product.name}
                        </h4>
                      </Link>
                      <p className={`${MaisonNeue} text-sm sm:text-base font-bold text-black`}>
                        {product.price}
                      </p>
                      <div className="flex items-center gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-primaryT" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <RoundedIconButton
                      icon={<CartIcon />}
                      variant="primary"
                      size="md"
                      href={product.link}
                      className="shrink-0 min-w-[40px] min-h-[40px] xs:min-w-[44px] xs:min-h-[44px]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/products" className="block w-full xs:w-auto">
                <button className={`${MaisonNeue} w-full xs:w-auto min-h-[44px] bg-primaryT hover:bg-primaryT/90 text-black font-bold py-3 px-6 xs:px-8 rounded-full transition-colors uppercase text-sm md:text-base`}>
                  SEE MORE
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 xs:mb-10 md:mb-12">
              <h2 className={`${Termina} text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight`}>
                WHY CHOOSE <span className="text-primaryT">TEE VISION PRINTING</span>
              </h2>
              <h3 className={`${Termina} text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight`}>
                AS YOUR PHILLY SCREEN PRINTER
              </h3>
              <p className={`${MaisonNeue} text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-3 xs:mt-4 px-2 sm:px-0`}>
                Choosing the right printing partner makes all the difference. Our Philadelphia screen printing team focuses on quality, consistency, and customer satisfaction from start to finish.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 md:gap-12 items-center">
              {/* Left Side - Placeholder */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">Image Placeholder</span>
                </div>
              </div>

              {/* Right Side - Checklist */}
              <div className="space-y-4 md:space-y-5">
                {WHY_CHOOSE_US_ITEMS.map(({ text, Icon }, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Icon />
                    </div>
                    <p className={`${MaisonNeue} text-sm sm:text-base md:text-lg text-black font-medium`}>
                      {text}
                    </p>
                  </div>
                ))}
                <p className={`${MaisonNeue} text-sm sm:text-base md:text-lg text-gray-700 mt-6 pt-4 border-t border-gray-200`}>
                  We understand the needs of local businesses and organizations, which is why so many customers choose us as their go-to <strong className="text-black">screen printing company Philadelphia</strong> wide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 bg-[#1a1a1a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-6 xs:mb-8 md:mb-10">
              <h2 className={`${Termina} text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight px-2`}>
                WE SERVE ALL OF <span className="text-primaryT">PHILADELPHIA</span>
              </h2>
            </div>
          </div>

          <div className="mb-6 xs:mb-8 md:mb-10">
            {/* Unified Scrollable List for Mobile and Desktop */}
            <div className="flex flex-nowrap justify-start md:justify-center items-start gap-3 md:gap-4 max-w-full overflow-x-auto px-4 pb-8 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {PHILLY_LOCATIONS.map((location, index) => {
                const isActive = activeLocation === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleLocationClick(index)}
                    className={`
                      ${MaisonNeue}
                      flex flex-col items-center justify-center
                      rounded-xl border-2 transition-all duration-300
                      cursor-pointer overflow-hidden flex-shrink-0
                      ${isActive 
                        ? 'bg-primaryT border-primaryT text-black py-3 px-3 md:py-5 md:px-5 w-[260px] md:w-[300px] lg:w-[340px] min-h-[120px] md:min-h-[140px]' 
                        : 'bg-transparent border-primaryT text-primaryT hover:bg-primaryT hover:text-black w-[90px] h-[90px] xs:w-[100px] xs:h-[100px] md:w-[115px] md:h-[115px] lg:w-[130px] lg:h-[130px]'
                      }
                    `}
                  >
                    <span className="font-bold uppercase tracking-wide text-[10px] xs:text-xs lg:text-sm text-center leading-tight">{location.label}</span>
                    
                    <div className={`transition-all duration-300 overflow-hidden w-full ${isActive ? 'max-h-[200px] mt-2 md:mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-[10px] md:text-xs font-medium leading-relaxed whitespace-normal text-center">
                        {location.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center px-4">
            <PrimaryRoundedIcon
              icon={<PhoneIcon />}
              isLink
              link="tel:2672973266"
              className="w-full xs:w-auto min-h-[44px] sm:min-h-0"
            >
              TALK TO A PRINT EXPERT
            </PrimaryRoundedIcon>
          </div>
        </section>

        <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 md:gap-12 items-start">
              {/* Left Side - Content */}
              <div>
                {/* Indicator Pill */}
                <div className="mb-4 md:mb-6">
                  <Indicator 
                    label="SCREEN PRINTING" 
                    variant="subtle" 
                    size="sm" 
                    icon={<ScreenPrintIndicatorIcon />}
                  />
                </div>

                {/* Title */}
                <h2 className={`${Termina} text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 md:mb-6`}>
                  WHAT IS <span className="text-primaryT">CUSTOM SCREEN PRINTING</span> AND WHY IT WORKS?
                </h2>

                {/* Description */}
                <p className={`${MaisonNeue} text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6`}>
                  Custom screen printing is a popular printing technique that uses a mesh screen, ink, and a squeegee to transfer designs onto fabric or other materials. Each color in the design is applied using a separate screen, creating vibrant, long-lasting prints that don&apos;t fade easily. It&apos;s ideal for custom T-shirts, hoodies, tote bags, and uniforms. Unlike digital prints, custom screen print shirts maintain their appearance after repeated washing, making them ideal for logos, branding, and bulk apparel orders.
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-6 md:mb-8">
                  {SCREEN_PRINTING_BENEFITS.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <YellowDot />
                      <p className={`${MaisonNeue} text-sm sm:text-base text-gray-700`}>
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <PrimaryRoundedIcon
                  icon={<PhoneIcon />}
                  isLink
                  link="tel:2672973266"
                  className="w-full xs:w-auto min-h-[44px] sm:min-h-0"
                >
                  TALK TO OUR SCREEN PRINTING EXPERT TODAY
                </PrimaryRoundedIcon>
              </div>

              {/* Right Side - Placeholder */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 xs:mb-10 md:mb-12">
              <MixedTitle
                size="xl"
                centered
                words={[
                  'TYPES OF',
                  { text: 'SCREEN PRINTING', color: 'yellow' },
                ]}
              />
            </div>

            <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {SCREEN_PRINTING_TYPES.map((type, index) => (
                <div key={index} className="min-w-[72%] xs:min-w-[55%] sm:min-w-[42%] md:min-w-0 flex-shrink-0 md:flex-shrink snap-start flex flex-col">
                  {/* Placeholder */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 md:mb-4 bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-400 text-xs">Placeholder</span>
                    </div>
                  </div>
                  {/* Title */}
                  <h4 className={`${Termina} text-sm sm:text-base md:text-lg font-black text-primaryT uppercase mb-2`}>
                    {type.title}
                  </h4>
                  {/* Description */}
                  <p className={`${MaisonNeue} text-xs sm:text-sm text-gray-600 leading-relaxed`}>
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-[#f9f9f9]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 xs:mb-10 md:mb-12">
              <MixedTitle
                size="xl"
                centered
                words={[
                  'FEATURED SCREEN PRINTING',
                  { text: 'DESIGNS', color: 'yellow' },
                ]}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 md:gap-4">
              {FEATURED_DESIGNS.map((_, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
                >
                  <div className="text-center p-4">
                    <div className="w-10 h-10 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-xs">Design {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-[#f9f9f9]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 xs:mb-10 md:mb-12">
              <Indicator 
                label="OUR SERVICES" 
                variant="subtle" 
                size="sm"
                icon={<span className="text-primaryT">★</span>}
              />
              <h2 className={`${Termina} text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mt-3 xs:mt-4 mb-3 xs:mb-4`}>
                SERVICES
              </h2>
              <p className={`${MaisonNeue} text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl`}>
                Custom screen printing for every Philadelphia occasion and business need.
              </p>
            </div>

            <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {SERVICES_DATA.map((service, index) => (
                <Link key={index} href={service.href} className="min-w-[72%] xs:min-w-[55%] sm:min-w-[42%] md:min-w-0 flex-shrink-0 md:flex-shrink snap-start group flex flex-col text-center">
                  {/* Service Title */}
                  <h3 className={`${Termina} text-xs sm:text-sm md:text-base font-bold uppercase mb-3 md:mb-4 ${
                    service.title === 'SCREEN PRINTING' ? 'text-primaryT' : 'text-black'
                  }`}>
                    {service.title}
                  </h3>
                  {/* Placeholder */}
                  <div className="relative aspect-[3/4] w-full mb-3 md:mb-4 overflow-hidden bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-400 text-xs">Placeholder</span>
                    </div>
                  </div>
                  {/* Description */}
                  <p className={`${MaisonNeue} text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow`}>
                    {service.description}
                  </p>
                  <button className={`${MaisonNeue} w-full min-h-[44px] bg-primaryT text-black font-bold py-2.5 sm:py-3 px-4 rounded-full hover:bg-black hover:text-primaryT transition-colors uppercase text-xs sm:text-sm`}>
                    START ORDER
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 xs:mb-10 md:mb-14">
              <h2 className={`${Termina} text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight`}>
                <span className="text-white">OUR SCREEN PRINTING </span>
                <span className="text-primaryT">PROCESS</span>
              </h2>
              <p className={`${MaisonNeue} text-white/70 text-xs xs:text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-3 xs:mt-4 px-2 sm:px-0`}>
                We follow a proven process to ensure accuracy and quality on every order:
              </p>
            </div>

            <div className="flex flex-nowrap justify-start md:justify-center items-start gap-3 md:gap-4 max-w-full overflow-x-auto px-4 pb-8 pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {PROCESS_STEPS.map((step, index) => {
                const isActive = activeProcessStep === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleProcessStepClick(index)}
                    className={`
                      ${MaisonNeue}
                      flex flex-col items-center justify-center
                      rounded-xl border-2 transition-all duration-300
                      cursor-pointer  flex-shrink-0 relative
                      ${isActive 
                        ? 'bg-primaryT border-primaryT text-black py-4 px-4 md:py-6 md:px-6 w-[280px] md:w-[320px] lg:w-[360px] min-h-[140px] md:min-h-[160px]' 
                        : 'bg-transparent border-primaryT text-white hover:bg-primaryT hover:text-black px-2 w-[120px] h-[120px] xs:w-[130px] xs:h-[130px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px]'
                      }
                    `}
                  >
                    {/* Floating Number Circle */}
                    <div className={`
                      absolute -top-4 left-1/2 -translate-x-1/2 
                      w-8 h-8 md:w-10 md:h-10 rounded-full 
                      flex items-center justify-center
                      font-bold text-sm md:text-base transition-colors duration-300
                      ${isActive 
                        ? 'bg-black text-primaryT' 
                        : 'bg-primaryT text-black'
                      }
                    `}>
                      {step.number}
                    </div>

                    <h3 className={`font-bold uppercase tracking-wide text-[10px] xs:text-xs lg:text-sm text-center leading-tight ${isActive ? 'mb-2 md:mb-3' : ''}`}>
                      {step.title}
                    </h3>
                    
                    <div className={`transition-all duration-300 overflow-hidden w-full ${isActive ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-[10px] md:text-xs font-medium leading-relaxed whitespace-normal text-center">
                        {step.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primaryT rounded-xl xs:rounded-2xl md:rounded-3xl py-8 xs:py-10 md:py-14 px-4 xs:px-6 md:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className={`${Termina} text-black text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 md:mb-4`}>
                  READY TO GET STARTED?
                </h2>

                <p className={`${MaisonNeue} text-black/80 text-xs xs:text-sm md:text-base max-w-2xl mx-auto mb-4 xs:mb-6 md:mb-8`}>
                  This streamlined approach allows us to deliver dependable screen printing services Philadelphia customers can count on
                </p>

                <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 md:gap-4">
                  <Link
                    href="/contact"
                    className={`${MaisonNeue} inline-flex items-center justify-center gap-2 min-h-[44px] px-5 xs:px-6 py-2.5 xs:py-3 rounded-full font-medium text-sm md:text-base transition-all bg-white text-black hover:bg-gray-100 border border-black/10`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    Contact Us Today
                  </Link>
                  <Link
                    href="/request-a-quote"
                    className={`${MaisonNeue} inline-flex items-center justify-center gap-2 min-h-[44px] px-5 xs:px-6 py-2.5 xs:py-3 rounded-full font-medium text-sm md:text-base transition-all bg-black text-white hover:bg-gray-800`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-primaryT">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-4 xs:mb-6 md:mb-8">
              <span className={`${MaisonNeue} bg-black text-white text-xs sm:text-sm font-bold py-2 px-4 rounded-full uppercase`}>
                START FOR FREE
              </span>
            </div>

            <div className="text-center mb-8 xs:mb-10 md:mb-12">
              <h2 className={`${Termina} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight`}>
                SEE <span className="text-white">YOUR DESIGN</span> COMES TO LIFE
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 md:gap-12 items-center">
              {/* Left Side - Mockup Preview */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/10">
                <Image
                  src="/screen-printing/screen-printing-philadelphia/22.png"
                  alt="T-shirt mockup preview"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-6 md:p-8 shadow-lg">
                <p className={`${MaisonNeue} text-gray-600 text-xs xs:text-sm sm:text-base mb-4 xs:mb-6`}>
                  Unsure how your logo will look on fabric? Upload your file below, and we&apos;ll send you a high-quality digital proof completely free—so you can order with confidence.
                </p>

                <label className="border-2 border-dashed border-gray-300 rounded-lg xs:rounded-xl p-4 xs:p-6 md:p-8 text-center mb-4 xs:mb-6 hover:border-primaryT transition-colors cursor-pointer block min-h-[120px] flex flex-col items-center justify-center">
                  <input type="file" accept=".png,.jpg,.jpeg,.pdf" className="sr-only" />
                  <div className="flex justify-center mb-3">
                    <UploadIcon />
                  </div>
                  <p className={`${MaisonNeue} text-sm sm:text-base text-gray-700 font-medium mb-1`}>
                    Drop your design here or click to browse
                  </p>
                  <p className={`${MaisonNeue} text-xs text-gray-500`}>
                    PNG, JPG, PDF up to 10MB
                  </p>
                </label>

                <div className="space-y-3 xs:space-y-4 mb-4 xs:mb-6">
                  <RoundedInput placeholder="Your Name" className="min-h-[44px]" />
                  <RoundedInput placeholder="Email Address" type="email" className="min-h-[44px]" />
                  <RoundedInput placeholder="Phone Number" type="tel" className="min-h-[44px]" />
                </div>

                <Link href="/request-a-quote" className="block">
                  <button type="button" className={`${MaisonNeue} w-full min-h-[44px] bg-primaryT text-black font-bold py-3 px-6 rounded-full hover:bg-black hover:text-white transition-colors uppercase text-sm md:text-base`}>
                    SEE MY DESIGN
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>


        <FAQAccordion
          badge="COMMON QUESTIONS"
          titleBlack="FREQUENTLY ASKED"
          titleYellow="QUESTIONS"
          subtitle="Got questions? Explore our Frequently Asked Questions to learn more about our services, products, and policies all in one place."
          items={FAQ_ITEMS}
          defaultOpenIndex={0}
        />
      </main>
    </div>
  );
};

export default ScreenPrintingPhiladelphiaV2;
