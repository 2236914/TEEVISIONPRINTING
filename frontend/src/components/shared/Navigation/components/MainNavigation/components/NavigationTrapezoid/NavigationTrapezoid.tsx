import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line no-restricted-imports
import './NavigationTrapezoid.css';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

const navigationItems = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Services',
    link: '/',
    subLinks: [
      {
        label: 'Screen Printing',
        link: '/services/screen-printing',
      },
      {
        label: 'Direct to Garment (DTG)',
        link: '/services/direct-to-garment-printing',
      },
      {
        label: 'Embroidery',
        link: '/services/embroidery',
      },
    ],
  },
  {
    label: 'Products',
    link: '/products',
  },
  {
    label: 'Past Projects',
    link: '/past-projects',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
  {
    label: 'About Us',
    link: '/about',
  },
  {
    label: 'Contact Us',
    link: '/contact',
  },
];

const NavigationTrapezoid = () => {
  return (
    <div className="w-full h-full">
      <span className="trapezoid-root w-[850px] lg:w-full">
        <div className="trapezoid-corners" />
        <div className="trapezoid-middle" />
        <nav className="absolute w-full h-full z-10">
          <ul className="flex xl:gap-8 1_5xl:gap-12 items-center justify-center h-full">
            {navigationItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  href={item.link}
                  className={`${MaisonNeue} text-black font-bold text-[1.2rem] hover:text-primaryT transition-colors duration-300`}
                >
                  {item.label}
                </Link>
                {item.subLinks && item.subLinks.length > 0 && (
                  <div className="absolute left-0 top-4 mt-2 bg-white shadow-lg rounded-lg p-4 hidden group-hover:block min-w-[300px]">
                    <ul className="sub-links">
                      {item.subLinks.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.link}
                            className="text-black font-bold text-[1.2rem] hover:text-primaryT transition-colors duration-300"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </span>
    </div>
  );
};

export default NavigationTrapezoid;
