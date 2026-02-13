'use client';
import React, { TextareaHTMLAttributes, forwardRef } from 'react';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type PropTypes = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

const RoundedTextarea = forwardRef<HTMLTextAreaElement, PropTypes>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            className={`
              ${MaisonNeue}
              block text-xs text-gray-500 mb-1.5 font-medium
            `}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            ${MaisonNeue}
            w-full
            px-4 py-3
            rounded-xl
            border border-gray-200
            bg-white
            text-sm
            text-black
            placeholder:text-gray-400
            outline-none
            transition-colors duration-200
            focus:border-primaryT
            resize-none
            min-h-[100px]
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className={`${MaisonNeue} text-xs text-red-500 mt-1`}>{error}</p>
        )}
      </div>
    );
  }
);

RoundedTextarea.displayName = 'RoundedTextarea';

export default RoundedTextarea;
