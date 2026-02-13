'use client';

import React, { useState } from 'react';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  badge?: string;
  titleBlack?: string;
  titleYellow?: string;
  subtitle?: string;
  items: FAQItem[];
  defaultOpenIndex?: number;
}

const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
    isOpen ? 'bg-black' : 'bg-white border border-gray-300'
  }`}>
    <svg 
      className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 ${isOpen ? 'text-white rotate-45' : 'text-black'}`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  </div>
);

const FAQAccordion = ({
  badge = 'COMMON QUESTIONS',
  titleBlack = 'FREQUENTLY ASKED',
  titleYellow = 'QUESTIONS',
  subtitle = 'Got questions? Explore our Frequently Asked Questions to learn more about our services, products, and policies all in one place.',
  items,
  defaultOpenIndex = 0,
}: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className={`${MaisonNeue} inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFF8DC] rounded-full text-xs text-gray-700 uppercase tracking-wider`}>
            <span className="w-1.5 h-1.5 bg-[#FFC107] rounded-full"></span>
            {badge}
            <span className="w-1.5 h-1.5 bg-[#FFC107] rounded-full"></span>
          </span>
        </div>

        {/* Title */}
        <h2 className={`${Termina} text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4`}>
          <span className="text-black">{titleBlack} </span>
          <span className="text-[#FFC107]">{titleYellow}</span>
        </h2>

        {/* Subtitle */}
        <p className={`${MaisonNeue} text-center text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12`}>
          {subtitle}
        </p>

        {/* Accordion Items */}
        <div className="space-y-3 md:space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const isFirst = index === 0;
            
            return (
              <div
                key={index}
                className={`rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-white shadow-lg border-2 border-[#FFC107]' 
                    : isFirst || index === 1
                      ? 'bg-[#FFC107]'
                      : 'bg-[#FFC107]'
                }`}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full flex items-center justify-between p-4 md:p-6 text-left transition-colors ${
                    isOpen ? 'bg-white' : ''
                  }`}
                >
                  <span className={`${MaisonNeue} font-semibold text-sm md:text-base lg:text-lg text-black pr-4`}>
                    {item.question}
                  </span>
                  <PlusIcon isOpen={isOpen} />
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className={`${MaisonNeue} text-gray-600 text-sm md:text-base leading-relaxed`}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
