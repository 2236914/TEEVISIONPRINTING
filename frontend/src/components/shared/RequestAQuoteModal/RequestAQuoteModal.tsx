/* eslint-disable typescript-sort-keys/interface */
/* eslint-disable id-length */
'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { v4 as uuidv4 } from 'uuid';

import RequestAQuoteCheckbox from '@/components/shared/RequestAQuoteModal/subs/RequestAQuoteCheckbox';
import RequestAQuoteColorSelect from '@/components/shared/RequestAQuoteModal/subs/RequestAQuoteColorSelect';
import RequestAQuoteInputText from '@/components/shared/RequestAQuoteModal/subs/RequestAQuoteInputText';
import RequestAQuotePriceSection from '@/components/shared/RequestAQuoteModal/subs/RequestAQuotePriceSection';
import RequestAQuoteProductSelect from '@/components/shared/RequestAQuoteModal/subs/RequestAQuoteProductSelect';
import RequestAQuoteTextArea from '@/components/shared/RequestAQuoteModal/subs/RequestAQuoteTextArea';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';
import type { RequestAQuoteModalFormData } from '@/utilities/types/RequestAQuoteModalTypes';
import type {
  FetchAddResponse,
  RequestAQuoteProduct,
} from '@/utilities/types/shared.types';

// Lazy load heavy components
const QuoteModal = dynamic(
  () => import('@/components/shared/RequestAQuoteModal/subs/QuoteModal'),
  { ssr: false }
);

const RequestAQuoteModalDragDropClickZone = dynamic(
  () =>
    import(
      '@/components/shared/RequestAQuoteModal/subs/RequestAQuoteModalDragDropClickZone'
    ),
  {
    ssr: false,
    loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded" />,
  }
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
  currentProduct?: string;
  currentProductColor?: string;
  initialData: RequestAQuoteModalFormData;
  products: Array<RequestAQuoteProduct>;
};

