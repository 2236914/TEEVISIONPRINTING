import React from 'react';

import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import UpperNavigation from '@/components/shared/Navigation/components/UpperNavigation';

const Navigation = async () => {
  return (
    <div className="absolute z-[60] w-full">
      <UpperNavigation />
      <MainNavigation />
    </div>
  );
};

export default Navigation;
