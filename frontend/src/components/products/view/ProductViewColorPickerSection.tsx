'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

import { useProductView } from '@/contexts/ProductViewContext';
import type { Color } from '@/utilities/types/shared.types';

type PropTypes = {
  colors: Array<Color>;
  onColorSelect?: (colorName: string) => void;
};

const ProductViewColorPickerSection: React.FC<PropTypes> = ({ 
  colors,
  onColorSelect 
}) => {
  const { currentColor, colorOnChange } = useProductView();

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const currentColorInPicker = currentColor
    ? currentColor
    : {
        id: 0,
        name: 'black',
        hexCode: '#000000',
        isActive: true,
        sortOrder: 'N/A',
        isImage: false,
        imageUrl: '',
      };

  const onColorClick = (color: Color) => {
    // Update context (required for ProductViewImage to work)
    colorOnChange(color);
    
    // Also call the optional callback prop if provided
    if (onColorSelect) {
      onColorSelect(color.name);
    }
  };

  // Initialize color context on mount
  useEffect(() => {
    if (colors.length > 0) {
      colorOnChange(colors[0]);
      
      // Also call the optional callback if provided
      if (onColorSelect) {
        onColorSelect(colors[0].name);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center xl:items-start">
      <div className="flex gap-2 items-center">
        <p className="text-xs font-bold xl:font-normal">CURRENT COLOR:</p>
        {currentColorInPicker.isImage ? (
          <Image
            src={currentColorInPicker.imageUrl}
            width={100}
            height={100}
            alt="color"
            className="w-6 h-6 rounded-md border-[1px] border-background5 tooltip object-cover"
          />
        ) : (
          <div
            className="w-6 h-6 rounded-md border-[1px] border-background5 tooltip"
            style={{ backgroundColor: `${currentColorInPicker.hexCode}` }}
          />
        )}
        <p className="text-sm">{currentColorInPicker.name}</p>
      </div>
      <div className="flex flex-wrap gap-2 max-w-[30rem]">
        {colors.map((color) => (
          <button
            key={color.id}
            data-tip={color.name}
            onClick={() => onColorClick(color)}
            className="w-6 h-6 rounded-md border-[1px] border-background5 tooltip"
          >
            {color.isImage ? (
              <Image
                src={color.imageUrl}
                width={100}
                height={100}
                alt="color"
                className="w-full h-full rounded-md object-cover"
              />
            ) : (
              <div
                className="w-full h-full rounded-md"
                style={{ backgroundColor: `${color.hexCode}` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductViewColorPickerSection;