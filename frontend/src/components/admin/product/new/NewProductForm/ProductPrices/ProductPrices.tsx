import React, { useEffect } from 'react';

import PriceForEachSizeSection from '@/components/admin/product/new/NewProductForm/ProductPrices/PriceForEachSizeSection';
import type { InputValues } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  inputValues: InputValues;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
  disabled?: boolean;
};

const ProductPrices: React.FC<PropTypes> = ({
  inputValues,
  setInputValues,
  disabled = false,
}) => {
  const checkboxOnChange = () => {
    setInputValues((prev) => ({
      ...prev,
      whiteIsSameAsColored: !prev.whiteIsSameAsColored,
    }));
  };

  useEffect(() => {
    if (inputValues.whiteIsSameAsColored) {
      setInputValues((prev) => ({
        ...prev,
        pricesPerColorOnColoredClothes: prev.pricesPerColorOnWhiteClothes,
      }));
    }
  }, [
    inputValues.whiteIsSameAsColored,
    inputValues.pricesPerColorOnWhiteClothes,
    setInputValues,
  ]);

  return (
    <div className="flex flex-col gap-8 rounded bg-background4 p-8">
      <label className="flex gap-4">
        <input
          type="checkbox"
          className="toggle toggle-md toggle-success"
          onChange={checkboxOnChange}
          checked={inputValues.whiteIsSameAsColored}
          disabled={disabled}
        />
        <p className="font-bold">Is the price of colored same as white?</p>
      </label>
      <div className="flex gap-4">
        <div className="w-full">
          <PriceForEachSizeSection
            inputValues={inputValues}
            setInputValues={setInputValues}
            pricePerColorType="pricesPerColorOnWhiteClothes"
            headerLabel="Prices for white"
            disabled={disabled}
          />
        </div>
        <div className="divider divider-horizontal" />
        <div className="w-full">
          <PriceForEachSizeSection
            inputValues={inputValues}
            setInputValues={setInputValues}
            pricePerColorType="pricesPerColorOnColoredClothes"
            headerLabel="Prices for colored"
            disabled={inputValues.whiteIsSameAsColored || disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPrices;
