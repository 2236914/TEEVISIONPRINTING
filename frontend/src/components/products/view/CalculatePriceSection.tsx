/* eslint-disable id-length */
'use client';

import React, { useEffect, useState } from 'react';

import type { AxiosError } from 'axios';

import { calculateFinalPrice } from '@/utilities/fetch/product';
import type { PriceVariablesData } from '@/utilities/types/CalculateTotalProductPriceTypes';
import type { ErrorMessage, Product } from '@/utilities/types/shared.types';
import useWindowSize from '@/utilities/useWindowSize';

type PropTypes = {
  product: Product;
};

type ErrorDataType = {
  hasError: boolean;
  message: string;
};

const CalculatePriceSection: React.FC<PropTypes> = ({ product }) => {
  const { width: windowWidthSize } = useWindowSize();

  const numberOfColumnsPerRow =
    windowWidthSize < 640 ? 3 : windowWidthSize < 768 ? 4 : 5;
  const numberOfRows = Math.ceil(
    product.availableSizes.length / numberOfColumnsPerRow
  );
  const [priceVariablesData, setPriceVariablesData] =
    useState<PriceVariablesData>({
      quantityBySizes: {
        XS: 0,
        S: 0,
        M: 0,
        LG: 0,
        XL: 0,
        '2XL': 0,
        '3XL': 0,
        '4XL': 0,
        '5XL': 0,
      },
      frontNumberOfColors: 1,
      backNumberOfColors: 1,
      productId: product.id,
    });

  const totalQuantity = Object.values(
    priceVariablesData.quantityBySizes
  ).reduce((acc, quantity) => acc + quantity, 0 as number);

  const [finalPrice, setFinalPrice] = React.useState<number>(0);
  const [pricePerUnit, setPricePerUnit] = useState<number>(0);
  const [errorData, setErrorData] = React.useState<ErrorDataType>({
    hasError: false,
    message: '',
  });

  const handleQuantityInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    size: string
  ) => {
    setPriceVariablesData({
      ...priceVariablesData,
      quantityBySizes: {
        ...priceVariablesData.quantityBySizes,
        [size]: parseInt(event.target.value),
      },
    });
  };

  const handleColorsInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const colorType = event.target.name;
    setPriceVariablesData({
      ...priceVariablesData,
      [colorType]: parseInt(event.target.value),
    });
  };

  useEffect(() => {
    const calculateFinalPriceTriggered = async () => {
      calculateFinalPrice(priceVariablesData)
        .then((finalPriceFetched) => {
          setErrorData({
            hasError: false,
            message: '',
          });
          const numberFinalPriceFetched = Number(finalPriceFetched);

          setPricePerUnit(
            Math.round((numberFinalPriceFetched / totalQuantity) * 100) / 100
          );
          setFinalPrice(Math.round(numberFinalPriceFetched * 100) / 100);
        })

        .catch((error: AxiosError<ErrorMessage>) => {
          if (error.response) {
            setErrorData({
              hasError: true,
              message: 'There is something wrong in your input',
            });
            setPricePerUnit(0);
            setFinalPrice(0);
          }
        });
    };

    let hasError = false;

    if (
      Number.isNaN(priceVariablesData.backNumberOfColors) ||
      Number.isNaN(priceVariablesData.frontNumberOfColors)
    ) {
      hasError = true;
      setErrorData({
        hasError: true,
        message: 'Number of colors should not be empty',
      });
      setPricePerUnit(0);
      setFinalPrice(0);
    } else if (
      priceVariablesData.backNumberOfColors +
        priceVariablesData.frontNumberOfColors ===
      0
    ) {
      hasError = true;
      setErrorData({
        hasError: true,
        message: 'There should be at least be one color',
      });
      setPricePerUnit(0);
      setFinalPrice(0);
    } else if (totalQuantity === 0) {
      hasError = true;
      setErrorData({
        hasError: true,
        message: 'Your total quantity should not be 0',
      });
      setPricePerUnit(0);
      setFinalPrice(0);
    } else if (priceVariablesData.frontNumberOfColors > 8) {
      hasError = true;
      setErrorData({
        hasError: true,
        message: 'Number of front colors should not exceed 8',
      });
    } else if (priceVariablesData.backNumberOfColors > 8) {
      hasError = true;
      setErrorData({
        hasError: true,
        message: 'Number of back colors should not exceed 8',
      });
    }

    if (!hasError) {
      void calculateFinalPriceTriggered();
    }
  }, [priceVariablesData, totalQuantity]);

  return (
    <div className="flex flex-col items-center xl:items-start w-full gap-4">
      <table className="xl:text-right">
        <tbody>
          {[...Array(numberOfRows)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {product.availableSizes
                .slice(
                  rowIndex * numberOfColumnsPerRow,
                  rowIndex * numberOfColumnsPerRow + numberOfColumnsPerRow
                )
                .map((size) => (
                  <td className="p-2" key={size.name}>
                    <div
                      className="flex xl:w-[5rem] items-center justify-end gap-2"
                      key={size.name}
                    >
                      <p className="text-xs">{size.name}:</p>
                      <input
                        className="input input-sm input-bordered w-[3rem] text-xs"
                        type="number"
                        onChange={(event) =>
                          handleQuantityInputOnChange(event, size.name)
                        }
                        value={priceVariablesData.quantityBySizes[size.name]}
                      />
                    </div>
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-8">
        <div className="flex items-center gap-4 text-xs">
          <p>Number Of Front Colors:</p>
          <input
            className="input input-sm input-bordered w-[3rem] text-xs"
            name="frontNumberOfColors"
            type="number"
            onChange={handleColorsInputOnChange}
            value={priceVariablesData.frontNumberOfColors}
          />
        </div>
        <div className="flex items-center gap-4 text-xs">
          <p>Number Of Back Colors:</p>
          <input
            className="input input-sm input-bordered w-[3rem] text-xs"
            name="backNumberOfColors"
            type="number"
            onChange={handleColorsInputOnChange}
            value={priceVariablesData.backNumberOfColors}
          />
        </div>
      </div>
      <div className="flex w-full flex-col xl:flex-row gap-4 justify-center xl:justify-start items-center pt-4">
        {finalPrice > 0 && (
          <div className="flex flex-col xl:flex-row items-center gap-4">
            <p className="font-bold xl:font-normal">Product Price</p>
            <div className="flex items-center font-bold">
              <p>${pricePerUnit} / shirt</p>
              <div className="divider divider-horizontal" />
              <p>${finalPrice} total</p>
            </div>
          </div>
        )}
        {errorData.hasError && (
          <p className="text-errorColor text-xs">{errorData.message}</p>
        )}
      </div>
    </div>
  );
};

export default CalculatePriceSection;
