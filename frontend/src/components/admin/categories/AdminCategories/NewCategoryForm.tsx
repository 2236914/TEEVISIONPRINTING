import React from 'react';

import Roboto from '@/utilities/fonts/Roboto';
import type { AddCategoryType } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  addCategoryOnServer: (category: AddCategoryType) => Promise<void>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewCategoryForm: React.FC<PropTypes> = ({
  addCategoryOnServer,
  setShowModal,
}) => {
  const [categoryName, setCategoryName] = React.useState('');
  const [slug, setSlug] = React.useState('');
  const [isActive, setIsActive] = React.useState(true);
  const [isVisibleOnWebsite, setIsVisibleOnWebsite] = React.useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addCategoryOnServer({
      name: categoryName,
      isActive,
      slug,
      isVisibleOnWebsite,
      sortOrder: 'N/A',
    });
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
    <div className={`${Roboto} w-[25rem] text-sm`}>
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
          Add Category
        </button>
      </form>
    </div>
  );
};

export default NewCategoryForm;
