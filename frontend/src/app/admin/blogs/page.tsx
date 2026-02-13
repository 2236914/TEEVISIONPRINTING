import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminBlogs from '@/components/admin/blogs/AdminBlogs/AdminBlogs';

interface PageProps {
  searchParams: {
    page?: string;
  };
}

const page = async ({ searchParams }: PageProps) => {
  return (
    <main className="bg-background5">
      <AdminNavigation page="blogs" />
      <AdminBlogs searchParams={searchParams} />
    </main>
  );
};

export default page;