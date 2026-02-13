import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminQuestionsBody from '@/components/admin/questions/AdminQuestionsBody/AdminQuestionsBody';
import { getQuestionsOnServer } from '@/server-actions/question-action';

const page = async () => {
  const questions = await getQuestionsOnServer();
  return (
    <div className="bg-background5">
      <div>
        <AdminNavigation page="questions" />
        <AdminQuestionsBody questions={questions} />
      </div>
    </div>
  );
};

export default page;
