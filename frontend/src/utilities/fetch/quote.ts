import axios from 'axios';

import { getEncryptedData } from '@/utilities/helpers/getEncryptedData';
import {
  convertToAddQuoteType,
  type RequestAQuoteModalFormData,
} from '@/utilities/types/RequestAQuoteModalTypes';
import type { Quote } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
import { headers } from 'next/headers';

// Fetch all quotes
export const fetchQuotes = async (accessToken: string): Promise<Quote[]> => {
  const response = await axios({
    url: `${backendUrl}/quotes`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.data;
  return data;
};

// Fetch quote by ID
export const fetchQuoteById = async (
  quoteId: string,
  accessToken: string
): Promise<Quote> => {
  const response = await axios({
    url: `${backendUrl}/quotes/${quoteId}`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.data;
  return data;
};

// Create a new quote
export const createQuote = async (quote: RequestAQuoteModalFormData) => {
  const convertedQuoteData = convertToAddQuoteType(quote);

  const headersList = headers();
  const clientIdentity = headersList.get('X-client-identity');

  await axios({
    url: `${backendUrl}/quotes`,
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      'X-application-key': getEncryptedData(),
      'X-client-identity': clientIdentity || 'Unknown IP',
    },
    data: convertedQuoteData,
  });
};
