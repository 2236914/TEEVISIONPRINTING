'use client';

import React, { useEffect, useRef, useState } from 'react';

import EditBlogForm from '@/components/admin/blogs/AdminBlogs/EditBlogForm';
import type { AddBlogType } from '@/utilities/types/AdminFormTypes';
import type { Blog } from '@/utilities/types/shared.types';

type PropTypes = {
  blog: Blog;
  editBlogOnServer: (blog: AddBlogType, blogId: string) => Promise<void>;
};

const EditButtonBlogModal: React.FC<PropTypes> = ({
  editBlogOnServer,
  blog,
}) => {
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef<any>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    showModal ? modalRef.current.showModal() : modalRef.current.close();
  }, [showModal]);

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="btn btn-sm">
        Edit
      </button>
      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box w-fit">
          <form method="dialog">
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <EditBlogForm
            editBlogOnServer={editBlogOnServer}
            blog={blog}
            setShowModal={setShowModal}
          />
        </div>
      </dialog>
    </div>
  );
};

export default EditButtonBlogModal;
