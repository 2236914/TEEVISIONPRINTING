import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import dayjs from 'dayjs';

import BlogsViewBody from '@/components/blogs/BlogsViewBody/BlogsViewBody';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import { fetchBlogBySlug } from '@/utilities/fetch/blog';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  try {
    const blog = await fetchBlogBySlug(params.slug);

    const title = blog.titleMetadata || blog.title;
    const description = blog.descriptionMetadata || `Read more about ${blog.title}`;
    const keywords = blog.keywordsMetadata || blog.title;

    return {
      title,
      description,
      keywords,
      alternates: {
        canonical: `https://www.teevisionprinting.com/blog/${blog.slug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.teevisionprinting.com/blog/${blog.slug}`,
        type: 'article',
        images: blog.imageSrc ? [blog.imageSrc] : [],
        publishedTime: blog.date,
      },
      verification: {
        google: 'w935iNlFpek7qkg70stsdDRrGUgdGzjuSpsl2Rs5owo',
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
};

const page = async ({ params }: { params: { slug: string } }) => {
  try {
    const blog = await fetchBlogBySlug(params.slug);

    if (!blog.isActive) {
      notFound();
    }

    const formattedBlog = {
      ...blog,
      date: dayjs(blog.date).format('MMMM D, YYYY'),
    };

    return (
      <main>
        <div className="absolute z-[60] w-full">
          <MainNavigation />
        </div>
        <BlogsViewBody blog={formattedBlog} />
        <Footer />
      </main>
    );
  } catch (error) {
    console.error('Error fetching blog:', error);
    notFound();
  }
};

export default page;