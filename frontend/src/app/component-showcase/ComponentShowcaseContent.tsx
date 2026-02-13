'use client';

import React from 'react';
import Button from '@/components/shared/Button';
import PrimaryButton from '@/components/shared/PrimaryButton';
import SecondaryButton from '@/components/shared/SecondaryButton';
import PrimaryRounded from '@/components/shared/PrimaryRounded';
import PrimaryRoundedOutline from '@/components/shared/PrimaryRoundedOutline';
import PrimaryRoundedIcon from '@/components/shared/PrimaryRoundedIcon';
import PrimaryRoundedOutlineIcon from '@/components/shared/PrimaryRoundedOutlineIcon';
import PhoneIcon from '@/components/shared/icons/PhoneIcon';
import AutoScrollMarquee from '@/components/shared/AutoScrollMarquee';
import TvpFlagIcon from '@/components/shared/icons/TvpFlagIcon';
import GlassmorphismNavbar from '@/components/shared/GlassmorphismNavbar';
import MixedTitle from '@/components/shared/MixedTitle';
import NavPill from '@/components/shared/NavPill';
import IconNavPill from '@/components/shared/IconNavPill';
import Indicator from '@/components/shared/Indicator';
import RoundedIcon from '@/components/shared/RoundedIcon';
import RoundedIconButton from '@/components/shared/RoundedIconButton';
import InteractiveComponentShow from './InteractiveComponentShow';
import RoundedCard from '@/components/shared/RoundedCard';
import FeatureCard from '@/components/shared/FeatureCard';
import ImageCard from '@/components/shared/ImageCard';
import LocationPill from '@/components/shared/LocationPill';
import RoundedInput from '@/components/shared/RoundedInput';
import RoundedTextarea from '@/components/shared/RoundedTextarea';
import UploadCard from '@/components/shared/UploadCard';
import ContactForm from '@/components/shared/ContactForm';
import ButtonPair from '@/components/shared/ButtonPair';
import ProductCard from '@/components/shared/ProductCard';
import TopBanner from '@/components/shared/TopBanner';
import FeaturesBar from '@/components/shared/FeaturesBar';
import TrustBar from '@/components/shared/TrustBar';
import SearchBar from '@/components/shared/SearchBar';
import FilterDropdown from '@/components/shared/FilterDropdown';
import FilterChips from '@/components/shared/FilterChips';
import FilterPanel from '@/components/shared/FilterPanel';
import CategoryCard from '@/components/shared/CategoryCard';
import ProductCardV2 from '@/components/shared/ProductCardV2';
import { ColorSystem } from '@/components/shared/ColorPalette';
import FAQAccordion from '@/components/shared/FAQAccordion';
import CTABlock from '@/components/shared/CTABlock';

// Icons for ButtonPair
const PhonePairIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const QuotePairIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
  </svg>
);

// Contact Icons for RoundedIcon showcase
const PhoneContactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const EmailContactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LocationContactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);

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

const marqueeItems = [
  { icon: <TShirtIcon />, label: 'Custom T-Shirts', href: '/custom-t-shirt-printing-philadelphia' },
  { icon: <HoodieIcon />, label: 'Sweats & Hoodies', href: '/custom-hoodies' },
  { icon: <HatIcon />, label: 'Hats & Polos', href: '/custom-polo-shirts' },
  { icon: <BagIcon />, label: 'Totes & More', href: '/products' },
  { icon: <TvpFlagIcon />, label: 'Get A Quote', href: '/request-a-quote' },
];

const navItems = [
  { label: 'Custom T-Shirts', href: '/custom-t-shirt-printing-philadelphia' },
  { label: 'Sweats & Hoodies', href: '/custom-hoodies' },
  { label: 'Hats, Polo & More', href: '/custom-polo-shirts' },
  { label: 'Services', href: '/services' },
];

const navItemsWithActive = [
  { label: 'Custom T-Shirts', href: '/custom-t-shirt-printing-philadelphia', isActive: true },
  { label: 'Sweats & Hoodies', href: '/custom-hoodies' },
  { label: 'Hats, Polo & More', href: '/custom-polo-shirts' },
  { label: 'Services', href: '/services' },
];

const navPillItems = [
  { id: 'screen', label: 'Screen Printing' },
  { id: 'dtg', label: 'DTG' },
  { id: 'embroidery', label: 'Embroidery' },
];

// Icons for NavPill with icons
const ScreenPrintIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-4h4v-2h-4V7h-2v4H8v2h4z" />
  </svg>
);

const DTGIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
  </svg>
);

const EmbroideryIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.8 2c-.5 0-1 .2-1.4.6L3.6 5.4c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4l2.8 2.8-2.5 2.5c-.8.8-.8 2 0 2.8l4.2 4.2c.8.8 2 .8 2.8 0l2.5-2.5 2.8 2.8c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l2.8-2.8c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4L19 12l3.2-3.2c.8-.8.8-2 0-2.8L18 1.8c-.8-.8-2-.8-2.8 0L12 5 9.2 2.2C8.8 1.8 8.3 1.6 7.8 2z" />
  </svg>
);

