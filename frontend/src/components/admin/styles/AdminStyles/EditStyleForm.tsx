import React from 'react';

import type { AddStyleType } from '@/utilities/types/AdminFormTypes';
import type { Style } from '@/utilities/types/shared.types';

type PropTypes = {
  editStyleOnServer: (style: AddStyleType, styleId: string) => Promise<void>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  style: Style;
};

const EditStyleForm: React.FC<PropTypes> = ({
  editStyleOnServer,
  style,
  setShowModal,
}) => {
  const [styleName, setStyleName] = React.useState(style.name);
  const [isActive, setIsActive] = React.useState(style.isActive);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await editStyleOnServer({ name: styleName, isActive }, String(style.id));
    setShowModal(false);
  };

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStyleName(event.target.value);
  };

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(event.target.checked);
  };

  return (
    <div className="w-[20rem]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center p-4"
      >
        <label className="flex flex-col gap-2">
          <p>Name</p>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Style name"
            value={styleName}
            onChange={handleTextInputChange}
          />
        </label>
        <label className="flex gap-4">
          <p>Is status active?</p>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={isActive}
            onChange={handleToggleChange}
          />
        </label>
        <button type="submit" className="btn">
          Edit Style
        </button>
      </form>
    </div>
  );
};

export default EditStyleForm;
