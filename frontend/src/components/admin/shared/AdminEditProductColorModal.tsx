'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

import AdminProductFileUploader from '@/components/admin/shared/AdminProductFileUploader/AdminProductFileUploader';
import { isColorDark } from '@/utilities/helpers/colorUtils';
import Search from '@/utilities/SVGs/Search';
import type {
  ColorImageFromS3Type,
  ColorImageType,
  ProductColorImageFile,
} from '@/utilities/types/AdminFormTypes';
import type { Color } from '@/utilities/types/shared.types';

type PropTypes = {
  allColors: Array<Color>;
  handleRemoveColorImageItem: () => void;
  setColorImages: React.Dispatch<React.SetStateAction<Array<ColorImageType>>>;
  colorImage?: ColorImageType;
  colorImageS3?: ColorImageFromS3Type;
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

const AdminEditProductColorModal: React.FC<PropTypes> = ({
  setColorImages,
  disabled = false,
  allColors,
  colorImage,
  colorImageS3,
  handleRemoveColorImageItem,
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

  const filteredColors = useMemo(() => {
    if (!searchTagName) {
      return allColors;
    }

    return allColors.filter((color) => {
      return color.tags.some((tag) =>
        tag.toLowerCase().includes(searchTagName.toLowerCase())
      );
    });
  }, [allColors, searchTagName]);

  const convertUrlToImageFile = async (url: string) => {
    const splittedUrl = url.split('/');
    const fileName = splittedUrl[splittedUrl.length - 1];
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'image/jpeg',
          'Access-Control-Allow-Origin': '*',
        },
      });
      const data = await response.blob();
      const metadata = {
        type: 'image/jpeg',
      };
      const file = new File([data], fileName, metadata);
      return file;
    } catch (error) {
      console.error('Error converting url to image file:', error);
      return new File([], '');
    }
  };

  useEffect(() => {
    const fetchFeatureImages = async () => {
      if (colorImageS3) {
        const promiseFeatureImages = colorImageS3.productColorImages
          .filter((image) => image.sortOrder === '1')
          .map(async (image) => ({
            ...image,
            imageUrl: await convertUrlToImageFile(image.imageUrl),
          }));

        const featureImages = await Promise.all(promiseFeatureImages);
        setFeaturedImage(featureImages);
      }

      if (colorImage) {
        setFeaturedImage(colorImage.productColorImages);
      }
    };

    const fetchDefaultImages = async () => {
      if (colorImageS3) {
        const promiseDefaultImages = colorImageS3.productColorImages
          .filter((image) => image.sortOrder !== '1')
          .map(async (image) => ({
            ...image,
            imageUrl: await convertUrlToImageFile(image.imageUrl),
          }));

        const defaultImages = await Promise.all(promiseDefaultImages);
        setDefaultImages(defaultImages);
      }

      if (colorImage) {
        setDefaultImages(colorImage.productColorImages.slice(1));
      }
    };

    const updateColor = async () => {
      if (!disabled && colorImageS3) {
        const color = allColors.find(
          (color) => color.id === colorImageS3.id
        ) as Color;
        setSelectedColor(color);
      }

      if (!disabled && colorImage) {
        const color = allColors.find(
          (color) => color.id === colorImage.id
        ) as Color;
        setSelectedColor(color);
      }
    };

    void fetchFeatureImages();
    void fetchDefaultImages();
    void updateColor();
  }, [allColors, colorImage, colorImageS3, disabled]);

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

    const sortOrder = colorImage?.sortOrder
      ? colorImage.sortOrder
      : colorImageS3?.sortOrder
        ? colorImageS3.sortOrder
        : 'N/A';

    const color: ColorImageType = {
      ...selectedColor,
      sortOrder: sortOrder,
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

    if (colorImage) {
      setColorImages((prev) => {
        const newColorImages = prev.map((prevColor) => {
          if (prevColor.id === color.id) {
            return color;
          }
          return prevColor;
        });
        return newColorImages;
      });
    }

    if (colorImageS3) {
      setColorImages((prev) => {
        return [...prev, color];
      });

      handleRemoveColorImageItem();
    }

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
        className="btn"
        disabled={disabled}
      >
        Edit
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

export default AdminEditProductColorModal;
