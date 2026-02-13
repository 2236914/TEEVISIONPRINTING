/* eslint-disable id-length */
import React from 'react';

import RequestAQuoteModal from '@/components/shared/RequestAQuoteModal/RequestAQuoteModal';
import { addQuoteOnServer } from '@/server-actions/quote-action';
import { sampleRequestAQuoteProduct } from '@/utilities/constants/data';
import { fetchAllRequestAQuoteProducts } from '@/utilities/fetch/product';

type PropTypes = {
  children: React.ReactNode;
  className?: string;
  productColor?: string;
  productName?: string;
};

const initialData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  dueDate: '',
  product: '',
  quantityBySizes: {
    XS: 0,
    S: 0,
    M: 0,
    LG: 0,
    XL: 0,
    '2XL': 0,
    '3XL': 0,
    '4XL': 0,
    '5XL': 0,
  },
  frontNumberOfColors: 0,
  backNumberOfColors: 0,
  createArtwork: false,
  needDesigner: false,
  additionalNotes: '',
  event: '',
  color: '',
  hasSpecialRequest: false,
  artworkImageUrl: '',
  pricePerShirt: 0,
  totalPrice: 0,
};

const RequestAQuoteModalServerWrapper: React.FC<PropTypes> = async ({
  children,
  className,
  productName,
  productColor,
}) => {
  const products = await fetchAllRequestAQuoteProducts();

  if (products.length === 0) {
    products.push(sampleRequestAQuoteProduct);
  }

  return (
    <RequestAQuoteModal
      products={products}
      initialData={initialData}
      className={className}
      addQuoteOnServer={addQuoteOnServer}
      currentProduct={productName}
      currentProductColor={productColor}
    >
      {children}
    </RequestAQuoteModal>
  );
};

export default RequestAQuoteModalServerWrapper;
