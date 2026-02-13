/* eslint-disable id-length */
'use client';

import React, { useCallback, useEffect, useRef } from 'react';

import type { AxiosError } from 'axios';

import { calculateFinalPrice } from '@/utilities/fetch/product';
import type { PriceVariablesData } from '@/utilities/types/CalculateTotalProductPriceTypes';
import type { RequestAQuoteModalFormData } from '@/utilities/types/RequestAQuoteModalTypes';
import type {
  ErrorMessage,
  RequestAQuoteProduct,
} from '@/utilities/types/shared.types';

type ErrorDataType = {
  hasError: boolean;
  message: string;
};

type PropTypes = {
  formData: RequestAQuoteModalFormData;
  product: RequestAQuoteProduct;
  setFormData: React.Dispatch<React.SetStateAction<RequestAQuoteModalFormData>>;
};

const RequestAQuotePriceSection: React.FC<PropTypes> = ({
  product,
  formData,
  setFormData,
}) => {
  const [errorData, setErrorData] = React.useState<ErrorDataType>({
    hasError: false,
    message: '',
  });

  // Use refs to track the debounce timer and last calculation values
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastCalculationRef = useRef<string>('');
  const isCalculatingRef = useRef<boolean>(false);

  // Calculate total quantity
  const totalQuantity = React.useMemo(() => {
    return Object.values(formData.quantityBySizes).reduce(
      (acc, qty) => acc + qty,
      0
    );
  }, [formData.quantityBySizes]);

  const handleQuantityInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, size: string) => {
      const value = parseInt(event.target.value) || 0;
      setFormData((prev) => ({
        ...prev,
        quantityBySizes: {
          ...prev.quantityBySizes,
          [size]: value,
        },
      }));
    },
    [setFormData]
  );

  // Memoized calculation function
  const calculatePrice = useCallback(async () => {
    // Check minimum quantity requirement
    if (totalQuantity > 0 && totalQuantity < 12) {
      setErrorData({
        hasError: true,
        message: 'Minimum order quantity is 12 shirts',
      });
      setFormData((prev) => ({
        ...prev,
        pricePerShirt: 0,
        totalPrice: 0,
      }));
      return;
    }

    if (totalQuantity === 0) {
      setErrorData({
        hasError: false,
        message: '',
      });
      setFormData((prev) => ({
        ...prev,
        pricePerShirt: 0,
        totalPrice: 0,
      }));
      return;
    }

    // Prevent multiple simultaneous calculations
    if (isCalculatingRef.current) return;

    const priceVariablesData: PriceVariablesData = {
      quantityBySizes: formData.quantityBySizes,
      frontNumberOfColors: formData.frontNumberOfColors,
      backNumberOfColors: formData.backNumberOfColors,
      productId: product.id,
    };

    // Create a unique key for this calculation to avoid duplicates
    const calculationKey = JSON.stringify(priceVariablesData);

    // Skip if we just calculated the same values
    if (calculationKey === lastCalculationRef.current) {
      return;
    }

    lastCalculationRef.current = calculationKey;
    isCalculatingRef.current = true;

    try {
      const finalPriceFetched = await calculateFinalPrice(priceVariablesData);
      setErrorData({
        hasError: false,
        message: '',
      });

      const numberFinalPriceFetched = Number(finalPriceFetched);

      setFormData((prev) => ({
        ...prev,
        pricePerShirt:
          totalQuantity > 0
            ? Math.round((numberFinalPriceFetched / totalQuantity) * 100) / 100
            : 0,
        totalPrice: Math.round(numberFinalPriceFetched * 100) / 100,
      }));
    } catch (error) {
      const axiosError = error as AxiosError<ErrorMessage>;
      if (axiosError.response) {
        setErrorData({
          hasError: true,
          message: axiosError.response.data.message,
        });
        setFormData((prev) => ({
          ...prev,
          pricePerShirt: 0,
          totalPrice: 0,
        }));
      }
    } finally {
      isCalculatingRef.current = false;
    }
  }, [
    formData.quantityBySizes,
    formData.frontNumberOfColors,
    formData.backNumberOfColors,
    product.id,
    totalQuantity,
    setFormData,
  ]);

  // Debounced effect - only triggers price calculation after user stops typing
  useEffect(() => {
    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new timer - wait 500ms after last change
    debounceTimerRef.current = setTimeout(() => {
      void calculatePrice();
    }, 500);

    // Cleanup
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [calculatePrice]);

  return (
    <div className="flex flex-col w-full gap-3">
      {/* Responsive grid layout - adapts to screen size */}
      {/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 5 columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {product.availableSizes.slice(0, 5).map((size) => (
          <div key={size} className="flex items-center gap-1">
            <label
              htmlFor={`quantity-${size}`}
              className="text-xs font-medium whitespace-nowrap min-w-[24px]"
            >
              {size}:
            </label>
            <input
              id={`quantity-${size}`}
              className="input input-sm input-bordered w-full max-w-[60px] text-xs text-center"
              type="number"
              min="0"
              onChange={(event) => handleQuantityInputOnChange(event, size)}
              value={formData.quantityBySizes[size]}
            />
          </div>
        ))}
      </div>

      {/* Second row for remaining sizes - responsive grid */}
      {product.availableSizes.length > 5 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {product.availableSizes.slice(5).map((size) => (
            <div key={size} className="flex items-center gap-1">
              <label
                htmlFor={`quantity-${size}`}
                className="text-xs font-medium whitespace-nowrap min-w-[30px]"
              >
                {size}:
              </label>
              <input
                id={`quantity-${size}`}
                className="input input-sm input-bordered w-full max-w-[60px] text-xs text-center"
                type="number"
                min="0"
                onChange={(event) => handleQuantityInputOnChange(event, size)}
                value={formData.quantityBySizes[size]}
              />
            </div>
          ))}
        </div>
      )}

      {/* Display total quantity */}
      <div className="flex gap-2 items-center flex-wrap mt-2">
        <p className="text-xs sm:text-sm font-semibold">Total Quantity:</p>
        <p
          className={`text-xs sm:text-sm font-bold ${totalQuantity < 12 && totalQuantity > 0 ? 'text-red-500' : totalQuantity >= 12 ? 'text-green-600' : 'text-gray-600'}`}
        >
          {totalQuantity} {totalQuantity === 1 ? 'shirt' : 'shirts'}
        </p>
        {totalQuantity < 12 && totalQuantity > 0 && (
          <p className="text-xs text-red-500">
            (Need {12 - totalQuantity} more)
          </p>
        )}
      </div>

      {/* Price display */}
      {formData.totalPrice > 0 && (
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center pt-2 border-t border-gray-200">
          <p className="text-xs sm:text-sm">Product Price:</p>
          <div className="flex items-center font-bold text-xs sm:text-sm flex-wrap gap-2">
            <p>${formData.pricePerShirt} / shirt</p>
            <span>•</span>
            <p>${formData.totalPrice} total</p>
          </div>
        </div>
      )}

      {/* Errors */}
      {errorData.hasError && (
        <p className="text-errorColor text-xs font-semibold">
          {errorData.message}
        </p>
      )}
    </div>
  );
};

export default React.memo(RequestAQuotePriceSection);
