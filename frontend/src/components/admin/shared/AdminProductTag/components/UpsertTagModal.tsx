import React, { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import type { InputValues } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  inputValues: InputValues;
  onAddTag: (tag: string) => void;
  onClose: () => void;
  showModal: boolean;
};

const UpsertTagModal: React.FC<PropTypes> = ({
  showModal,
  onClose,
  onAddTag,
  inputValues,
}) => {
  const [tagName, setTagName] = useState('');
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleAddTag = useCallback(() => {
    const trimmedTagName = tagName.trim();
    if (inputValues.tags.includes(trimmedTagName)) {
      toast.error('Tag already exists');
      return;
    }
    if (trimmedTagName) {
      onAddTag(trimmedTagName);
      setTagName('');
      toast.success('Tag added successfully');
    }
  }, [tagName, inputValues.tags, onAddTag]);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    showModal ? modalRef.current.showModal() : modalRef.current.close();
  }, [showModal]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleAddTag();
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleAddTag, onClose, showModal]);

  return (
    <div>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-fit">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="font-bold text-lg">Add Tag</h3>
            <input
              type="text"
              value={tagName}
              onChange={(event) => setTagName(event.target.value)}
              placeholder="Tag Name"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="flex gap-2 mt-4">
              <button className="btn btn-primary" onClick={handleAddTag}>
                Add Tag
              </button>
              <button className="btn" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpsertTagModal;
