'use client';
import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type NavItem = {
  label: string;
  href: string;
  isActive?: boolean;
};

type PropTypes = {
  variant?: 'light' | 'dark';
  /** Use solid background instead of glassmorphism effect */
  solid?: boolean;
  logo?: ReactNode;
  navItems?: NavItem[];
  ctaButton?: ReactNode;
  showCart?: boolean;
  showSearch?: boolean;
  onCartClick?: () => void;
  onMenuClick?: () => void;
  onSearch?: (query: string) => void;
  searchPlaceholder?: string;
  className?: string;
};

// Cart Icon Component
const CartIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

// Search Icon Component
const SearchIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// Hamburger Menu Icon
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// Close Icon Component
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const GlassmorphismNavbar: React.FC<PropTypes> = ({
  variant = 'light',
  solid = false,
  logo,
  navItems = [],
  ctaButton,
  showCart = true,
  showSearch = true,
  onCartClick,
  onMenuClick,
  onSearch,
  searchPlaceholder = 'Search products...',
  className = '',
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isLight = variant === 'light';

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleMenuToggle = () => {
    if (onMenuClick) {
      onMenuClick();
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim());
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Desktop navbar classes
  const desktopBaseClasses = `
    ${MaisonNeue}
    hidden lg:flex
    w-full px-6 xl:px-8 py-3 xl:py-4
    ${solid ? '' : 'backdrop-blur-md border rounded-full'}
    items-center justify-between
    transition-all duration-300
    ${className}
  `;

  // Mobile/Tablet navbar classes
  const mobileBaseClasses = `
    ${MaisonNeue}
    flex lg:hidden
    w-full px-4 py-3
    ${isLight 
      ? 'bg-white border-b border-gray-200' 
      : solid 
        ? 'bg-black border-b border-gray-800' 
        : 'bg-black/50 backdrop-blur-md border-b border-white/10'}
    items-center justify-between
  `;

  // Desktop variant classes - solid vs glassmorphism
  const getDesktopVariantClasses = () => {
    if (solid) {
      return isLight
        ? 'bg-white text-black'
        : 'bg-black text-white';
    }
    return isLight
      ? 'bg-white/70 border-white/20 text-black shadow-lg'
      : 'bg-black/50 border-white/10 text-white shadow-lg';
  };

  const desktopVariantClasses = getDesktopVariantClasses();

  const navItemBaseClasses = isLight
    ? 'text-black/80 hover:text-black'
    : 'text-white/80 hover:text-white';

  const mobileIconColor = isLight ? 'text-black' : 'text-white';

  return (
    <>
      {/* Mobile/Tablet Navbar */}
      <nav className={mobileBaseClasses}>
        {/* Logo */}
        <div className="flex items-center shrink-0">
          {logo || (
            <Link href="/">
              <Image
                src="/main/logo.png"
                alt="Tee Vision Printing"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          )}
        </div>

        {/* Mobile Right Section: Search + Cart + Menu */}
        <div className="flex items-center gap-2">
          {showSearch && (
            <button
              onClick={handleSearchToggle}
              className={`p-2 ${mobileIconColor} hover:text-primaryT transition-colors`}
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          )}
          {showCart && (
            <button
              onClick={onCartClick}
              className={`p-2 ${mobileIconColor} hover:text-primaryT transition-colors`}
              aria-label="Cart"
            >
              <CartIcon />
            </button>
          )}
          <button
            onClick={handleMenuToggle}
            className={`p-2 ${mobileIconColor} hover:text-primaryT transition-colors`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Search Bar (slides down) */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isSearchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
        } ${isLight ? 'bg-white border-b border-gray-200' : 'bg-black/90 border-b border-white/10'}`}
      >
        <form onSubmit={handleSearchSubmit} className="px-4 py-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder={searchPlaceholder}
              className={`w-full pl-10 pr-4 py-2.5 rounded-full text-sm transition-colors ${
                isLight 
                  ? 'bg-gray-100 text-black placeholder-gray-500 focus:bg-gray-200' 
                  : 'bg-white/10 text-white placeholder-white/60 focus:bg-white/20'
              } focus:outline-none focus:ring-2 focus:ring-primaryT`}
              autoFocus={isSearchOpen}
            />
            <SearchIcon className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
              isLight ? 'text-gray-400' : 'text-white/60'
            }`} />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                  isLight ? 'text-gray-400 hover:text-gray-600' : 'text-white/60 hover:text-white'
                }`}
              >
                <CloseIcon />
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '56px' }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-72 max-w-[80vw] transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } ${isLight ? 'bg-white' : 'bg-[#1a1a1a]'} shadow-xl`}
        >
          {/* Menu Content */}
          <div className="flex flex-col h-full">
            {/* Nav Items */}
            <div className="flex-1 py-6 px-4 overflow-y-auto">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      item.isActive
                        ? isLight 
                          ? 'bg-[#FFC107]/20 text-black' 
                          : 'bg-[#FFC107]/20 text-white'
                        : isLight
                          ? 'text-gray-700 hover:bg-gray-100 hover:text-black'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {item.isActive && (
                      <span className="ml-2 w-1.5 h-1.5 inline-block bg-[#FFC107] rounded-full" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CTA Button at Bottom */}
            {ctaButton && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div onClick={() => setIsMobileMenuOpen(false)}>
                  {ctaButton}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Navbar (Glassmorphism) */}
      <nav className={`${desktopBaseClasses} ${desktopVariantClasses}`}>
        {/* Logo */}
        <div className="flex items-center shrink-0">
          {logo || (
            <Link href="/">
              <Image
                src="/main/logo.png"
                alt="Tee Vision Printing"
                width={140}
                height={46}
                className="h-10 xl:h-12 w-auto"
              />
            </Link>
          )}
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isHovered = hoveredItem === item.href;
            const isActive = item.isActive;
            const showUnderline = isHovered || isActive;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  ${navItemBaseClasses}
                  relative
                  text-sm xl:text-base font-medium
                  transition-colors
                  whitespace-nowrap
                  py-1
                `}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
                {/* Yellow Underline */}
                <span
                  className={`
                    absolute bottom-0 left-0 w-full h-0.5 bg-primaryT
                    transform origin-left
                    transition-transform duration-200 ease-out
                    ${showUnderline ? 'scale-x-100' : 'scale-x-0'}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          {ctaButton}
        </div>
      </nav>
    </>
  );
};

export default GlassmorphismNavbar;
