'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import type { AddCategoryType } from '@/utilities/types/AdminFormTypes';
import type { Category, MainCategory } from '@/utilities/types/shared.types';

type PropTypes = {
  category: Category;
  editCategoryOnServer: (
    category: AddCategoryType,
    categoryId: number
  ) => Promise<void>;
  mainCategories: Array<MainCategory>;
  // REMOVED imageAssets prop
};

const EditButtonCategoryModal: React.FC<PropTypes> = ({
  category,
  editCategoryOnServer,
  mainCategories,
  // REMOVED imageAssets prop
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState<AddCategoryType>({
    name: category.name,
    slug: category.slug,
    isActive: category.isActive,
    isVisibleOnWebsite: category.isVisibleOnWebsite,
    sortOrder: category.sortOrder,
    mainCategoryId: category.mainCategoryId,
    imageUrl: category.imageUrl || null,
    description: category.description || '',
  });

  // Reset form data when category changes
  useEffect(() => {
    setFormData({
      name: category.name,
      slug: category.slug,
      isActive: category.isActive,
      isVisibleOnWebsite: category.isVisibleOnWebsite,
      sortOrder: category.sortOrder,
      mainCategoryId: category.mainCategoryId,
      imageUrl: category.imageUrl || null,
      description: category.description || '',
    });
  }, [category]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      await editCategoryOnServer(formData, category.id);
      setIsOpen(false);
    } catch (error) {
      console.error('Error editing category:', error);
      alert('Error editing category. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleNameChange = (name: string) => {
    setFormData(prev => ({
      ...prev,
      name,
      slug: generateSlug(name)
    }));
  };

  const handleImageUpload = async (file: File) => {
    setUploadingImage(true);
    
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('directory', 'public/album/categories');
      
      const response = await fetch('/api/s3-upload', {
        method: 'POST',
        body: uploadFormData,
      });

      const result = await response.json();
      
      if (response.ok) {
        setFormData(prev => ({
          ...prev,
          imageUrl: result.body
        }));
      } else {
        console.error('Image upload failed:', result.body);
        alert('Image upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await handleImageUpload(file);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="btn btn-primary btn-sm"
      >
        Edit
      </button>

      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto">
            <h3 className="font-bold text-lg mb-4">Edit Category</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name *</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.name}
                  onChange={(event) => handleNameChange(event.target.value)}
                  required
                  placeholder="e.g., Shortsleeve T-Shirts"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Slug *</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.slug}
                  onChange={(event) => setFormData(prev => ({ ...prev, slug: event.target.value }))}
                  required
                  placeholder="e.g., shortsleeve-t-shirts"
                />
                <label className="label">
                  <span className="label-text-alt">URL-friendly version of the name</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  value={formData.description || ''}
                  onChange={(event) => setFormData(prev => ({ ...prev, description: event.target.value }))}
                  placeholder="Brief description of this category..."
                />
                <label className="label">
                  <span className="label-text-alt">This will be displayed on the category card</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Main Category</span>
                </label>
                <select
                  className="select select-bordered"
                  value={formData.mainCategoryId || ''}
                  onChange={(event) => setFormData(prev => ({ 
                    ...prev, 
                    mainCategoryId: event.target.value === '' ? null : parseInt(event.target.value) 
                  }))}
                >
                  <option value="">No Main Category</option>
                  {mainCategories.map((mainCategory) => (
                    <option key={mainCategory.id} value={mainCategory.id}>
                      {mainCategory.name}
                    </option>
                  ))}
                </select>
                <label className="label">
                  <span className="label-text-alt">Assign this subcategory to a main category</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category Image</span>
                </label>
                
                {/* Current Image Preview */}
{formData.imageUrl && (
  <div className="mb-4">
    <p className="text-sm font-medium mb-2">Current Image:</p>
    <div className="w-full max-w-xs relative h-48">
      <Image 
        src={formData.imageUrl} 
        alt="Category preview" 
        fill
        className="object-cover rounded-lg border-2 border-gray-200"
      />
    </div>
  </div>
)}
                
                {/* Upload New Image */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full max-w-xs"
                  disabled={uploadingImage}
                />
                {uploadingImage && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="loading loading-spinner loading-sm" />
                    <span className="text-sm">Uploading image...</span>
                  </div>
                )}
                <label className="label">
                  <span className="label-text-alt">Upload a new image to replace the current one</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sort Order</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.sortOrder}
                  onChange={(event) => setFormData(prev => ({ ...prev, sortOrder: event.target.value }))}
                  placeholder="1, 2, 3... or N/A"
                />
                <label className="label">
                  <span className="label-text-alt">Controls display order within the main category</span>
                </label>
              </div>

              <div className="flex gap-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2">Is Active</span>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={formData.isActive}
                      onChange={(event) => setFormData(prev => ({ ...prev, isActive: event.target.checked }))}
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2">Visible on Website</span>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={formData.isVisibleOnWebsite}
                      onChange={(event) => setFormData(prev => ({ ...prev, isVisibleOnWebsite: event.target.checked }))}
                    />
                  </label>
                </div>
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting || uploadingImage}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Updating...
                    </>
                  ) : (
                    'Update Category'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditButtonCategoryModal;