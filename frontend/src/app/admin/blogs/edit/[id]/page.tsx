import React from 'react';

import dayjs from 'dayjs';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import NewBlogForm from '@/components/admin/blogs/AdminBlogs/NewBlogForm';
import {
  addBlogOnServer,
  editBlogOnServer,
} from '@/server-actions/blog-actions';
import {
  addImageAssetOnServer,
  deleteImageAssetsOnServer,
} from '@/server-actions/image-asset-actions';
import { fetchBlogById } from '@/utilities/fetch/blog';
import { fetchImageAssets } from '@/utilities/fetch/image-assets';

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const initialValues = await fetchBlogById(id);
  initialValues.date = dayjs(initialValues.date).format('YYYY-MM-DD');
  const assetImages = await fetchImageAssets();

  return (
    <div>
      <AdminNavigation page="" />
      <NewBlogForm
        addBlogOnServer={addBlogOnServer}
        updateBlogOnServer={editBlogOnServer}
        addImageAssetOnServer={addImageAssetOnServer}
        deleteImageAssetsOnServer={deleteImageAssetsOnServer}
        assetImages={assetImages}
        pageHeader="Edit Blog Form"
        blogId={id}
        initialValues={initialValues}
        type="edit"
        initialImage={initialValues.imageSrc}
      />
    </div>
  );
};

export default page;
