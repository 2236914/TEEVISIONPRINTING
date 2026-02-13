'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

interface ProductCardV2Props {
  image: string;
  name: string;
  price: string;
  rating?: number;
  reviewCount?: number;
  href: string;
  onAddToCart?: () => void;
  alt?: string;
}

// Star Rating Component
const StarRating = ({ rating, count }: { rating: number; count?: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-3 h-3 md:w-4 md:h-4 ${index < Math.floor(rating) ? 'text-[#FFC107]' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    {count !== undefined && (
      <span className={`${MaisonNeue} text-xs text-gray-500 ml-1`}>({count})</span>
    )}
  </div>
);

// Cart Icon Button
const CartButton = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick?.();
    }}
    className="w-10 h-10 md:w-12 md:h-12 bg-[#FFC107] hover:bg-[#FFD54F] rounded-full flex items-center justify-center transition-colors shadow-md hover:shadow-lg"
    aria-label="Add to cart"
  >
    <svg 
      className="w-5 h-5 md:w-6 md:h-6 text-black" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
      />
    </svg>
  </button>
);

const ProductCardV2 = ({
  image,
  name,
  price,
  rating = 5,
  reviewCount,
  href,
  onAddToCart,
  alt,
}: ProductCardV2Props) => {
  return (
    <div className="group">
      <Link href={href} className="block">
        {/* Image Container */}
        <div className="relative w-full aspect-[3/4] mb-3 md:mb-4 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={alt || name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        
        {/* Product Info */}
        <div className="space-y-1 md:space-y-2">
          {/* Product Name */}
          <h3 className={`${MaisonNeue} font-bold text-xs md:text-sm text-black line-clamp-2 leading-tight`}>
            {name}
          </h3>
          
          {/* Price */}
          <p className={`${MaisonNeue} font-bold text-sm md:text-base text-black`}>
            {price}
          </p>
        </div>
      </Link>
      
      {/* Rating and Cart Button Row */}
      <div className="flex items-center justify-between mt-2">
        <StarRating rating={rating} count={reviewCount} />
        <CartButton onClick={onAddToCart} />
      </div>
    </div>
  );
};

export default ProductCardV2;
