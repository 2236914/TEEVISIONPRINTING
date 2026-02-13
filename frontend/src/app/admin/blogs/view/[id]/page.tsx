import React from 'react';

import dayjs from 'dayjs';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminViewBlogsBody from '@/components/admin/blogs/AdminBlogs/view/AdminViewBlogsBody';
import { fetchBlogById } from '@/utilities/fetch/blog';

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const blog = await fetchBlogById(id);

  blog.date = dayjs(blog.date).format('MMMM D, YYYY');

  return (
    <div>
      <AdminNavigation page="" />
      <AdminViewBlogsBody blog={blog} />
    </div>
  );
};

export default page;
