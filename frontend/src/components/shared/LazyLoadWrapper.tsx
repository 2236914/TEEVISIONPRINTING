'use client';

import React, { type ReactNode,useEffect, useRef, useState } from 'react';

type LazyLoadWrapperProps = {
  children: ReactNode;
  placeholderHeight?: string;
};

/**
 * @param {object} props 
 * @param {ReactNode} props.children
 * @param {string} [props.placeholderHeight='400px']
 */
const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
  children,
  placeholderHeight = '400px',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const placeholderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window.IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (placeholderRef.current) {
            observer.unobserve(placeholderRef.current);
          }
        }
      },
      {
        rootMargin: '250px',
      }
    );

    // Capture the current ref value to use in cleanup
    const currentPlaceholder = placeholderRef.current;

    if (currentPlaceholder) {
      observer.observe(currentPlaceholder);
    }

    return () => {
      if (currentPlaceholder) {
        observer.unobserve(currentPlaceholder);
      }
    };
  }, []);

  if (isVisible) {
    return <>{children}</>;
  }

  return <div ref={placeholderRef} style={{ minHeight: placeholderHeight }} />;
};

export default LazyLoadWrapper;