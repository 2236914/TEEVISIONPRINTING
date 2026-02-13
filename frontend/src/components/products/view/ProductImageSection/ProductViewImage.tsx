/* eslint-disable no-restricted-imports */
'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './ProductViewImage.css';

import { useProductView } from '@/contexts/ProductViewContext';
import LeftArrow from '@/utilities/SVGs/LeftArrow';
import RightArrow from '@/utilities/SVGs/RightArrow';
import type { Color } from '@/utilities/types/shared.types';

import SlideImage from '@/components/products/view/ProductImageSection/components/SlideImage';

type PropTypes = {
  productColors: Array<Color>;
};

// Thumbnail component - memoized to prevent re-renders
const ThumbnailButton = React.memo(({ 
  currentSlide,
  idx,
  image,
  isLoaded,
  isPriority,
  onImageClicked,
  onLoad,
}: {
  currentSlide: number;
  idx: number;
  image: string;
  isLoaded: boolean;
  isPriority: boolean;
  onImageClicked: (idx: number) => void;
  onLoad: (idx: number) => void;
}) => (
  <button
    className={`${currentSlide === idx ? 'border-2' : 'border'} p-[0.2rem] border-primaryMinimalist rounded-md relative transition-all duration-200 hover:border-2`}
    onClick={() => onImageClicked(idx)}
    type="button"
    aria-label={`View image ${idx + 1}`}
  >
    {!isLoaded && (
      <div className="skeleton w-full h-full absolute top-0 left-0 rounded-md z-10" />
    )}
    <Image
      src={image}
      width={130}
      height={130}
      alt={`Product thumbnail ${idx + 1}`}
      className={`h-full w-full object-cover transition-opacity duration-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      loading={isPriority ? 'eager' : 'lazy'}
      priority={isPriority}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      onLoad={() => onLoad(idx)}
      onError={() => onLoad(idx)}
      quality={60}
      sizes="130px"
    />
  </button>
));

ThumbnailButton.displayName = 'ThumbnailButton';

const ProductViewImage: React.FC<PropTypes> = ({ productColors }) => {
  const [productImages, setProductImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { currentColor } = useProductView();
  const sliderRef = useRef<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  
  // Track loaded state per image index
  const [loadedThumbs, setLoadedThumbs] = useState<Set<number>>(new Set());
  const [loadedZoom, setLoadedZoom] = useState(false);

  // Memoize visible thumbnails (only first 6)
  const visibleThumbnails = useMemo(() => productImages.slice(0, 6), [productImages]);
  const remainingCount = useMemo(() => Math.max(0, productImages.length - 6), [productImages.length]);

  // Update swiper position when slide changes
  useEffect(() => {
    if (sliderRef.current?.swiper) {
      sliderRef.current.swiper.slideTo(currentSlide, 500, false);
    }
  }, [currentSlide]);

  // Update images when color changes
  useEffect(() => {
    const images = productColors.find(
      (color) => color.hexCode === currentColor.hexCode
    )?.productColorImages;
    
    if (images) {
      const imageUrls = images.map((image) => image.imageUrl);
      setProductImages(imageUrls);
      setLoadedThumbs(new Set());
      setCurrentSlide(0);
      setLoadedZoom(false);
    } else {
      setProductImages([]);
    }
  }, [currentColor.hexCode, productColors, currentColor]);

  // Memoize callbacks to prevent re-renders
  const onImageClicked = useCallback((idx: number) => {
    setCurrentSlide(idx);
  }, []);

  const onRightArrowClicked = useCallback(() => {
    setCurrentSlide((prev) => 
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  }, [productImages.length]);

  const onLeftArrowClicked = useCallback(() => {
    setCurrentSlide((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  }, [productImages.length]);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback((imageSrc: string) => {
    setIsHovering(true);
    setCurrentImage(imageSrc);
    setLoadedZoom(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setCurrentImage('');
  }, []);

  const handleThumbLoad = useCallback((index: number) => {
    setLoadedThumbs(prev => new Set(prev).add(index));
  }, []);

  const handleZoomLoad = useCallback(() => {
    setLoadedZoom(true);
  }, []);

  // Memoize navigation buttons visibility
  const showNavigation = useMemo(() => productImages.length > 1, [productImages.length]);

  // Early return if no images
  if (productImages.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-[500px] bg-gray-100 rounded-lg">
        <p className="text-gray-500">No images available for this color</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center xl:justify-start xl:items-start gap-4">
      {/* Thumbnails - Desktop Only */}
      <nav 
        className="hidden xl:flex flex-col gap-2 w-[4rem]" 
        aria-label="Product thumbnails"
      >
        {visibleThumbnails.map((image, idx) => (
          <ThumbnailButton
            key={idx}
            currentSlide={currentSlide}
            idx={idx}
            image={image}
            isLoaded={loadedThumbs.has(idx)}
            isPriority={idx === 0}
            onImageClicked={onImageClicked}
            onLoad={handleThumbLoad}
          />
        ))}
        {remainingCount > 0 && (
          <div className="text-xs text-center text-gray-500 font-medium">
            +{remainingCount} more
          </div>
        )}
      </nav>

      {/* Main Carousel */}
      <div className="product-view-carousel relative">
        <Swiper 
          className="mySwiper" 
          ref={sliderRef} 
          loop={showNavigation}
        >
          {productImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                <SlideImage
                  image={image}
                  handleMouseMove={handleMouseMove}
                  handleMouseEnter={() => handleMouseEnter(image)}
                  handleMouseLeave={handleMouseLeave}
                  priority={idx === 0}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        {showNavigation && (
          <>
            <button
              className="absolute p-[0.2rem] rounded-full bg-primaryMinimalist top-1/2 right-4 z-[1] transform -translate-y-1/2 hover:scale-110 transition-transform duration-200"
              onClick={onRightArrowClicked}
              type="button"
              aria-label="Next image"
            >
              <RightArrow width={20} height={20} className="w-full h-full p-2" />
            </button>
            <button
              className="absolute p-[0.2rem] rounded-full bg-primaryMinimalist top-1/2 left-4 z-[1] transform -translate-y-1/2 hover:scale-110 transition-transform duration-200"
              onClick={onLeftArrowClicked}
              type="button"
              aria-label="Previous image"
            >
              <LeftArrow width={20} height={20} className="w-full h-full p-2" />
            </button>
          </>
        )}

        {/* Zoom Preview Overlay */}
        {isHovering && currentImage && (
          <div
            className="absolute z-[2] bg-white border border-gray-300 w-32 h-32 overflow-hidden rounded-full pointer-events-none shadow-lg"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
            }}
            role="img"
            aria-label="Zoomed product view"
          >
            {!loadedZoom && (
              <div className="skeleton w-full h-full absolute top-0 left-0 rounded-full z-10" />
            )}
            <Image
              src={currentImage}
              width={800}
              height={800}
              alt="Zoomed product view"
              className={`absolute w-[20rem] transition-opacity duration-200 ${loadedZoom ? 'opacity-100' : 'opacity-0'}`}
              style={{
                left: -mousePosition.x * 2 + 70 * 7.2,
                top: -mousePosition.y * 2 + 50 * 10.2,
                transform: 'scale(8)',
              }}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              onLoad={handleZoomLoad}
              onError={handleZoomLoad}
              quality={90}
            />
            <div className="w-full h-full absolute flex items-center justify-center">
              <p className="text-[1.3rem] text-[#969292]" aria-hidden="true">+</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Memoize entire component to prevent unnecessary re-renders
export default React.memo(ProductViewImage);