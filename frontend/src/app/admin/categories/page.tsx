// app/admin/categories/page.tsx
import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminCategories from '@/components/admin/categories/AdminCategories/AdminCategories';
import {
  addCategoryOnServer,
  editCategoryOnServer,
} from '@/server-actions/category-actions';
import { fetchCategories } from '@/utilities/fetch/category';
import { fetchMainCategories } from '@/utilities/fetch/main-category';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function CategoriesAdminPage() {
  const [categories, mainCategories] = await Promise.all([
    fetchCategories(),
    fetchMainCategories(),
    // REMOVED: fetchImageAssets() - not needed anymore
  ]);

  const safeCategories = Array.isArray(categories) ? categories : [];
  const safeMainCategories = Array.isArray(mainCategories) ? mainCategories : [];

  return (
    <main className="bg-background5">
      <AdminNavigation page="categories" />
      <AdminCategories
        categories={safeCategories}
        mainCategories={safeMainCategories}
        addCategoryOnServer={addCategoryOnServer}
        editCategoryOnServer={editCategoryOnServer}
      />
    </main>
  );
}