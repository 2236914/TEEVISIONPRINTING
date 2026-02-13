'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import type { Quote } from '@/utilities/types/shared.types';

type PropTypes = {
  quote: Quote;
};

const ViewQuoteModal: React.FC<PropTypes> = ({ quote }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    showModal ? modalRef.current.showModal() : modalRef.current.close();
  }, [showModal]);

  // Parse multiple artwork URLs (comma-separated)
  const artworkUrls = quote.artworkImageUrl 
    ? quote.artworkImageUrl.split(',').map(url => url.trim()).filter(url => url.length > 0)
    : [];

  // Check if URL is an image
  const isImageUrl = (url: string) => {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];
    return imageExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  // Get filename from URL
  const getFileName = (url: string) => {
    try {
      return url.substring(url.lastIndexOf('/') + 1);
    } catch {
      return 'Download File';
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="btn btn-sm"
      >
        View
      </button>
      <dialog ref={modalRef} id="view_quote_modal" className="modal">
        <div className="modal-box w-fit max-w-4xl">
          <form method="dialog">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="max-w-[50rem] p-4">
            {/* Multiple Artwork Files */}
            {artworkUrls.length > 0 && (
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">
                  Artwork Files ({artworkUrls.length}):
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {artworkUrls.map((url, index) => {
                    const isImage = isImageUrl(url);
                    const fileName = getFileName(url);

                    return (
                      <div key={index} className="border rounded-lg p-2 hover:shadow-md transition-shadow">
                        {isImage ? (
                          <a 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <div className="relative w-full h-32 mb-2">
                              <Image
                                src={url}
                                alt={`Artwork ${index + 1}`}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                            <p className="text-xs text-center text-blue-600 hover:underline truncate">
                              {fileName}
                            </p>
                          </a>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-32">
                            <svg 
                              className="w-12 h-12 text-gray-400 mb-2" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                              />
                            </svg>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-center text-blue-600 hover:underline truncate w-full px-2"
                            >
                              {fileName}
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <h2 className="text-2xl font-bold mb-4">Quote Details</h2>
            <div className="space-y-2">
              <p>
                <strong>Full Name:</strong> {quote.fullName}
              </p>
              <p>
                <strong>Email:</strong> {quote.email}
              </p>
              <p>
                <strong>Phone Number:</strong> {quote.phoneNumber}
              </p>
              <p>
                <strong>Due Date:</strong> {quote.dueDate || 'N/A'}
              </p>
              <p>
                <strong>Special Request:</strong> {quote.hasSpecialRequest ? 'Yes' : 'No'}
              </p>
              {!quote.hasSpecialRequest && (
                <>
                  <p>
                    <strong>Product Name:</strong> {quote.productName}
                  </p>
                  <p>
                    <strong>Product Color:</strong> {quote.productColor}
                  </p>
                  <p>
                    <strong>Number of Front Colors:</strong> {quote.frontNumberOfColors}
                  </p>
                  <p>
                    <strong>Number of Back Colors:</strong> {quote.backNumberOfColors}
                  </p>
                  <div className="mt-2">
                    <strong>Quantities:</strong>
                    <ul className="ml-4">
                      <li>XS: {quote.smallQuantity}</li>
                      <li>S: {quote.smallQuantity}</li>
                      <li>M: {quote.mediumQuantity}</li>
                      <li>L: {quote.largeQuantity}</li>
                      <li>XL: {quote.extraLargeQuantity}</li>
                      <li>2XL: {quote.twoExtraLargeQuantity}</li>
                      <li>3XL: {quote.threeExtraLargeQuantity}</li>
                      <li>4XL: {quote.fourExtraLargeQuantity}</li>
                      <li>5XL: {quote.fiveExtraLargeQuantity}</li>
                    </ul>
                  </div>
                  <p>
                    <strong>Create My Artwork:</strong> {quote.createArtwork ? 'Yes' : 'No'}
                  </p>
                  <p>
                    <strong>Need a Designer:</strong> {quote.needsDesigner ? 'Yes' : 'No'}
                  </p>
                </>
              )}
              <p>
                <strong>Additional Notes:</strong> {quote.additionalNotes || 'N/A'}
              </p>
              <p>
                <strong>Price Per Shirt:</strong> ${quote.pricePerShirt}
              </p>
              <p>
                <strong>Total Price:</strong> ${quote.totalPrice}
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ViewQuoteModal;