import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminBrands from '@/components/admin/brands/AdminBrands/AdminBrands';
import {
  addBrandOnServer,
  editBrandOnServer,
} from '@/server-actions/brand-actions';
import { fetchBrands } from '@/utilities/fetch/brand';

const page = async () => {
  const brands = await fetchBrands();
  return (
    <main className="bg-background5">
      <AdminNavigation page="brands" />
      <AdminBrands
        brands={brands}
        addBrandOnServer={addBrandOnServer}
        editBrandOnServer={editBrandOnServer}
      />
    </main>
  );
};

export default page;
