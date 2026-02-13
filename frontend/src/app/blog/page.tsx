import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BlogsBody from '@/components/blogs/BlogsBody/BlogsBody';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import { fetchBlogs } from '@/utilities/fetch/blog';

export const metadata: Metadata = {
  title: 'Custom T Shirts | Print Your Design Fast & Easy - TeeVision',
  description:
    'Order custom t shirts online with TeeVision Printing. Quick service, top quality, and bulk pricing for events, businesses, or personal use. Start designing now.',
  keywords:
    't-shirts, printing, custom, design, shirts, apparel, clothing, philadelphia, long sleeve, short sleeve, hoodies, sweatshirts, hats, caps, bags, totes, masks, face masks, custom masks, custom face masks, custom t-shirts, custom shirts, custom apparel, custom clothing, custom hats, custom caps, custom bags, custom totes, custom sweatshirts, custom hoodies, custom long sleeve, custom short sleeve, custom masks, custom face masks, custom t-shirts philadelphia, custom shirts philadelphia, custom apparel philadelphia, custom clothing philadelphia, custom hats philadelphia, custom caps philadelphia, custom bags philadelphia, custom totes philadelphia, custom sweatshirts philadelphia, custom hoodies philadelphia, custom long sleeve philadelphia, custom short sleeve philadelphia, custom masks philadelphia, custom face masks philadelphia, t-shirts philadelphia, printing philadelphia, custom philadelphia, design philadelphia, shirts philadelphia, apparel philadelphia, clothing philadelphia, philadelphia t-shirts, philadelphia printing, philadelphia custom, philadelphia design, philadelphia shirts, philadelphia apparel, philadelphia clothing',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/blog',
  },
};

interface PageProps {
  searchParams: {
    page?: string;
  };
}

const page = async ({ searchParams }: PageProps) => {
  const currentPage = Number(searchParams.page) || 1;
  
  // Validate page number
  if (currentPage < 1) {
    notFound();
  }
  
  try {
    const { blogs, totalPages, totalBlogs } = await fetchBlogs(currentPage, 9);
    
    // If page number exceeds total pages, show 404
    if (currentPage > totalPages && totalPages > 0) {
      notFound();
    }

    return (
      <main className="flex flex-col min-h-screen bg-background3">
        <div className="absolute z-[60] w-full">
          <MainNavigation />
        </div>
        <BlogsBody 
          blogs={blogs} 
          currentPage={currentPage}
          totalPages={totalPages}
          totalBlogs={totalBlogs}
        />
        <Footer />
      </main>
    );
  } catch (error) {
    console.error('Error fetching blogs:', error);
    notFound();
  }
};

export default page;