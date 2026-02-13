import React from 'react';

import type { InputValues } from '@/utilities/types/AdminFormTypes';
import type { Brand, Style } from '@/utilities/types/shared.types';

type PropTypes = {
  inputValues: InputValues;
  items: Array<Brand> | Array<Style>;
  label: string;
  name: 'brandId' | 'styleId';
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
  disabled?: boolean;
};

const AdminProductSelect: React.FC<PropTypes> = ({
  items,
  label,
  inputValues,
  setInputValues,
  name,
  disabled = false,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setInputValues((prev) => ({
      ...prev,
      [name]: Number(selectedValue),
    }));
  };

  const currentValue = inputValues[name];
  const selectValue = currentValue !== null ? String(currentValue) : '';

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold">{label}</p>
      <select
        className="select w-full"
        value={selectValue}
        onChange={handleSelectChange}
        disabled={disabled}
      >
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AdminProductSelect;