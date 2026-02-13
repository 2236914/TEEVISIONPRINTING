import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const NavigationMenuToggle = ({ toggle }: { toggle: any }) => {
  const [dynamicStyles, setDynamicStyles] = useState({
    iconWidth: '23',
    iconHeight: '25',
    strokeWidth: '1.5',
  });

  useEffect(() => {
    const updateNumberOfProducts = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        const newDynamicStyles = {
          iconWidth: '33',
          iconHeight: '35',
          strokeWidth: '3.0',
        };
        setDynamicStyles(newDynamicStyles);
      }
    };

    updateNumberOfProducts();
    window.addEventListener('resize', updateNumberOfProducts);

    return () => {
      window.removeEventListener('resize', updateNumberOfProducts);
    };
  }, []);

  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth={dynamicStyles.strokeWidth}
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );

  return (
    <button className="md:mt-[0.6rem] md:mr-2" onClick={toggle}>
      <svg
        width={dynamicStyles.iconWidth}
        height={dynamicStyles.iconHeight}
        viewBox="0 0 23 25"
      >
        <Path
          variants={{
            // eslint-disable-next-line id-length
            closed: { d: 'M 2 2.5 L 20 2.5' },
            // eslint-disable-next-line id-length
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
          stroke="#1E1D1D"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          stroke="#1E1D1D"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          variants={{
            // eslint-disable-next-line id-length
            closed: { d: 'M 2 16.346 L 20 16.346' },
            // eslint-disable-next-line id-length
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
          stroke="#1E1D1D"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default NavigationMenuToggle;
