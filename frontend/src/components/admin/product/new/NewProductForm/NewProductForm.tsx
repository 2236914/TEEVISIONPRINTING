'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import ProductPrices from '@/components/admin/product/new/NewProductForm/ProductPrices/ProductPrices';
import AdminColorImagesFromS3Item from '@/components/admin/shared/AdminColorImagesFromS3Item';
import AdminColorImagesItem from '@/components/admin/shared/AdminColorImagesItem';
import AdminInputWithLabel from '@/components/admin/shared/AdminInputWithLabel';
import AdminNewProductColorModal from '@/components/admin/shared/AdminNewProductColorModal';
import AdminProductActionButton from '@/components/admin/shared/AdminProductActionButton';
import AdminProductCategory from '@/components/admin/shared/AdminProductCategory';
import AdminProductFits from '@/components/admin/shared/AdminProductFits';
import AdminProductPackagingType from '@/components/admin/shared/AdminProductPackagingType';
import AdminProductSelect from '@/components/admin/shared/AdminProductSelect';
import AdminProductSizesInfo from '@/components/admin/shared/AdminProductSizeInfo';
import AdminProductTag from '@/components/admin/shared/AdminProductTag/AdminProductTag';
import AdminProductVisibilityRadio from '@/components/admin/shared/AdminProductVisibilityRadio';
import AdminProductVisibleInHomePage from '@/components/admin/shared/AdminProductVisibleInHomePage';
import AdminToggleWithBody from '@/components/admin/shared/AdminToggleWithBody';
import LoadingModal from '@/components/shared/LoadingModal';
import type {
  ColorImageFromS3Type,
  ColorImageType,
  InputValues,
  ProductColors,
} from '@/utilities/types/AdminFormTypes';
import type {
  Brand,
  Category,
  Color,
  Fit,
  Style,
} from '@/utilities/types/shared.types';

type PropTypes = {
  allColors: Array<Color>;
  brands: Array<Brand>;
  categories: Array<Category>;
  colors: Array<ColorImageFromS3Type>;
  createProductOnServer: (
    inputValues: InputValues,
    productColors: Array<ProductColors>
  ) => Promise<number>;
  fits: Array<Fit>;
  initialValues: InputValues;
  pageHeader: string;
  styles: Array<Style>;
  type: 'new' | 'edit' | 'view';
  updateProductOnServer: (
    inputValues: InputValues,
    productColors: Array<ProductColors>,
    productId: string
  ) => Promise<void>;
  productId?: string;
};

