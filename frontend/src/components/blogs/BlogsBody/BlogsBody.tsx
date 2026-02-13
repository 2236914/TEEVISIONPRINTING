import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import dayjs from 'dayjs';

import BlogSchema from '@/components/schemas/BlogSchema';
import Roboto from '@/utilities/fonts/Roboto';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Custom Apparel | TeeVision Blog',
  description:
    'Get expert tips and ideas for your custom apparel project. The TeeVision blog covers design, printing techniques, and the latest clothing trends.',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/blog',
  },
};

type PropTypes = {
  blogs: Array<{
    date: string;
    imageSrc: string | null;
    slug: string;
    title: string;
  }>;
  currentPage: number;
  totalBlogs: number;
  totalPages: number;
};

const BlogsBody: React.FC<PropTypes> = ({
  blogs,
  currentPage,
  totalPages,
  totalBlogs,
}) => {
  return (
    <div className={`flex justify-center min-h-screen mt-[6rem] ${Roboto}`}>
      <BlogSchema />
      <div className="flex flex-col gap-8 w-[70rem] px-12 py-8">
        <header className="flex flex-col items-center border-background5 border-b-2 pb-4">
          <Image
            src="/icon.png"
            alt="Icon"
            width={150}
            height={150}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black">
              Tee Vision Tribune
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mx-auto pt-4">
              Stay informed and inspired with the latest screen printing trends
              and techniques at the Tee Vision Tribune. Our blog is dedicated to
              providing you with valuable insights and expert advice on all
              things screen printing. From industry news and tutorials to
              creative ideas and projects, the Teevsion Tribune is your go-to
              source for staying ahead of the curve in the screen printing
              world.
            </p>
            {totalBlogs > 0 && (
              <p className="text-sm text-gray-600 mt-4">
                {totalBlogs} {totalBlogs === 1 ? 'article' : 'articles'}
                {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
              </p>
            )}
          </div>
        </header>

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No blog posts available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 w-full"
                prefetch={false}
              >
                <div className="relative h-48">
                  <Image
                    src={blog.imageSrc || ''}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="transition-opacity duration-200 ease-in-out group-hover:opacity-80 object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primaryT transition-colors duration-200 ease-in-out">
                    {blog.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {dayjs(blog.date).format('MMMM D, YYYY')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12 mb-8">
            {/* Previous Button */}
            {currentPage > 1 ? (
              <Link
                href={
                  currentPage === 2 ? '/blog' : `/blog?page=${currentPage - 1}`
                }
                className="px-6 py-3 bg-primaryT text-white rounded-lg hover:bg-primaryT/90 transition-colors duration-200 font-medium"
                prefetch={false}
              >
                ← Previous
              </Link>
            ) : (
              <div className="px-6 py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium">
                ← Previous
              </div>
            )}

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from(
                { length: totalPages },
                (_item, index) => index + 1
              ).map((page) => {
                // Show first page, last page, current page, and pages around current page
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <Link
                      key={page}
                      href={page === 1 ? '/blog' : `/blog?page=${page}`}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        currentPage === page
                          ? 'bg-primaryT text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      prefetch={false}
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
            {currentPage < totalPages ? (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                className="px-6 py-3 bg-primaryT text-white rounded-lg hover:bg-primaryT/90 transition-colors duration-200 font-medium"
                prefetch={false}
              >
                Next →
              </Link>
            ) : (
              <div className="px-6 py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium">
                Next →
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsBody;
