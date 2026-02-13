// components/products/ProductListingBody/ProductListingBody.tsx
'use client';

import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import ProductCard from '@/components/products/ProductCard/ProductCard';
import type { Brand, Category, Fit, MainCategory, ProductItemOnList } from '@/utilities/types/shared.types';

type PropTypes = {
  allMainCategories: Array<MainCategory>;
  brands: Array<Brand>;
  fits: Array<Fit>;
  hasMore: boolean;
  initialBrandFilter: string[];
  initialFitFilter: string[];
  initialSearchQuery: string;
  mainCategory: MainCategory;
  products: Array<ProductItemOnList>;
  subcategories: Array<Category>;
  subcategory: Category;
};

// Memoized Filter Section Component
const FilterSection = memo<{
  getItemCount: (slug: string) => number;
  items: Array<{ id: number; name: string; slug: string }>;
  onClearAll: () => void;
  onToggle: (slug: string) => void;
  selectedItems: string[];
  title: string;
  defaultOpen?: boolean;
}>(({ title, items, selectedItems, onToggle, getItemCount, onClearAll, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Only show items that have products available
  const availableItems = useMemo(() => {
    return items.filter(item => getItemCount(item.slug) > 0);
  }, [items, getItemCount]);

  const availableCount = availableItems.length;

  if (items.length === 0 || availableCount === 0) return null;

  return (
    <div className="border-t border-gray-200 pt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-xs sm:text-sm font-bold text-gray-900 py-2 hover:text-gray-700 transition-colors touch-manipulation"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2">
          {title}
          <span className="text-xs font-normal text-gray-500">
            ({availableCount})
          </span>
        </span>
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="space-y-1.5 max-h-64 overflow-y-auto overscroll-contain">
          {availableItems.map((item) => {
            const count = getItemCount(item.slug);
            const isChecked = selectedItems.includes(item.slug);
            
            return (
              <label
                key={item.id}
                className="flex items-center gap-2 p-2 rounded-md transition-colors cursor-pointer hover:bg-gray-50 active:bg-gray-100 touch-manipulation"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggle(item.slug)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm text-gray-700 flex-1 min-w-0 truncate">
                  {item.name}
                </span>
                <span className="text-xs text-gray-500 flex-shrink-0">({count})</span>
              </label>
            );
          })}
        </div>
        {selectedItems.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs text-blue-600 hover:text-blue-800 mt-3 font-medium touch-manipulation"
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
});

FilterSection.displayName = 'FilterSection';

const ProductListingBody: React.FC<PropTypes> = ({
  allMainCategories,
  brands,
  fits,
  mainCategory,
  products,
  subcategories,
  subcategory,
  initialBrandFilter,
  initialFitFilter,
  initialSearchQuery,
  hasMore,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  
  const [showFilters, setShowFilters] = useState(false);
  const [loadingSubcategory, setLoadingSubcategory] = useState<string | null>(null);
  
  // Initialize state from URL params ONLY on first render
  // Using lazy initialization to prevent props from resetting state on re-renders
  const [selectedBrands, setSelectedBrands] = useState<string[]>(() => initialBrandFilter);
  const [selectedFits, setSelectedFits] = useState<string[]>(() => initialFitFilter);
  const [searchQuery, setSearchQuery] = useState<string>(() => initialSearchQuery);

  // Prefetch all subcategory routes on mount for instant navigation
  useEffect(() => {
    subcategories.forEach(subcat => {
      router.prefetch(`/products/category/${mainCategory.slug}/${subcat.slug}`);
    });
  }, [subcategories, mainCategory.slug, router]);

  // Helper function to update URL (doesn't trigger re-render)
  const updateURLParams = useCallback((brands: string[], fits: string[], search: string) => {
    const params = new URLSearchParams();
    
    if (brands.length > 0) {
      params.set('brands', brands.join(','));
    }
    
    if (fits.length > 0) {
      params.set('fits', fits.join(','));
    }
    
    if (search.trim()) {
      params.set('search', search);
    }

    const queryString = params.toString();
    const newUrl = `${pathname}${queryString ? `?${queryString}` : ''}`;
    
    // Use replaceState to update URL without triggering navigation
    window.history.replaceState({}, '', newUrl);
  }, [pathname]);

  // CLIENT-SIDE FILTERING: Apply all filters to products
  const displayedProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => 
        selectedBrands.includes(product.brandSlug)
      );
    }
    
    // Filter by selected fits (product must have at least one of the selected fits)
    if (selectedFits.length > 0) {
      filtered = filtered.filter(product => {
        const rawProduct = product as any;
        const fitSlugs = rawProduct.fitSlugs || [];
        return selectedFits.some(selectedFit => fitSlugs.includes(selectedFit));
      });
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.content?.toLowerCase().includes(query) ||
        product.name.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [products, selectedBrands, selectedFits, searchQuery]);

  // Calculate BRAND counts: How many products per brand given current filters (excluding brand filter itself)
  const brandProductCounts = useMemo(() => {
    const counts = new Map<string, number>();
    
    let productsForCounting = products;

    // Apply FIT filter (not brand filter - we want to see all brands)
    if (selectedFits.length > 0) {
      productsForCounting = productsForCounting.filter(product => {
        const rawProduct = product as any;
        const fitSlugs = rawProduct.fitSlugs || [];
        return selectedFits.some(selectedFit => fitSlugs.includes(selectedFit));
      });
    }

    // Apply SEARCH filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      productsForCounting = productsForCounting.filter(product => 
        product.content?.toLowerCase().includes(query) ||
        product.name.toLowerCase().includes(query)
      );
    }

    // Count products per brand
    productsForCounting.forEach(product => {
      counts.set(product.brandSlug, (counts.get(product.brandSlug) || 0) + 1);
    });

    return counts;
  }, [products, selectedFits, searchQuery]);

  // Calculate FIT counts: How many products per fit given current filters (excluding fit filter itself)
  const fitProductCounts = useMemo(() => {
    const counts = new Map<string, number>();
    
    let productsForCounting = products;

    // Apply BRAND filter (not fit filter - we want to see all fits)
    if (selectedBrands.length > 0) {
      productsForCounting = productsForCounting.filter(product => 
        selectedBrands.includes(product.brandSlug)
      );
    }

    // Apply SEARCH filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      productsForCounting = productsForCounting.filter(product => 
        product.content?.toLowerCase().includes(query) ||
        product.name.toLowerCase().includes(query)
      );
    }

    // Count products per fit
    productsForCounting.forEach(product => {
      const rawProduct = product as any;
      const fitSlugs = rawProduct.fitSlugs || [];
      
      if (fitSlugs.length > 0) {
        fitSlugs.forEach((slug: string) => {
          if (slug) {
            counts.set(slug, (counts.get(slug) || 0) + 1);
          }
        });
      }
    });

    return counts;
  }, [products, selectedBrands, searchQuery]);

  // Toggle brand filter - state update is instant, URL updates for sharing
  const toggleBrand = useCallback((brandSlug: string) => {
    setSelectedBrands(prev => {
      const newBrands = prev.includes(brandSlug)
        ? prev.filter(slug => slug !== brandSlug)
        : [...prev, brandSlug];
      
      // Update URL without triggering navigation
      updateURLParams(newBrands, selectedFits, searchQuery);
      
      return newBrands;
    });
  }, [selectedFits, searchQuery, updateURLParams]);

  // Toggle fit filter - state update is instant, URL updates for sharing
  const toggleFit = useCallback((fitSlug: string) => {
    setSelectedFits(prev => {
      const newFits = prev.includes(fitSlug)
        ? prev.filter(slug => slug !== fitSlug)
        : [...prev, fitSlug];
      
      // Update URL without triggering navigation
      updateURLParams(selectedBrands, newFits, searchQuery);
      
      return newFits;
    });
  }, [selectedBrands, searchQuery, updateURLParams]);

  // Clear all brand filters
  const clearBrands = useCallback(() => {
    setSelectedBrands([]);
    updateURLParams([], selectedFits, searchQuery);
  }, [selectedFits, searchQuery, updateURLParams]);
  
  // Clear all fit filters
  const clearFits = useCallback(() => {
    setSelectedFits([]);
    updateURLParams(selectedBrands, [], searchQuery);
  }, [selectedBrands, searchQuery, updateURLParams]);

  // Get product count for a specific brand
  const getBrandCount = useCallback((slug: string) => 
    brandProductCounts.get(slug) || 0, 
    [brandProductCounts]
  );

  // Get product count for a specific fit
  const getFitCount = useCallback((slug: string) => 
    fitProductCounts.get(slug) || 0, 
    [fitProductCounts]
  );

  // Search with instant update
  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    updateURLParams(selectedBrands, selectedFits, value);
  }, [selectedBrands, selectedFits, updateURLParams]);

  const handleMainCategoryChange = useCallback((slug: string) => {
    window.location.href = `/products/category/${slug}`;
  }, []);

  const handleSubcategoryChange = useCallback((slug: string) => {
    setLoadingSubcategory(slug);
    router.push(`/products/category/${mainCategory.slug}/${slug}`);
  }, [mainCategory.slug, router]);

  // Prefetch on hover for faster navigation
  const handleSubcategoryHover = useCallback((slug: string) => {
    router.prefetch(`/products/category/${mainCategory.slug}/${slug}`);
  }, [mainCategory.slug, router]);

  const toggleFilters = useCallback(() => {
    setShowFilters(prev => !prev);
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Main Categories Navigation */}
      <div className="bg-white border-b border-gray-200 mt-2 sm:mt-4 sticky top-0 z-10">
        <div className="container mx-auto px-3 sm:px-4">
          {/* Mobile Dropdown */}
          <div className="block lg:hidden py-2">
            <select
              value={mainCategory.slug}
              onChange={(event) => handleMainCategoryChange(event.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg font-medium text-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
              style={{ 
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23374151\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.25rem 1.25rem',
                paddingRight: '2.5rem'
              }}
            >
              {allMainCategories.map((mainCat) => (
                <option key={mainCat.id} value={mainCat.slug}>
                  {mainCat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide">
            {allMainCategories.map((mainCat) => {
              const isActive = mainCat.id === mainCategory.id;
              
              return (
                <Link
                  key={mainCat.id}
                  href={`/products/category/${mainCat.slug}`}
                  prefetch={true}
                  className={`
                    px-4 xl:px-6 py-3 xl:py-4 text-sm font-medium whitespace-nowrap
                    transition-colors duration-200 
                    ${isActive
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900' 
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {mainCat.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Subcategory Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[51px] sm:top-[59px] lg:top-[55px] z-10">
        <div className="container mx-auto px-3 sm:px-4">
          {/* Mobile Dropdown */}
          <div className="block lg:hidden py-2">
            <select
              value={subcategory.slug}
              onChange={(event) => handleSubcategoryChange(event.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg text-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
              style={{ 
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23374151\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.25rem 1.25rem',
                paddingRight: '2.5rem'
              }}
            >
              {subcategories.map((subcat) => (
                <option key={subcat.id} value={subcat.slug}>
                  {subcat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide py-2" role="navigation">
            {subcategories.map((subcat) => {
              const isActive = subcat.slug === subcategory.slug;
              const isLoading = loadingSubcategory === subcat.slug;
              
              return (
                <Link
                  key={subcat.id}
                  href={`/products/category/${mainCategory.slug}/${subcat.slug}`}
                  prefetch={true}
                  onClick={() => setLoadingSubcategory(subcat.slug)}
                  onMouseEnter={() => handleSubcategoryHover(subcat.slug)}
                  onTouchStart={() => handleSubcategoryHover(subcat.slug)}
                  className={`
                    px-3 xl:px-4 py-2 text-sm whitespace-nowrap rounded-md
                    transition-colors duration-200 relative
                    ${isActive 
                      ? 'bg-blue-600 text-[#efc302]' 
                      : 'text-gray-600 hover:bg-gray-200'
                    }
                    ${isLoading ? 'opacity-70' : ''}
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {subcat.name}
                  {isLoading && !isActive && (
                    <span className="ml-2 inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={toggleFilters}
              className="lg:hidden w-full mb-3 sm:mb-4 px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md transition-shadow touch-manipulation"
              aria-expanded={showFilters}
            >
              <span className="font-medium text-sm sm:text-base">Filters</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`bg-white rounded-lg border border-gray-200 p-3 sm:p-4 shadow-sm ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Current Category */}
              <div className="pb-4 border-b border-gray-200">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {subcategory.name}
                </h3>
                {subcategory.description && (
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                    {subcategory.description}
                  </p>
                )}
              </div>

              {/* Brand Filter - Only shows brands with available products */}
              <FilterSection
                title="BRAND"
                items={brands}
                selectedItems={selectedBrands}
                onToggle={toggleBrand}
                getItemCount={getBrandCount}
                onClearAll={clearBrands}
              />

              {/* Fit Filter - Only shows fits with available products */}
              <FilterSection
                title="FIT"
                items={fits}
                selectedItems={selectedFits}
                onToggle={toggleFit}
                getItemCount={getFitCount}
                onClearAll={clearFits}
              />

              {/* Product Count */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <p className="text-xs sm:text-sm text-gray-600">
                  {displayedProducts.length} product{displayedProducts.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-full sm:w-auto">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {subcategory.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {displayedProducts.length} product{displayedProducts.length !== 1 ? 's' : ''}
                  </p>
                </div>

                {/* Search Bar */}
                <div className="w-full sm:w-auto sm:min-w-[200px] md:min-w-[250px]">
                  <input
                    type="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {displayedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                
                {hasMore && (
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                      Showing first 50 results. Use filters to narrow your search.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 sm:py-16 bg-white rounded-lg border border-gray-200">
                <svg 
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-400 mb-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-gray-500 text-base sm:text-lg mb-2 font-medium">No products found</p>
                <p className="text-gray-400 text-xs sm:text-sm px-4">
                  {searchQuery || selectedBrands.length > 0 || selectedFits.length > 0
                    ? 'Try adjusting your filters or search term' 
                    : 'Check back later for new products'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductListingBody);