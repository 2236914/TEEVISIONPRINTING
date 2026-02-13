// app/admin/products/edit/[id]/page.tsx
import React from 'react';
import { cookies } from 'next/headers';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import NewProductForm from '@/components/admin/product/new/NewProductForm/NewProductForm';
import {
  createProductOnServer,
  updateProductOnServer,
} from '@/server-actions/product-actions';
import { fetchBrands } from '@/utilities/fetch/brand';
import { fetchCategories } from '@/utilities/fetch/category';
import { fetchColors } from '@/utilities/fetch/color';
import { fetchFits } from '@/utilities/fetch/fit';
import { fetchAdminProductViewById } from '@/utilities/fetch/product';
import { fetchStyles } from '@/utilities/fetch/style';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value as string;
  
  const { initialValues, colors } = await fetchAdminProductViewById(
    id,
    accessToken
  );
  
  const categories = await fetchCategories();
  const brands = await fetchBrands();
  const styles = await fetchStyles();
  const fits = await fetchFits(); // Pass access token here
  const allColors = await fetchColors();
  
  return (
    <div>
      <AdminNavigation page="" />
      <NewProductForm
        createProductOnServer={createProductOnServer}
        updateProductOnServer={updateProductOnServer}
        type="edit"
        initialValues={initialValues}
        colors={colors}
        productId={id}
        categories={categories}
        brands={brands}
        styles={styles}
        fits={fits}
        pageHeader="Edit Product Form"
        allColors={allColors}
      />
    </div>
  );
};

export default page;