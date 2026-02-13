import React from 'react';

type QuoteModalProps = {
  body: string;
  header: string;
  onClose: () => void;
  show: boolean;
};

const QuoteModal: React.FC<QuoteModalProps> = ({
  show,
  onClose,
  header,
  body,
}) => {
  const modalRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    show ? modalRef.current.showModal() : modalRef.current.close();
  }, [show]);

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <h2 className="text-2xl font-bold text-center">{header}</h2>
        <p className="text-center mt-4">{body}</p>
        <div className="flex justify-center mt-6">
          <button className="btn bg-primaryT" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default QuoteModal;
