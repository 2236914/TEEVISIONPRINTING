'use client';

import React, { useEffect, useRef, useState } from 'react';

import NewBrandForm from '@/components/admin/brands/AdminBrands/NewBrandForm';
import type { AddBrandType } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  addBrandOnServer: (brand: AddBrandType) => Promise<void>;
  children: React.ReactNode;
};

const AddABrandButtonWithModal: React.FC<PropTypes> = ({
  addBrandOnServer,
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

  const onAddBrand = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <div>
      <form onSubmit={onAddBrand}>{children}</form>
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
          <NewBrandForm
            addBrandOnServer={addBrandOnServer}
            setShowModal={setShowModal}
          />
        </div>
      </dialog>
    </div>
  );
};

export default AddABrandButtonWithModal;
