'use client';

import React, { useEffect, useRef, useState } from 'react';

import NewColorForm from '@/components/admin/colors/AdminColors/NewColorForm';
import type { AddColorType } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  addColorOnServer: (color: AddColorType) => Promise<void>;
  children: React.ReactNode;
  page: number;
  size: number;
};

const AddAColorButtonWithModal: React.FC<PropTypes> = ({
  addColorOnServer,
  children,
  page,
  size,
}) => {
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef<any>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    showModal ? modalRef.current.showModal() : modalRef.current.close();
  }, [showModal]);

  const onAddColor = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <div>
      <form onSubmit={onAddColor}>{children}</form>
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
          <NewColorForm
            addColorOnServer={addColorOnServer}
            setShowModal={setShowModal}
            page={page}
            size={size}
          />
        </div>
      </dialog>
    </div>
  );
};

export default AddAColorButtonWithModal;
