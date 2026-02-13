import type { ReactNode } from 'react';
import React, { useCallback } from 'react';

import type { RequestAQuoteModalFormData } from '@/utilities/types/RequestAQuoteModalTypes';
import type { RequestAQuoteProduct } from '@/utilities/types/shared.types';

type PropTypes = {
  formData: RequestAQuoteModalFormData;
  label: string;
  products: Array<RequestAQuoteProduct>;
  setFormData: React.Dispatch<React.SetStateAction<RequestAQuoteModalFormData>>;
  subLabel?: string | ReactNode;
};

const RequestAQuoteProductSelect: React.FC<PropTypes> = ({
  label,
  subLabel,
  products,
  setFormData,
  formData,
}) => {
  // Memoize the change handler
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedProduct = products.find(
        (product) => String(product.name) === event.target.value
      );
      if (selectedProduct) {
        setFormData((prevData) => ({
          ...prevData,
          product: selectedProduct.name,
          // Also update color to first color of new product
          color: selectedProduct.colors[0]?.name || prevData.color,
          // Reset quantities when product changes
          quantityBySizes: Object.fromEntries(
            selectedProduct.availableSizes.map((size) => [size, 0])
          ) as any,
        }));
      }
    },
    [products, setFormData]
  );

  return (
    <label className="flex flex-col gap-2 w-full">
      <div className="flex flex-col">
        <p className="text-sm font-bold">{label}</p>
        {subLabel && (
          <div className="text-xs text-subLabelColor">{subLabel}</div>
        )}
      </div>
      <select
        className="select select-bordered w-full"
        onChange={handleChange}
        value={formData.product}
      >
        {products.map((product) => (
          <option key={product.id} value={product.name}>
            {product.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default React.memo(RequestAQuoteProductSelect);
