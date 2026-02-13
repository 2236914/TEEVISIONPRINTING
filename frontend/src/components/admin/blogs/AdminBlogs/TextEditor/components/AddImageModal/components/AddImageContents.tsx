import React, { useState } from 'react';
import Image from 'next/image';

import type { AddImageAsset } from '@/utilities/types/AdminFormTypes';
import type { ImageAsset } from '@/utilities/types/shared.types';

type PropTypes = {
  addImageAssetOnServer: (imageAsset: AddImageAsset) => Promise<void>;
  assetImages: Array<ImageAsset>;
  deleteImageAssetsOnServer: (imageAssetIds: number[]) => Promise<void>;
  onImportImageButtonClicked: (imageUrl: string) => void;
};

const AddImageContents: React.FC<PropTypes> = ({
  assetImages,
  addImageAssetOnServer,
  deleteImageAssetsOnServer,
  onImportImageButtonClicked,
}) => {
  const [selectedImages, setSelectedImages] = useState<ImageAsset[]>([]);

  const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append('directory', `public/album/blogs/assets`);
    formData.append('file', image);
    const response = await fetch('/api/s3-upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.body;
    }
    return null;
  };

  const deleteImageFromS3 = async (path: string) => {
    try {
      const formData = new FormData();
      formData.append('path', path);
      await fetch('/api/s3-delete', {
        method: 'DELETE',
        body: formData,
      });
      return;
    } catch (error) {
      console.error('Error deleting image from S3:', error);
      return;
    }
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imagesArray = Array.from(files);
      imagesArray.forEach(async (image) => {
        const imageUrl = await uploadImage(image);
        const imageAsset: AddImageAsset = {
          imageUrl: imageUrl,
        };
        await addImageAssetOnServer(imageAsset);
      });
    }
  };

  const onDeleteButtonClicked = () => {
    const imageAssetIds = selectedImages.map((image) => image.id);
    const imageUrls = selectedImages.map((image) => image.imageUrl);
    try {
      void deleteImageAssetsOnServer(imageAssetIds);
      imageUrls.forEach((imageUrl) => {
        void deleteImageFromS3(imageUrl);
      });
      setSelectedImages([]);
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleSelectedImage = (image: ImageAsset) => {
    if (
      selectedImages.find(
        (selectedImage) => selectedImage.imageUrl === image.imageUrl
      )
    ) {
      const newSelectedImages = selectedImages.filter(
        (selectedImage) => selectedImage.imageUrl !== image.imageUrl
      );
      setSelectedImages(newSelectedImages);
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };

  return (
    <div className="w-[60rem] h-[40rem]">
      <div className="flex gap-4 p-4">
        <label className="btn bg-primaryT">
          Add an image
          <input
            onChange={onImageChange}
            type="file"
            className="hidden"
            multiple
          />
        </label>
        <button
          type="button"
          disabled={selectedImages.length < 1}
          style={{
            backgroundColor: selectedImages.length < 1 ? '#E7E8E3' : '#CC183C',
            color: selectedImages.length < 1 ? '#808080' : 'white',
          }}
          onClick={onDeleteButtonClicked}
        >
          Delete selected images
        </button>
      </div>
      <div className="p-8 border-2 border-borderColor h-full">
        <div className="flex gap-2 flex-wrap">
          {assetImages.map((image, index) => (
            <div
              onClick={() => handleSelectedImage(image)}
              key={index}
              role="button"
              tabIndex={0}
              onKeyDown={() => handleSelectedImage(image)}
              className="relative cursor-pointer"
            >
              <div
                className={`p-4 rounded-lg flex flex-col gap-2 ${
                  selectedImages.find(
                    (selectedImage) => selectedImage.imageUrl === image.imageUrl
                  )
                    ? 'bg-primaryT'
                    : 'bg-background5'
                }`}
              >
                <Image
                  src={image.imageUrl}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-auto h-[9rem]"
                />
                <button
                  type="button"
                  onClick={() => onImportImageButtonClicked(image.imageUrl)}
                  className="btn"
                  style={{ backgroundColor: '#231F20', color: 'white' }}
                >
                  Import
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddImageContents;
