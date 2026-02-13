'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import AddACategoryModal from '@/components/admin/categories/AdminCategories/AddACategoryModal';
import EditButtonCategoryModal from '@/components/admin/categories/AdminCategories/EditButtonCategoryModal';
import type { AddCategoryType } from '@/utilities/types/AdminFormTypes';
import type { Category, MainCategory } from '@/utilities/types/shared.types';

type PropTypes = {
  addCategoryOnServer: (category: AddCategoryType) => Promise<void>;
  categories: Array<Category>;
  editCategoryOnServer: (
    category: AddCategoryType,
    categoryId: number
  ) => Promise<void>;
  mainCategories: Array<MainCategory>;
};

const AdminCategories: React.FC<PropTypes> = ({
  categories,
  mainCategories,
  addCategoryOnServer,
  editCategoryOnServer,
}) => {
  const [uploadingImages, setUploadingImages] = useState<{[key: number]: boolean}>({});

  const onSortOrderSelectChange = async (
    category: Category,
    newSortOrderValue: string
  ) => {
    const updatedCategory: AddCategoryType = {
      name: category.name,
      isActive: category.isActive,
      slug: category.slug,
      isVisibleOnWebsite: category.isVisibleOnWebsite,
      sortOrder: newSortOrderValue,
      mainCategoryId: category.mainCategoryId,
      description: category.description,
      imageUrl: category.imageUrl,
    };
    await editCategoryOnServer(updatedCategory, category.id);
  };

  const onMainCategoryChange = async (
    category: Category,
    newMainCategoryId: string
  ) => {
    const updatedCategory: AddCategoryType = {
      name: category.name,
      isActive: category.isActive,
      slug: category.slug,
      isVisibleOnWebsite: category.isVisibleOnWebsite,
      sortOrder: category.sortOrder,
      mainCategoryId: newMainCategoryId === '' ? null : parseInt(newMainCategoryId),
      description: category.description,
      imageUrl: category.imageUrl,
    };
    await editCategoryOnServer(updatedCategory, category.id);
  };

  const handleImageUpload = async (file: File, categoryId: number) => {
    setUploadingImages(prev => ({ ...prev, [categoryId]: true }));
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('directory', 'public/album/categories');
      
      const response = await fetch('/api/s3-upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (response.ok) {
        const category = categories.find(categoryC => categoryC.id === categoryId);
        if (category) {
          const updatedCategory: AddCategoryType = {
            name: category.name,
            slug: category.slug,
            description: category.description,
            imageUrl: result.body,
            isActive: category.isActive,
            isVisibleOnWebsite: category.isVisibleOnWebsite,
            sortOrder: category.sortOrder,
            mainCategoryId: category.mainCategoryId,
          };
          await editCategoryOnServer(updatedCategory, categoryId);
        }
      } else {
        console.error('Image upload failed:', result.body);
        alert('Image upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploadingImages(prev => ({ ...prev, [categoryId]: false }));
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, categoryId: number) => {
    const file = event.target.files?.[0];
    if (file) {
      await handleImageUpload(file, categoryId);
    }
  };

  const sortOrderNumbersUsed = categories.map((category) => category.sortOrder);
  const sortOrderOptions = Array.from(
    { length: Math.max(categories.length, 10) },
    (__, idx) => String(idx + 1)
  ).filter((index) => !sortOrderNumbersUsed.includes(index));

  return (
    <div className="ml-64 p-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold bg-background4 p-8 rounded-lg">
          Manage Categories (Subcategories)
        </h1>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h2 className="font-semibold text-blue-800 mb-2">About Categories</h2>
          <p className="text-blue-700 text-sm">
            These categories now function as subcategories under your main categories. 
            Assign each category to a main category to organize your product hierarchy. 
            Customers will first see main categories, then can filter by these subcategories.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <AddACategoryModal 
            addCategoryOnServer={addCategoryOnServer}
            mainCategories={mainCategories}
          >
            <button type="button" className="btn btn-primary">
              Add a Category
            </button>
          </AddACategoryModal>
          
          <div className="bg-white p-4 rounded-lg overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Sort Order</th>
                  <th>Image</th>
                  <th>Category Name</th>
                  <th>Main Category</th>
                  <th>Status</th>
                  <th>Website Visibility</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td>
                      <select
                        className="select select-bordered select-sm"
                        onChange={(event) =>
                          onSortOrderSelectChange(category, event.target.value)
                        }
                        value={category.sortOrder}
                      >
                        {category.sortOrder !== 'N/A' && (
                          <option value="N/A">N/A</option>
                        )}
                        <option value={category.sortOrder}>
                          {category.sortOrder}
                        </option>
                        {sortOrderOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <div className="flex flex-col items-center gap-2">
                        {category.imageUrl ? (
                          <Image
                            src={category.imageUrl}
                            alt={category.name}
                            width={60}
                            height={60}
                            className="rounded object-cover w-16 h-16"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
                            No Image
                          </div>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(event) => handleFileChange(event, category.id)}
                          className="file-input file-input-xs max-w-xs"
                          disabled={uploadingImages[category.id]}
                        />
                        {uploadingImages[category.id] && (
                          <span className="loading loading-spinner loading-xs" />
                        )}
                      </div>
                    </td>
                    <td className="font-medium">{category.name}</td>
                    <td>
                      <select
                        className="select select-bordered select-sm w-full max-w-xs"
                        onChange={(event) =>
                          onMainCategoryChange(category, event.target.value)
                        }
                        value={category.mainCategoryId || ''}
                      >
                        <option value="">No Main Category</option>
                        {mainCategories.map((mainCategory) => (
                          <option key={mainCategory.id} value={mainCategory.id}>
                            {mainCategory.name}
                          </option>
                        ))}
                      </select>
                      {category.mainCategoryName && (
                        <div className="text-xs text-gray-500 mt-1">
                          Current: {category.mainCategoryName}
                        </div>
                      )}
                    </td>
                    <td>
                      <div className={`badge ${category.isActive ? 'badge-success' : 'badge-error'}`}>
                        {category.isActive ? 'Active' : 'Inactive'}
                      </div>
                    </td>
                    <td>
                      <div className={`badge ${category.isVisibleOnWebsite ? 'badge-info' : 'badge-warning'}`}>
                        {category.isVisibleOnWebsite ? 'Visible' : 'Hidden'}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center gap-4 pr-12 w-fit">
                        <EditButtonCategoryModal
                          editCategoryOnServer={editCategoryOnServer}
                          category={category}
                          mainCategories={mainCategories}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {categories.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No categories found. Add your first category to get started.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;