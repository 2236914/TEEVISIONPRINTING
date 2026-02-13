import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminProducts from '@/components/admin/products/AdminProducts/AdminProducts';
import { deleteProductOnServer } from '@/server-actions/product-actions';
import { fetchAllAdminProducts } from '@/utilities/fetch/product';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminProductsPage() {
  const products = await fetchAllAdminProducts();
  const safeProducts = Array.isArray(products) ? products : [];
  
  return (
    <div>
      <div>
        <AdminNavigation page="products" />
        <AdminProducts
          products={safeProducts}
          deleteProductOnServer={deleteProductOnServer}
        />
      </div>
    </div>
  );
}