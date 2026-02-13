import React from 'react';

import type { AddFitType } from '@/utilities/types/AdminFormTypes';
import type { Fit } from '@/utilities/types/shared.types';

type PropTypes = {
  editFitOnServer: (fit: AddFitType, fitId: number) => Promise<void>;
  fit: Fit;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditFitForm: React.FC<PropTypes> = ({
  editFitOnServer,
  fit,
  setShowModal,
}) => {
  const [fitName, setFitName] = React.useState(fit.name);
  const [slug, setSlug] = React.useState(fit.slug);
  const [isActive, setIsActive] = React.useState(fit.isActive);
  const [isVisibleOnWebsite, setIsVisibleOnWebsite] = React.useState(
    fit.isVisibleOnWebsite
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await editFitOnServer(
      {
        name: fitName,
        isActive,
        slug,
        isVisibleOnWebsite,
        sortOrder: fit.sortOrder,
      },
      fit.id
    );
    setShowModal(false);
  };

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFitName(event.target.value);
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
    const slug = fitName
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
            placeholder="Fit name"
            value={fitName}
            onChange={handleTextInputChange}
          />
        </label>
        <label className="flex flex-col gap-2">
          <p>Slug</p>
          <div className="flex gap-2">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Fit slug"
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
          Edit Fit
        </button>
      </form>
    </div>
  );
};

export default EditFitForm;