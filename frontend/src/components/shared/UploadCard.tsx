'use client';
import React, { useCallback, useState, useRef } from 'react';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import RoundedInput from './RoundedInput';

type PropTypes = {
  onSubmit?: (data: {
    file: File | null;
    name: string;
    email: string;
    phone: string;
  }) => void;
  acceptedTypes?: string;
  maxSizeMB?: number;
  submitButtonText?: string;
  className?: string;
};

const UploadIcon = () => (
  <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
  </svg>
);

const UploadCard: React.FC<PropTypes> = ({
  onSubmit,
  acceptedTypes = '.png,.jpg,.jpeg,.pdf',
  maxSizeMB = 10,
  submitButtonText = 'See My Design',
  className = '',
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const validateFile = (file: File): boolean => {
    const maxBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxBytes) {
      setError(`File size must be less than ${maxSizeMB}MB`);
      return false;
    }
    setError('');
    return true;
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && validateFile(droppedFile)) {
      setFile(droppedFile);
    }
  }, [maxSizeMB]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ file, name, email, phone });
  };

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
        {/* Upload Zone */}
        <div
          className={`
            border-2 border-dashed rounded-xl
            p-6 md:p-8
            flex flex-col items-center justify-center
            cursor-pointer
            transition-colors duration-200
            min-h-[180px] md:min-h-[200px]
            ${isDragging
              ? 'border-primaryT bg-primaryT/5'
              : 'border-gray-200 hover:border-primaryT'
            }
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            accept={acceptedTypes}
            onChange={handleFileChange}
            className="hidden"
          />
          <UploadIcon />
          <p className={`${MaisonNeue} text-gray-700 text-xs md:text-sm mt-3 text-center px-2`}>
            {file ? file.name : 'Drop your design here or click to browse'}
          </p>
          <p className={`${MaisonNeue} text-gray-400 text-[10px] md:text-xs mt-1`}>
            PNG, JPG, PDF up to {maxSizeMB}MB
          </p>
          {error && (
            <p className={`${MaisonNeue} text-red-500 text-xs mt-2`}>{error}</p>
          )}
        </div>

        {/* Form Fields */}
        <RoundedInput
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <RoundedInput
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <RoundedInput
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

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

export default UploadCard;
