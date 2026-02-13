'use client';

import React, { useState } from 'react';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  variant?: 'default' | 'outlined' | 'filled';
}

const SearchBar = ({
  placeholder = 'Search...',
  onSearch,
  value,
  onChange,
  className = '',
  variant = 'default',
}: SearchBarProps) => {
  const [internalValue, setInternalValue] = useState('');
  
  const searchValue = value !== undefined ? value : internalValue;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const handleClear = () => {
    if (onChange) {
      onChange('');
    } else {
      setInternalValue('');
    }
  };

  const variantStyles = {
    default: 'bg-white border border-gray-300 focus-within:border-[#FFC107]',
    outlined: 'bg-transparent border-2 border-gray-400 focus-within:border-[#FFC107]',
    filled: 'bg-gray-100 border border-transparent focus-within:border-[#FFC107] focus-within:bg-white',
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className={`flex items-center rounded-full px-3 md:px-4 py-2 md:py-3 transition-colors ${variantStyles[variant]}`}>
        {/* Search Icon */}
        <svg 
          className="w-4 h-4 md:w-5 md:h-5 text-gray-400 mr-2 md:mr-3 flex-shrink-0" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
        
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder={placeholder}
          className={`${MaisonNeue} flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 text-sm md:text-base min-w-0`}
        />
        
        {/* Clear Button */}
        {searchValue && (
          <button
            type="button"
            onClick={handleClear}
            className="ml-1 md:ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        
        {/* Search Button */}
        <button
          type="submit"
          className="ml-1 md:ml-2 bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-1.5 md:py-2 px-3 md:px-4 rounded-full transition-colors text-xs md:text-sm flex-shrink-0"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
