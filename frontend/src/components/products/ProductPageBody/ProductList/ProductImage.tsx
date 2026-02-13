'use client';

import React, { memo, useState } from 'react';
import Image from 'next/image';

type PropTypes = {
  imageUrl: string;
  priority?: boolean;
  productName?: string;
};

const ProductImage: React.FC<PropTypes> = ({ 
  imageUrl, 
  productName = 'Product',
  priority = false 
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="p-4 bg-background1 relative w-fit">
      {!imgLoaded && (
        <div className="skeleton w-[19rem] h-[19rem] absolute top-4 left-4 rounded-lg" />
      )}
      <Image
        src={imageUrl}
        width={300}
        height={300}
        alt={productName}
        className={`w-[19rem] md:h-[19rem] max-h-[19rem] h-auto object-cover transition-opacity duration-200 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgLoaded(true)}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        quality={75}
        sizes="304px"
      />
    </div>
  );
};

export default memo(ProductImage);