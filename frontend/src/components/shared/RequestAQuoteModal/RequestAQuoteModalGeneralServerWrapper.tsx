/* eslint-disable id-length */
import React from 'react';
import RequestAQuoteModalGeneral from '@/components/shared/RequestAQuoteModal/RequestAQuoteModalGeneral';
import { addQuoteOnServer } from '@/server-actions/quote-action';

type PropTypes = {
  children: React.ReactNode;
  className?: string;
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

const RequestAQuoteModalGeneralServerWrapper: React.FC<PropTypes> = ({
  children,
  className,
}) => {
  // No need to fetch products - the General modal doesn't use them
  // It sets product to "General Inquiry" internally
  
  return (
    <RequestAQuoteModalGeneral
      initialData={initialData}
      className={className}
      addQuoteOnServer={addQuoteOnServer}
    >
      {children}
    </RequestAQuoteModalGeneral>
  );
};

export default RequestAQuoteModalGeneralServerWrapper;