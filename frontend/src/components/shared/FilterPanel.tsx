'use client';

import React, { useState } from 'react';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';
import SearchBar from './SearchBar';
import FilterDropdown from './FilterDropdown';
import FilterChips from './FilterChips';

interface FilterPanelProps {
  onSearch?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
  onSortChange?: (sort: string) => void;
  onTagsChange?: (tags: string[]) => void;
  showSearch?: boolean;
  showCategoryFilter?: boolean;
  showSortFilter?: boolean;
  showTagsFilter?: boolean;
  categories?: { value: string; label: string }[];
  sortOptions?: { value: string; label: string }[];
  tags?: { id: string; label: string }[];
  className?: string;
}

const DEFAULT_CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 't-shirts', label: 'T-Shirts' },
  { value: 'sweatshirts', label: 'Sweatshirts' },
  { value: 'hoodies', label: 'Hoodies' },
  { value: 'polos', label: 'Polos' },
  { value: 'long-sleeve', label: 'Long Sleeve' },
];

const DEFAULT_SORT_OPTIONS = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const DEFAULT_TAGS = [
  { id: 'screen-printing', label: 'Screen Printing' },
  { id: 'embroidery', label: 'Embroidery' },
  { id: 'dtg', label: 'DTG' },
  { id: 'dtf', label: 'DTF' },
  { id: 'bulk-order', label: 'Bulk Order' },
];

const FilterPanel = ({
  onSearch,
  onCategoryChange,
  onSortChange,
  onTagsChange,
  showSearch = true,
  showCategoryFilter = true,
  showSortFilter = true,
  showTagsFilter = true,
  categories = DEFAULT_CATEGORIES,
  sortOptions = DEFAULT_SORT_OPTIONS,
  tags = DEFAULT_TAGS,
  className = '',
}: FilterPanelProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('popular');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    onCategoryChange?.(value);
  };

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
    onSortChange?.(value);
  };

  const handleTagsChange = (tagIds: string[]) => {
    setSelectedTags(tagIds);
    onTagsChange?.(tagIds);
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSort('popular');
    setSelectedTags([]);
    onCategoryChange?.('all');
    onSortChange?.('popular');
    onTagsChange?.([]);
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedSort !== 'popular' || selectedTags.length > 0;

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 md:p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className={`${Termina} text-lg md:text-xl font-bold`}>Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className={`${MaisonNeue} text-xs md:text-sm text-[#FFC107] hover:underline font-medium`}
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-4 md:space-y-6">
        {/* Search Bar */}
        {showSearch && (
          <div>
            <SearchBar 
              placeholder="Search products..." 
              onSearch={onSearch}
              variant="filled"
            />
          </div>
        )}

        {/* Category and Sort Filters */}
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          {showCategoryFilter && (
            <FilterDropdown
              label="Category"
              options={categories}
              value={selectedCategory}
              onChange={handleCategoryChange}
              placeholder="Select category"
            />
          )}

          {showSortFilter && (
            <FilterDropdown
              label="Sort By"
              options={sortOptions}
              value={selectedSort}
              onChange={handleSortChange}
              placeholder="Sort by"
            />
          )}
        </div>

        {/* Tags Filter */}
        {showTagsFilter && (
          <div>
            <label className={`${MaisonNeue} block text-xs md:text-sm font-bold text-gray-700 mb-1.5 md:mb-2`}>
              Print Type
            </label>
            <FilterChips
              chips={tags}
              selectedChips={selectedTags}
              onChange={handleTagsChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;
