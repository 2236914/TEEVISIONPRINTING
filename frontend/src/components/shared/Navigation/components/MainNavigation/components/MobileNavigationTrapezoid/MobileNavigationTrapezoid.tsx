import React from 'react';

// eslint-disable-next-line no-restricted-imports
import './MobileNavigationTrapezoid.css';

import NavigationToggle from '@/components/shared/Navigation/components/NavigationToggle/NavigationToggle';
import Cart from '@/utilities/SVGs/navigation/Cart';
import Profile from '@/utilities/SVGs/navigation/Profile';
import Search from '@/utilities/SVGs/navigation/Search';

const MobileNavigationTrapezoid = () => {
  return (
    <div className="h-full w-1/2">
      <span className="mobile-trapezoid-root">
        <div className="mobile-trapezoid-corners" />
        <div className="mobile-trapezoid-middle" />
        <nav className="absolute w-full h-full z-10">
          <ul className="flex gap-4 items-center justify-end h-full w-full text-black font-bold pr-[2.5rem] md:pr-[3.25rem]">
            <li>
              <Search
                className="md:hidden"
                width={20}
                height={20}
                color="black"
              />
              <Search
                className="hidden md:block"
                width={30}
                height={30}
                color="black"
              />
            </li>
            <li>
              <Profile
                className="md:hidden"
                width={20}
                height={20}
                color="black"
              />
              <Profile
                className="hidden md:block"
                width={30}
                height={30}
                color="black"
              />
            </li>
            <li>
              <Cart
                className="md:hidden"
                width={20}
                height={20}
                color="black"
              />
              <Cart
                className="hidden md:block"
                width={30}
                height={30}
                color="black"
              />
            </li>
            <li>
              <NavigationToggle />
            </li>
          </ul>
        </nav>
      </span>
    </div>
  );
};

export default MobileNavigationTrapezoid;
