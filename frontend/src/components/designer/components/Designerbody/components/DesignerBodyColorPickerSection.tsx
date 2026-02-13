import React from 'react';

import type { Color } from '@/utilities/types/shared.types';

type PropTypes = {
  colors: Array<Color>;
  currentColor: Color;
  setCurrentColor: React.Dispatch<React.SetStateAction<Color>>;
};

const DesignerBodyColorPickerSection: React.FC<PropTypes> = ({
  colors,
  currentColor,
  setCurrentColor,
}) => {
  const colorOnChange = (color: Color) => {
    setCurrentColor(color);
  };

  return (
    <div className="flex flex-col gap-4 items-center xl:items-start">
      <div className="flex gap-2 items-center">
        <p className="text-xs font-bold xl:font-normal">CURRENT COLOR:</p>
        <div
          className={`w-6 h-6 rounded-md border-[1px] border-background5 tooltip`}
          style={{ backgroundColor: currentColor.hexCode }}
        />
        <p className="text-sm">{currentColor.name}</p>
      </div>
      <div className="flex flex-wrap gap-2 max-w-[30rem]">
        {colors.map((color) => (
          <button
            key={color.id}
            className={`w-6 h-6 rounded-md border-[1px] border-background5 tooltip`}
            style={{ backgroundColor: color.hexCode }}
            data-tip={color.name}
            onClick={() => colorOnChange(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignerBodyColorPickerSection;
