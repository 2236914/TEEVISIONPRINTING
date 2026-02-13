// app/admin/main-categories/page.tsx
import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminMainCategories from '@/components/admin/mainCategories/AdminMainCategories/AdminMainCategories';
import {
  addMainCategoryOnServer,
  deleteMainCategoryOnServer,
  editMainCategoryOnServer,
} from '@/server-actions/main-category-actions';
import { fetchMainCategories } from '@/utilities/fetch/main-category';

const MainCategoriesAdminPage = async () => {
  const mainCategories = await fetchMainCategories();

  return (
    <main className="bg-background5">
      <AdminNavigation page="main-categories" />
      <AdminMainCategories
        mainCategories={mainCategories}
        addMainCategoryOnServer={addMainCategoryOnServer}
        editMainCategoryOnServer={editMainCategoryOnServer}
        deleteMainCategoryOnServer={deleteMainCategoryOnServer}
      />
    </main>
  );
};

export default MainCategoriesAdminPage;