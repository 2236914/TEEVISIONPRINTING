import React from 'react';

import type { RequestAQuoteModalFormData } from '@/utilities/types/RequestAQuoteModalTypes';

type PropTypes = {
  formData: RequestAQuoteModalFormData;
  label: string;
  name: 'createArtwork' | 'needDesigner';
  setFormData: React.Dispatch<React.SetStateAction<RequestAQuoteModalFormData>>;
  subLabel: string;
};

const RequestAQuoteCheckbox: React.FC<PropTypes> = ({
  label,
  subLabel,
  formData,
  setFormData,
  name,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [name]: event.target.checked });
  };

  return (
    <div className="form-control">
      <label className="flex gap-2 justify-start items-center label cursor-pointer">
        <input
          type="checkbox"
          className="checkbox"
          checked={formData[name]}
          onChange={handleChange}
        />
        <div className="flex flex-col">
          <span className="label-text font-bold text-sm">{label}</span>
          <span className="label-text text-xs text-subLabelColor">
            {subLabel}
          </span>
        </div>
      </label>
    </div>
  );
};

export default RequestAQuoteCheckbox;
