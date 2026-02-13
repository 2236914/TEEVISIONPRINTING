'use client';

import React, { useEffect, useRef, useState } from 'react';

import NewFitForm from '@/components/admin/fits/AdminFits/NewFitForm';
import type { AddFitType } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  addFitOnServer: (fit: AddFitType) => Promise<void>;
  children: React.ReactNode;
};

const AddAFitButtonWithModal: React.FC<PropTypes> = ({
  addFitOnServer,
  children,
}) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<any>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    showModal ? modalRef.current.showModal() : modalRef.current.close();
  }, [showModal]);

  const onAddFit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <div>
      <form onSubmit={onAddFit}>{children}</form>
      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box w-fit">
          <form method="dialog">
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <NewFitForm
            addFitOnServer={addFitOnServer}
            setShowModal={setShowModal}
          />
        </div>
      </dialog>
    </div>
  );
};

export default AddAFitButtonWithModal;