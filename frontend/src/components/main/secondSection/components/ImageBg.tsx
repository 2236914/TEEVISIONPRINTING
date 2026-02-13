import React from 'react';
import Image from 'next/image';

const ImageBg = () => {
  return (
    <Image
      src="/main/secondSection/product-bg.png"
      width={100}
      height={100}
      className="w-full h-full"
      alt="product bg"
    />
  );
};

export default ImageBg;
