import React from 'react';

import type { AddBlogType } from '@/utilities/types/AdminFormTypes';
import type { Blog } from '@/utilities/types/shared.types';

type PropTypes = {
  blog: Blog;
  editBlogOnServer: (blog: AddBlogType, blogId: string) => Promise<void>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditBlogForm: React.FC<PropTypes> = ({
  editBlogOnServer,
  blog,
  setShowModal,
}) => {
  const [title, setTitle] = React.useState(blog.title);
  const [content, setContent] = React.useState(blog.content);
  const [imageSrc, setImageSrc] = React.useState(blog.imageSrc);
  const [isActive, setIsActive] = React.useState(blog.isActive);
  const [slug, setSlug] = React.useState(blog.slug);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await editBlogOnServer(
      {
        title,
        content,
        imageSrc,
        isActive,
        date: blog.date,
        author: blog.author,
        slug,
        descriptionMetadata: blog.descriptionMetadata,
        keywordsMetadata: blog.keywordsMetadata,
        titleMetadata: blog.titleMetadata,
      },
      String(blog.id)
    );
    setShowModal(false);
  };

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    if (name === 'title') setTitle(value);
    if (name === 'imageSrc') setImageSrc(value);
    if (name === 'slug') setSlug(value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(event.target.checked);
  };

  const generateSlug = () => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setSlug(slug);
  };

  return (
    <div className="w-[20rem]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center p-4"
      >
        <label className="flex flex-col gap-2">
          <p>Title</p>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            placeholder="Blog title"
            value={title}
            onChange={handleTextInputChange}
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
              value={slug}
              onChange={handleTextInputChange}
            />
            <button type="button" className="btn" onClick={generateSlug}>
              Generate Slug
            </button>
          </div>
        </label>
        <label className="flex flex-col gap-2">
          <p>Content</p>
          <textarea
            name="content"
            className="textarea textarea-bordered w-full"
            placeholder="Blog content"
            value={content}
            onChange={handleContentChange}
          />
        </label>
        <label className="flex flex-col gap-2">
          <p>Image URL</p>
          <input
            type="text"
            name="imageSrc"
            className="input input-bordered w-full"
            placeholder="Image URL"
            value={imageSrc}
            onChange={handleTextInputChange}
          />
        </label>
        <label className="flex gap-4">
          <p>Is status active?</p>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={isActive}
            onChange={handleToggleChange}
          />
        </label>
        <button type="submit" className="btn">
          Edit Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlogForm;
