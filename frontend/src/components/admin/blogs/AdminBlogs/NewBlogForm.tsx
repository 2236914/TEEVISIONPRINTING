'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import dayjs from 'dayjs';

import NewBlogFormDragDropClickZone from '@/components/admin/blogs/AdminBlogs/NewBlogFormDragDropClickZone';
import TextEditor from '@/components/admin/blogs/AdminBlogs/TextEditor/TextEditor';
import LoadingModal from '@/components/shared/LoadingModal';
import Roboto from '@/utilities/fonts/Roboto';
import type {
  AddBlogType,
  AddImageAsset,
  BlogInputValues,
} from '@/utilities/types/AdminFormTypes';
import type { ImageAsset } from '@/utilities/types/shared.types';

type PropTypes = {
  addBlogOnServer: (blog: AddBlogType) => Promise<number | undefined>;
  addImageAssetOnServer: (imageAsset: AddImageAsset) => Promise<void>;
  assetImages: Array<ImageAsset>;
  deleteImageAssetsOnServer: (imageAssetIds: number[]) => Promise<void>;
  initialValues: BlogInputValues;
  pageHeader: string;
  updateBlogOnServer: (blog: AddBlogType, blogId: string) => Promise<void>;
  blogId?: string;
  initialImage?: string | null;
  type?: 'new' | 'edit' | 'view';
};

const deleteImageFromS3 = async (path: string) => {
  try {
    const formData = new FormData();
    formData.append('path', path);
    await fetch('/api/s3-delete', {
      method: 'DELETE',
      body: formData,
    });
    return;
  } catch (error) {
    console.error('Error deleting image from S3:', error);
    return;
  }
};

