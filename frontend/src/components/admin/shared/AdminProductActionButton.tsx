import React from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import type {
  ColorImageFromS3Type,
  ColorImageType,
  InputValues,
  ProductColors,
} from '@/utilities/types/AdminFormTypes';
import type { ProductColorImage } from '@/utilities/types/shared.types';

type PropTypes = {
  colorImages: Array<ColorImageType>;
  colorImagesFromS3: Array<ColorImageFromS3Type>;
  createProductOnServer: (
    inputValues: InputValues,
    productColors: Array<ProductColors>
  ) => Promise<number>;
  deletedColorImagesFromS3Url: Array<ColorImageFromS3Type>;
  inputValues: InputValues;
  productId: string;
  setShowLoadingModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  updateProductOnServer: (
    inputValues: InputValues,
    productColors: Array<ProductColors>,
    productId: string
  ) => Promise<void>;
};

const AdminProductActionButton: React.FC<PropTypes> = ({
  inputValues,
  colorImages,
  type,
  createProductOnServer,
  updateProductOnServer,
  productId,
  colorImagesFromS3,
  deletedColorImagesFromS3Url,
  setShowLoadingModal,
}) => {
  const router = useRouter();

  const hasEmptyInputValues = () => {
    if (!inputValues.name) {
      toast.error('Product name is required');
      return true;
    }

    if (!inputValues.description) {
      toast.error('Product description is required');
      return true;
    }

    if (!inputValues.slug) {
      toast.error('Product slug is required');
      return true;
    }
  };

  const onAddSubmit = async () => {
    setShowLoadingModal(true);

    if (hasEmptyInputValues()) {
      setShowLoadingModal(false);
      return;
    }

    try {
      const productColors = await uploadImagesToS3();
      await createProductOnServer(inputValues, productColors);
      toast.success('Product created successfully');
      router.push('/admin/products');
    } catch (error) {
      console.error(error);
      toast.error('Product was not created successfully');
      setShowLoadingModal(false);
    }
  };

  const onUpdateSubmit = async () => {
    setShowLoadingModal(true);

    if (hasEmptyInputValues()) {
      setShowLoadingModal(false);
      return;
    }

    try {
      const uploadedColorsWithImages = await uploadImagesToS3();
      await deleteImageFromS3();
      const productColors = [
        ...uploadedColorsWithImages,
        ...colorImagesFromS3
          .filter((item) => !deletedColorImagesFromS3Url.includes(item))
          .map((colorImage) => {
            return {
              colorId: colorImage.id,
              sortOrder: colorImage.sortOrder,
              productColorImages: colorImage.productColorImages.map(
                (productColorImage) => {
                  return {
                    imageUrl: productColorImage.imageUrl,
                    sortOrder: productColorImage.sortOrder,
                  };
                }
              ),
            };
          }),
      ];
      await updateProductOnServer(inputValues, productColors, productId);
      toast.success('Product updated successfully');
      router.push('/admin/products');
      setShowLoadingModal(false);
    } catch (error) {
      setShowLoadingModal(false);
      console.error(error);
      toast.error('Product was not updated successfully');
    }
  };

  const deleteImageFromS3 = async () => {
    deletedColorImagesFromS3Url.forEach(async (path) => {
      path.productColorImages.forEach(async (productColorImage) => {
        const formData = new FormData();
        formData.append('path', productColorImage.imageUrl);
        await fetch('/api/s3-delete', {
          method: 'DELETE',
          body: formData,
        });
      });
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (type === 'new') {
      await onAddSubmit();
    }

    if (type === 'edit') {
      await onUpdateSubmit();
    }
  };

  const uploadImagesToS3 = async () => {
    const productColors: ProductColors[] = await Promise.all(
      colorImages.map(async (colorImage) => {
        const productColorImages: ProductColorImage[] = await Promise.all(
          colorImage.productColorImages.map(async (productColorImage) => {
            const formDataFeatured = new FormData();
            formDataFeatured.append(
              'directory',
              `public/album/${inputValues.slug}/${colorImage.hexCode.replace('#', '')}`
            );
            formDataFeatured.append('file', productColorImage.imageUrl);

            const response = await fetch('/api/s3-upload', {
              method: 'POST',
              body: formDataFeatured,
            });

            if (!response.ok) {
              throw new Error(
                `Error uploading images from color ${colorImage.name} to S3`
              );
            }
            const responseJson = await response.json();
            return {
              imageUrl: responseJson.body,
              sortOrder: productColorImage.sortOrder,
            };
          })
        );

        return {
          colorId: colorImage.id,
          sortOrder: colorImage.sortOrder,
          productColorImages: productColorImages,
        };
      })
    );

    return productColors;
  };

  return (
    <form onSubmit={onSubmit}>
      {type !== 'view' && (
        <button
          className="btn fixed bottom-10 right-10 bg-buttonBackgroundColor border-buttonBackgroundColor"
          type="submit"
        >
          {type === 'new' && 'Add Product'}
          {type === 'edit' && 'Update Product'}
        </button>
      )}
    </form>
  );
};

export default AdminProductActionButton;
