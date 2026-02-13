'use client';
import React from 'react';
import Image from 'next/image';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';

type PropTypes = {
  image: string;
  title: string;
  description: string;
  alt?: string;
  className?: string;
};

const FeatureCard: React.FC<PropTypes> = ({
  image,
  title,
  description,
  alt,
  className = '',
}) => {
  return (
    <div
      className={`
        relative
        rounded-[25px]
        overflow-hidden
        aspect-[4/5]
        group
        ${className}
      `}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={alt || title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
        <h3
          className={`
            ${Termina}
            text-white
            text-lg md:text-xl
            font-black
            uppercase
            tracking-wide
            mb-2
          `}
        >
          {title}
        </h3>
        <p
          className={`
            ${MaisonNeue}
            text-white/90
            text-xs md:text-sm
            leading-relaxed
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
