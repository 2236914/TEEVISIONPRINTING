import { headers } from 'next/headers';

import axios from 'axios';

import { getEncryptedData } from '@/utilities/helpers/getEncryptedData';
import type { AddQuestionType } from '@/utilities/types/AdminFormTypes';
import type { Question } from '@/utilities/types/shared.types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// Fetch all questions
export const fetchQuestions = async (
  accessToken: string
): Promise<Question[]> => {
  const response = await axios({
    url: `${backendUrl}/questions`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.data;
  return data;
};

// Fetch question by ID
export const fetchQuestionById = async (
  questionId: string,
  accessToken: string
): Promise<Question> => {
  const response = await axios({
    url: `${backendUrl}/questions/${questionId}`,
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.data;
  return data;
};

// Create a new question
export const createQuestion = async (question: AddQuestionType) => {
  const headersList = headers();
  const clientIdentity = headersList.get('X-client-identity');

  await axios({
    url: `${backendUrl}/questions`,
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': backendUrl,
      'X-application-key': getEncryptedData(),
      'X-client-identity': clientIdentity || 'Unknown IP',
    },
    data: question,
  });
};
