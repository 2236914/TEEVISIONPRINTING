import React from 'react';

import type { InputValues } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  inputValues: InputValues;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
  disabled?: boolean;
};

const AdminProductPackagingType: React.FC<PropTypes> = ({
  inputValues,
  setInputValues,
  disabled = false,
}) => {
  const productPackagingTypeRadioInputOnChange = (packagingType: string) => {
    setInputValues({
      ...inputValues,
      clothePackagingType: packagingType,
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <p className="font-bold">Packaging Type of the product</p>
      <div className="flex gap-4">
        <div className="flex gap-2">
          <input
            type="radio"
            id="TSHIRT"
            name="radio-packaging-type"
            className="radio"
            onChange={() => productPackagingTypeRadioInputOnChange('TSHIRT')}
            checked={inputValues.clothePackagingType === 'TSHIRT'}
            disabled={disabled}
          />
          <label htmlFor="TSHIRT">TSHIRT</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="HOODIE"
            name="radio-packaging-type"
            className="radio"
            onChange={() => productPackagingTypeRadioInputOnChange('HOODIE')}
            checked={inputValues.clothePackagingType === 'HOODIE'}
            disabled={disabled}
          />
          <label htmlFor="HOODIE">HOODIE</label>
        </div>
      </div>
    </div>
  );
};

export default AdminProductPackagingType;
