'use client';

import React, { useEffect, useRef, useState } from 'react';

import type { Question } from '@/utilities/types/shared.types';

type PropTypes = {
  question: Question;
};

const ViewQuestionModal: React.FC<PropTypes> = ({ question }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<any>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    showModal ? modalRef.current.showModal() : modalRef.current.close();
  }, [showModal]);

  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="btn btn-sm"
      >
        View
      </button>
      <dialog ref={modalRef} id="view_question_modal" className="modal">
        <div className="modal-box w-fit">
          <form method="dialog">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="max-w-[50rem] p-4">
            <h2 className="text-2xl font-bold mb-4">Question Details</h2>
            <p>
              <strong>Full Name:</strong> {question.fullName}
            </p>
            <p>
              <strong>Email:</strong> {question.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {question.phoneNumber}
            </p>
            <p>
              <strong>Company Name:</strong> {question.companyName}
            </p>
            <p>
              <strong>Preferred Contact Method:</strong>{' '}
              {question.preferredContactMethod}
            </p>
            <p>
              <strong>Inquiry Details:</strong> {question.inquiryDetails}
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ViewQuestionModal;
