import React, { useState } from 'react';

import UpsertTagModal from '@/components/admin/shared/AdminProductTag/components/UpsertTagModal';
import type { InputValues } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  disabled: boolean;
  inputValues: InputValues;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
};

const AdminProductTag: React.FC<PropTypes> = ({
  disabled,
  inputValues,
  setInputValues,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddTag = (tag: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      tags: [...prevValues.tags, tag.toLowerCase()],
    }));
  };

  const handleRemoveTag = (tag: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      tags: prevValues.tags.filter((currentTag) => currentTag !== tag),
    }));
  };

  return (
    <div className="flex flex-col">
      <div>
        <button
          className="btn bg-background5 w-full"
          onClick={() => setShowModal(true)}
          disabled={disabled}
        >
          Add Tag
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-8">
        {inputValues.tags.map((tag) => (
          <span
            className="badge p-4 bg-priceMarkupIndicationBackground"
            key={tag}
          >
            <button
              className="w-[1.2rem] h-[1.2rem] mr-2 rounded-full text-[0.6rem] text-white font-bold bg-closeButtonColor"
              onClick={() => handleRemoveTag(tag)}
            >
              X
            </button>
            <p>{tag}</p>
          </span>
        ))}
      </div>
      <UpsertTagModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onAddTag={handleAddTag}
        inputValues={inputValues}
      />
    </div>
  );
};

export default AdminProductTag;
