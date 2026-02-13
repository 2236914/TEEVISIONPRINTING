'use client';
import React, { InputHTMLAttributes, forwardRef } from 'react';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type PropTypes = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  variant?: 'default' | 'outlined';
};

const RoundedInput = forwardRef<HTMLInputElement, PropTypes>(
  ({ label, error, variant = 'default', className = '', ...props }, ref) => {
    const variantClasses = {
      default: 'border-gray-200 bg-white focus:border-primaryT',
      outlined: 'border-gray-300 bg-transparent focus:border-primaryT',
    };

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
        <input
          ref={ref}
          className={`
            ${MaisonNeue}
            w-full
            px-4 py-3
            rounded-xl
            border
            ${variantClasses[variant]}
            text-sm
            text-black
            placeholder:text-gray-400
            outline-none
            transition-colors duration-200
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

RoundedInput.displayName = 'RoundedInput';

export default RoundedInput;
