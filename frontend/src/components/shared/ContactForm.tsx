'use client';
import React, { useState } from 'react';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import RoundedInput from './RoundedInput';
import RoundedTextarea from './RoundedTextarea';

type ContactMethod = 'phone' | 'email' | 'text';

type FormData = {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  message: string;
  preferredContact: ContactMethod;
  isNotRobot: boolean;
};

type PropTypes = {
  onSubmit?: (data: FormData) => void;
  submitButtonText?: string;
  className?: string;
};

const ContactForm: React.FC<PropTypes> = ({
  onSubmit,
  submitButtonText = 'Send Message',
  className = '',
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    message: '',
    preferredContact: 'email',
    isNotRobot: false,
  });

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const RadioOption = ({
    value,
    label,
  }: {
    value: ContactMethod;
    label: string;
  }) => (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        name="preferredContact"
        value={value}
        checked={formData.preferredContact === value}
        onChange={(e) => handleChange('preferredContact', e.target.value as ContactMethod)}
        className="sr-only"
      />
      <span
        className={`
          w-4 h-4 rounded-full border-2 mr-2
          flex items-center justify-center
          transition-colors duration-200
          ${formData.preferredContact === value
            ? 'border-primaryT bg-primaryT'
            : 'border-gray-300'
          }
        `}
      >
        {formData.preferredContact === value && (
          <span className="w-1.5 h-1.5 bg-black rounded-full" />
        )}
      </span>
      <span className={`${MaisonNeue} text-sm text-gray-700`}>{label}</span>
    </label>
  );

  return (
    <div
      className={`
        rounded-[25px]
        bg-white
        shadow-xl
        p-6 md:p-8
        w-full max-w-md
        ${className}
      `}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <RoundedInput
          label="Full Name"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
        />

        <RoundedInput
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RoundedInput
            label="Company Name"
            placeholder="Company Inc."
            value={formData.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
          />
          <RoundedInput
            label="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>

        <RoundedTextarea
          label="Message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={4}
        />

        {/* Preferred Contact Method */}
        <div>
          <label className={`${MaisonNeue} block text-xs text-gray-500 mb-2 font-medium`}>
            Preferred Contact Method
          </label>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
            <RadioOption value="phone" label="Phone" />
            <RadioOption value="email" label="Email" />
            <RadioOption value="text" label="Text" />
          </div>
        </div>

        {/* Robot Checkbox */}
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={formData.isNotRobot}
            onChange={(e) => handleChange('isNotRobot', e.target.checked)}
            className="sr-only"
          />
          <span
            className={`
              w-5 h-5 rounded border-2 mr-3
              flex items-center justify-center
              transition-colors duration-200
              ${formData.isNotRobot
                ? 'border-primaryT bg-primaryT'
                : 'border-gray-300'
              }
            `}
          >
            {formData.isNotRobot && (
              <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </span>
          <span className={`${MaisonNeue} text-sm text-gray-600`}>
            I&apos;m not a robot
          </span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className={`
            ${MaisonNeue}
            w-full
            py-4
            rounded-full
            bg-primaryT
            text-black
            font-bold
            uppercase
            text-sm
            tracking-wide
            transition-all duration-200
            hover:bg-black hover:text-primaryT
            active:scale-[0.98]
          `}
        >
          {submitButtonText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
