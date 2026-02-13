import React from 'react';

import Roboto from '@/utilities/fonts/Roboto';

type PropTypes = {
  children: React.ReactNode;
  title: string;
};

const SideBarItems: React.FC<PropTypes> = ({ title, children }) => {
  return (
    <div className="h-full pt-8">
      <h4 className={`${Roboto} text-md font-bold mb-4`}>{title}</h4>
      {children}
    </div>
  );
};

export default SideBarItems;
