'use server';

import { cookies } from 'next/headers';

import {
  createQuote,
  fetchQuoteById,
  fetchQuotes,
} from '@/utilities/fetch/quote';
import type { RequestAQuoteModalFormData } from '@/utilities/types/RequestAQuoteModalTypes';
import type { FetchAddResponse } from '@/utilities/types/shared.types';

async function addQuoteOnServer(
  quote: RequestAQuoteModalFormData
): Promise<FetchAddResponse> {
  'use server';

  try {
    await createQuote(quote);
    return { success: true, error: '' };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      error: error.message || 'Error creating quote',
    };
  }
}

async function getQuotesOnServer() {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    const quotes = await fetchQuotes(accessToken);
    return quotes;
  } catch (error: any) {
    console.error(error);
    throw new Error('Error fetching quotes');
  }
}

async function getQuoteByIdOnServer(quoteId: string) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    const quote = await fetchQuoteById(quoteId, accessToken);
    return quote;
  } catch (error: any) {
    console.error(error);
    throw new Error('Error fetching quote by ID');
  }
}

export { addQuoteOnServer, getQuotesOnServer, getQuoteByIdOnServer };
