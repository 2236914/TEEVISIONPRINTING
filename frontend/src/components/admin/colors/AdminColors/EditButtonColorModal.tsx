'use client';

import React, { useEffect, useRef, useState } from 'react';

import EditColorForm from '@/components/admin/colors/AdminColors/EditColorForm';
import type { AddColorType } from '@/utilities/types/AdminFormTypes';
import type { Color } from '@/utilities/types/shared.types';

type PropTypes = {
  color: Color;
  editColorOnServer: (color: AddColorType, colorId: string) => Promise<void>;
  page: number;
  size: number;
};

const EditButtonColorModal: React.FC<PropTypes> = ({
  editColorOnServer,
  color,
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
          <EditColorForm
            editColorOnServer={editColorOnServer}
            color={color}
            setShowModal={setShowModal}
            page={page}
            size={size}
          />
        </div>
      </dialog>
    </div>
  );
};

export default EditButtonColorModal;
