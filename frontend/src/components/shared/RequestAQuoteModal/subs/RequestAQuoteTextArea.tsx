import React from 'react';

import type { RequestAQuoteModalFormData } from '@/utilities/types/RequestAQuoteModalTypes';

type PropTypes = {
  formData: RequestAQuoteModalFormData;
  label: string;
  name: keyof RequestAQuoteModalFormData;
  setFormData: React.Dispatch<React.SetStateAction<RequestAQuoteModalFormData>>;
  placeholder?: string;
};

const RequestAQuoteTextArea: React.FC<PropTypes> = ({
  label,
  placeholder,
  name,
  formData,
  setFormData,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <div>
        <p className="text-sm font-bold text-center">{label}</p>
      </div>
      <textarea
        className="textarea textarea-bordered h-40"
        placeholder={placeholder}
        name={name}
        value={String(formData[name])}
        onChange={handleChange}
      />
    </div>
  );
};

export default RequestAQuoteTextArea;
