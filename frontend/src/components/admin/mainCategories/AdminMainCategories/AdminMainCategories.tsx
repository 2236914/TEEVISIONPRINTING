'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import AddMainCategoryModal from '@/components/admin/mainCategories/AdminMainCategories/AddMainCategoryModal';
import EditMainCategoryModal from '@/components/admin/mainCategories/AdminMainCategories/EditMainCategoryModal';
import type { AddMainCategoryType, MainCategory } from '@/utilities/types/shared.types';

type PropTypes = {
  addMainCategoryOnServer: (mainCategory: AddMainCategoryType) => Promise<void>;
  deleteMainCategoryOnServer: (mainCategoryId: number) => Promise<void>;
  editMainCategoryOnServer: (
    mainCategory: AddMainCategoryType,
    mainCategoryId: number
  ) => Promise<void>;
  mainCategories: Array<MainCategory>;
};

const AdminMainCategories: React.FC<PropTypes> = ({
  mainCategories,
  addMainCategoryOnServer,
  editMainCategoryOnServer,
  deleteMainCategoryOnServer,
}) => {
  const [uploadingImages, setUploadingImages] = useState<{[key: number]: boolean}>({});

  const onSortOrderSelectChange = async (
    mainCategory: MainCategory,
    newSortOrderValue: string
  ) => {
    const updatedMainCategory = {
      name: mainCategory.name,
      slug: mainCategory.slug,
      description: mainCategory.description,
      imageUrl: mainCategory.imageUrl,
      isActive: mainCategory.isActive,
      isVisibleOnWebsite: mainCategory.isVisibleOnWebsite,
      sortOrder: newSortOrderValue,
    };
    await editMainCategoryOnServer(updatedMainCategory, mainCategory.id);
  };

  const handleImageUpload = async (file: File, mainCategoryId: number) => {
    setUploadingImages(prev => ({ ...prev, [mainCategoryId]: true }));
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('directory', 'public/album/main-categories');
      
      const response = await fetch('/api/s3-upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (response.ok) {
        const mainCategory = mainCategories.find(mc => mc.id === mainCategoryId);
        if (mainCategory) {
          const updatedMainCategory = {
            name: mainCategory.name,
            slug: mainCategory.slug,
            description: mainCategory.description,
            imageUrl: result.body,
            isActive: mainCategory.isActive,
            isVisibleOnWebsite: mainCategory.isVisibleOnWebsite,
            sortOrder: mainCategory.sortOrder,
          };
          await editMainCategoryOnServer(updatedMainCategory, mainCategoryId);
        }
      } else {
        console.error('Image upload failed:', result.body);
        alert('Image upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploadingImages(prev => ({ ...prev, [mainCategoryId]: false }));
    }
  };

  const handleDeleteMainCategory = async (mainCategoryId: number) => {
    if (window.confirm('Are you sure you want to delete this main category? This action cannot be undone and will unassign all subcategories.')) {
      try {
        await deleteMainCategoryOnServer(mainCategoryId);
      } catch (error) {
        console.error('Error deleting main category:', error);
        alert('Error deleting main category. Please try again.');
      }
    }
  };

  const sortOrderNumbersUsed = mainCategories.map((mainCategory) => mainCategory.sortOrder);
  const sortOrderOptions = Array.from(
    { length: Math.max(mainCategories.length, 10) },
    (__, idx) => String(idx + 1)
  ).filter((index) => !sortOrderNumbersUsed.includes(index));

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, mainCategoryId: number) => {
    const file = event.target.files?.[0];
    if (file) {
      await handleImageUpload(file, mainCategoryId);
    }
  };

  return (
    <div className="ml-64 p-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold bg-background4 p-8 rounded-lg">
          Manage Main Categories
        </h1>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h2 className="font-semibold text-blue-800 mb-2">About Main Categories</h2>
          <p className="text-blue-700 text-sm">
            Main categories are the top-level navigation for your products page. 
            Customers will see these categories first, then can browse subcategories within each main category.
            You can assign your existing categories as subcategories to these main categories.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <AddMainCategoryModal addMainCategoryOnServer={addMainCategoryOnServer}>
            <button type="button" className="btn btn-primary">
              Add Main Category
            </button>
          </AddMainCategoryModal>
          
          <div className="bg-white p-4 rounded-lg">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Sort Order</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Website Visibility</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mainCategories.map((mainCategory) => (
                  <tr key={mainCategory.id}>
                    <td>
                      <select
                        className="select select-bordered select-sm"
                        onChange={(event) =>
                          onSortOrderSelectChange(mainCategory, event.target.value)
                        }
                        value={mainCategory.sortOrder}
                      >
                        {mainCategory.sortOrder !== 'N/A' && (
                          <option value="N/A">N/A</option>
                        )}
                        <option value={mainCategory.sortOrder}>
                          {mainCategory.sortOrder}
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
                        {mainCategory.imageUrl ? (
                          <Image
                            src={mainCategory.imageUrl}
                            alt={mainCategory.name}
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
                          onChange={(event) => handleFileChange(event, mainCategory.id)}
                          className="file-input file-input-xs max-w-xs"
                          disabled={uploadingImages[mainCategory.id]}
                        />
                        {uploadingImages[mainCategory.id] && (
                          <span className="loading loading-spinner loading-xs" />
                        )}
                      </div>
                    </td>
                    <td className="font-medium">{mainCategory.name}</td>
                    <td className="text-sm text-gray-600">{mainCategory.slug}</td>
                    <td className="max-w-xs">
                      <div className="text-sm text-gray-600 truncate" title={mainCategory.description}>
                        {mainCategory.description || 'No description'}
                      </div>
                    </td>
                    <td>
                      <div className={`badge ${mainCategory.isActive ? 'badge-success' : 'badge-error'}`}>
                        {mainCategory.isActive ? 'Active' : 'Inactive'}
                      </div>
                    </td>
                    <td>
                      <div className={`badge ${mainCategory.isVisibleOnWebsite ? 'badge-info' : 'badge-warning'}`}>
                        {mainCategory.isVisibleOnWebsite ? 'Visible' : 'Hidden'}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <EditMainCategoryModal
                          editMainCategoryOnServer={editMainCategoryOnServer}
                          mainCategory={mainCategory}
                        />
                        <button
                          onClick={() => handleDeleteMainCategory(mainCategory.id)}
                          className="btn btn-error btn-sm"
                          title="Delete main category"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {mainCategories.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No main categories found. Add your first main category to get started.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMainCategories;