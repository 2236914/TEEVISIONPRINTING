import React from 'react';

import type { AddCategoryType } from '@/utilities/types/AdminFormTypes';
import type { Category } from '@/utilities/types/shared.types';

type PropTypes = {
  category: Category;
  editCategoryOnServer: (
    category: AddCategoryType,
    categoryId: number
  ) => Promise<void>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditCategoryForm: React.FC<PropTypes> = ({
  editCategoryOnServer,
  category,
  setShowModal,
}) => {
  const [categoryName, setCategoryName] = React.useState(category.name);
  const [slug, setSlug] = React.useState(category.slug);
  const [isActive, setIsActive] = React.useState(category.isActive);
  const [isVisibleOnWebsite, setIsVisibleOnWebsite] = React.useState(
    category.isVisibleOnWebsite
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await editCategoryOnServer(
      {
        name: categoryName,
        isActive,
        slug,
        isVisibleOnWebsite,
        sortOrder: category.sortOrder,
      },
      category.id
    );
    setShowModal(false);
  };

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategoryName(event.target.value);
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
    const slug = categoryName
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
            placeholder="Category name"
            value={categoryName}
            onChange={handleTextInputChange}
          />
        </label>
        <label className="flex flex-col gap-2">
          <p>Slug</p>
          <div className="flex gap-2">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Category slug"
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
          Edit Category
        </button>
      </form>
    </div>
  );
};

export default EditCategoryForm;