const NewBlogForm: React.FC<PropTypes> = ({
  addBlogOnServer,
  updateBlogOnServer,
  initialValues,
  type = 'new',
  blogId,
  pageHeader,
  initialImage = null,
  assetImages,
  addImageAssetOnServer,
  deleteImageAssetsOnServer,
}) => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [image, setImage] = useState<File | string | null>(initialImage);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const router = useRouter();

  const uploadImage = async (blogId: number) => {
    if (!image) return null;

    const formData = new FormData();
    formData.append('directory', `public/album/blogs/${blogId}`);
    formData.append('file', image);
    const response = await fetch('/api/s3-upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.body;
    }

    throw new Error('Error uploading image');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const blogData: AddBlogType = {
      title: inputValues.title,
      content: inputValues.content,
      imageSrc: initialImage as string,
      isActive: inputValues.isActive,
      date: dayjs(inputValues.date).format('YYYY-MM-DDTHH:mm:ss[Z]'),
      author: inputValues.author,
      slug: inputValues.slug,
      titleMetadata: inputValues.titleMetadata,
      descriptionMetadata: inputValues.descriptionMetadata,
      keywordsMetadata: inputValues.keywordsMetadata,
    };

    if (inputValues.title === '') {
      toast.error('Please fill out the title');
      return;
    }

    if (inputValues.slug === '') {
      toast.error('Please fill out the slug');
      return;
    }

    if (inputValues.date === '') {
      toast.error('Please fill out the date');
      return;
    }

    if (inputValues.author === '') {
      toast.error('Please fill out the author');
      return;
    }

    if (inputValues.content === '') {
      toast.error('Please fill out the content');
      return;
    }
    setShowLoadingModal(true);
    if (type === 'new') {
      try {
        const blogId = await addBlogOnServer(blogData);
        if (blogId) {
          await uploadImage(blogId);
          toast.success('Blog created successfully');
          router.push('/admin/blogs');
        }
      } catch (error) {
        setShowLoadingModal(false);
        console.error('Error creating blog:', error);
        toast.error('Error creating blog');
      }
    } else if (type === 'edit' && blogId) {
      try {
        if (image instanceof File) {
          await deleteImageFromS3(`public/album/blogs/${blogId}`);
          const url = await uploadImage(Number(blogId));
          blogData.imageSrc = url;
        }

        await updateBlogOnServer(blogData, blogId);
        toast.success('Blog updated successfully');
        router.push('/admin/blogs');
      } catch (error) {
        setShowLoadingModal(false);
        console.error('Error updating blog:', error);
        toast.error('Error updating blog');
      }
    }
  };

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleContentChange = (value: string) => {
    setInputValues({ ...inputValues, content: value });
  };

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setInputValues({ ...inputValues, isActive: checked });
  };

  const generateSlug = () => {
    const slug = inputValues.title
      // .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setInputValues({ ...inputValues, slug });
  };

  return (
    <div
      className={`${Roboto} flex flex-col gap-8 bg-background5 p-16 ml-64 mb-24`}
    >
      <LoadingModal
        showModal={showLoadingModal}
        textTitle={
          type === 'new'
            ? `Your blog is being added`
            : `Your blog is being updated`
        }
        textContent="Please wait while we process your request"
      />
      <div className="flex gap-8 items-center text-4xl font-bold bg-background4 p-8 rounded-lg">
        <h1>{pageHeader}</h1>
        {type === 'view' && (
          <Link href={`/admin/blogs/edit/${blogId}`}>
            <button className="btn bg-buttonBackgroundColor">Edit</button>
          </Link>
        )}
        {type === 'edit' && (
          <Link href={`/admin/blogs/view/${blogId}`}>
            <button className="btn bg-buttonBackgroundColor">View</button>
          </Link>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 justify-center p-8 bg-white rounded-lg"
      >
        <label className="flex flex-col gap-2">
          <p>Title</p>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            placeholder="Blog title"
            value={inputValues.title}
            onChange={handleTextInputChange}
            disabled={type === 'view'}
          />
        </label>
        <label className="flex flex-col gap-2">
          <p>Slug</p>
          <div className="flex gap-2">
            <input
              type="text"
              name="slug"
              className="input input-bordered w-full"
              placeholder="Blog slug"
              value={inputValues.slug}
              onChange={handleTextInputChange}
              disabled={type === 'view'}
            />
            <button type="button" className="btn" onClick={generateSlug}>
              Generate Slug
            </button>
          </div>
        </label>
        <label className="flex flex-col gap-2">
          <p>Metadata Title</p>
          <input
            type="text"
            name="titleMetadata"
            className="input input-bordered w-full"
            placeholder="Metadata Title"
            value={inputValues.titleMetadata}
            onChange={handleTextInputChange}
            disabled={type === 'view'}
          />
        </label>

        <label className="flex flex-col gap-2">
          <p>Metadata Description</p>
          <textarea
            name="descriptionMetadata"
            className="textarea textarea-bordered w-full"
            placeholder="Metadata Description"
            value={inputValues.descriptionMetadata}
            onChange={handleTextInputChange}
            disabled={type === 'view'}
          />
        </label>

        <label className="flex flex-col gap-2">
          <p>Metadata Keywords</p>
          <input
            type="text"
            name="keywordsMetadata"
            className="input input-bordered w-full"
            placeholder="Metadata Keywords (comma-separated)"
            value={inputValues.keywordsMetadata}
            onChange={handleTextInputChange}
            disabled={type === 'view'}
          />
        </label>
        <label className="flex gap-4">
          <p>Is status active?</p>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={inputValues.isActive}
            onChange={handleToggleChange}
            disabled={type === 'view'}
          />
        </label>
        <div className="flex gap-4 w-full">
          <label className="flex flex-col gap-2 w-full">
            <p>Author</p>
            <input
              type="text"
              name="author"
              className="input input-bordered w-full"
              placeholder="Author"
              value={inputValues.author}
              onChange={handleTextInputChange}
              disabled={type === 'view'}
            />
          </label>
          <label className="flex flex-col gap-2 w-[30rem]">
            <p>Date</p>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full"
              placeholder="Blog Date"
              value={inputValues.date}
              onChange={handleTextInputChange}
              disabled={type === 'view'}
            />
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <p>Image</p>
          <NewBlogFormDragDropClickZone
            file={image}
            setFile={setImage}
            disabled={type === 'view'}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Content</p>
          <div className="flex items-center justify-center">
            <div className="w-full px-4 rounded">
              <TextEditor
                content={initialValues.content}
                handleContentChange={handleContentChange}
                assetImages={assetImages}
                addImageAssetOnServer={addImageAssetOnServer}
                deleteImageAssetsOnServer={deleteImageAssetsOnServer}
              />
            </div>
          </div>
        </div>
        {type !== 'view' && (
          <div className="flex justify-center">
            <button type="submit" className="btn w-full max-w-[12rem]">
              {type === 'new' ? 'Add Blog' : 'Update Blog'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default NewBlogForm;
