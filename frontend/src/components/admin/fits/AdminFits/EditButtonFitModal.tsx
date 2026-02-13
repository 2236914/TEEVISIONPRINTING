'use client';

import React, { useEffect, useRef, useState } from 'react';

import EditFitForm from '@/components/admin/fits/AdminFits/EditFitForm';
import type { AddFitType } from '@/utilities/types/AdminFormTypes';
import type { Fit } from '@/utilities/types/shared.types';

type PropTypes = {
  editFitOnServer: (fit: AddFitType, fitId: number) => Promise<void>;
  fit: Fit;
};

const EditButtonFitModal: React.FC<PropTypes> = ({
  editFitOnServer,
  fit,
}) => {
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
      <button onClick={() => setShowModal(true)} className="btn btn-sm">
        Edit
      </button>
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
          <EditFitForm
            editFitOnServer={editFitOnServer}
            fit={fit}
            setShowModal={setShowModal}
          />
        </div>
      </dialog>
    </div>
  );
};

export default EditButtonFitModal;