'use client';
import React from 'react';
import Image from 'next/image';

type PropTypes = {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
  className?: string;
  onClick?: () => void;
};

const ImageCard: React.FC<PropTypes> = ({
  src,
  alt,
  aspectRatio = 'square',
  className = '',
  onClick,
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  };

  return (
    <div
      className={`
        relative
        rounded-[25px]
        overflow-hidden
        ${aspectClasses[aspectRatio]}
        ${onClick ? 'cursor-pointer' : ''}
        group
        ${className}
      `}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ImageCard;
