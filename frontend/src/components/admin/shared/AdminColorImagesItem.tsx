import React from 'react';
import Image from 'next/image';

import AdminEditProductColorModal from '@/components/admin/shared/AdminEditProductColorModal';
import Close from '@/utilities/SVGs/Close';
import type { ColorImageType } from '@/utilities/types/AdminFormTypes';
import type { Color } from '@/utilities/types/shared.types';

type PropTypes = {
  allColors: Array<Color>;
  availableColorIndexes: string[];
  colorImage: ColorImageType;
  setColorImages: React.Dispatch<React.SetStateAction<ColorImageType[]>>;
  disabled?: boolean;
};

const AdminColorImagesItem: React.FC<PropTypes> = ({
  colorImage,
  setColorImages,
  disabled = false,
  availableColorIndexes,
  allColors,
}) => {
  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSortOrder = event.target.value;
    setColorImages((prev) =>
      prev.map((item) => {
        if (item.id === colorImage.id) {
          return {
            ...item,
            sortOrder: newSortOrder,
          };
        }
        return item;
      })
    );
  };

  const handleRemoveColorImageItem = () => {
    setColorImages((prev) => prev.filter((item) => item.id !== colorImage.id));
  };

  return (
    <div className="relative flex flex-col gap-4 bg-background5 p-4 rounded-xl drop-shadow-glowRed">
      {!disabled && (
        <span className="flex items-center w-fit h-fit justify-center absolute right-2 top-2 rounded-full">
          <button onClick={handleRemoveColorImageItem}>
            <Close width={23} height={23} color="#F52F57" />
          </button>
        </span>
      )}
      <div className="flex gap-4 items-center">
        <AdminEditProductColorModal
          setColorImages={setColorImages}
          disabled={disabled}
          allColors={allColors}
          colorImage={colorImage}
          handleRemoveColorImageItem={handleRemoveColorImageItem}
        />
        <select
          value={colorImage.sortOrder}
          className="select select-bordered"
          onChange={handleSortOrderChange}
        >
          {colorImage.sortOrder !== 'N/A' && <option value="N/A">N/A</option>}
          <option selected>{colorImage.sortOrder}</option>
          {availableColorIndexes.map((index) => (
            <option key={String(index)} value={String(index)}>
              {String(index)}
            </option>
          ))}
        </select>
        <p className="font-bold">{`${colorImage.name} ${!colorImage.isImage ? `(${colorImage.hexCode})` : ''}`}</p>
        {colorImage.isImage ? (
          <Image
            src={colorImage.imageUrl}
            width={100}
            height={100}
            alt="color"
            className="w-8 h-8 rounded border-[0.1rem] border-borderColor object-cover"
          />
        ) : (
          <div
            className="w-8 h-8 rounded border-[0.1rem] border-borderColor"
            style={{ backgroundColor: `${colorImage.hexCode}` }}
          />
        )}
      </div>
      <div className="flex gap-4">
        <Image
          src={
            URL.createObjectURL(colorImage.productColorImages[0]?.imageUrl) ||
            ''
          }
          width={100}
          height={100}
          alt="product image"
          className="w-auto h-[10rem] border-2 border-borderColor"
        />
        <div className="divider divider-horizontal" />
        <div className="flex flex-wrap gap-4">
          {colorImage.productColorImages
            .slice(1)
            .map((productColorImage, index) => (
              <div key={index} className="relative w-[10rem] h-[10rem]">
                <Image
                  src={URL.createObjectURL(productColorImage.imageUrl) || ''}
                  width={100}
                  height={100}
                  alt="product image"
                  className="w-auto h-[10rem] border-2 border-borderColor"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminColorImagesItem;
