'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface DeleteButtonProps {
  deleteProductOnServer: (productId: number) => Promise<void>;
  productId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  productId,
  deleteProductOnServer,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteProductOnServer(productId);
      //   alert('Product deleted successfully!');
      toast.done('Product deleted successfully!');
    } catch (error) {
      //   console.error('Error deleting product:', error);
      //   alert('Failed to delete the product.');
      toast.error('Product deleted successfully!');
    } finally {
      setIsDeleting(false);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {/* Delete Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-sm btn-error text-white"
      >
        Delete
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Deletion</h3>
            <p className="py-4">
              Are you sure you want to delete this product? This action cannot
              be undone.
            </p>
            <div className="modal-action">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className={`btn btn-error text-white ${
                  isDeleting ? 'loading' : ''
                }`}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButton;
