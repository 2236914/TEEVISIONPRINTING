import React from 'react';

import type { AddBrandType } from '@/utilities/types/AdminFormTypes';
import type { Brand } from '@/utilities/types/shared.types';

type PropTypes = {
  brand: Brand;
  editBrandOnServer: (brand: AddBrandType, brandId: number) => Promise<void>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditBrandForm: React.FC<PropTypes> = ({
  editBrandOnServer,
  brand,
  setShowModal,
}) => {
  const [brandName, setBrandName] = React.useState(brand.name);
  const [slug, setSlug] = React.useState(brand.slug);
  const [isActive, setIsActive] = React.useState(brand.isActive);
  const [isVisibleOnWebsite, setIsVisibleOnWebsite] = React.useState(
    brand.isVisibleOnWebsite
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await editBrandOnServer(
      {
        name: brandName,
        isActive,
        slug,
        isVisibleOnWebsite,
        sortOrder: brand.sortOrder,
      },
      brand.id
    );
    setShowModal(false);
  };

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBrandName(event.target.value);
  };

  const handleIsActiveToggleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsActive(event.target.checked);
  };

  const handleIsVisibleOnWebsiteToggleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsVisibleOnWebsite(event.target.checked);
  };

  const generateSlug = () => {
    const slug = brandName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setSlug(slug);
  };

  return (
    <div className="w-[25rem]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center p-4"
      >
        <label className="flex flex-col gap-2">
          <p>Name</p>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Brand name"
            value={brandName}
            onChange={handleTextInputChange}
          />
        </label>
        <label className="flex flex-col gap-2">
          <p>Slug</p>
          <div className="flex gap-2">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Brand slug"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
            />
            <button type="button" className="btn" onClick={generateSlug}>
              Generate Slug
            </button>
          </div>
        </label>
        <label className="flex gap-4">
          <p>Is status active?</p>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={isActive}
            onChange={handleIsActiveToggleChange}
          />
        </label>
        <label className="flex gap-4">
          <p>Is visible on website?</p>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={isVisibleOnWebsite}
            onChange={handleIsVisibleOnWebsiteToggleChange}
          />
        </label>
        <button type="submit" className="btn">
          Edit Brand
        </button>
      </form>
    </div>
  );
};

export default EditBrandForm;
