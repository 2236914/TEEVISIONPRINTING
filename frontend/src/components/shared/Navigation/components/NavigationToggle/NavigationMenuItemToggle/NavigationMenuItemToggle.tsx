import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.05,
    },
  },
};

type PropTypes = {
  isSubItem: Boolean;
  item: any;
};

const NavigationMenuItemToggle: React.FC<PropTypes> = ({ item, isSubItem }) => {
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li variants={variants}>
      {item?.link ? (
        <Link href={item.link}>
          <p
            className={`${isSubItem === true ? `text-navSubItem md:text-navSubItem-md ${Roboto} font-normal` : `text-navItem md:text-navItem-md ${MaisonNeue} font-extrabold`}`}
          >
            {item.label}
            <span
              className={`block ${isSubItem === true ? 'h-[0.15rem]' : 'h-1 w-full bg-primaryMinimalist rounded'}`}
            />
          </p>
        </Link>
      ) : (
        <p
          className={`text-navItem md:text-navItem-md ${MaisonNeue} font-extrabold`}
        >
          {item.label}
          <span
            className={`block ${isSubItem === true ? 'h-[0.15rem]' : 'h-1 w-full bg-primaryMinimalist rounded'}`}
          />
        </p>
      )}
    </motion.li>
  );
};

export default NavigationMenuItemToggle;
