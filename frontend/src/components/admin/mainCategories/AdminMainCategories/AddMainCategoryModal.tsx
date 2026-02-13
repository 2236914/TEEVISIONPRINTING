'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import type { AddMainCategoryType } from '@/utilities/types/shared.types';

type PropTypes = {
  addMainCategoryOnServer: (mainCategory: AddMainCategoryType) => Promise<void>;
  children: React.ReactNode;
};

const AddMainCategoryModal: React.FC<PropTypes> = ({
  children,
  addMainCategoryOnServer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadError, setUploadError] = useState<string>('');
  const [formData, setFormData] = useState<AddMainCategoryType>({
    name: '',
    slug: '',
    description: '',
    imageUrl: '',
    isActive: true,
    isVisibleOnWebsite: true,
    sortOrder: '1',
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addMainCategoryOnServer(formData);
      setIsOpen(false);
      // Reset form
      setFormData({
        name: '',
        slug: '',
        description: '',
        imageUrl: '',
        isActive: true,
        isVisibleOnWebsite: true,
        sortOrder: '1',
      });
      setUploadError('');
    } catch (error) {
      console.error('Error adding main category:', error);
      alert('Error adding main category. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    setUploadError('');
    
    try {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('Please select a valid image file');
      }

      // Validate file size (e.g., max 5MB)
      const maxSize = 20 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        throw new Error('Image size must be less than 5MB');
      }

      const formDataUpload = new FormData();
      formDataUpload.append('file', file);
      formDataUpload.append('directory', 'public/album/main-categories');

      const response = await fetch('/api/s3-upload', {
        method: 'POST',
        body: formDataUpload,
      });

      const result = await response.json();
      
      if (response.ok && result.body) {
        setFormData(prev => ({ ...prev, imageUrl: result.body }));
      } else {
        const errorMsg = result.body || 'Image upload failed';
        console.error('Image upload failed:', errorMsg);
        setUploadError(errorMsg);
        alert(`Image upload failed: ${errorMsg}`);
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Error uploading image';
      console.error('Error uploading image:', error);
      setUploadError(errorMsg);
      alert(`Error uploading image: ${errorMsg}`);
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
      setUploadError('');
    }
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleModalOpen();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await handleImageUpload(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData(prev => ({ ...prev, imageUrl: '' }));
    setUploadError('');
  };

  return (
    <>
      <div 
        onClick={handleModalOpen}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Open add main category modal"
      >
        {children}
      </div>

      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Add New Main Category</h3>
            
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
                {uploadError && (
                  <div className="alert alert-error mt-2">
                    <span className="text-sm">{uploadError}</span>
                  </div>
                )}
                {formData.imageUrl && (
                  <div className="mt-2 relative inline-block">
                    <div className="relative">
                      <Image 
                        src={formData.imageUrl} 
                        alt="Category preview" 
                        width={128}
                        height={128}
                        className="w-32 h-32 object-cover rounded border"
                        unoptimized={process.env.NODE_ENV === 'development'}
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute -top-2 -right-2 btn btn-circle btn-sm btn-error"
                        disabled={uploading || isSubmitting}
                      >
                        ×
                      </button>
                    </div>
                    <p className="text-xs mt-1 text-gray-500">Image uploaded successfully</p>
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
                      Adding...
                    </>
                  ) : (
                    'Add Main Category'
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

export default AddMainCategoryModal;