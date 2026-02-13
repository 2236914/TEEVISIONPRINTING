'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

interface CategoryCardProps {
  image: string;
  title: string;
  href: string;
  alt?: string;
}

const CategoryCard = ({
  image,
  title,
  href,
  alt,
}: CategoryCardProps) => {
  return (
    <Link href={href} className="group block">
      <div className="flex flex-col items-center">
        {/* Image Container */}
        <div className="relative w-full aspect-square mb-3 md:mb-4 overflow-hidden">
          <Image
            src={image}
            alt={alt || title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>
        
        {/* Title with Arrow */}
        <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          <span className={`${MaisonNeue} font-bold text-xs md:text-sm uppercase tracking-wide text-black`}>
            {title}
          </span>
          <span className="text-black group-hover:translate-x-1 transition-transform duration-300">
            <svg 
              className="w-4 h-4 md:w-5 md:h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
