import React, { useEffect, useRef } from 'react';

type PropTypes = {
  showModal: boolean;
  textContent: string;
  textTitle: string;
};

const LoadingModal: React.FC<PropTypes> = ({
  showModal,
  textContent,
  textTitle,
}) => {
  const modalRef = useRef<any>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    showModal ? modalRef.current.showModal() : modalRef.current.close();
  }, [showModal]);

  return (
    <div>
      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box w-fit">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="loading loading-spinner loading-lg" />
            <p className="font-bold text-lg">{textTitle}</p>
            <p>{textContent}</p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LoadingModal;
