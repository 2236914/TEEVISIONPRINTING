// eslint-disable-next-line simple-import-sort/imports
import type { Blog } from '@/utilities/types/shared.types';
import React from 'react';
// eslint-disable-next-line no-restricted-imports
import './AdminViewBlogsBody.css';
import Roboto from '@/utilities/fonts/Roboto';
import Link from 'next/link';
import Image from 'next/image';

type PropTypes = {
  blog: Blog;
};

const AdminViewBlogsBody: React.FC<PropTypes> = ({ blog }) => {
  return (
    <div className={`${Roboto} flex flex-col gap-8 bg-white p-16 ml-64`}>
      <div className="flex gap-8 items-center text-4xl font-bold bg-background4 p-8 rounded-lg">
        <h2 className={`${Roboto}`}>View Blog</h2>
        <Link href={`/admin/blogs/edit/${blog.id}`}>
          <button className="btn bg-buttonBackgroundColor">Edit</button>
        </Link>
      </div>
      <div className={`admin-view-blogs-body flex items-center justify-center`}>
        <div className="w-[45.5rem] bg-white p-12 rounded-xl">
          <article>
            <h1>{blog.title}</h1>
            <div className="flex gap-2 items-center border-t-[0.1rem] py-4 border-background5">
              <div className="w-8 h-8 rounded-full bg-productPriceColor" />
              <div className="flex flex-col">
                <address>{blog.author}</address>
                <time className="text-sm" dateTime={blog.date}>
                  {blog.date}
                </time>
              </div>
            </div>
            {blog.imageSrc ? (
              <Image
                src={blog.imageSrc}
                alt="Blog Picture"
                width={300}
                height={300}
                className="w-full mt-4"
              />
            ) : null}
            <div className="mt-4">
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AdminViewBlogsBody;
