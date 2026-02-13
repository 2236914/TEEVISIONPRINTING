import React from 'react';
import Link from 'next/link';

const fetchAllBlogs = async (page: number = 1, limit: number = 12) => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  
  const response = await fetch(`${backendUrl}/blogs`, {
    method: 'GET',
    next: {
      tags: ['blogs'],
      revalidate: 60,
    },
  });

  const data = await response.json();
  
  const sortedBlogs = data.sort((blogA: any, blogB: any) => {
    const dateA = new Date(blogA.date);
    const dateB = new Date(blogB.date);
    return dateB.getTime() - dateA.getTime();
  });

  const totalBlogCount = sortedBlogs.length;
  const totalPageCount = Math.ceil(totalBlogCount / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedBlogs = sortedBlogs.slice(startIndex, endIndex);

  return {
    blogs: paginatedBlogs,
    currentPage: page,
    totalBlogs: totalBlogCount,
    totalPages: totalPageCount,
  };
};

interface AdminBlogsProps {
  searchParams?: {
    page?: string;
  };
}

const AdminBlogs = async ({ searchParams }: AdminBlogsProps) => {
  const currentPage = Number(searchParams?.page) || 1;
  const { blogs, totalPages, totalBlogs } = await fetchAllBlogs(currentPage, 12);

  return (
    <div className="ml-64 p-16">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold bg-background4 p-8 rounded-lg">
            View all blogs
          </h1>
          <div className="text-sm text-gray-600">
            Showing {blogs.length} of {totalBlogs} blogs (Page {currentPage} of {totalPages})
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/admin/blogs/new">
            <button className="btn">Add a Blog</button>
          </Link>

          <div className="bg-white p-4 rounded-lg">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="text-left">Blog Title</th>
                  <th className="text-left">Status</th>
                  <th className="text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog: any) => (
                  <tr key={blog.id}>
                    <td className="py-3">{blog.title}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        blog.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {blog.isActive ? 'active' : 'inactive'}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center justify-center gap-4 pr-12 w-fit">
                        <Link href={`/admin/blogs/view/${blog.id}`}>
                          <button className="btn btn-sm">View</button>
                        </Link>
                        <Link href={`/admin/blogs/edit/${blog.id}`}>
                          <button className="btn btn-sm">Edit</button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              {/* Previous Button */}
              {currentPage > 1 && (
                <Link 
                  href={`/admin/blogs?page=${currentPage - 1}`}
                  className="px-6 py-3 text-black rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
                  style={{ backgroundColor: '#f5f5f5' }}
                >
                  ←
                </Link>
              )}
              
              {/* Page Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_item, index) => index + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current page
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <Link
                        key={page}
                        href={`/admin/blogs?page=${page}`}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                          currentPage === page
                            ? 'bg-primaryT text-white'
                            : 'text-black hover:bg-gray-200'
                        }`}
                        style={currentPage !== page ? { backgroundColor: '#f5f5f5' } : undefined}
                      >
                        {page}
                      </Link>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span key={page} className="px-2 py-2 text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>
              
              {/* Next Button */}
              {currentPage < totalPages && (
                <Link 
                  href={`/admin/blogs?page=${currentPage + 1}`}
                  className="px-6 py-3 text-black rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
                  style={{ backgroundColor: '#f5f5f5' }}
                >
                  →
                </Link>
              )}
            </div>
          )}

          {/* No blogs message */}
          {blogs.length === 0 && (
            <div className="text-center py-16 bg-white rounded-lg">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No blogs found</h3>
              <p className="text-gray-500">Get started by creating your first blog post.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBlogs;