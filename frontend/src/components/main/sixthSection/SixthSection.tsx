'use client';
/* eslint-disable id-length */

import React, { useMemo, useState } from 'react';
// eslint-disable-next-line import/no-named-as-default
import ReCAPTCHA from 'react-google-recaptcha';

import YellowUnderline from '@/components/main/secondSection/components/YellowUnderline';
import Checkbox from '@/components/main/sixthSection/components/Checkbox';
import GroupRadio from '@/components/main/sixthSection/components/GroupRadio';
import QuestionModal from '@/components/main/sixthSection/components/QuestionModal';
import TextArea from '@/components/main/sixthSection/components/TextArea';
import TextField from '@/components/main/sixthSection/components/TextField';
import PrimaryButton from '@/components/shared/PrimaryButton';
import RequestAQuoteModal from '@/components/shared/RequestAQuoteModal/RequestAQuoteModal';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import Termina from '@/utilities/fonts/Termina/Termina';
import RightArrow from '@/utilities/SVGs/RightArrow';
import type { AddQuestionType } from '@/utilities/types/AdminFormTypes';
import type { RequestAQuoteModalFormData } from '@/utilities/types/RequestAQuoteModalTypes';
import type {
  FetchAddResponse,
  RequestAQuoteProduct,
} from '@/utilities/types/shared.types';

type PropTypes = {
  addQuestionOnServer: (question: AddQuestionType) => Promise<FetchAddResponse>;
  addQuoteOnServer: (
    quote: RequestAQuoteModalFormData
  ) => Promise<FetchAddResponse>;
  products: Array<RequestAQuoteProduct>;
};

const initialData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  dueDate: '',
  product: '',
  quantityBySizes: {
    XS: 0,
    S: 0,
    M: 50,
    LG: 0,
    XL: 0,
    '2XL': 0,
    '3XL': 0,
    '4XL': 0,
    '5XL': 0,
  },
  frontNumberOfColors: 0,
  backNumberOfColors: 0,
  createArtwork: false,
  needDesigner: false,
  additionalNotes: '',
  event: '',
  color: '',
  hasSpecialRequest: false,
  artworkImageUrl: '',
  pricePerShirt: 0,
  totalPrice: 0,
};

const SixthSection: React.FC<PropTypes> = ({
  products,
  addQuoteOnServer,
  addQuestionOnServer,
}) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

  const [captcha, setCaptcha] = useState<string | null>(null);

  const [questionData, setQuestionData] = useState<AddQuestionType>({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    inquiryDetails: '',
    preferredContactMethod: '',
  });

  const [hasAgreed, setHasAgreed] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const clearForm = () => {
    setQuestionData({
      fullName: '',
      email: '',
      companyName: '',
      phoneNumber: '',
      inquiryDetails: '',
      preferredContactMethod: '',
    });
    setHasAgreed(false);
    setCaptcha(null);
  };

  const onSubmit = async () => {
    if (!captcha) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    if (!questionData.phoneNumber || questionData.phoneNumber.trim() === '') {
      alert('Please enter a phone number');
      return;
    }

    const response = await addQuestionOnServer(questionData);
    if (!response.success) {
      setShowErrorModal(true);
      return;
    }
    setShowSuccessModal(true);
    clearForm();
  };

  const isButtonDisabled = useMemo(() => {
    return !(
      questionData.fullName &&
      questionData.email &&
      questionData.phoneNumber &&
      questionData.inquiryDetails &&
      questionData.preferredContactMethod &&
      hasAgreed &&
      captcha
    );
  }, [questionData, hasAgreed, captcha]);

  const handleCaptchaChange = (value: string | null) => {
    setCaptcha(value);
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent text-black pt-16 xl:pt-24 pb-24 px-8">
      <div className="flex flex-col xl:flex-row xl:gap-20 max-w-[75rem] w-full">
        <div className="xl:w-[30rem]">
          <div className="flex flex-col gap-2 xl:gap-4">
            <h2
              className={`${Termina} text-hero-sm xl:text-hero md:text-hero-md leading-none font-black`}
            >
              HAVE QUESTIONS?
            </h2>
            <div className="hidden xl:flex w-full">
              <YellowUnderline width={380} />
            </div>
            <div className="flex md:hidden">
              <YellowUnderline width={150} />
            </div>
            <div className="hidden md:block xl:hidden">
              <YellowUnderline width={250} />
            </div>
          </div>
          <div className="flex flex-col w-full xl:w-[30rem] gap-4 xl:gap-8 mt-4 xl:mt-8">
            <p className={`${Roboto} text-[0.8rem] md:text-2xl xl:text-lg`}>
              Use our Quick Inquiry Form to get in touch with our team. Whether
              you need more details about our services, have a specific
              question, or want to explore your options, we&apos;re ready to
              assist.
            </p>
            <p className={`${Roboto} text-[0.8rem] md:text-2xl xl:text-lg`}>
              Fill out the form, and we&apos;ll get back to you promptly!
            </p>
          </div>
          <div className="flex gap-2 mt-8 mb-4 xl:mt-12 xl:mb-0">
            <div className="flex gap-2 md:gap-4 xl:gap-4">
              <div className="flex flex-col w-fit">
                <p
                  className={`${MaisonNeue} text-sm md:text-2xl xl:text-lg font-extrabold w-fit`}
                >
                  I want to request a free quote
                </p>
                <YellowUnderline
                  width={100}
                  strokeWidth={6}
                  className="w-full"
                />
              </div>
              <RequestAQuoteModal
                products={products}
                initialData={initialData}
                addQuoteOnServer={addQuoteOnServer}
              >
                <div
                  className={`flex items-center justify-center rounded-full border-2 border-black w-[1.5rem] h-[1.5rem] p-[0.28rem] pl-[0.48rem] md:w-[2.7rem] md:h-[2.7rem] xl:w-[2.2rem] xl:h-[2.2rem] xl:p-[0.35rem] xl:pl-[0.55rem] bg-black`}
                >
                  <RightArrow color={`#FFFFFF`} width={26} height={18} />
                </div>
              </RequestAQuoteModal>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full mt-4 xl:mt-0">
          <TextField
            label="Full Name (First, Last)"
            placeholder="Type something here..."
            required
            name="fullName"
            data={questionData}
            setData={setQuestionData}
          />
          <TextField
            label="Email Address"
            placeholder="Type something here..."
            required
            name="email"
            data={questionData}
            setData={setQuestionData}
          />
          <div className="flex gap-2 flex-col xl:flex-row w-full">
            <TextField
              label="Company Name (Optional)"
              placeholder="Type something here..."
              name="companyName"
              data={questionData}
              setData={setQuestionData}
            />
            <TextField
              label="Phone Number"
              placeholder="Type something here..."
              required
              name="phoneNumber"
              data={questionData}
              setData={setQuestionData}
            />
          </div>
          <TextArea
            label="Inquiry Details"
            placeholder="Type something here..."
            required
            className="h-[8rem]"
            name="inquiryDetails"
            data={questionData}
            setData={setQuestionData}
          />
          <GroupRadio
            label="Preferred Contact Method"
            items={[
              { label: 'Email', value: 'email' },
              { label: 'Phone', value: 'phone' },
              { label: 'Either', value: 'either' },
            ]}
            required
            className="mt-2"
            name="preferredContactMethod"
            data={questionData}
            setData={setQuestionData}
          />
          <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center">
            {siteKey ? (
              <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} />
            ) : (
              <p className="text-red-500 text-sm">
                reCAPTCHA site key is missing
              </p>
            )}
            <Checkbox
              label="I agree to the terms & conditions of this website"
              data={hasAgreed}
              setData={setHasAgreed}
            />
          </div>
          <div className="h-fit w-full">
            <PrimaryButton
              onClick={onSubmit}
              fullwidth
              desktopFullWidth
              disabled={isButtonDisabled}
            >
              SUBMIT INQUIRY
            </PrimaryButton>
          </div>
        </div>
      </div>
      <QuestionModal
        show={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        header="Success!"
        body="Your question has been sent successfully."
      />
      <QuestionModal
        show={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        header="Error!"
        body="An error occurred while submitting your question."
      />
    </div>
  );
};

export default SixthSection;
