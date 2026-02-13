'use client';

import React from 'react';

import AddABrandModal from '@/components/admin/brands/AdminBrands/AddABrandModal';
import EditButtonBrandModal from '@/components/admin/brands/AdminBrands/EditButtonBrandModal';
import type { AddBrandType } from '@/utilities/types/AdminFormTypes';
import type { Brand } from '@/utilities/types/shared.types';

type PropTypes = {
  addBrandOnServer: (brand: AddBrandType) => Promise<void>;
  brands: Array<Brand>;
  editBrandOnServer: (brand: AddBrandType, brandId: number) => Promise<void>;
};

const AdminBrands: React.FC<PropTypes> = ({
  brands,
  addBrandOnServer,
  editBrandOnServer,
}) => {
  // const sortedBrands = brands.sort((a, b) => a.order - b.order);
  const sortOrderNumbersUsed = brands.map((brand) => brand.sortOrder);
  const sortOrderOptions = Array.from({ length: brands.length }, (__, idx) =>
    String(idx + 1)
  ).filter((index) => !sortOrderNumbersUsed.includes(index));

  const onSortOrderSelectChange = async (
    brand: Brand,
    newSortOrderValue: string
  ) => {
    const updatedBrand = {
      ...brand,
      sortOrder: newSortOrderValue,
    };
    await editBrandOnServer(updatedBrand, brand.id);
  };

  return (
    <div className="ml-64 p-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold bg-background4 p-8 rounded-lg">
          View all brands
        </h1>
        <div className="flex flex-col gap-4">
          <AddABrandModal addBrandOnServer={addBrandOnServer}>
            <button type="submit" className="btn">
              Add a Brand
            </button>
          </AddABrandModal>
          <div className="bg-white p-4 rounded-lg">
            <table className="table">
              <thead>
                <tr>
                  <th>Sort Order</th>
                  <th>Brand Name</th>
                  <th>Status</th>
                  <th>Brand Website Visibility</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {brands.map((brand) => (
                  <tr key={brand.id}>
                    <td>
                      <select
                        className="select select-bordered"
                        id="admin-categories-sort-order-select"
                        onChange={(event) =>
                          onSortOrderSelectChange(brand, event.target.value)
                        }
                        value={brand.sortOrder}
                      >
                        {brand.sortOrder !== 'N/A' && (
                          <option value="N/A">N/A</option>
                        )}
                        <option value={brand.sortOrder}>
                          {brand.sortOrder}
                        </option>
                        {sortOrderOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>{brand.name}</td>
                    <td>{brand.isActive ? 'active' : 'inactive'}</td>
                    <td>{brand.isVisibleOnWebsite ? 'Shown' : 'Hidden'}</td>
                    <td>
                      <div className="flex items-center justify-center gap-4 pr-12 w-fit">
                        <EditButtonBrandModal
                          editBrandOnServer={editBrandOnServer}
                          brand={brand}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBrands;
