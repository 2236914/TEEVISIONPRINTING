'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type PropTypes = {
  image: string;
  alt: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

const ProductCard: React.FC<PropTypes> = ({
  image,
  alt,
  href,
  onClick,
  className = '',
}) => {
  const cardContent = (
    <div
      className={`
        relative
        rounded-[25px]
        overflow-hidden
        bg-background4
        aspect-[4/5]
        group
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {/* Product Image */}
      <Image
        src={image}
        alt={alt}
        fill
        className="object-contain object-center p-4 transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
    </div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
};

export default ProductCard;
