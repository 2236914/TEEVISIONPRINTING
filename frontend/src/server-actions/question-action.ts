'use server';

import { cookies } from 'next/headers';

import {
  createQuestion,
  fetchQuestionById,
  fetchQuestions,
} from '@/utilities/fetch/question';
import type { AddQuestionType } from '@/utilities/types/AdminFormTypes';
import type { FetchAddResponse } from '@/utilities/types/shared.types';

async function addQuestionOnServer(
  question: AddQuestionType
): Promise<FetchAddResponse> {
  'use server';

  try {
    await createQuestion(question);
    return { success: true, error: '' };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      error: error.message || 'Error creating question',
    };
  }
}

async function getQuestionsOnServer() {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    const questions = await fetchQuestions(accessToken);
    return questions;
  } catch (error: any) {
    console.error(error);
    throw new Error('Error fetching questions');
  }
}

async function getQuestionByIdOnServer(questionId: string) {
  'use server';

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    const question = await fetchQuestionById(questionId, accessToken);
    return question;
  } catch (error: any) {
    console.error(error);
    throw new Error('Error fetching question by ID');
  }
}

export { addQuestionOnServer, getQuestionsOnServer, getQuestionByIdOnServer };
