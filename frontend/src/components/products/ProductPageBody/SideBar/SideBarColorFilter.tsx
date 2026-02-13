import React from 'react';

import type { Color } from '@/utilities/types/shared.types';

type PropTypes = {
  colors: Array<Color>;
};

const SideBarColorFilter: React.FC<PropTypes> = ({ colors }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <button
          key={color.id}
          className={`min-w-4 min-h-4 rounded`}
          style={{ backgroundColor: `${color.hexCode}` }}
          data-tip={color.name}
        />
      ))}
    </div>
  );
};

export default SideBarColorFilter;
