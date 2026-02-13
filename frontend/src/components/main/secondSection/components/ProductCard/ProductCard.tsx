import React, { useState } from 'react';
import Image from 'next/image';

// eslint-disable-next-line no-restricted-imports
import './ProductCard.css';

import ImageBg from '@/components/main/secondSection/components/ImageBg';
import SecondaryButton from '@/components/shared/SecondaryButton';
import type { HomePageProducts } from '@/utilities/fetch/product';

type ProductCardProps = {
  product: HomePageProducts;
};

// Define the component as a named function first.
const ProductCardComponent: React.FC<ProductCardProps> = ({ product }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImageLoad = () => {
    setImgLoaded(true);
  };

  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-end h-full">
        <div className="relative flex justify-center items-center w-full h-full">
          <div className="z-10 bottom-0 w-full flex items-center justify-center">
            {!imgLoaded && (
              <div className="skeleton w-[250px] h-[250px] rounded-lg bg-gray-200 absolute z-10" />
            )}
            <Image
              src={product.imageUrl || ''}
              width={250}
              height={250}
              quality={70}
              alt={product.name}
              className={`w-auto second-section__product-card-img transition-opacity duration-300 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageLoad}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="absolute bottom-0 z-0 md:w-[80%] w-full bg-white">
            {imgLoaded && <ImageBg />}
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center mt-2">
          <div className="sm:w-full md:w-[80%] xl:max-w-[13rem] flex flex-col justify-between h-full w-full gap-4">
            <div className="flex flex-col items-start w-full gap-4">
              <div className="flex gap-[0.3rem] md:gap-[0.5rem] xl:gap-[0.3rem] mt-4">
                {product.colors.slice(0, 8).map((color, index) => (
                  <div
                    key={color.hexCode + ' ' + index}
                    className="h-[0.75rem] w-[0.75rem] md:w-6 md:h-6 xl:w-4 xl:h-4 rounded-full"
                    style={{ backgroundColor: color.hexCode }}
                  />
                ))}
              </div>
              <h3 className="text-cardHeading-sm md:text-cardHeading-md xl:text-cardHeading font-bold leading-tight">
                {product.name}
              </h3>
            </div>
            <SecondaryButton
              fullwidth
              desktopFullWidth
              className="w-full h-fit"
              isLink
              link={`/products/view/${product.slug}`}
            >
              View Details
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCardComponent.displayName = 'ProductCard';

export default ProductCardComponent;
