import React from 'react';
import type { Metadata } from 'next';

import ProductsPageClient from '@/components/products/ProductsPageClient/ProductsPageClient';
import ProductsPageSchema from '@/components/products/ProductsPageClient/ProductsPageSchema';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import { fetchCategories } from '@/utilities/fetch/category';
import { fetchVisibleMainCategories } from '@/utilities/fetch/main-category';

export const metadata: Metadata = {
  title: 'Shop Custom T-Shirts & Hoodies | Tee Vision',
  description:
    'Browse our product categories at TeeVisionPrinting in Philadelphia. Find the best t-shirts, outerwear, and accessories for your custom apparel needs.',
  keywords:
    't-shirts, printing, custom, design, shirts, apparel, clothing, philadelphia, long sleeve, short sleeve, hoodies, sweatshirts, hats, caps, bags, totes, masks, face masks, custom masks, custom face masks, custom t-shirts, custom shirts, custom apparel, custom clothing, custom hats, custom caps, custom bags, custom totes, custom sweatshirts, custom hoodies, custom long sleeve, custom short sleeve, custom masks, custom face masks, custom t-shirts philadelphia, custom shirts philadelphia, custom apparel philadelphia, custom clothing philadelphia, custom hats philadelphia, custom caps philadelphia, custom bags philadelphia, custom totes philadelphia, custom sweatshirts philadelphia, custom hoodies philadelphia, custom long sleeve philadelphia, custom short sleeve philadelphia, custom masks philadelphia, custom face masks philadelphia, t-shirts philadelphia, printing philadelphia, custom philadelphia, design philadelphia, shirts philadelphia, apparel philadelphia, clothing philadelphia, philadelphia t-shirts, philadelphia printing, philadelphia custom, philadelphia design, philadelphia shirts, philadelphia apparel, philadelphia clothing',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/products',
  },
};

// ADD THIS LINE
export const dynamic = 'force-dynamic';

const ProductsPage = async () => {
  const [mainCategories, allCategories] = await Promise.all([
    fetchVisibleMainCategories(),
    fetchCategories(),
  ]);

  const categoriesGroupedByMain = mainCategories.map((mainCat) => ({
    ...mainCat,
    subcategories: allCategories
      .filter(
        (cat) =>
          cat.mainCategoryId === mainCat.id &&
          cat.isActive &&
          cat.isVisibleOnWebsite
      )
      .sort((categoryA, categoryB) => {
        if (categoryA.sortOrder === 'N/A') return 1;
        if (categoryB.sortOrder === 'N/A') return -1;
        return parseInt(categoryA.sortOrder) - parseInt(categoryB.sortOrder);
      }),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute z-[60] w-full">
        <ProductsPageSchema />
        <MainNavigation />
      </div>
      <main className="mt-[5rem] xl:mt-[5rem] min-h-screen w-full overflow-hidden bg-gray-50">
        <ProductsPageClient categoriesGroupedByMain={categoriesGroupedByMain} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
