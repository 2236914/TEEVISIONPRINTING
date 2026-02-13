import React from 'react';

import AddAStyleModal from '@/components/admin/styles/AdminStyles/AddAStyleModal';
import EditButtonStyleModal from '@/components/admin/styles/AdminStyles/EditButtonStyleModal';
import {
  addStyleOnServer,
  editStyleOnServer,
} from '@/server-actions/style-actions';
import { fetchStyles } from '@/utilities/fetch/style';

const AdminStyles = async () => {
  const styles = await fetchStyles();

  return (
    <div className="ml-64 p-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold bg-background4 p-8 rounded-lg">
          View all styles
        </h1>
        <div className="flex flex-col gap-4">
          <AddAStyleModal addStyleOnServer={addStyleOnServer}>
            <button type="submit" className="btn">
              Add a Style
            </button>
          </AddAStyleModal>
          <div className="bg-white p-4 rounded-lg">
            <table className="table">
              <thead>
                <tr>
                  <th>Style Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {styles.map((style) => (
                  <tr key={style.id}>
                    <td>{style.name}</td>
                    <td>{style.isActive ? 'active' : 'inactive'}</td>
                    <td>
                      <div className="flex items-center justify-center gap-4 pr-12 w-fit">
                        <EditButtonStyleModal
                          editStyleOnServer={editStyleOnServer}
                          style={style}
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

export default AdminStyles;
