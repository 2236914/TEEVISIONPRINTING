import React from 'react';

import SixthSection from '@/components/main/sixthSection/SixthSection';
import { addQuestionOnServer } from '@/server-actions/question-action';
import { addQuoteOnServer } from '@/server-actions/quote-action';
import { sampleRequestAQuoteProduct } from '@/utilities/constants/data';
import { fetchAllRequestAQuoteProducts } from '@/utilities/fetch/product';

const SixthSectionServerWrapper = async () => {
  const products = await fetchAllRequestAQuoteProducts();

  if (products.length === 0) {
    products.push(sampleRequestAQuoteProduct);
  }

  return (
    <SixthSection
      products={products}
      addQuoteOnServer={addQuoteOnServer}
      addQuestionOnServer={addQuestionOnServer}
    />
  );
};

export default SixthSectionServerWrapper;
