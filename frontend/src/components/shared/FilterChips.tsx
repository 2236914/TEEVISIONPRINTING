'use client';

import React from 'react';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

interface FilterChip {
  id: string;
  label: string;
}

interface FilterChipsProps {
  chips: FilterChip[];
  selectedChips?: string[];
  onChange?: (selectedIds: string[]) => void;
  multiSelect?: boolean;
  className?: string;
}

const FilterChips = ({
  chips,
  selectedChips = [],
  onChange,
  multiSelect = true,
  className = '',
}: FilterChipsProps) => {
  const handleChipClick = (chipId: string) => {
    if (!onChange) return;

    if (multiSelect) {
      if (selectedChips.includes(chipId)) {
        onChange(selectedChips.filter(id => id !== chipId));
      } else {
        onChange([...selectedChips, chipId]);
      }
    } else {
      onChange(selectedChips.includes(chipId) ? [] : [chipId]);
    }
  };

  return (
    <div className={`flex flex-wrap gap-1.5 md:gap-2 ${className}`}>
      {chips.map((chip) => {
        const isSelected = selectedChips.includes(chip.id);
        return (
          <button
            key={chip.id}
            type="button"
            onClick={() => handleChipClick(chip.id)}
            className={`${MaisonNeue} px-2.5 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
              isSelected
                ? 'bg-[#FFC107] text-black border-2 border-[#FFC107]'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#FFC107]'
            }`}
          >
            {chip.label}
            {isSelected && (
              <svg className="w-3 h-3 md:w-4 md:h-4 inline-block ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default FilterChips;