const navPillItemsWithIcons = [
  { id: 'screen', label: 'Screen Printing', icon: <ScreenPrintIcon /> },
  { id: 'dtg', label: 'DTG', icon: <DTGIcon /> },
  { id: 'embroidery', label: 'Embroidery', icon: <EmbroideryIcon /> },
];

// Items for IconNavPill (icons displayed after label)
const iconNavPillItems = [
  { id: 'popular', label: 'Popular', icons: [<ScreenPrintIcon key="1" />, <DTGIcon key="2" />, <EmbroideryIcon key="3" />] },
  { id: 'new', label: 'New', icons: [<ScreenPrintIcon key="1" />] },
  { id: 'sale', label: 'Sale' },
  { id: 'featured', label: 'Featured', icons: [<EmbroideryIcon key="1" />] },
];

const StarIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Arrow Up Icon for Scroll to Top
const ArrowUpIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </svg>
);

export default function ComponentShowcaseContent() {
  const [activeNavPill, setActiveNavPill] = React.useState('screen');
  const [activeIconNavPill, setActiveIconNavPill] = React.useState('popular');
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedChips, setSelectedChips] = React.useState<string[]>([]);

  // Handle scroll visibility
  React.useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 400px
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed z-50 
          bottom-4 right-4 
          md:bottom-6 md:right-6 
          lg:bottom-8 lg:right-8
          w-10 h-10 
          md:w-12 md:h-12 
          lg:w-14 lg:h-14
          bg-primaryT hover:bg-primaryT/90
          text-black
          rounded-full
          shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          ${showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'}
          hover:scale-110
          focus:outline-none focus:ring-2 focus:ring-primaryT focus:ring-offset-2
        `}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon />
      </button>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Component Showcase</h1>
        <p className="text-gray-600 mb-12">
          Visual reference for all buttons, forms, and components
        </p>

        {/* Glassmorphism Navbar Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Glassmorphism Navbar
          </h2>
          <div className="space-y-8">
            {/* Mobile/Tablet View */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
              <h3 className="font-semibold text-gray-700 p-4 bg-gray-50 border-b">Mobile/Tablet View (Logo + Cart + Menu)</h3>
              <div className="max-w-md mx-auto">
                <GlassmorphismNavbar
                  variant="light"
                  navItems={navItems}
                  showCart={true}
                  onCartClick={() => alert('Cart clicked!')}
                  onMenuClick={() => alert('Menu clicked!')}
                />
              </div>
            </div>

            {/* Desktop Light with Active/Hover */}
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 rounded-lg">
              <h3 className="font-semibold text-white mb-4">Light Variant (Hover for yellow underline)</h3>
              <GlassmorphismNavbar
                variant="light"
                navItems={navItemsWithActive}
                ctaButton={
                  <PrimaryRoundedIcon icon={<PhoneIcon />}>
                    Order Now
                  </PrimaryRoundedIcon>
                }
              />
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="font-semibold text-white mb-4">Dark Variant</h3>
              <GlassmorphismNavbar
                variant="dark"
                navItems={navItems}
                ctaButton={
                  <PrimaryRoundedIcon icon={<PhoneIcon />}>
                    Order Now
                  </PrimaryRoundedIcon>
                }
              />
            </div>
          </div>
        </section>

        {/* Top Banner Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Top Banner (Talk with Expert)
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Dark Variant (Default)</h3>
              <TopBanner variant="dark" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Primary Variant (Yellow Background)</h3>
              <TopBanner variant="primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Primary with Custom Text</h3>
              <TopBanner variant="primary" text="Need help? Call us now" phoneNumber="1-800-555-0123" />
            </div>
          </div>
        </section>

        {/* Features Bar Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Features Bar (4-Column Icons)
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Light Variant (Default)</h3>
              <FeaturesBar variant="light" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Primary Variant (Yellow Background)</h3>
              <FeaturesBar variant="primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Light Variant without Border</h3>
              <FeaturesBar variant="light" showBorder={false} />
            </div>
          </div>
        </section>

        {/* Trust Bar Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Trust Bar (Stats & Credibility)
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Default</h3>
              <TrustBar />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Custom Stats</h3>
              <TrustBar 
                stats={[
                  { value: '500+', label: 'HAPPY', sublabel: 'CUSTOMERS' },
                  { value: '24/7', label: 'CUSTOMER', sublabel: 'SUPPORT' },
                  { value: '100%', label: 'SATISFACTION', sublabel: 'GUARANTEED' },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Full Banner Stack Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Full Banner Stack (All 3 Combined)
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Dark Top Banner + Light Features</h3>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <TopBanner variant="dark" />
                <FeaturesBar variant="light" />
                <TrustBar />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Primary Top Banner + Light Features</h3>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <TopBanner variant="primary" />
                <FeaturesBar variant="light" showBorder={false} />
                <TrustBar />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">All Primary Theme</h3>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <TopBanner variant="primary" />
                <FeaturesBar variant="primary" />
                <TrustBar />
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Search Bar
          </h2>
          <div className="bg-white p-8 rounded-lg shadow space-y-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Default Variant</h3>
              <div className="max-w-xl">
                <SearchBar placeholder="Search products..." onSearch={(q) => console.log('Search:', q)} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Outlined Variant</h3>
              <div className="max-w-xl">
                <SearchBar placeholder="Search..." variant="outlined" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Filled Variant</h3>
              <div className="max-w-xl">
                <SearchBar placeholder="What are you looking for?" variant="filled" />
              </div>
            </div>
          </div>
        </section>

        {/* Filter Dropdown Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Filter Dropdown
          </h2>
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FilterDropdown
                label="Category"
                options={[
                  { value: 'all', label: 'All Categories' },
                  { value: 't-shirts', label: 'T-Shirts' },
                  { value: 'sweatshirts', label: 'Sweatshirts' },
                  { value: 'hoodies', label: 'Hoodies' },
                  { value: 'polos', label: 'Polos' },
                ]}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="Select a category"
              />
              <FilterDropdown
                label="Sort By"
                options={[
                  { value: 'popular', label: 'Most Popular' },
                  { value: 'newest', label: 'Newest First' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' },
                ]}
                placeholder="Sort by..."
              />
              <FilterDropdown
                label="Size"
                options={[
                  { value: 'xs', label: 'Extra Small' },
                  { value: 's', label: 'Small' },
                  { value: 'm', label: 'Medium' },
                  { value: 'l', label: 'Large' },
                  { value: 'xl', label: 'Extra Large' },
                ]}
                placeholder="Select size"
              />
            </div>
          </div>
        </section>

        {/* Filter Chips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Filter Chips
          </h2>
          <div className="bg-white p-8 rounded-lg shadow space-y-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Multi-Select (Print Types)</h3>
              <FilterChips
                chips={[
                  { id: 'screen-printing', label: 'Screen Printing' },
                  { id: 'embroidery', label: 'Embroidery' },
                  { id: 'dtg', label: 'DTG' },
                  { id: 'dtf', label: 'DTF' },
                ]}
                selectedChips={selectedChips}
                onChange={setSelectedChips}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Single Select (Categories)</h3>
              <FilterChips
                chips={[
                  { id: 'all', label: 'All' },
                  { id: 't-shirts', label: 'T-Shirts' },
                  { id: 'hoodies', label: 'Hoodies' },
                  { id: 'sweatshirts', label: 'Sweatshirts' },
                  { id: 'polos', label: 'Polos' },
                ]}
                multiSelect={false}
                selectedChips={['all']}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">With Selection (Colors)</h3>
              <FilterChips
                chips={[
                  { id: 'black', label: 'Black' },
                  { id: 'white', label: 'White' },
                  { id: 'navy', label: 'Navy' },
                  { id: 'red', label: 'Red' },
                  { id: 'gray', label: 'Gray' },
                ]}
                selectedChips={['black', 'white']}
              />
            </div>
          </div>
        </section>

        {/* Filter Panel Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Filter Panel (Complete)
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Full Filter Panel</h3>
              <FilterPanel 
                onSearch={(q) => console.log('Search:', q)}
                onCategoryChange={(c) => console.log('Category:', c)}
                onSortChange={(s) => console.log('Sort:', s)}
                onTagsChange={(t) => console.log('Tags:', t)}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Sidebar Layout with Products</h3>
              <div className="flex gap-6">
                <div className="w-80 flex-shrink-0">
                  <FilterPanel 
                    showSortFilter={false}
                  />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                      <span className="text-gray-400">Product {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Category Cards
          </h2>
          <div className="bg-white p-8 rounded-lg shadow space-y-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Category Grid (4 columns)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <CategoryCard
                  image="https://picsum.photos/seed/tshirt1/400/400"
                  title="T-SHIRTS"
                  href="/products/category/t-shirts"
                />
                <CategoryCard
                  image="https://picsum.photos/seed/longsleeve1/400/400"
                  title="LONGSLEVES"
                  href="/products/category/long-sleeves"
                />
                <CategoryCard
                  image="https://picsum.photos/seed/polo1/400/400"
                  title="POLOS"
                  href="/products/category/polos"
                />
                <CategoryCard
                  image="https://picsum.photos/seed/sweatshirt1/400/400"
                  title="SWEATSHIRT"
                  href="/products/category/sweatshirts"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Cards V2 Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Product Cards V2 (with Cart Button)
          </h2>
          <div className="bg-gray-100 p-8 rounded-lg space-y-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Product Grid (3 columns on desktop)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <ProductCardV2
                  image="https://picsum.photos/seed/prod1/400/500"
                  name="Gildan Adult Softstyle® T-Shirt (G640)"
                  price="$13.19 / shirt"
                  rating={5}
                  reviewCount={5}
                  href="/products/view/gildan-adult-softstyle-t-shirt-g640"
                  onAddToCart={() => console.log('Added to cart')}
                />
                <ProductCardV2
                  image="https://picsum.photos/seed/prod2/400/500"
                  name="AS Colour Classic Tee (5026)"
                  price="$13.19 / shirt"
                  rating={5}
                  reviewCount={3}
                  href="/products/view/as-colour-classic-tee-5026"
                  onAddToCart={() => console.log('Added to cart')}
                />
                <ProductCardV2
                  image="https://picsum.photos/seed/prod3/400/500"
                  name="Gildan Hammer™ Adult T-Shirt (H000)"
                  price="$13.19 / shirt"
                  rating={4}
                  reviewCount={8}
                  href="/products/view/gildan-hammer-adult-t-shirt"
                  onAddToCart={() => console.log('Added to cart')}
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">With Filter Panel (Sidebar Layout)</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-72 flex-shrink-0">
                  <FilterPanel showSortFilter={false} />
                </div>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
                  <ProductCardV2
                    image="https://picsum.photos/seed/fp1/400/500"
                    name="Gildan Adult Softstyle® T-Shirt"
                    price="$13.19 / shirt"
                    rating={5}
                    href="/products/view/1"
                  />
                  <ProductCardV2
                    image="https://picsum.photos/seed/fp2/400/500"
                    name="AS Colour Classic Tee"
                    price="$15.99 / shirt"
                    rating={5}
                    href="/products/view/2"
                  />
                  <ProductCardV2
                    image="https://picsum.photos/seed/fp3/400/500"
                    name="Gildan Hammer™ Adult T-Shirt"
                    price="$14.49 / shirt"
                    rating={4}
                    href="/products/view/3"
                  />
                  <ProductCardV2
                    image="https://picsum.photos/seed/fp4/400/500"
                    name="Bella+Canvas Unisex Jersey"
                    price="$12.99 / shirt"
                    rating={5}
                    href="/products/view/4"
                  />
                  <ProductCardV2
                    image="https://picsum.photos/seed/fp5/400/500"
                    name="Next Level Apparel Tee"
                    price="$11.49 / shirt"
                    rating={4}
                    href="/products/view/5"
                  />
                  <ProductCardV2
                    image="https://picsum.photos/seed/fp6/400/500"
                    name="Comfort Colors Heavyweight"
                    price="$16.99 / shirt"
                    rating={5}
                    href="/products/view/6"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mixed Title Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Mixed Title (Uppercase Black + Yellow)
          </h2>
          <div className="bg-white p-8 rounded-lg shadow space-y-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Size XL</h3>
              <MixedTitle
                size="xl"
                words={[
                  { text: 'SCREEN PRINTING', color: 'yellow' },
                  'PHILADELPHIA',
                ]}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Size LG</h3>
              <MixedTitle
                size="lg"
                words={[
                  { text: 'BEST PRODUCTS', color: 'yellow' },
                  'FOR SCREEN PRINTING',
                ]}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Size MD</h3>
              <MixedTitle
                size="md"
                words={[
                  'WHAT IS',
                  { text: 'CUSTOM SCREEN PRINTING', color: 'yellow' },
                  'AND WHY IT WORKS?',
                ]}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Size SM (Centered)</h3>
              <MixedTitle
                size="sm"
                centered
                words={[
                  { text: 'SCREEN', color: 'yellow' },
                  'PRINTING',
                ]}
              />
            </div>
          </div>
        </section>

        {/* NavPill Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            NavPill (Rounded Tab Bars)
          </h2>
          <div className="bg-white p-8 rounded-lg shadow space-y-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Filled Variant</h3>
              <NavPill
                items={navPillItems}
                activeId={activeNavPill}
                onSelect={setActiveNavPill}
                variant="filled"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Outline Variant</h3>
              <NavPill
                items={navPillItems}
                activeId={activeNavPill}
                onSelect={setActiveNavPill}
                variant="outline"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Small Size</h3>
              <NavPill
                items={navPillItems}
                activeId={activeNavPill}
                onSelect={setActiveNavPill}
                size="sm"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Large Size</h3>
              <NavPill
                items={navPillItems}
                activeId={activeNavPill}
                onSelect={setActiveNavPill}
                size="lg"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">With Icons + Text</h3>
              <NavPill
                items={navPillItemsWithIcons}
                activeId={activeNavPill}
                onSelect={setActiveNavPill}
                variant="filled"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">With Icons + Text (Outline)</h3>
              <NavPill
                items={navPillItemsWithIcons}
                activeId={activeNavPill}
                onSelect={setActiveNavPill}
                variant="outline"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">With Icons + Text (Large)</h3>
              <NavPill
                items={navPillItemsWithIcons}
                activeId={activeNavPill}
                onSelect={setActiveNavPill}
                size="lg"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Scrollable (Single Line on Mobile)</h3>
              <div className="max-w-xs">
                <NavPill
                  items={navPillItemsWithIcons}
                  activeId={activeNavPill}
                  onSelect={setActiveNavPill}
                  scrollable
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Extra Small Size</h3>
              <NavPill
                items={navPillItems}
                activeId={activeNavPill}
                onSelect={setActiveNavPill}
                size="xs"
                scrollable
              />
            </div>
          </div>
        </section>

        {/* IconNavPill Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            IconNavPill (Label + Icons)
          </h2>
          <div className="bg-white p-8 rounded-lg shadow space-y-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Filled Variant</h3>
              <IconNavPill
                items={iconNavPillItems}
                activeId={activeIconNavPill}
                onSelect={setActiveIconNavPill}
                variant="filled"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Outline Variant</h3>
              <IconNavPill
                items={iconNavPillItems}
                activeId={activeIconNavPill}
                onSelect={setActiveIconNavPill}
                variant="outline"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Extra Small (Scrollable)</h3>
              <div className="max-w-xs">
                <IconNavPill
                  items={iconNavPillItems}
                  activeId={activeIconNavPill}
                  onSelect={setActiveIconNavPill}
                  size="xs"
                  scrollable
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Small Size</h3>
              <IconNavPill
                items={iconNavPillItems}
                activeId={activeIconNavPill}
                onSelect={setActiveIconNavPill}
                size="sm"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Large Size</h3>
              <IconNavPill
                items={iconNavPillItems}
                activeId={activeIconNavPill}
                onSelect={setActiveIconNavPill}
                size="lg"
              />
            </div>
          </div>
        </section>

        {/* Indicator Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Indicators
          </h2>
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="flex flex-wrap gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Primary</h3>
                <Indicator icon={<StarIcon />} label="Screen Printing" variant="primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Outline</h3>
                <Indicator icon={<StarIcon />} label="Screen Printing" variant="outline" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Subtle</h3>
                <Indicator icon={<StarIcon />} label="Screen Printing" variant="subtle" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Small</h3>
                <Indicator icon={<StarIcon />} label="Screen Printing" size="sm" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Large</h3>
                <Indicator icon={<StarIcon />} label="Screen Printing" size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* RoundedIcon Section (Decorative) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Rounded Icons (Decorative)
          </h2>
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-gray-700 mb-4">All Variants</h3>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIcon icon={<PhoneContactIcon />} variant="primary" size="lg" />
                    <span className="text-xs text-gray-500">Primary</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIcon icon={<PhoneContactIcon />} variant="black" size="lg" />
                    <span className="text-xs text-gray-500">Black</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIcon icon={<PhoneContactIcon />} variant="white" size="lg" />
                    <span className="text-xs text-gray-500">White</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIcon icon={<PhoneContactIcon />} variant="outline" size="lg" />
                    <span className="text-xs text-gray-500">Outline</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-4">All Sizes</h3>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIcon icon={<PhoneContactIcon />} size="sm" />
                    <span className="text-xs text-gray-500">sm</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIcon icon={<PhoneContactIcon />} size="md" />
                    <span className="text-xs text-gray-500">md</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIcon icon={<PhoneContactIcon />} size="lg" />
                    <span className="text-xs text-gray-500">lg</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIcon icon={<PhoneContactIcon />} size="xl" />
                    <span className="text-xs text-gray-500">xl</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-4">Contact Info Pattern</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <RoundedIcon icon={<PhoneContactIcon />} variant="primary" size="lg" />
                    <div>
                      <p className="font-bold">Phone</p>
                      <p className="text-gray-600">+1 267-538-5331</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <RoundedIcon icon={<EmailContactIcon />} variant="primary" size="lg" />
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-gray-600">info@teevisionprinting.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <RoundedIcon icon={<LocationContactIcon />} variant="primary" size="lg" />
                    <div>
                      <p className="font-bold">Address</p>
                      <p className="text-gray-600">920 E Hunting Park Ave, Philadelphia, Pennsylvania</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RoundedIconButton Section (Interactive) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Rounded Icon Buttons (Interactive)
          </h2>
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-gray-700 mb-4">All Variants (Hover to see effects)</h3>
                <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIconButton icon={<CartIcon />} variant="primary" size="lg" />
                    <span className="text-xs text-gray-500">Primary</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIconButton icon={<CartIcon />} variant="black" size="lg" />
                    <span className="text-xs text-gray-500">Black</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIconButton icon={<CartIcon />} variant="white" size="lg" />
                    <span className="text-xs text-gray-500">White</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIconButton icon={<CartIcon />} variant="outline" size="lg" />
                    <span className="text-xs text-gray-500">Outline</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-4">All Sizes</h3>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIconButton icon={<CartIcon />} size="sm" />
                    <span className="text-xs text-gray-500">sm</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIconButton icon={<CartIcon />} size="md" />
                    <span className="text-xs text-gray-500">md</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIconButton icon={<CartIcon />} size="lg" />
                    <span className="text-xs text-gray-500">lg</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RoundedIconButton icon={<CartIcon />} size="xl" />
                    <span className="text-xs text-gray-500">xl</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-4">Product Card Pattern</h3>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-center gap-2 p-4 border border-dashed border-gray-300 rounded-lg">
                    <RoundedIconButton icon={<CartIcon />} variant="black" size="lg" />
                    <div className="text-center">
                      <p className="font-bold text-green-600">$13.19 / shirt</p>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="text-gray-500 text-sm">(5)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 border border-dashed border-gray-300 rounded-lg">
                    <RoundedIconButton icon={<CartIcon />} variant="primary" size="lg" />
                    <div className="text-center">
                      <p className="font-bold text-green-600">$13.19 / shirt</p>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="text-gray-500 text-sm">(5)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-4">Action Buttons</h3>
                <div className="flex items-center gap-4">
                  <RoundedIconButton icon={<HeartIcon />} variant="primary" size="lg" />
                  <RoundedIconButton icon={<PlusIcon />} variant="black" size="lg" />
                  <RoundedIconButton icon={<CartIcon />} variant="outline" size="lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rounded Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Rounded Cards (25px radius)
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Card Variants</h3>
              <div className="grid grid-cols-4 gap-4">
                <RoundedCard variant="default">
                  <h4 className="font-bold mb-2">Default</h4>
                  <p className="text-sm text-gray-600">Plain white card</p>
                </RoundedCard>
                <RoundedCard variant="elevated">
                  <h4 className="font-bold mb-2">Elevated</h4>
                  <p className="text-sm text-gray-600">With shadow</p>
                </RoundedCard>
                <RoundedCard variant="outlined">
                  <h4 className="font-bold mb-2">Outlined</h4>
                  <p className="text-sm text-gray-600">With border</p>
                </RoundedCard>
                <RoundedCard variant="dark">
                  <h4 className="font-bold mb-2">Dark</h4>
                  <p className="text-sm text-white/80">Dark mode</p>
                </RoundedCard>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Feature Cards (Image + Overlay)</h3>
              <div className="grid grid-cols-4 gap-4">
                <FeatureCard
                  image="https://picsum.photos/seed/ink1/400/300"
                  title="Plastisol Ink"
                  description="The most widely used ink in the apparel printing industry."
                />
                <FeatureCard
                  image="https://picsum.photos/seed/ink2/400/300"
                  title="UV Ink"
                  description="Fluorescent ink that activates in sunlight."
                />
                <FeatureCard
                  image="https://picsum.photos/seed/ink3/400/300"
                  title="Puff Print"
                  description="Creates a raised, 3D effect on garments."
                />
                <FeatureCard
                  image="https://picsum.photos/seed/ink4/400/300"
                  title="Simulated Process"
                  description="For photorealistic artwork and screen printing."
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Image Cards</h3>
              <div className="grid grid-cols-4 gap-4">
                <ImageCard
                  src="https://picsum.photos/seed/print1/400/400"
                  alt="Screen printing"
                  aspectRatio="square"
                />
                <ImageCard
                  src="https://picsum.photos/seed/print2/600/400"
                  alt="Screen printing"
                  aspectRatio="landscape"
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Product Cards</h3>
              <div className="grid grid-cols-4 gap-4">
                <ProductCard
                  image="https://picsum.photos/seed/tee1/400/500"
                  alt="T-Shirt Product"
                />
                <ProductCard
                  image="https://picsum.photos/seed/tee2/400/500"
                  alt="T-Shirt Product"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location Pills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Location Pills
          </h2>
          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="flex flex-wrap gap-3 mb-6">
              <LocationPill label="Northern Liberties" />
              <LocationPill label="Manayunk" />
              <LocationPill label="Old City" />
              <LocationPill label="Port Richmond" isActive />
              <LocationPill label="Center City" />
              <LocationPill label="Fishtown" />
              <LocationPill label="University City" />
              <LocationPill label="South Philly" />
            </div>
          </div>
        </section>

        {/* Button Pair Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Button Pair
          </h2>
          <div className="bg-primaryT p-8 rounded-lg flex justify-center">
            <ButtonPair
              secondaryButton={{
                icon: <PhonePairIcon />,
                label: 'Contact Us Today',
                variant: 'secondary',
                onClick: () => alert('Contact clicked'),
              }}
              primaryButton={{
                icon: <QuotePairIcon />,
                label: 'Request Quote',
                variant: 'primary',
                onClick: () => alert('Quote clicked'),
              }}
            />
          </div>
        </section>

        {/* Rounded Form Components Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Rounded Form Components
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 mb-4">Rounded Inputs</h3>
              <RoundedInput placeholder="Your Name" />
              <RoundedInput label="Email Address" type="email" placeholder="john@example.com" />
              <RoundedInput label="With Error" placeholder="Company" error="This field is required" />
              <RoundedTextarea label="Message" placeholder="Tell us about your project..." />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Contact Form</h3>
              <ContactForm onSubmit={(data) => console.log('Form:', data)} />
            </div>
          </div>
        </section>

        {/* Upload Card Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Upload Card
          </h2>
          <div className="bg-primaryT p-12 rounded-lg flex justify-center">
            <UploadCard onSubmit={(data) => console.log('Upload:', data)} />
          </div>
        </section>

        {/* Auto Scroll Marquee Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Auto Scroll Marquee
          </h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <h3 className="font-semibold text-gray-700 p-4 pb-2">Default (Medium Speed, Left, Pause on Hover)</h3>
            <AutoScrollMarquee items={marqueeItems} />
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Button Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-lg shadow">
            {/* Button Variants */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Default Button</h3>
              <Button>Click me</Button>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Button Secondary</h3>
              <Button styleType="secondary">Secondary</Button>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Button Primary</h3>
              <Button styleType="primary">Primary</Button>
            </div>

            {/* Primary Button Variants */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Primary Button</h3>
              <PrimaryButton>
                Primary Action
              </PrimaryButton>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Primary Disabled</h3>
              <PrimaryButton disabled>Primary Disabled</PrimaryButton>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Primary Large</h3>
              <PrimaryButton className="px-8 py-4 text-lg">
                Large Primary
              </PrimaryButton>
            </div>

            {/* Secondary Button Variants */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Secondary Button</h3>
              <SecondaryButton>Secondary</SecondaryButton>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Secondary Fullwidth</h3>
              <SecondaryButton fullwidth>
                Fullwidth Secondary
              </SecondaryButton>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Secondary With Link</h3>
              <SecondaryButton isLink link="/">
                Link Button
              </SecondaryButton>
            </div>

            {/* Primary Rounded Button Variants */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Primary Rounded</h3>
              <PrimaryRounded>
                REQUEST FREE QUOTE
              </PrimaryRounded>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Primary Rounded Outline</h3>
              <PrimaryRoundedOutline>
                REQUEST A QUOTE
              </PrimaryRoundedOutline>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Primary Rounded Icon</h3>
              <PrimaryRoundedIcon icon={<PhoneIcon />}>
                TALK TO EXPERT
              </PrimaryRoundedIcon>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Primary Rounded Outline Icon</h3>
              <PrimaryRoundedOutlineIcon icon={<PhoneIcon />}>
                CALL NOW
              </PrimaryRoundedOutlineIcon>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Primary Rounded Disabled</h3>
              <PrimaryRounded disabled>
                DISABLED
              </PrimaryRounded>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-4">Primary Rounded Icon Disabled</h3>
              <PrimaryRoundedIcon icon={<PhoneIcon />} disabled>
                UNAVAILABLE
              </PrimaryRoundedIcon>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Typography
          </h2>

          <div className="bg-white p-8 rounded-lg shadow space-y-6">
            <div>
              <h1 className="text-4xl font-bold">Heading 1 (H1)</h1>
              <p className="text-gray-600 text-sm mt-1">text-4xl font-bold</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">Heading 2 (H2)</h2>
              <p className="text-gray-600 text-sm mt-1">text-3xl font-bold</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Heading 3 (H3)</h3>
              <p className="text-gray-600 text-sm mt-1">text-2xl font-semibold</p>
            </div>

            <div>
              <p className="text-base">
                Body text - Normal paragraph text for content
              </p>
              <p className="text-gray-600 text-sm mt-1">text-base</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">
                Small text - Secondary info, captions, labels
              </p>
              <p className="text-gray-600 text-sm mt-1">text-sm text-gray-600</p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            FAQ Accordion
          </h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <FAQAccordion 
              items={[
                {
                  question: 'What is the minimum order quantity for screen printing?',
                  answer: 'Our minimum order quantity for screen printing is 12 pieces. This allows us to set up the screens efficiently while still providing competitive pricing for smaller orders.',
                },
                {
                  question: 'How long does it take to complete a screen printing order?',
                  answer: 'Standard turnaround time is 7-14 business days from artwork approval. Rush orders are available for an additional fee and can be completed in as little as 3-5 business days.',
                },
                {
                  question: 'What file formats do you accept for artwork?',
                  answer: 'We accept vector files (AI, EPS, PDF) for best results. High-resolution raster images (PNG, PSD) at 300 DPI or higher are also acceptable.',
                },
                {
                  question: 'Do you offer free shipping?',
                  answer: 'Yes! We offer free shipping on all orders within the United States. Your order will be delivered right to your doorstep at no additional cost.',
                },
              ]}
            />
          </div>
        </section>

        {/* CTA Block Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            CTA Block (Call to Action)
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Primary Variant (Yellow)</h3>
              <div className="rounded-lg overflow-hidden">
                <CTABlock variant="primary" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Dark Variant</h3>
              <div className="rounded-lg overflow-hidden">
                <CTABlock variant="dark" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Custom Content</h3>
              <div className="rounded-lg overflow-hidden">
                <CTABlock 
                  title="GET YOUR FREE QUOTE TODAY"
                  subtitle="Our team is ready to help you create the perfect custom apparel for your business, event, or organization."
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Color System Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Color System
          </h2>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow">
            <ColorSystem />
          </div>
        </section>

        {/* Spacing Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Spacing Examples
          </h2>

          <div className="bg-white p-8 rounded-lg shadow space-y-6">
            <div>
              <p className="text-sm font-mono mb-2">Margin: p-2</p>
              <div className="p-2 bg-blue-100 border border-blue-300">Content</div>
            </div>

            <div>
              <p className="text-sm font-mono mb-2">Padding: p-4</p>
              <div className="p-4 bg-blue-100 border border-blue-300">Content</div>
            </div>

            <div>
              <p className="text-sm font-mono mb-2">Padding: p-8</p>
              <div className="p-8 bg-blue-100 border border-blue-300">Content</div>
            </div>
          </div>
        </section>

        {/* Shared Components */}
        <InteractiveComponentShow />

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Form Elements
          </h2>

          <div className="bg-white p-8 rounded-lg shadow space-y-6 max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Input Field
              </label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Textarea
              </label>
              <textarea
                placeholder="Enter your message..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-sm text-gray-700">Checkbox option</span>
              </label>
            </div>

            <div>
              <label className="flex items-center">
                <input type="radio" name="radio" className="w-4 h-4 mr-2" />
                <span className="text-sm text-gray-700">Radio option</span>
              </label>
            </div>
          </div>
        </section>

        {/* Component Folder Structure */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Component Folder Structure & Overview
          </h2>

          <div className="bg-white p-8 rounded-lg shadow space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">📁 shared/</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li><code className="bg-gray-100 px-2 py-1">Button.tsx</code> - Basic button component</li>
                <li><code className="bg-gray-100 px-2 py-1">PrimaryButton.tsx</code> - Primary CTA button</li>
                <li><code className="bg-gray-100 px-2 py-1">SecondaryButton.tsx</code> - Secondary button</li>
                <li><code className="bg-gray-100 px-2 py-1">PrimaryRounded.tsx</code> - Pill-shaped primary button</li>
                <li><code className="bg-gray-100 px-2 py-1">PrimaryRoundedOutline.tsx</code> - Pill-shaped outline button</li>
                <li><code className="bg-gray-100 px-2 py-1">PrimaryRoundedIcon.tsx</code> - Pill button with icon support</li>
                <li><code className="bg-gray-100 px-2 py-1">PrimaryRoundedOutlineIcon.tsx</code> - Pill outline with icon</li>
                <li><code className="bg-gray-100 px-2 py-1">SearchInput.tsx</code> - Search field</li>
                <li><code className="bg-gray-100 px-2 py-1">Navigation/</code> - Main navigation bar</li>
                <li><code className="bg-gray-100 px-2 py-1">Footer/</code> - Footer component</li>
                <li><code className="bg-gray-100 px-2 py-1">RequestAQuoteModal/</code> - Complex quote modal</li>
                <li><code className="bg-gray-100 px-2 py-1">CardCarousel/</code> - Swiper-based carousel</li>
                <li><code className="bg-gray-100 px-2 py-1">Pagination/</code> - Page numbers</li>
                <li><code className="bg-gray-100 px-2 py-1">LoadingModal.tsx</code> - Loading spinner</li>
                <li><code className="bg-gray-100 px-2 py-1">ResponsiveImage.tsx</code> - Next Image wrapper</li>
                <li><code className="bg-gray-100 px-2 py-1">icons/</code> - Reusable icon components</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">📁 main/ (Homepage Sections)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li><code className="bg-gray-100 px-2 py-1">FirstSection</code> - Hero section</li>
                <li><code className="bg-gray-100 px-2 py-1">SecondSection</code> - Featured products</li>
                <li><code className="bg-gray-100 px-2 py-1">ThirdSection</code> - Services showcase</li>
                <li><code className="bg-gray-100 px-2 py-1">FourthSection</code> - Call to action</li>
                <li><code className="bg-gray-100 px-2 py-1">FifthSection</code> - Testimonials/Reviews</li>
                <li><code className="bg-gray-100 px-2 py-1">SixthSection</code> - Past projects gallery</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">📁 products/</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li><code className="bg-gray-100 px-2 py-1">ProductCard/</code> - Individual product listing</li>
                <li><code className="bg-gray-100 px-2 py-1">ProductPageBody/</code> - Filter sidebar, search</li>
                <li><code className="bg-gray-100 px-2 py-1">ProductViewSection/</code> - Product detail view</li>
                <li><code className="bg-gray-100 px-2 py-1">ProductImageSection/</code> - Image gallery, color selector</li>
                <li><code className="bg-gray-100 px-2 py-1">CalculatePriceSection/</code> - Dynamic pricing</li>
                <li><code className="bg-gray-100 px-2 py-1">SubcategoryGrid/</code> - Category browsing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">📁 services/</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li><code className="bg-gray-100 px-2 py-1">screen-printing/</code> - Screen printing pages</li>
                <li><code className="bg-gray-100 px-2 py-1">embroidery/</code> - Embroidery pages</li>
                <li><code className="bg-gray-100 px-2 py-1">direct-to-garment-printing/</code> - DTG pages</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">📁 admin/</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li><code className="bg-gray-100 px-2 py-1">products/</code> - Admin product management</li>
                <li><code className="bg-gray-100 px-2 py-1">categories/</code> - Category admin</li>
                <li><code className="bg-gray-100 px-2 py-1">mainCategories/</code> - Main category admin</li>
                <li><code className="bg-gray-100 px-2 py-1">AdminProductFileUploader/</code> - File upload</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">📁 blogs/ & designer/</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li><code className="bg-gray-100 px-2 py-1">blogs/</code> - Blog listing & detail</li>
                <li><code className="bg-gray-100 px-2 py-1">designer/</code> - T-shirt design tool (Tiptap editor)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cards / Boxes */}
        <section>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
            Card Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-2">Card #{i}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  This is a card component with hover effect
                </p>
                <PrimaryButton className="w-full">Action</PrimaryButton>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
