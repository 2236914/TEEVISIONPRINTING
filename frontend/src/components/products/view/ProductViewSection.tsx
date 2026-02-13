'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import ProductImageSection from '@/components/products/view/ProductImageSection/ProductImageSection';
import ProductViewColorPickerSection from '@/components/products/view/ProductViewColorPickerSection';
import RequestAQuoteModal from '@/components/shared/RequestAQuoteModal/RequestAQuoteModal';
import { addQuoteOnServer } from '@/server-actions/quote-action';
import Roboto from '@/utilities/fonts/Roboto';
import type { Product } from '@/utilities/types/shared.types';

type PropTypes = {
  product: Product;
};

/* eslint-disable id-length */
const initialData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  dueDate: '',
  product: '',
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
  frontNumberOfColors: 0,
  backNumberOfColors: 0,
  createArtwork: false,
  needDesigner: false,
  additionalNotes: '',
  event: '',
  color: '',
  hasSpecialRequest: false,
  artworkImageUrl: '',
  pricePerShirt: 0,
  totalPrice: 0,
};
/* eslint-enable id-length */

const ProductViewSection: React.FC<PropTypes> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
  };

  return (
    <div className={`flex w-full gap-4 pt-8 xl:pt-12`}>
      <div className="flex flex-col w-full justify-center">
        <div className="flex xl:gap-8 flex-col xl:flex-row justify-center items-center xl:items-start min-h-screen pt-24 p-4">
          <div className="flex flex-col gap-4 h-full xl:w-fit w-full">
            <div className="breadcrumbs text-sm justify-self-start xl:pl-0 pl-8 overflow-hidden">
              <ul>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <p className="truncate w-[10rem] xl:break-normal xl:w-auto">
                    {product.name}
                  </p>
                </li>
              </ul>
            </div>
            <ProductImageSection productColors={product.colors} />
          </div>
          <div className="flex flex-col gap-8 max-w-[40rem] px-2 pt-4 xl:pt-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-[0.2rem]">
                <h1
                  className={`${Roboto} text-3xl font-bold text-center xl:text-left`}
                >
                  {product.name}
                </h1>
                <h2 className="text-sm text-center xl:text-left">
                  {product.brand.name}, {product.style.name}
                </h2>
              </div>
              <ProductViewColorPickerSection
                colors={product.colors}
                onColorSelect={handleColorSelect}
              />
              <div>
                <h3 className="opacity-60 text-center xl:text-left">
                  {product.description}
                </h3>
              </div>
              <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 xl:gap-2">
                <p className="text-xs pt-[0.1rem] font-bold xl:font-normal">
                  AVAILABLE SIZES:
                </p>
                <div className="flex justify-center xl:justify-start flex-wrap gap-2">
                  {product.availableSizes.map((size) => (
                    <span key={size.name} className="badge text-xs">
                      {size.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center xl:justify-start">
              <RequestAQuoteModal
                products={[
                  {
                    id: product.id,
                    name: product.name,
                    colors: product.colors,
                    availableSizes: product.availableSizes.map(
                      (size) => size.name
                    ),
                  },
                ]}
                initialData={initialData}
                addQuoteOnServer={addQuoteOnServer}
                currentProduct={product.name}
                currentProductColor={selectedColor}
              >
                <div
                  className={`${Roboto} bg-primaryT border-primaryT font-bold border-2 w-fit py-2 px-6 rounded-md text-[1rem] hover:scale-105 transition-transform duration-300`}
                >
                  Submit an order
                </div>
              </RequestAQuoteModal>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-32">
          <div className="flex flex-col max-w-[60rem] w-full mt-8">
            <h4
              className={`${Roboto} text-lg text-center font-bold pb-4 hidden xl:block`}
            >
              ADDITIONAL INFORMATION
            </h4>
            <div className="collapse collapse-plus py-2 border-b-2 border-borderColor rounded-none">
              <input type="checkbox" />
              <div className="collapse-title">SIZE MEASUREMENTS</div>
              <div className="collapse-content overflow-y-hidden overflow-x-auto">
                <table className="table table-xs xl:table-md align-middle text-center">
                  <thead>
                    <tr className="text-wrap">
                      <th />
                      {product.availableClotheSizeParts
                        .filter((temp) => temp.value)
                        .map((sizePart) => (
                          <th key={sizePart.name}>{sizePart.name}</th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.availableSizes
                      .filter((temp) => temp.value)
                      .map((size) => (
                        <tr key={size.name}>
                          <td className="font-bold">{size.name}</td>
                          {product.availableClotheSizeParts
                            .filter((temp) => temp.value)
                            .map((sizePart) => (
                              <td key={`${size.name}-${sizePart.name}`}>
                                {product.sizesInfo[size.name][sizePart.name]}
                              </td>
                            ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="collapse collapse-plus py-2 border-b-2 border-borderColor rounded-none">
              <input type="checkbox" />
              <div className="collapse-title text-md">FEATURES</div>
              <div className="collapse-content">
                <ul className="pl-4">
                  {product.featuresInfoItems.map((feature) => (
                    <li key={feature}>
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="collapse collapse-plus py-2 border-b-2 border-borderColor rounded-none">
              <input type="checkbox" />
              <div className="collapse-title text-md">FIBER</div>
              <div className="collapse-content">
                <ul className="pl-4">
                  {product.fiberInfoItems.map((fiber) => (
                    <li key={fiber}>
                      <span className="mr-2">•</span>
                      {fiber}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewSection;
