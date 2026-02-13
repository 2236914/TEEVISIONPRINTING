import React from 'react';
import Image from 'next/image';

type PropTypes = {
  productImageUrl: string;
};

const AdminProductsImage: React.FC<PropTypes> = ({ productImageUrl }) => {
  return (
    <Image
      src={productImageUrl || ''}
      height={150}
      width={150}
      alt="Product Image"
    />
  );
};

export default AdminProductsImage;
