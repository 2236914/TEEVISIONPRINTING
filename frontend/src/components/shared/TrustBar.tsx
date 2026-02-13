'use client';

import React from 'react';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

interface TrustStat {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

interface TrustBarProps {
  stats?: TrustStat[];
}

const DEFAULT_STATS: TrustStat[] = [
  { 
    value: '10 Years', 
    label: 'IN THE CUSTOM',
    sublabel: 'APPAREL INDUSTRY'
  },
  { 
    value: '7-14 Days', 
    label: 'TURNAROUND FOR',
    sublabel: 'BULK ORDERS'
  },
  { 
    value: '4.9', 
    label: 'STAR RATING IN',
    sublabel: 'GOOGLE REVIEWS',
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FFC107] inline-block ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  },
];

const TrustBar = ({ stats = DEFAULT_STATS }: TrustBarProps) => {
  return (
    <section className="w-full bg-[#2a2a2a] py-3 md:py-6">
      <div className="max-w-5xl mx-auto px-2 md:px-4">
        {/* Mobile: Single row, compact */}
        <div className="flex items-center justify-center gap-4 md:gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              {/* Value with icon */}
              <div className={`${MaisonNeue} text-[#FFC107] text-base md:text-3xl font-bold flex items-center`}>
                {stat.value}
                {stat.icon}
              </div>
              {/* Labels - stacked, smaller on mobile */}
              <p className={`${MaisonNeue} text-white text-[8px] md:text-xs uppercase tracking-wide leading-tight`}>
                {stat.label}
              </p>
              {stat.sublabel && (
                <p className={`${MaisonNeue} text-white text-[8px] md:text-xs uppercase tracking-wide leading-tight`}>
                  {stat.sublabel}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
