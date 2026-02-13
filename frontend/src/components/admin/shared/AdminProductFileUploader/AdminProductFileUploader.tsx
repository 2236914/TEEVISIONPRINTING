'use client';

import React from 'react';
import Image from 'next/image';

import DragDropClickZone from '@/components/admin/shared/AdminProductFileUploader/DragDropClickZone';
import Close from '@/utilities/SVGs/Close';
import type { ProductColorImageFile } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  defaultImages: ProductColorImageFile[];
  featuredImage: ProductColorImageFile[];
  setDefaultImages: React.Dispatch<
    React.SetStateAction<ProductColorImageFile[]>
  >;
  setFeaturedImage: React.Dispatch<
    React.SetStateAction<ProductColorImageFile[]>
  >;
};

const AdminProductFileUploader: React.FC<PropTypes> = ({
  defaultImages,
  featuredImage,
  setDefaultImages,
  setFeaturedImage,
}) => {
  const sortOrderNumbersUsed: string[] = [
    '1',
    ...defaultImages.map((image) => image.sortOrder),
  ];

  //an array of indexes up to the length that is not used
  const availableImageOrderIndexes = Array.from(
    { length: defaultImages.length + 1 },
    (__, idx) => String(idx + 1)
  ).filter((index) => !sortOrderNumbersUsed.includes(index));

  const handleRemoveFeaturedImage = () => {
    setFeaturedImage([]);
  };

  const handleRemoveDefaultImage = (index: number) => {
    setDefaultImages((prev) => prev.filter((__, idx) => idx !== index));
  };

  const featuredImageFilesOnChange = (files: File[]) => {
    const tempFiles = files.map((file) => ({
      imageUrl: file,
      sortOrder: '1',
    }));
    setFeaturedImage(tempFiles);
  };

  const defaultImageFilesOnChange = (files: File[]) => {
    const tempFiles = files.map((file, idx) => {
      const currentDefaultImage = defaultImages.find(
        (image) => image.imageUrl === file
      );

      if (currentDefaultImage) {
        return currentDefaultImage;
      }

      return {
        imageUrl: file,
        sortOrder: String(defaultImages.length + 2 + idx),
      };
    });

    setDefaultImages(tempFiles);
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newSortOrder = event.target.value;
    setDefaultImages((prev) =>
      prev.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            sortOrder: newSortOrder,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-4">
        <p className="font-bold">Featured Image</p>
        <div className="flex gap-4 w-full">
          <DragDropClickZone
            files={featuredImage.map((file) => file.imageUrl)}
            filesOnChange={featuredImageFilesOnChange}
            disabled={featuredImage.length >= 1}
          />
          <div className="divider divider-horizontal" />
          <div>
            {featuredImage[0] && (
              <div className="flex flex-col gap-2">
                <select
                  value={featuredImage[0].sortOrder}
                  className="select select-bordered select-sm"
                  disabled
                >
                  <option value="1">1</option>
                </select>
                <div className="relative">
                  <span className="flex items-center justify-center absolute -right-[0.5rem] -top-[0.5rem] text-xs rounded-full bg-white">
                    <button onClick={handleRemoveFeaturedImage}>
                      <Close width={23} height={23} color="#F52F57" />
                    </button>
                  </span>
                  <Image
                    src={URL.createObjectURL(featuredImage[0].imageUrl) || ''}
                    width={100}
                    height={100}
                    alt="product image"
                    className="w-auto h-[10rem] border-2 border-borderColor"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="flex flex-col gap-4">
        <p className="font-bold">Images</p>
        <div className="flex gap-4">
          <div className="min-w-[10rem]">
            <DragDropClickZone
              files={defaultImages.map((file) => file.imageUrl)}
              filesOnChange={defaultImageFilesOnChange}
            />
          </div>
          <div className="divider divider-horizontal" />
          <div className="flex flex-wrap gap-4">
            {defaultImages
              .sort((i1, i2) => {
                if (i1.sortOrder === 'N/A' && i2.sortOrder !== 'N/A') {
                  return 1; // Move a to the end
                }
                if (i1.sortOrder !== 'N/A' && i2.sortOrder === 'N/A') {
                  return -1; // Move b to the end
                }
                return Number(i1.sortOrder) - Number(i2.sortOrder);
              })
              .map((file, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <select
                    value={file.sortOrder}
                    onChange={(event) => handleSortOrderChange(event, index)}
                    className="select select-bordered select-sm"
                  >
                    {file.sortOrder !== 'N/A' && (
                      <option value="N/A">N/A</option>
                    )}
                    <option selected>{file.sortOrder}</option>
                    {availableImageOrderIndexes.map((index) => (
                      <option key={String(index)} value={String(index)}>
                        {String(index)}
                      </option>
                    ))}
                  </select>
                  <div key={index} className="relative">
                    <span className="flex items-center justify-center absolute -right-[0.5rem] -top-[0.5rem] text-xs rounded-full bg-white">
                      <button onClick={() => handleRemoveDefaultImage(index)}>
                        <Close width={23} height={23} color="#F52F57" />
                      </button>
                    </span>
                    <div className="flex flex-col gap-2">
                      <Image
                        src={URL.createObjectURL(file.imageUrl) || ''}
                        width={100}
                        height={100}
                        alt="product image"
                        className="w-auto h-[10rem] border-2 border-borderColor"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductFileUploader;
