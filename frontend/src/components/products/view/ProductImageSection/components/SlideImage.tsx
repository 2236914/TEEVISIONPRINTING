import React, { memo, useState } from 'react';
import Image from 'next/image';

type SlideImageProps = {
  image: string;
  handleMouseEnter?: (image: string) => void;
  handleMouseLeave?: () => void;
  handleMouseMove?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
};

const SlideImage: React.FC<SlideImageProps> = ({
  image,
  handleMouseMove,
  handleMouseEnter,
  handleMouseLeave,
  priority = false,
  loading = 'lazy',
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div 
      className="relative w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => handleMouseEnter?.(image)}
      onMouseLeave={handleMouseLeave}
    >
      {!imgLoaded && (
        <div className="skeleton w-full h-full absolute top-0 left-0 rounded-lg z-10" />
      )}
      <Image
        src={image}
        width={500}
        height={500}
        alt="Product image"
        className={`w-full h-full object-contain cursor-none transition-opacity duration-200 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        priority={priority}
        loading={loading}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgLoaded(true)}
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
      />
    </div>
  );
};

export default memo(SlideImage);