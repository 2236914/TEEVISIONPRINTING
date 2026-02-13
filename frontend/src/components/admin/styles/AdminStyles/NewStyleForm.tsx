import React from 'react';

import Roboto from '@/utilities/fonts/Roboto';
import type { AddStyleType } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  addStyleOnServer: (style: AddStyleType) => Promise<void>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewStyleForm: React.FC<PropTypes> = ({
  addStyleOnServer,
  setShowModal,
}) => {
  const [styleName, setStyleName] = React.useState('');
  const [isActive, setIsActive] = React.useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addStyleOnServer({ name: styleName, isActive });
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
    <div className={`${Roboto} w-[20rem] text-sm`}>
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
          Add Style
        </button>
      </form>
    </div>
  );
};

export default NewStyleForm;
