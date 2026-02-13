'use client';

import React, { useEffect, useRef, useState } from 'react';

import NewStyleForm from '@/components/admin/styles/AdminStyles/NewStyleForm';
import type { AddStyleType } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  addStyleOnServer: (style: AddStyleType) => Promise<void>;
  children: React.ReactNode;
};

const AddAStyleButtonWithModal: React.FC<PropTypes> = ({
  addStyleOnServer,
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

  const onAddStyle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <div>
      <form onSubmit={onAddStyle}>{children}</form>
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
          <NewStyleForm
            addStyleOnServer={addStyleOnServer}
            setShowModal={setShowModal}
          />
        </div>
      </dialog>
    </div>
  );
};

export default AddAStyleButtonWithModal;
