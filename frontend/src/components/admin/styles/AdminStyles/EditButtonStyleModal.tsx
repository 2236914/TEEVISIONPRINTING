'use client';

import React, { useEffect, useRef, useState } from 'react';

import EditStyleForm from '@/components/admin/styles/AdminStyles/EditStyleForm';
import type { AddStyleType } from '@/utilities/types/AdminFormTypes';
import type { Style } from '@/utilities/types/shared.types';

type PropTypes = {
  editStyleOnServer: (style: AddStyleType, styleId: string) => Promise<void>;
  style: Style;
};

const EditButtonStyleModal: React.FC<PropTypes> = ({
  editStyleOnServer,
  style,
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
          <EditStyleForm
            editStyleOnServer={editStyleOnServer}
            style={style}
            setShowModal={setShowModal}
          />
        </div>
      </dialog>
    </div>
  );
};

export default EditButtonStyleModal;