const RequestAQuoteModal: React.FC<PropTypes> = ({
  children,
  products,
  initialData,
  className = '',
  addQuoteOnServer,
  currentProduct,
  currentProductColor,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  // Memoize product lookup function
  const findProductByName = useCallback(
    (productName: string) => {
      return products.find((prod) => prod.name === productName) || products[0];
    },
    [products]
  );

  // Initialize form with current product and color
  const initialProduct = useMemo(
    () => (currentProduct ? findProductByName(currentProduct) : products[0]),
    [currentProduct, findProductByName, products]
  );

  const [formData, setFormData] = useState<RequestAQuoteModalFormData>(() => ({
    ...initialData,
    product: currentProduct || products[0]?.name || '',
    color: currentProductColor || initialProduct.colors[0]?.name || '',
  }));

  // Memoize selected product
  const selectedProduct = useMemo(
    () => findProductByName(formData.product),
    [formData.product, findProductByName]
  );

  const [artworkImages, setArtworkImages] = useState<File[]>([]);

  // Update form when modal opens or product changes
  useEffect(() => {
    if (!showModal) return;

    if (currentProduct) {
      const matchedProduct = findProductByName(currentProduct);
      let colorToUse = matchedProduct.colors[0]?.name || '';

      if (currentProductColor) {
        const colorExists = matchedProduct.colors.some(
          (color) => color.name === currentProductColor
        );
        if (colorExists) {
          colorToUse = currentProductColor;
        }
      }

      setFormData((prev) => ({
        ...prev,
        product: currentProduct,
        color: colorToUse,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        product: products[0]?.name || '',
        color: products[0]?.colors[0]?.name || '',
      }));
    }
  }, [
    showModal,
    currentProduct,
    currentProductColor,
    products,
    findProductByName,
  ]);

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
        throw new Error(
          `Failed to upload ${image.name}: ${errorData.body || 'Unknown error'}`
        );
      }

      const result = await response.json();
      uploadedUrls.push(result.body);
    }

    return uploadedUrls;
  }, []);

  // Optimized form submit handler
  const onFormSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (isSubmitting) return;

      setIsSubmitting(true);

      try {
        let updatedFormData = { ...formData };

        if (artworkImages.length > 0) {
          const uploadedUrls = await uploadFiles(
            artworkImages,
            formData.fullName
          );
          updatedFormData = {
            ...formData,
            artworkImageUrl: uploadedUrls.join(','),
          };
        }

        const addResponse = await addQuoteOnServer(updatedFormData);

        if (!addResponse.success) {
          throw new Error('Failed to save quote');
        }

        setShowModal(false);
        setShowSuccessModal(true);

        // Clear form
        setFormData({
          ...initialData,
          product: products[0]?.name || '',
          color: products[0]?.colors[0]?.name || '',
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
    [
      isSubmitting,
      formData,
      artworkImages,
      uploadFiles,
      addQuoteOnServer,
      initialData,
      products,
    ]
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
        id="my_modal_3"
        className="modal"
        onClose={() => setShowModal(false)}
      >
        <div className="modal-box w-full max-w-full md:max-w-5xl max-h-[90vh] p-0 relative m-0 md:m-4 rounded-none md:rounded-lg flex flex-col overflow-hidden">
          {/* HEADER - Fixed position */}
          <div className="flex-shrink-0 bg-white pb-3 md:pb-4 border-b-2 border-gray-200 shadow-sm">
            {/* Exit Button - Fixed to actually close */}
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20"
              disabled={isSubmitting}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div
              className={`${MaisonNeue} flex flex-col gap-2 md:gap-4 px-4 md:px-8 pt-4 md:pt-6`}
            >
              <h2
                className={`${Termina} text-2xl md:text-3xl font-black text-center`}
              >
                REQUEST A QUOTE
              </h2>
              <p className="text-sm md:text-md text-center mt-1 md:mt-2">
                Please fill out the information for us to provide the right
                solution for you and your business. The more accurate the
                information, the more efficient we can assist you.
              </p>
              <p className="text-sm md:text-md text-center">
                Once you&apos;re finished, you&apos;ll be contacted through
                email. If you prefer talking through the phone, we can do that
                too at{' '}
                <a
                  href="tel:+12675385331"
                  className="text-blue-600 hover:underline"
                >
                  (267) 538-5331
                </a>
              </p>

              {currentProduct && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 md:p-3 mt-1 md:mt-2">
                  <p className="text-xs md:text-sm font-semibold text-blue-900">
                    Selected Product: {formData.product}
                  </p>
                  {formData.color && (
                    <p className="text-xs text-blue-700 mt-1">
                      Color: {formData.color}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* SCROLLABLE FORM */}
          <div
            className={`${MaisonNeue} flex flex-col gap-4 p-4 md:p-8 overflow-y-auto flex-1`}
          >
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

              <div className="flex flex-col md:flex-row gap-4">
                <RequestAQuoteProductSelect
                  label="Product"
                  subLabel={
                    <div className="text-xs md:text-sm">
                      Not sure?{' '}
                      <Link
                        className="underline text-linkColor"
                        href="/products"
                      >
                        Check Products
                      </Link>
                    </div>
                  }
                  products={products}
                  setFormData={setFormData}
                  formData={formData}
                />
                <RequestAQuoteColorSelect
                  label="Color"
                  subLabel="What's the color of your product?"
                  colors={selectedProduct.colors}
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
                      <Link
                        href="/design-services"
                        className="text-blue-600 underline font-semibold"
                      >
                        Learn More
                      </Link>
                    </p>
                  </div>
                )}
              </div>

              <div className="border-2 border-gray-300 rounded-lg p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-base mb-3">
                      Number of Colors:
                    </h3>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <label htmlFor="frontColors" className="text-sm w-32">
                          Front Colors:
                        </label>
                        <select
                          id="frontColors"
                          name="frontNumberOfColors"
                          value={formData.frontNumberOfColors}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              frontNumberOfColors: parseInt(e.target.value),
                            }))
                          }
                          className="select select-bordered select-sm w-20"
                        >
                          {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-center gap-3">
                        <label htmlFor="backColors" className="text-sm w-32">
                          Back Colors:
                        </label>
                        <select
                          id="backColors"
                          name="backNumberOfColors"
                          value={formData.backNumberOfColors}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              backNumberOfColors: parseInt(e.target.value),
                            }))
                          }
                          className="select select-bordered select-sm w-20"
                        >
                          {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">Quantity:</h3>
                    <RequestAQuotePriceSection
                      product={selectedProduct}
                      formData={formData}
                      setFormData={setFormData}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-sm font-bold text-center md:text-left">
                    Printable Artwork
                  </p>
                  <p className="text-xs text-subLabelColor text-center md:text-left">
                    Upload any artwork for your project
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
                placeholder="Anything you want us to know?"
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

export default RequestAQuoteModal;
