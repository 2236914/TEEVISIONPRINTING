import React from 'react';

import ViewQuestionModal from '@/components/admin/questions/AdminQuestionsBody/components/ViewQuestionModal';
import type { Question } from '@/utilities/types/shared.types';

type PropTypes = {
  questions: Array<Question>;
};

const AdminQuestionsBody: React.FC<PropTypes> = ({ questions }) => {
  return (
    <div className="ml-64 p-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold bg-background4 p-8 rounded-lg">
          View all questions
        </h1>
        <div className="bg-white p-4 rounded-lg">
          <table className="table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question.id}>
                  <td>{question.fullName}</td>
                  <td>{question.email}</td>
                  <td>{question.phoneNumber}</td>
                  <td>
                    <div className="flex items-center justify-center gap-4 pr-12 w-fit">
                      <ViewQuestionModal question={question} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminQuestionsBody;
