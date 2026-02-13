import React from 'react';

import type { InputValues } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  inputValues: InputValues;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
  disabled?: boolean;
};

const AdminProductVisibleInHomePage: React.FC<PropTypes> = ({
  inputValues,
  setInputValues,
  disabled = false,
}) => {
  const productProductVisibleOnHomepageRadioInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value === 'yes') {
      setInputValues({
        ...inputValues,
        isProductVisibleInHomePage: true,
      });
    }
    if (event.target.value === 'no') {
      setInputValues({
        ...inputValues,
        isProductVisibleInHomePage: false,
      });
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <p className="font-bold">Is product visible on Home page?</p>
      <div className="flex gap-4">
        <div className="flex gap-2">
          <input
            type="radio"
            id="yes"
            name="radio-product-home-page-visibility"
            className="radio"
            value="yes"
            disabled={disabled}
            onChange={productProductVisibleOnHomepageRadioInputOnChange}
            checked={inputValues.isProductVisibleInHomePage}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="no"
            name="radio-product-home-page-visibility"
            className="radio"
            value="no"
            disabled={disabled}
            onChange={productProductVisibleOnHomepageRadioInputOnChange}
            checked={!inputValues.isProductVisibleInHomePage}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>
    </div>
  );
};

export default AdminProductVisibleInHomePage;
