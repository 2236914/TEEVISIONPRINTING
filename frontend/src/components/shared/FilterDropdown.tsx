'use client';

import React, { useState, useRef, useEffect } from 'react';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const FilterDropdown = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select...',
  className = '',
}: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentValue = value !== undefined ? value : selectedValue;
  const selectedOption = options.find(opt => opt.value === currentValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    } else {
      setSelectedValue(optionValue);
    }
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <label className={`${MaisonNeue} block text-xs md:text-sm font-bold text-gray-700 mb-1`}>
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`${MaisonNeue} w-full flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-white border border-gray-300 rounded-lg hover:border-[#FFC107] focus:border-[#FFC107] focus:outline-none transition-colors text-sm md:text-base`}
      >
        <span className={`truncate ${selectedOption ? 'text-gray-900' : 'text-gray-400'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 md:w-5 md:h-5 text-gray-400 transition-transform flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 md:max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`${MaisonNeue} w-full text-left px-3 md:px-4 py-2 md:py-3 hover:bg-[#FFC107] hover:text-black transition-colors text-sm md:text-base ${
                currentValue === option.value ? 'bg-[#FFC107]/20 font-bold' : ''
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
