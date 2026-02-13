// server-actions/fit-actions.ts
// server-actions/fit-actions.ts
'use server';

import { cookies } from 'next/headers';

import { createFit, updateFit } from '@/utilities/fetch/fit';
import type { AddFitType } from '@/utilities/types/AdminFormTypes';

export async function addFitOnServer(fit: AddFitType) {
  const cookieStore = await cookies();  // Added await for Next.js 15+
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await createFit(fit, accessToken);
  } catch (error: any) {
    console.error('Error adding fit:', error);
    throw error;  // Re-throw to handle in UI
  }
}

export async function editFitOnServer(fit: AddFitType, fitId: number) {
  const cookieStore = await cookies();  // Added await for Next.js 15+
  const accessToken = cookieStore.get('accessToken')?.value as string;

  try {
    await updateFit(fit, fitId, accessToken);
  } catch (error: any) {
    console.error('Error editing fit:', error);
    throw error;  // Re-throw to handle in UI
  }
}