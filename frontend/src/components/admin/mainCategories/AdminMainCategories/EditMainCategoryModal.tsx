'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import type { AddMainCategoryType, MainCategory } from '@/utilities/types/shared.types';

type PropTypes = {
  editMainCategoryOnServer: (
    mainCategory: AddMainCategoryType,
    mainCategoryId: number
  ) => Promise<void>;
  mainCategory: MainCategory;
};

const EditMainCategoryModal: React.FC<PropTypes> = ({
  mainCategory,
  editMainCategoryOnServer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<AddMainCategoryType>({
    name: mainCategory.name,
    slug: mainCategory.slug,
    description: mainCategory.description,
    imageUrl: mainCategory.imageUrl,
    isActive: mainCategory.isActive,
    isVisibleOnWebsite: mainCategory.isVisibleOnWebsite,
    sortOrder: mainCategory.sortOrder,
  });

  // Reset form data when main category changes
  useEffect(() => {
    setFormData({
      name: mainCategory.name,
      slug: mainCategory.slug,
      description: mainCategory.description,
      imageUrl: mainCategory.imageUrl,
      isActive: mainCategory.isActive,
      isVisibleOnWebsite: mainCategory.isVisibleOnWebsite,
      sortOrder: mainCategory.sortOrder,
    });
  }, [mainCategory]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      await editMainCategoryOnServer(formData, mainCategory.id);
      setIsOpen(false);
    } catch (error) {
      console.error('Error editing main category:', error);
      alert('Error editing main category. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    try {
      const formDataUpload = new FormData();
      formDataUpload.append('file', file);
      formDataUpload.append('directory', 'public/album/main-categories');

      const response = await fetch('/api/s3-upload', {
        method: 'POST',
        body: formDataUpload,
      });

      const result = await response.json();
      
      if (response.ok) {
        setFormData(prev => ({ ...prev, imageUrl: result.body }));
      } else {
        console.error('Image upload failed:', result.body);
        alert('Image upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploading(false);
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

  const handleClose = () => {
    if (!isSubmitting && !uploading) {
      setIsOpen(false);
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await handleImageUpload(file);
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
          <div className="modal-box w-11/12 max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Edit Main Category</h3>
            
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
                  placeholder="e.g., T-Shirts"
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
                  placeholder="e.g., t-shirts"
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
                  className="textarea textarea-bordered"
                  value={formData.description}
                  onChange={(event) => setFormData(prev => ({ ...prev, description: event.target.value }))}
                  rows={3}
                  placeholder="Brief description of this category..."
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category Image</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered"
                  disabled={uploading || isSubmitting}
                />
                {uploading && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="loading loading-spinner loading-sm" />
                    <span className="text-sm">Uploading image...</span>
                  </div>
                )}
                {formData.imageUrl && (
                  <div className="mt-2">
                    <Image 
                      src={formData.imageUrl} 
                      alt="Preview" 
                      width={128}
                      height={128}
                      className="w-32 h-32 object-cover rounded border"
                    />
                  </div>
                )}
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
                  <span className="label-text-alt">Controls display order on the website</span>
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
                  disabled={isSubmitting || uploading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={uploading || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Updating...
                    </>
                  ) : (
                    'Update Main Category'
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

export default EditMainCategoryModal;