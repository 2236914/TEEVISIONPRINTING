import type { ReactNode } from 'react';
import React, { useCallback, useMemo } from 'react';

import { isColorDark } from '@/utilities/helpers/colorUtils';
import type { RequestAQuoteModalFormData } from '@/utilities/types/RequestAQuoteModalTypes';

type PropTypes = {
  colors: Array<{
    hexCode: string;
    name: string;
  }>;
  formData: RequestAQuoteModalFormData;
  label: string;
  setFormData: React.Dispatch<React.SetStateAction<RequestAQuoteModalFormData>>;
  subLabel?: string | ReactNode;
};

const RequestAQuoteColorSelect: React.FC<PropTypes> = ({
  label,
  subLabel,
  colors,
  setFormData,
  formData,
}) => {
  // Memoize the change handler
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedColor = colors.find(
        (color) => String(color.name) === event.target.value
      );
      if (selectedColor) {
        setFormData((prevData) => ({
          ...prevData,
          color: selectedColor.name,
        }));
      }
    },
    [colors, setFormData]
  );

  // Memoize current color calculation
  const currentColor = useMemo(() => {
    return (
      colors.find((color) => String(color.name) === formData.color) ||
      colors[0] || { id: 0, name: 'black', hexCode: '#000000' }
    );
  }, [colors, formData.color]);

  const currentHexcode = currentColor.hexCode;

  // Memoize the select style
  const selectStyle = useMemo(
    () => ({
      backgroundColor: currentHexcode,
      color: isColorDark(currentHexcode) ? 'white' : 'black',
    }),
    [currentHexcode]
  );

  return (
    <label className="flex flex-col gap-2 w-full">
      <div className="flex flex-col">
        <p className="text-sm font-bold">{label}</p>
        {subLabel && (
          <div className="text-xs text-subLabelColor">{subLabel}</div>
        )}
      </div>
      <select
        className="select select-bordered w-full"
        onChange={handleChange}
        style={selectStyle}
        value={formData.color}
      >
        {colors.map((color) => (
          <option
            key={color.name + color.hexCode}
            value={color.name}
            style={{
              backgroundColor: color.hexCode,
              color: isColorDark(color.hexCode) ? 'white' : 'black',
            }}
          >
            {color.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default React.memo(RequestAQuoteColorSelect);
