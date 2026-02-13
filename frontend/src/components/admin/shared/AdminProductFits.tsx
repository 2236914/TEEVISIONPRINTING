import React from 'react';

import type { InputValues } from '@/utilities/types/AdminFormTypes';
import type { Fit } from '@/utilities/types/shared.types';

type PropTypes = {
  fits: Array<Fit>;
  inputValues: InputValues;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
  disabled?: boolean;
};

const AdminProductFits: React.FC<PropTypes> = ({
  fits,
  inputValues,
  setInputValues,
  disabled = false,
}) => {
  const handleFitToggle = (fitId: number) => {
    setInputValues((prev) => {
      const currentFitIds = prev.fitIds;
      const isSelected = currentFitIds.includes(fitId);
      
      return {
        ...prev,
        fitIds: isSelected
          ? currentFitIds.filter((id) => id !== fitId)
          : [...currentFitIds, fitId],
      };
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold">Fits</p>
      <div className="flex flex-col gap-2 max-h-[15rem] overflow-y-auto">
        {fits.map((fit) => (
          <label
            key={fit.id}
            className="flex items-center gap-2 cursor-pointer hover:bg-background5 p-2 rounded"
          >
            <input
              type="checkbox"
              checked={inputValues.fitIds.includes(fit.id)}
              onChange={() => handleFitToggle(fit.id)}
              disabled={disabled}
              className="checkbox checkbox-sm"
            />
            <span className={disabled ? 'text-gray-500' : ''}>{fit.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AdminProductFits;