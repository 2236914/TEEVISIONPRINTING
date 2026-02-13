import React from 'react';

import type { InputValues } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  inputValues: InputValues;
  label: string;
  name: "name" | "description" | "slug" | "metaTitle";
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
  bold?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

const AdminInputWithLabel: React.FC<PropTypes> = ({
  label,
  bold = true,
  placeholder,
  name,
  inputValues,
  setInputValues,
  disabled = false,
}) => {
  const inputOnChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [name]: event.target.value,
    });
  };

  const handleSlugGeneration = () => {
    setInputValues({
      ...inputValues,
      slug: inputValues.name
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, ''),
    });
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <p className={`${bold && 'font-bold'}`}>{label}</p>
      {name === 'slug' ? (
        <div className="flex gap-2">
          <input
            name={name}
            className="input input-md fullwidth flex-grow"
            placeholder={placeholder}
            value={inputValues[name]}
            onChange={inputOnChange}
            disabled={disabled}
          />
          <button className="btn bg-white" onClick={handleSlugGeneration}>
            Generate Slug
          </button>
        </div>
      ) : name === 'description' ? (
        <textarea
          name={name}
          className="textarea"
          placeholder={placeholder}
          value={inputValues[name]}
          onChange={inputOnChange}
          disabled={disabled}
        />
      ) : (
        <input
          name={name}
          className="input input-md fullwidth"
          placeholder={placeholder}
          value={inputValues[name]}
          onChange={inputOnChange}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default AdminInputWithLabel;
