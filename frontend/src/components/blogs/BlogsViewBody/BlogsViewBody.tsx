import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import dayjs from 'dayjs';

import RequestAQuoteModalServerWrapper from '@/components/shared/RequestAQuoteModal/RequestAQuoteModalServerWrapper';

import '@/components/blogs/BlogsViewBody/BlogsViewBody.css';

import BlogContentRenderer from '@/components/blogs/BlogContentRenderer/BlogContentRender';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import { extractImageSources } from '@/utilities/helpers/extractImageSources';
import Search from '@/utilities/SVGs/Search';
import type { Blog } from '@/utilities/types/shared.types';

type PropTypes = {
  blog: Blog;
};

const BlogsViewBody: React.FC<PropTypes> = ({ blog }) => {
  const images_src = extractImageSources(blog.content);

  const blog_schema = {
    '@context': 'https://schema.org/',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.teevisionprinting.com/blog/${blog.slug}`,
    },
    headline: blog.title,
    image: images_src.length > 0 ? images_src : [blog.imageSrc || ''],
    author: {
      '@type': 'Person',
      name: 'Sae Choi',
      url: 'https://www.teevisionprinting.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tee Vision Printing',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.teevisionprinting.com/_next/image?url=%2Fmain%2Flogo.png&w=384&q=75',
      },
    },
    datePublished: blog.date,
  };
  // console.log(blog);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blog_schema).replace(/</g, '\\u003c'),
        }}
      />
      <div
        className={`admin-view-blogs-body flex flex-col lg:flex-row justify-center bg-white pt-40 ${Roboto}`}
      >
        <div className="w-full lg:max-w-[800px] bg-white px-10 py-4">
          {blog.imageSrc && (
            <div className="w-full lg:max-w-[800px] h-[400px] max-h-[400px] overflow-hidden">
              <Image
                src={blog.imageSrc}
                alt={blog.title}
                width={800}
                height={400}
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover w-[800px] h-[400px]"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              />
            </div>
          )}

          <article>
            <h1>{blog.title}</h1>
            <div className="flex gap-2 items-center border-t-[0.1rem] py-4 border-background5">
              <div className="w-[50px] h-[50px] rounded-full">
                <Image
                  src="/about-us/sae.png"
                  alt="Sae Choi"
                  width={50}
                  height={50}
                  className="w-full h-full rounded-full object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                />
              </div>
              <div className="flex flex-col">
                <address className="not-italic">{blog.author}</address>
                <time className="text-sm" dateTime={blog.date}>
                  {blog.date}
                </time>
              </div>
            </div>

            {/* ✅ Clean separation: logic in .ts, rendering in .tsx component */}
            <BlogContentRenderer
              content={blog.content}
              className="mt-4 prose prose-lg max-w-none"
            />
          </article>
        </div>
        <aside className="hidden lg:block lg:max-w-[400px] py-4 px-4">
          <div className="flex items-center w-full mb-4">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full border h-[48px] px-4 text-[18px]"
              aria-label="Search blog posts"
            />
            <button
              className="cursor-pointer bg-primaryT h-[48px] w-[48px] flex items-center justify-center rounded-tr-[18px] rounded-br-[18px]"
              aria-label="Search"
            >
              <Search />
            </button>
          </div>
          <RequestAQuoteModalServerWrapper className="w-full xl:w-fit">
            <div
              className={`${MaisonNeue} w-full xl:py-6 xl:px-8 h-full btn bg-primaryT border-primaryT font-extrabold border-[0.2rem] md:py-6 text-button md:text-button-md lg:text-[1.15rem] rounded-md md:px-[1.8rem] transition transform hover:scale-105 hover:bg-primaryT hover:border-primaryT`}
            >
              REQUEST A QUOTE
            </div>
          </RequestAQuoteModalServerWrapper>
          {blog.latestBlogs?.length ? (
            <h3 className="text-[32px] mt-4 mb-2">Recent Posts</h3>
          ) : null}

          {blog.latestBlogs?.map((latest_blog, index) => {
            return (
              <div
                className="flex flex-col border rounded-[18px] p-4 mb-8"
                key={index}
              >
                <h4 className="mb-4">
                  <Link
                    href={`/blog/${latest_blog.slug}`}
                    className="transition-colors hover:text-primaryT"
                  >
                    {latest_blog.title}
                  </Link>
                </h4>
                <h5 className="text-[12px]">
                  {dayjs(latest_blog.date).format('MMMM D, YYYY')}
                </h5>
              </div>
            );
          })}
        </aside>
      </div>
    </div>
  );
};

export default BlogsViewBody;
