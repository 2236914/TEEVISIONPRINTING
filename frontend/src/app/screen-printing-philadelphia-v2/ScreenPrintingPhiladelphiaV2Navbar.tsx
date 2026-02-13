'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';

import GlassmorphismNavbar from '@/components/shared/GlassmorphismNavbar';
import TopBanner from '@/components/shared/TopBanner';
import PrimaryRoundedIcon from '@/components/shared/PrimaryRoundedIcon';

// Memoized Icons
const CartIcon = memo(() => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
));
CartIcon.displayName = 'CartIcon';

const SearchIcon = memo(() => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
));
SearchIcon.displayName = 'SearchIcon';

const CloseIcon = memo(() => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
));
CloseIcon.displayName = 'CloseIcon';

// Static data
const NAV_ITEMS = [
  { label: 'Custom T-Shirts', href: '/custom-t-shirt-printing-philadelphia' },
  { label: 'Sweats & Hoodies', href: '/custom-hoodies' },
  { label: 'Hats, Polo & More', href: '/custom-polo-shirts' },
  { label: 'Services', href: '/services' },
];

const POPULAR_SEARCHES = ['T-Shirts', 'Hoodies', 'Screen Printing', 'Custom Apparel', 'Bulk Orders'] as const;
const BANNER_HEIGHT = 44;

// Search Modal Component
const SearchModal = memo(({ 
  isOpen, 
  onClose, 
  searchQuery, 
  setSearchQuery, 
  onSubmit 
}: { 
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-start justify-center pt-20 md:pt-32">
      <div className="w-full max-w-2xl px-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-primaryT transition-colors p-2"
          aria-label="Close search"
          type="button"
        >
          <CloseIcon />
        </button>
        
        <form onSubmit={onSubmit}>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, services..."
              className="w-full bg-transparent border-b-2 border-white/30 focus:border-primaryT text-white text-xl md:text-3xl py-4 px-2 outline-none placeholder:text-white/50 transition-colors"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-primaryT transition-colors p-2"
              aria-label="Submit search"
            >
              <SearchIcon />
            </button>
          </div>
        </form>
        
        <div className="mt-8">
          <p className="text-white/60 text-sm mb-4">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  router.push(`/products?search=${encodeURIComponent(term)}`);
                  onClose();
                }}
                className="px-4 py-2 border border-white/30 text-white hover:border-primaryT hover:text-primaryT rounded-full text-sm transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
SearchModal.displayName = 'SearchModal';

// Navbar Component with all interactive elements
const ScreenPrintingPhiladelphiaV2Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Mark as mounted after hydration to prevent mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll to hide banner - only after mounted
  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  // Search modal escape key and body scroll lock
  useEffect(() => {
    if (!isSearchOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  const handleBannerClose = useCallback(() => {
    setIsBannerVisible(false);
  }, []);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed) {
      router.push(`/products?search=${encodeURIComponent(trimmed)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, router]);

  const handleSearchClose = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const handleSearchOpen = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const showBanner = isBannerVisible && !isScrolled;

  return (
    <>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={handleSearchClose}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSubmit={handleSearchSubmit}
      />

      {/* Floating Banner */}
      <div 
        className="fixed top-0 left-0 right-0 z-[60] transition-transform duration-300"
        style={{ transform: showBanner ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        <TopBanner 
          phoneNumber="123-456-789" 
          text="Talk with expert" 
          variant="dark"
          closable
          onClose={handleBannerClose}
        />
      </div>

      {/* Floating Navbar */}
      <div 
        className="fixed left-0 right-0 z-[59] transition-all duration-300"
        style={{ top: showBanner ? BANNER_HEIGHT : 0 }}
      >
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <GlassmorphismNavbar
              variant="dark"
              solid
              navItems={NAV_ITEMS}
              showCart
              onCartClick={() => console.log('Cart clicked')}
              onMenuClick={() => console.log('Menu clicked')}
              ctaButton={
                <div className="flex items-center gap-3">
                  <button 
                    className="text-white hover:text-primaryT transition-colors p-2"
                    onClick={handleSearchOpen}
                    aria-label="Open search"
                    type="button"
                  >
                    <SearchIcon />
                  </button>
                  <PrimaryRoundedIcon icon={<CartIcon />}>
                    Order Now
                  </PrimaryRoundedIcon>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenPrintingPhiladelphiaV2Navbar;
