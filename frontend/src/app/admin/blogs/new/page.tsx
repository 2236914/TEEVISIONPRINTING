import React from 'react';

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
import { initialBlogValues } from '@/utilities/constants/data';
import { fetchImageAssets } from '@/utilities/fetch/image-assets';

const page = async () => {
  const assetImages = await fetchImageAssets();
  return (
    <div>
      <AdminNavigation page="newBlog" />
      <NewBlogForm
        addBlogOnServer={addBlogOnServer}
        updateBlogOnServer={editBlogOnServer}
        addImageAssetOnServer={addImageAssetOnServer}
        deleteImageAssetsOnServer={deleteImageAssetsOnServer}
        assetImages={assetImages}
        pageHeader="New Blog Form"
        blogId="0"
        initialValues={initialBlogValues}
      />
    </div>
  );
};

export default page;