const NewProductForm: React.FC<PropTypes> = ({
  createProductOnServer,
  updateProductOnServer,
  type = 'new',
  initialValues,
  colors,
  productId,
  categories,
  brands,
  styles,
  fits,
  pageHeader,
  allColors,
}) => {
  const [inputValues, setInputValues] = useState<InputValues>(initialValues);
  const [colorImages, setColorImages] = useState<Array<ColorImageType>>([]);
  const [colorImagesFromS3, setColorImagesFromS3] =
    useState<Array<ColorImageFromS3Type>>(colors);
  const [deletedColorImagesFromS3Url, setDeletedColorImagesFromS3Url] =
    useState<Array<ColorImageFromS3Type>>([]);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  
  const numberOfColorsUsed = colorImages.length + colorImagesFromS3.length;
  const sortOrderNumbersUsed = [
    ...colorImages.map((colorImage) => colorImage.sortOrder),
    ...colorImagesFromS3.map((colorImage) => colorImage.sortOrder),
  ];
  
  const availableColorIndexes = Array.from(
    { length: numberOfColorsUsed },
    (__, idx) => String(idx + 1)
  ).filter((index) => !sortOrderNumbersUsed.includes(index));

  return (
    <div className="flex flex-col gap-8 bg-background5 p-16 ml-64">
      <LoadingModal
        showModal={showLoadingModal}
        textTitle={
          type === 'new'
            ? `Your product is being added`
            : `Your product is being updated`
        }
        textContent="Please wait while we process your request"
      />
      <div className="flex gap-8 items-center text-4xl font-bold bg-background4 p-8 rounded-lg">
        <h1>{pageHeader}</h1>
        {type === 'view' && (
          <Link href={`/admin/products/edit/${productId}`}>
            <button className="btn bg-buttonBackgroundColor">
              Make product editable
            </button>
          </Link>
        )}
        {type === 'edit' && (
          <Link href={`/admin/products/view/${productId}`}>
            <button className="btn bg-buttonBackgroundColor">
              Make product uneditable
            </button>
          </Link>
        )}
      </div>
      <div className="flex flex-col w-full gap-8">
        <div className="flex gap-8">
          <div className="flex flex-col gap-8 flex-grow">
            <div className="flex flex-col gap-4 p-8 rounded bg-background4">
              <AdminInputWithLabel
                label="Product Name"
                placeholder="Input the name here"
                name="name"
                inputValues={inputValues}
                setInputValues={setInputValues}
                disabled={type === 'view'}
              />
              <AdminInputWithLabel
                label="Meta Title"
                placeholder="Input the meta title here (for SEO)"
                name="metaTitle"
                inputValues={inputValues}
                setInputValues={setInputValues}
                disabled={type === 'view'}
              />
              <AdminProductVisibilityRadio
                inputValues={inputValues}
                setInputValues={setInputValues}
                disabled={type === 'view'}
              />
            </div>
            <div className="flex flex-col gap-4 p-8 rounded bg-background4">
              <AdminProductVisibleInHomePage
                inputValues={inputValues}
                setInputValues={setInputValues}
                disabled={type === 'view'}
              />
            </div>
            <div className="flex flex-col gap-4 p-8 rounded bg-background4">
              <AdminInputWithLabel
                label="Description"
                placeholder="Input the description here"
                name="description"
                inputValues={inputValues}
                setInputValues={setInputValues}
                disabled={type === 'view'}
              />
            </div>
            <div className="flex flex-col gap-4 p-8 rounded bg-background4">
              <AdminInputWithLabel
                label="Slug"
                placeholder="Input the slug here"
                name="slug"
                inputValues={inputValues}
                setInputValues={setInputValues}
                disabled={type === 'view'}
              />
            </div>
            <div className="flex flex-col gap-4 p-8 rounded bg-background4">
              <AdminToggleWithBody
                inputValues={inputValues}
                setInputValues={setInputValues}
                toggleName="hasFiberInfo"
                toggleLabel="Is info on Fiber shown?"
                itemsName="fiberInfoItems"
                disabled={type === 'view'}
              />
            </div>
            <div className="flex flex-col gap-4 p-8 rounded bg-background4">
              <AdminToggleWithBody
                inputValues={inputValues}
                setInputValues={setInputValues}
                toggleName="hasFeaturesInfo"
                toggleLabel="Is info on Features shown?"
                itemsName="featureInfoItems"
                disabled={type === 'view'}
              />
            </div>
            <div className="p-8 rounded bg-background4">
              <AdminProductPackagingType
                inputValues={inputValues}
                setInputValues={setInputValues}
                disabled={type === 'view'}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 w-[20rem]">
            <div className="max-h-[15rem] p-8 rounded bg-background4">
              <AdminProductCategory
                categories={categories}
                inputValues={inputValues}
                setInputValues={setInputValues}
                disabled={type === 'view'}
              />
            </div>
            <div className="flex flex-col gap-6 p-8 rounded bg-background4">
              <AdminProductSelect
                items={brands}
                label="Brand"
                inputValues={inputValues}
                setInputValues={setInputValues}
                name="brandId"
                disabled={type === 'view'}
              />
              <AdminProductSelect
                items={styles}
                label="Style"
                inputValues={inputValues}
                setInputValues={setInputValues}
                name="styleId"
                disabled={type === 'view'}
              />
            </div>
            <div className="p-8 rounded bg-background4">
              <AdminProductFits
                fits={fits}
                inputValues={inputValues}
                setInputValues={setInputValues}
                disabled={type === 'view'}
              />
            </div>
            <div className="p-8 rounded bg-background4">
              <AdminProductTag
                inputValues={inputValues}
                setInputValues={setInputValues}
                disabled={type === 'view'}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 rounded bg-background4">
          <AdminProductSizesInfo
            inputValues={inputValues}
            setInputValues={setInputValues}
            disabled={type === 'view'}
          />
        </div>
        <ProductPrices
          inputValues={inputValues}
          setInputValues={setInputValues}
          disabled={type === 'view'}
        />
        <div className="flex flex-col gap-8 w-full p-8 rounded bg-background4">
          <p className="font-bold">Color & Images</p>
          <div className="flex flex-col gap-4">
            <AdminNewProductColorModal
              setColorImages={setColorImages}
              disabled={type === 'view'}
              numberOfColorsUsed={numberOfColorsUsed}
              allColors={allColors}
            />
            <div className="divider" />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {colorImagesFromS3
              .filter((item) => !deletedColorImagesFromS3Url.includes(item))
              .sort((i1, i2) => {
                if (i1.sortOrder === 'N/A' && i2.sortOrder !== 'N/A') {
                  return 1;
                }
                if (i1.sortOrder !== 'N/A' && i2.sortOrder === 'N/A') {
                  return -1;
                }
                return Number(i1.sortOrder) - Number(i2.sortOrder);
              })
              .map((colorImage) => (
                <AdminColorImagesFromS3Item
                  key={colorImage.id}
                  colorImage={colorImage}
                  disabled={type === 'view'}
                  setDeletedColorImagesFromS3Url={
                    setDeletedColorImagesFromS3Url
                  }
                  availableColorIndexes={availableColorIndexes}
                  setColorImagesFromS3={setColorImagesFromS3}
                  allColors={allColors}
                  setColorImages={setColorImages}
                />
              ))}
            {colorImages
              .sort((i1, i2) => {
                if (i1.sortOrder === 'N/A' && i2.sortOrder !== 'N/A') {
                  return 1;
                }
                if (i1.sortOrder !== 'N/A' && i2.sortOrder === 'N/A') {
                  return -1;
                }
                return Number(i1.sortOrder) - Number(i2.sortOrder);
              })
              .map((colorImage) => (
                <AdminColorImagesItem
                  key={colorImage.id}
                  colorImage={colorImage}
                  setColorImages={setColorImages}
                  disabled={type === 'view'}
                  availableColorIndexes={availableColorIndexes}
                  allColors={allColors}
                />
              ))}
          </div>
        </div>
      </div>
      <AdminProductActionButton
        inputValues={inputValues}
        colorImages={colorImages}
        type={type}
        createProductOnServer={createProductOnServer}
        updateProductOnServer={updateProductOnServer}
        colorImagesFromS3={colorImagesFromS3}
        deletedColorImagesFromS3Url={deletedColorImagesFromS3Url}
        productId={productId || ''}
        setShowLoadingModal={setShowLoadingModal}
      />
    </div>
  );
};

export default NewProductForm;