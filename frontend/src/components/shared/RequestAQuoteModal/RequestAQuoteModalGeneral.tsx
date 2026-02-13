/* eslint-disable typescript-sort-keys/interface */
/* eslint-disable id-length */
'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { v4 as uuidv4 } from 'uuid';

import RequestAQuoteCheckbox from '@/components/shared/RequestAQuoteModal/subs/RequestAQuoteCheckbox';
import RequestAQuoteInputText from '@/components/shared/RequestAQuoteModal/subs/RequestAQuoteInputText';
import RequestAQuoteTextArea from '@/components/shared/RequestAQuoteModal/subs/RequestAQuoteTextArea';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';
import type { RequestAQuoteModalFormData } from '@/utilities/types/RequestAQuoteModalTypes';
import type { FetchAddResponse } from '@/utilities/types/shared.types';

// Lazy load heavy components
const QuoteModal = dynamic(
  () => import('@/components/shared/RequestAQuoteModal/subs/QuoteModal'),
  { ssr: false }
);

const RequestAQuoteModalDragDropClickZone = dynamic(
  () => import('@/components/shared/RequestAQuoteModal/subs/RequestAQuoteModalDragDropClickZone'),
  { ssr: false, loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded" /> }
);

const convertToSlug = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

type PropTypes = {
  addQuoteOnServer: (
    quote: RequestAQuoteModalFormData
  ) => Promise<FetchAddResponse>;
  children: React.ReactNode;
  className?: string;
  initialData: RequestAQuoteModalFormData;
};

const RequestAQuoteModalGeneral: React.FC<PropTypes> = ({
  children,
  initialData,
  className = '',
  addQuoteOnServer,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const [formData, setFormData] = useState<RequestAQuoteModalFormData>(() => ({
    ...initialData,
    product: 'General Inquiry',
    color: 'Not specified',
    hasSpecialRequest: true, // Mark as special request to bypass validation
  }));

  const [artworkImages, setArtworkImages] = useState<File[]>([]);

  // Handle modal show/hide
  useEffect(() => {
    if (!modalRef.current) return;
    
    if (showModal) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [showModal]);

  // Memoized file upload function
  const uploadFiles = useCallback(async (files: File[], fullName: string) => {
    const uploadedUrls: string[] = [];

    for (const image of files) {
      const emailFormData = new FormData();
      const directory = `public/album/quotes/${convertToSlug(fullName)}-${uuidv4()}`;
      emailFormData.append('directory', directory);
      emailFormData.append('file', image);

      const response = await fetch('/api/s3-upload', {
        method: 'POST',
        body: emailFormData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to upload ${image.name}: ${errorData.body || 'Unknown error'}`);
      }

      const result = await response.json();
      uploadedUrls.push(result.body);
    }

    return uploadedUrls;
  }, []);

  const onFormSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (isSubmitting) return;

      setIsSubmitting(true);

      try {
        let updatedFormData = { ...formData };

        // Upload artwork if present
        if (artworkImages.length > 0) {
          const uploadedUrls = await uploadFiles(artworkImages, formData.fullName);
          updatedFormData.artworkImageUrl = uploadedUrls.join(',');
        }

        // Ensure all required fields are set with proper defaults for general inquiry
        updatedFormData = {
          ...updatedFormData,
          product: 'General Inquiry',
          color: 'Not specified',
          hasSpecialRequest: true, // This bypasses product validation on backend
          // Set defaults for all numeric fields
          frontNumberOfColors: 0,
          backNumberOfColors: 0,
          pricePerShirt: 0,
          totalPrice: 0,
          // Ensure quantityBySizes is properly initialized
          quantityBySizes: {
            XS: 0,
            S: 0,
            M: 0,
            LG: 0,
            XL: 0,
            '2XL': 0,
            '3XL': 0,
            '4XL': 0,
            '5XL': 0,
          },
          // Ensure boolean fields
          createArtwork: updatedFormData.createArtwork || false,
          needDesigner: updatedFormData.needDesigner || false,
          // Ensure string fields are not null/undefined
          fullName: updatedFormData.fullName || '',
          email: updatedFormData.email || '',
          phoneNumber: updatedFormData.phoneNumber || '',
          dueDate: updatedFormData.dueDate || '',
          additionalNotes: updatedFormData.additionalNotes || '',
          event: updatedFormData.event || '',
          artworkImageUrl: updatedFormData.artworkImageUrl || '',
        };

        const addResponse = await addQuoteOnServer(updatedFormData);

        if (!addResponse.success) {
          throw new Error(addResponse.error || 'Failed to save quote');
        }

        setShowModal(false);
        setShowSuccessModal(true);
        
        // Clear form
        setFormData({
          ...initialData,
          product: 'General Inquiry',
          color: 'Not specified',
          hasSpecialRequest: true,
        });
        setArtworkImages([]);
      } catch (error) {
        console.error('Submit error:', error);
        setShowModal(false);
        setShowErrorModal(true);
      } finally {
        setIsSubmitting(false);
      }
    },
    [isSubmitting, formData, artworkImages, uploadFiles, addQuoteOnServer, initialData]
  );

  // Memoize submit button disabled state
  const isSubmitButtonDisabled = useMemo(() => {
    return (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      isSubmitting
    );
  }, [formData.fullName, formData.email, formData.phoneNumber, isSubmitting]);

  return (
    <div className={className}>
      <button
        type="button"
        aria-label="Request a quote"
        className="w-full h-full"
        onClick={() => setShowModal(true)}
      >
        {children}
      </button>

      <dialog
        ref={modalRef}
        id="my_modal_general"
        className="modal"
        onClose={() => setShowModal(false)}
      >
        <div className="modal-box w-full text-black max-w-full md:max-w-5xl max-h-[90vh] p-0 relative m-0 md:m-4 rounded-none md:rounded-lg flex flex-col overflow-hidden">
          {/* HEADER - Fixed position */}
          <div className="flex-shrink-0 bg-white pb-3 md:pb-4 border-b-2 border-gray-200 shadow-sm">
            {/* Exit Button */}
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20"
              disabled={isSubmitting}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={`${MaisonNeue} flex flex-col gap-2 md:gap-4 px-4 md:px-8 pt-4 md:pt-6`}>
              <h2 className={`${Termina} text-2xl md:text-3xl font-black text-center`}>
                REQUEST A QUOTE
              </h2>
              <p className="text-sm md:text-md text-center mt-1 md:mt-2">
                Please fill out the information for us to provide the right solution for you and your business. The more accurate the information, the more efficient we can assist you.
              </p>
              <p className="text-sm md:text-md text-center">
                Once you&apos;re finished, you&apos;ll be contacted through email. If you prefer talking through the phone, we can do that too at {' '}
                <a href="tel:+12675385331" className="text-blue-600 hover:underline">
                  (267) 538-5331
                </a>
              </p>
            </div>
          </div>

          {/* SCROLLABLE FORM */}
          <div className={`${MaisonNeue} flex flex-col gap-4 p-4 md:p-8 overflow-y-auto flex-1`}>
            <form onSubmit={onFormSubmit} className="flex flex-col gap-4">
              <RequestAQuoteInputText
                label="Full Name"
                placeholder="First name, Last name"
                name="fullName"
                formData={formData}
                setFormData={setFormData}
                isRequiredLabel={true}
              />

              <RequestAQuoteInputText
                label="Email"
                placeholder="Enter here"
                type="email"
                name="email"
                formData={formData}
                setFormData={setFormData}
                isRequiredLabel={true}
              />

              <div className="flex flex-col md:flex-row gap-4">
                <RequestAQuoteInputText
                  label="Phone number"
                  subLabel="Add your contact number"
                  placeholder="+1 88233412"
                  type="tel"
                  name="phoneNumber"
                  formData={formData}
                  setFormData={setFormData}
                  isRequiredLabel={true}
                />
                <RequestAQuoteInputText
                  label="Due Date"
                  subLabel="When do you need this?"
                  type="date"
                  name="dueDate"
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>

              <div className="flex flex-col gap-3">
                <RequestAQuoteCheckbox
                  label="Need a Designer?"
                  subLabel="I need a professional to create it for me"
                  formData={formData}
                  setFormData={setFormData}
                  name="needDesigner"
                />

                {formData.needDesigner && (
                  <div className="border border-gray-300 rounded-md p-3 md:p-4 bg-gray-50">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      We offer custom designs for any processed order.{' '}
                      <Link href="/design-services" className="text-blue-600 underline font-semibold">
                        Learn More
                      </Link>
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-sm font-bold text-center md:text-left">Printable Artwork</p>
                  <p className="text-xs text-subLabelColor text-center md:text-left">
                    Upload any artwork for your project (optional)
                  </p>
                </div>
                <RequestAQuoteModalDragDropClickZone
                  files={artworkImages}
                  setFiles={setArtworkImages}
                />
              </div>

              <RequestAQuoteTextArea
                formData={formData}
                setFormData={setFormData}
                label="Additional Notes"
                name="additionalNotes"
                placeholder="Tell us about your project - what products are you interested in, quantities needed, special requirements, etc."
              />

              <div className="flex w-full justify-center mt-4 md:mt-8 pb-4">
                <button
                  type="submit"
                  className="btn bg-primaryT w-full md:w-[13rem] text-sm md:text-base"
                  disabled={isSubmitButtonDisabled}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Quote'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      {showSuccessModal && (
        <QuoteModal
          show={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          header="Success!"
          body="Thank you for submitting your quote. We will get back to you as soon as possible."
        />
      )}

      {showErrorModal && (
        <QuoteModal
          show={showErrorModal}
          onClose={() => setShowErrorModal(false)}
          header="Error!"
          body="An error occurred while submitting your quote. Please try again."
        />
      )}
    </div>
  );
};

export default RequestAQuoteModalGeneral;