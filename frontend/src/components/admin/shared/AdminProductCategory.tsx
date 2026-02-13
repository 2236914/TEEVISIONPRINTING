import React from 'react';

import type { InputValues } from '@/utilities/types/AdminFormTypes';
import type { Category } from '@/utilities/types/shared.types';

type PropTypes = {
  categories: Array<Category>;
  inputValues: InputValues;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
  disabled?: boolean;
};

const AdminProductCategory: React.FC<PropTypes> = ({
  categories,
  inputValues,
  setInputValues,
  disabled = false,
}) => {
  const handleCategoryChange = (categoryId: number) => {
    const categoryIds = inputValues.categoryIds;
    if (categoryIds.includes(categoryId)) {
      setInputValues((prev) => ({
        ...prev,
        categoryIds: categoryIds.filter((id) => id !== categoryId),
      }));
    } else {
      setInputValues((prev) => ({
        ...prev,
        categoryIds: [...categoryIds, categoryId],
      }));
    }
  };

  return (
    <div className="h-full w-full flex flex-col gap-4 overflow-x-auto">
      <p className="font-bold">Categories</p>
      <div className=" flex flex-col gap-2">
        {categories.map((category) => (
          <div className="flex gap-2" key={category.name}>
            <input
              type="checkbox"
              className="checkbox"
              checked={inputValues.categoryIds.includes(category.id)}
              onClick={() => handleCategoryChange(category.id)}
              disabled={disabled}
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProductCategory;
