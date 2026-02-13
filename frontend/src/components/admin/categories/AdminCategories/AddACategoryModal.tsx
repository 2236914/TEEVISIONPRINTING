'use client';

import React, { useState } from 'react';

import type { AddCategoryType } from '@/utilities/types/AdminFormTypes';
import type { MainCategory } from '@/utilities/types/shared.types';

type PropTypes = {
  addCategoryOnServer: (category: AddCategoryType) => Promise<void>;
  children: React.ReactNode;
  mainCategories: Array<MainCategory>;
};

const AddACategoryModal: React.FC<PropTypes> = ({
  children,
  addCategoryOnServer,
  mainCategories,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<AddCategoryType>({
    name: '',
    slug: '',
    isActive: true,
    isVisibleOnWebsite: true,
    sortOrder: '1',
    mainCategoryId: null,
    description: '',
    imageUrl: null,  // CHANGED FROM imageAssetId
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addCategoryOnServer(formData);
      setIsOpen(false);
      setFormData({
        name: '',
        slug: '',
        isActive: true,
        isVisibleOnWebsite: true,
        sortOrder: '1',
        mainCategoryId: null,
        description: '',
        imageUrl: null,
      });
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Error adding category. Please try again.');
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

  const handleClose = () => {
    if (!isSubmitting) {
      setIsOpen(false);
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

  return (
    <>
      <div 
        onClick={handleModalOpen}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Open add category modal"
      >
        {children}
      </div>

      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto">
            <h3 className="font-bold text-lg mb-4">Add New Category</h3>
            
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
                  <span className="label-text">Main Category *</span>
                </label>
                <select
                  className="select select-bordered"
                  value={formData.mainCategoryId || ''}
                  onChange={(event) => setFormData(prev => ({ 
                    ...prev, 
                    mainCategoryId: event.target.value === '' ? null : parseInt(event.target.value) 
                  }))}
                  required
                >
                  <option value="">Select Main Category</option>
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

              <div className="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>After creating the category, you can upload an image from the categories table.</span>
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Adding...
                    </>
                  ) : (
                    'Add Category'
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

export default AddACategoryModal;