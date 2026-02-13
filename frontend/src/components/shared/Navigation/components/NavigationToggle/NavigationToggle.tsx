'use client';

import React, { useRef } from 'react';

import { motion, useCycle } from 'framer-motion';

// eslint-disable-next-line no-restricted-imports
import './NavigationToggle.css';

import NavigationMenuItemToggle from '@/components/shared/Navigation/components/NavigationToggle/NavigationMenuItemToggle/NavigationMenuItemToggle';
import NavigationMenuToggle from '@/components/shared/Navigation/components/NavigationToggle/NavigationMenuToggle/NavigationMenuToggle';
import { useDimensions } from '@/components/shared/Navigation/components/NavigationToggle/use-dimensions';

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 735px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 735px 40px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const ulVariants = {
  open: {
    display: 'block',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    display: 'none',
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const backdropVariants = {
  open: () => ({
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
    opacity: 0.7,
  }),
  closed: {
    clipPath: 'rectangle(0px 0px 0px 0px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
    opacity: 0,
  },
};

const navigationToggleVariants = {
  open: {
    width: '100vw',
    height: '100vh',
  },
  closed: {
    width: '150px',
    height: '200px',
  },
};

const navigationItems = [
  {
    label: 'Services',
    subItems: [
      {
        label: 'Screen Printing',
        link: '/services/screen-printing',
      },
      {
        label: 'Direct to Garment Printing',
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

const NavigationToggle = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const screenHeight =
    typeof document === 'undefined' ? 0 : document.body.scrollHeight - 135;

  return (
    <motion.div
      className={`navigation-toggle text-black ${isOpen ? 'h-screen' : 'h-0'}`}
      variants={navigationToggleVariants}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className={`backdrop`}
          style={{ height: isOpen ? screenHeight : 0 }}
          variants={backdropVariants}
        />
        <motion.div className="background" variants={sidebarVariants} />
        <motion.ul
          className="relative py-12 px-4 mt-[4rem]"
          variants={ulVariants}
        >
          <div className="flex flex-col">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className={
                  item.subItems && item.subItems.length > 0
                    ? 'collapse collapse-arrow'
                    : 'h-[3.5rem] md:h-[4.5rem] flex items-center'
                }
              >
                {item.subItems && item.subItems.length > 0 && (
                  <input type="checkbox" name="my-accordion-2" defaultChecked />
                )}
                <div
                  className={
                    item.subItems && item.subItems.length > 0
                      ? 'collapse-title'
                      : 'pl-4'
                  }
                >
                  <NavigationMenuItemToggle item={item} isSubItem={false} />
                </div>
                {item.subItems && item.subItems.length > 0 && (
                  <div className="collapse-content flex flex-col gap-2">
                    <div className="pt-2" />
                    {item.subItems.map((subItem) => (
                      <NavigationMenuItemToggle
                        item={subItem}
                        key={subItem.label}
                        isSubItem={true}
                      />
                    ))}
                    <div className="pb-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.ul>
        <NavigationMenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </motion.div>
  );
};

export default NavigationToggle;
