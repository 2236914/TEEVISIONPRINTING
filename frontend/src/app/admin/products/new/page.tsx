// app/admin/products/new/page.tsx
import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import NewProductForm from '@/components/admin/product/new/NewProductForm/NewProductForm';
import {
  createProductOnServer,
  updateProductOnServer,
} from '@/server-actions/product-actions';
import { initialValues } from '@/utilities/constants/data';
import { fetchBrands } from '@/utilities/fetch/brand';
import { fetchCategories } from '@/utilities/fetch/category';
import { fetchColors } from '@/utilities/fetch/color';
import { fetchFits } from '@/utilities/fetch/fit';
import { fetchStyles } from '@/utilities/fetch/style';
import type { InputValues } from '@/utilities/types/AdminFormTypes';

const page = async () => {
  const categories = await fetchCategories();
  const brands = await fetchBrands();
  const styles = await fetchStyles();
  const fits = await fetchFits();
  const allColors = await fetchColors();

  const updatedInitialValues: InputValues = {
    ...initialValues,
    brandId: brands[0]?.id ?? null,
    styleId: styles[0]?.id ?? null,
    fitIds: [],
  };
  return (
    <div>
      <AdminNavigation page="newProduct" />
      <NewProductForm
        createProductOnServer={createProductOnServer}
        updateProductOnServer={updateProductOnServer}
        type="new"
        initialValues={updatedInitialValues}
        colors={[]}
        categories={categories}
        brands={brands}
        styles={styles}
        fits={fits}
        allColors={allColors}
        pageHeader="New Product Form"
      />
    </div>
  );
};

export default page;
