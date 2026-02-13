import React, { useCallback } from 'react';

import type { RequestAQuoteModalFormData } from '@/utilities/types/RequestAQuoteModalTypes';

type PropTypes = {
  formData: RequestAQuoteModalFormData;
  label: string;
  name: keyof RequestAQuoteModalFormData;
  setFormData: React.Dispatch<React.SetStateAction<RequestAQuoteModalFormData>>;
  isRequiredLabel?: boolean;
  pattern?: string;
  placeholder?: string;
  subLabel?: string;
  type?: string;
};

const RequestAQuoteInputText: React.FC<PropTypes> = ({
  label,
  placeholder,
  type = 'text',
  pattern,
  subLabel,
  name,
  formData,
  setFormData,
  isRequiredLabel = false,
}) => {
  // Memoize the change handler
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [name]: event.target.value }));
  }, [name, setFormData]);

  return (
    <label className="flex flex-col gap-2 w-full">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <p className="font-bold text-sm">{label}</p>
          {isRequiredLabel && (
            <span className="text-errorColor text-xs">(Required)</span>
          )}
        </div>
        {subLabel && <p className="text-xs text-subLabelColor">{subLabel}</p>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        pattern={pattern}
        name={name}
        value={String(formData[name])}
        onChange={handleChange}
      />
    </label>
  );
};

export default React.memo(RequestAQuoteInputText);