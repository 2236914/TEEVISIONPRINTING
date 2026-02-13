'use client';
import React, { ReactNode } from 'react';

type MarqueeItem = {
  icon?: ReactNode;
  label: string;
  href?: string;
};

type PropTypes = {
  items: MarqueeItem[];
  speed?: 'slow' | 'medium' | 'fast';
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  className?: string;
  itemClassName?: string;
  gap?: string;
};

const AutoScrollMarquee: React.FC<PropTypes> = ({
  items,
  speed = 'medium',
  pauseOnHover = true,
  direction = 'left',
  className = '',
  itemClassName = '',
  gap = 'gap-8 md:gap-12',
}) => {
  const speedDuration = {
    slow: '40s',
    medium: '25s',
    fast: '15s',
  };

  const animationDirection = direction === 'left' ? 'normal' : 'reverse';

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={`overflow-hidden bg-primaryT py-3 md:py-4 ${className}`}
    >
      <div
        className={`flex ${gap} animate-marquee whitespace-nowrap ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{
          animationDuration: speedDuration[speed],
          animationDirection: animationDirection,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className={`inline-flex items-center gap-2 md:gap-3 shrink-0 ${itemClassName}`}
          >
            {item.icon && (
              <span className="inline-flex items-center justify-center text-black">
                {item.icon}
              </span>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="text-black font-bold text-sm md:text-base hover:underline"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-black font-bold text-sm md:text-base">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollMarquee;
