'use client';
import React from 'react';

import Termina from '@/utilities/fonts/Termina/Termina';

type WordConfig = {
  text: string;
  color?: 'black' | 'yellow';
};

type PropTypes = {
  /** Array of words with optional color configuration */
  words: (string | WordConfig)[];
  /** Base text size classes */
  className?: string;
  /** Center align the text */
  centered?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const MixedTitle: React.FC<PropTypes> = ({
  words,
  className = '',
  centered = false,
  size = 'lg',
}) => {
  const sizeClasses = {
    sm: 'text-lg md:text-xl lg:text-2xl',
    md: 'text-xl md:text-2xl lg:text-3xl',
    lg: 'text-2xl md:text-3xl lg:text-4xl',
    xl: 'text-3xl md:text-4xl lg:text-5xl',
  };

  const getColor = (word: string | WordConfig): 'black' | 'yellow' => {
    if (typeof word === 'string') return 'black';
    return word.color || 'black';
  };

  const getText = (word: string | WordConfig): string => {
    if (typeof word === 'string') return word;
    return word.text;
  };

  return (
    <h2
      className={`
        ${Termina}
        ${sizeClasses[size]}
        font-black
        uppercase
        tracking-tight
        leading-tight
        ${centered ? 'text-center' : ''}
        ${className}
      `}
    >
      {words.map((word, index) => {
        const color = getColor(word);
        const text = getText(word);
        const colorClass = color === 'yellow' ? 'text-primaryT' : 'text-black';

        return (
          <span key={index}>
            <span className={colorClass}>{text}</span>
            {index < words.length - 1 && ' '}
          </span>
        );
      })}
    </h2>
  );
};

export default MixedTitle;
