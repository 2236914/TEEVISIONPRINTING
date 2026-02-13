'use client';

import React, { useEffect, useRef, useState } from 'react';

import AddImageContents from '@/components/admin/blogs/AdminBlogs/TextEditor/components/AddImageModal/components/AddImageContents';
import type { AddImageAsset } from '@/utilities/types/AdminFormTypes';
import type { ImageAsset } from '@/utilities/types/shared.types';

type PropTypes = {
  addImageAssetOnServer: (imageAsset: AddImageAsset) => Promise<void>;
  assetImages: Array<ImageAsset>;
  deleteImageAssetsOnServer: (imageAssetIds: number[]) => Promise<void>;
  onImportImageButtonClicked: (imageUrl: string) => void;
};

const AddImageModal: React.FC<PropTypes> = ({
  assetImages,
  addImageAssetOnServer,
  deleteImageAssetsOnServer,
  onImportImageButtonClicked,
}) => {
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef<any>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    showModal ? modalRef.current.showModal() : modalRef.current.close();
  }, [showModal]);

  const onAddImageButtonClicked = async () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={onAddImageButtonClicked} type="button">
        Add Image
      </button>
      <dialog ref={modalRef} id="add-image-blog-modal" className="modal">
        <div className="modal-box w-fit max-w-[150rem] bg-white">
          <div>
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </div>
          <AddImageContents
            assetImages={assetImages}
            addImageAssetOnServer={addImageAssetOnServer}
            deleteImageAssetsOnServer={deleteImageAssetsOnServer}
            onImportImageButtonClicked={onImportImageButtonClicked}
          />
        </div>
      </dialog>
    </div>
  );
};

export default AddImageModal;
