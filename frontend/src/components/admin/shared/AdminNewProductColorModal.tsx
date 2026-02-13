'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

import AdminProductFileUploader from '@/components/admin/shared/AdminProductFileUploader/AdminProductFileUploader';
import { isColorDark } from '@/utilities/helpers/colorUtils';
import Search from '@/utilities/SVGs/Search';
import type {
  ColorImageType,
  ProductColorImageFile,
} from '@/utilities/types/AdminFormTypes';
import type { Color } from '@/utilities/types/shared.types';

type PropTypes = {
  allColors: Array<Color>;
  numberOfColorsUsed: number;
  setColorImages: React.Dispatch<React.SetStateAction<Array<ColorImageType>>>;
  disabled?: boolean;
};

const defaultColor: Color = {
  id: 0,
  name: '',
  hexCode: '',
  isActive: true,
  sortOrder: 'N/A',
  productColorImages: [],
  tags: [],
  isImage: false,
  imageUrl: '',
};

const AdminNewProductColorModal: React.FC<PropTypes> = ({
  setColorImages,
  disabled = false,
  numberOfColorsUsed,
  allColors,
}) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<any>(null);
  const [selectedColor, setSelectedColor] = useState<Color>(defaultColor);

  const [featuredImage, setFeaturedImage] = useState<ProductColorImageFile[]>(
    []
  );
  const [defaultImages, setDefaultImages] = useState<ProductColorImageFile[]>(
    []
  );
  const [searchTagName, setSearchTagName] = useState('');

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTagName(event.target.value);
    setSelectedColor(defaultColor);
  };

  const isSaveButtonDisabled = useMemo(() => {
    return (
      selectedColor === defaultColor ||
      featuredImage.length === 0 ||
      defaultImages.length === 0
    );
  }, [selectedColor, featuredImage, defaultImages]);

  const colorOnSave = () => {
    if (
      selectedColor === defaultColor ||
      featuredImage.length === 0 ||
      defaultImages.length === 0
    ) {
      return;
    }

    const color: ColorImageType = {
      ...selectedColor,
      sortOrder: String(numberOfColorsUsed + 1),
      productColorImages: [
        {
          sortOrder: '1',
          imageUrl: featuredImage[0].imageUrl,
        },
        ...defaultImages.map((image) => ({
          sortOrder: image.sortOrder,
          imageUrl: image.imageUrl,
        })),
      ],
    };

    setColorImages((prev) => {
      return [...prev, color];
    });

    setSelectedColor(defaultColor);
    setFeaturedImage([]);
    setDefaultImages([]);

    setShowModal(false);
  };

  const colorSelectOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColorId = event.target.value;
    const color =
      allColors.find((color) => String(color.id) === selectedColorId) ||
      defaultColor;
    const currentColor: Color = {
      id: color.id,
      name: color.name,
      hexCode: color.hexCode,
      isActive: color.isActive,
      sortOrder: color.sortOrder,
      productColorImages: [],
      tags: [],
      isImage: color.isImage,
      imageUrl: color.imageUrl,
    };

    setSelectedColor(currentColor);
  };

  const filteredColors = useMemo(() => {
    if (!searchTagName) {
      return allColors;
    }

    return allColors.filter((color) => {
      return color.tags.some(
        (tag) =>
          // tag.toLowerCase().includes(searchTagName.toLowerCase())
          tag
      );
    });
  }, [allColors, searchTagName]);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    showModal ? modalRef.current.showModal() : modalRef.current.close();
  }, [showModal]);
  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="btn bg-background5 border-background5 w-[10rem]"
        disabled={disabled}
      >
        Add a color
      </button>
      <dialog ref={modalRef} id="AdminNewProductColorModal" className="modal">
        <div className="modal-box w-[70rem] max-w-[70rem]">
          <form method="dialog">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex gap-4">
                <label className="input input-sm input-bordered flex items-center gap-2 h-[3rem] bg-transparent">
                  <Search width={20} height={20} color="#A9A9A9" />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Search by tag"
                    onChange={onSearchChange}
                    value={searchTagName}
                  />
                </label>
                <select
                  className="select select-bordered w-[20rem]"
                  onChange={colorSelectOnChange}
                  value={selectedColor.id}
                >
                  <option value={0} disabled>
                    Select a color
                  </option>
                  {filteredColors.map((color) => (
                    <option
                      key={color.id}
                      value={color.id}
                      style={{
                        backgroundColor: `${color.hexCode}`,
                        color: isColorDark(color.hexCode) ? 'white' : 'black',
                      }}
                    >
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
              {selectedColor.id !== 0 && (
                <div className="flex gap-2 items-center">
                  <span>Current Color:</span>
                  {selectedColor.isImage ? (
                    <Image
                      src={selectedColor.imageUrl}
                      width={100}
                      height={100}
                      alt="color"
                      className="w-6 h-6 rounded object-cover"
                    />
                  ) : (
                    <div
                      className="w-6 h-6 rounded"
                      style={{ backgroundColor: `${selectedColor.hexCode}` }}
                    />
                  )}
                </div>
              )}
            </div>
            <AdminProductFileUploader
              featuredImage={featuredImage}
              defaultImages={defaultImages}
              setFeaturedImage={setFeaturedImage}
              setDefaultImages={setDefaultImages}
            />
            <div className="flex justify-end">
              <button
                className="btn w-[8rem] bg-primaryMinimalist"
                onClick={colorOnSave}
                disabled={isSaveButtonDisabled}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AdminNewProductColorModal;
