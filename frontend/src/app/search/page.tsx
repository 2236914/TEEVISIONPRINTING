import React from 'react';

import BlogsBody from '@/components/blogs/BlogsBody/BlogsBody';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import { fetchBlogs } from '@/utilities/fetch/blog';

// ADD THIS LINE
export const dynamic = 'force-dynamic';

const page = async () => {
  const blogsResponse = await fetchBlogs();

  return (
    <main className="flex flex-col min-h-screen bg-background3">
      <div className="absolute z-[60] w-full">
        <MainNavigation />
      </div>
      <BlogsBody 
        blogs={blogsResponse.blogs}
        currentPage={blogsResponse.currentPage}
        totalBlogs={blogsResponse.totalBlogs}
        totalPages={blogsResponse.totalPages}
      />
      <Footer />
    </main>
  );
};

export default page;