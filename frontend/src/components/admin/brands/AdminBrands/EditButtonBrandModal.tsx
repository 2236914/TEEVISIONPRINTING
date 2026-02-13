'use client';

import React, { useEffect, useRef, useState } from 'react';

import EditBrandForm from '@/components/admin/brands/AdminBrands/EditBrandForm';
import type { AddBrandType } from '@/utilities/types/AdminFormTypes';
import type { Brand } from '@/utilities/types/shared.types';

type PropTypes = {
  brand: Brand;
  editBrandOnServer: (brand: AddBrandType, brandId: number) => Promise<void>;
};

const EditButtonBrandModal: React.FC<PropTypes> = ({
  editBrandOnServer,
  brand,
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
          <EditBrandForm
            editBrandOnServer={editBrandOnServer}
            brand={brand}
            setShowModal={setShowModal}
          />
        </div>
      </dialog>
    </div>
  );
};

export default EditButtonBrandModal;
