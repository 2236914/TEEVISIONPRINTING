import React from 'react';
import type { Metadata } from 'next';

import ProductViewSection from '@/components/products/view/ProductViewSection';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import { fetchProductBySlug } from '@/utilities/fetch/product';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const product = await fetchProductBySlug(params.slug);

  const title = product.metaTitle 
    ? `${product.metaTitle}`
    : `${product.name}`;

  return { 
    title: title,
    description: `${product.description}`,
    keywords: `t-shirts, printing, custom, design, shirts, apparel, clothing, philadelphia, ${product.name}, ${product.brand.name}, ${product.style.name}, long sleeve, short sleeve, hoodies, sweatshirts, hats, caps, bags, totes, masks, face masks, custom masks, custom face masks, custom t-shirts, custom shirts, custom apparel, custom clothing, custom hats, custom caps, custom bags, custom totes, custom sweatshirts, custom hoodies, custom long sleeve, custom short sleeve, custom masks, custom face masks, custom t-shirts philadelphia, custom shirts philadelphia, custom apparel philadelphia, custom clothing philadelphia, custom hats philadelphia, custom caps philadelphia, custom bags philadelphia, custom totes philadelphia, custom sweatshirts philadelphia, custom hoodies philadelphia, custom long sleeve philadelphia, custom short sleeve philadelphia, custom masks philadelphia, custom face masks philadelphia, t-shirts philadelphia, printing philadelphia, custom philadelphia, design philadelphia, shirts philadelphia, apparel philadelphia, clothing philadelphia, philadelphia t-shirts, philadelphia printing, philadelphia custom, philadelphia design, philadelphia shirts, philadelphia apparel, philadelphia clothing`,
    alternates: {
      canonical: `https://www.teevisionprinting.com/products/view/${params.slug}`,
    },
    verification: {
      google: 'w935iNlFpek7qkg70stsdDRrGUgdGzjuSpsl2Rs5owo',
    },
  };
};

const page = async ({ params }: { params: { slug: string } }) => {
  const product = await fetchProductBySlug(params.slug);

  return (
    <div>
      <main className="bg-white w-full">
        <div className="absolute z-[60] w-full">
          <MainNavigation />
        </div>
        <ProductViewSection product={product} />
      </main>
      <Footer />
    </div>
  );
};

export default page;