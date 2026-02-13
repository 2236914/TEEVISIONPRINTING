'use client';

import React from 'react';

import AddAFitModal from '@/components/admin/fits/AdminFits/AddAFitModal';
import EditButtonFitModal from '@/components/admin/fits/AdminFits/EditButtonFitModal';
import type { AddFitType } from '@/utilities/types/AdminFormTypes';
import type { Fit } from '@/utilities/types/shared.types';

type PropTypes = {
  addFitOnServer: (fit: AddFitType) => Promise<void>;
  editFitOnServer: (fit: AddFitType, fitId: number) => Promise<void>;
  fits: Array<Fit>;
};

const AdminFits: React.FC<PropTypes> = ({
  fits,
  addFitOnServer,
  editFitOnServer,
}) => {
  const sortOrderNumbersUsed = fits.map((fit) => fit.sortOrder);
  const sortOrderOptions = Array.from({ length: fits.length }, (__, idx) =>
    String(idx + 1)
  ).filter((index) => !sortOrderNumbersUsed.includes(index));

  const onSortOrderSelectChange = async (
    fit: Fit,
    newSortOrderValue: string
  ) => {
    const updatedFit = {
      ...fit,
      sortOrder: newSortOrderValue,
    };
    await editFitOnServer(updatedFit, fit.id);
  };

  return (
    <div className="ml-64 p-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold bg-background4 p-8 rounded-lg">
          View all fits
        </h1>
        <div className="flex flex-col gap-4">
          <AddAFitModal addFitOnServer={addFitOnServer}>
            <button type="submit" className="btn">
              Add a Fit
            </button>
          </AddAFitModal>
          <div className="bg-white p-4 rounded-lg">
            <table className="table">
              <thead>
                <tr>
                  <th>Sort Order</th>
                  <th>Fit Name</th>
                  <th>Status</th>
                  <th>Fit Website Visibility</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {fits.map((fit) => (
                  <tr key={fit.id}>
                    <td>
                      <select
                        className="select select-bordered"
                        id="admin-fits-sort-order-select"
                        onChange={(event) =>
                          onSortOrderSelectChange(fit, event.target.value)
                        }
                        value={fit.sortOrder}
                      >
                        {fit.sortOrder !== 'N/A' && (
                          <option value="N/A">N/A</option>
                        )}
                        <option value={fit.sortOrder}>
                          {fit.sortOrder}
                        </option>
                        {sortOrderOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>{fit.name}</td>
                    <td>{fit.isActive ? 'active' : 'inactive'}</td>
                    <td>{fit.isVisibleOnWebsite ? 'Shown' : 'Hidden'}</td>
                    <td>
                      <div className="flex items-center justify-center gap-4 pr-12 w-fit">
                        <EditButtonFitModal
                          editFitOnServer={editFitOnServer}
                          fit={fit}
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

export default AdminFits;