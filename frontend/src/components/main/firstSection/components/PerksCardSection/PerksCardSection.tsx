import React from 'react';

// eslint-disable-next-line no-restricted-imports
import './PerksCardSection.css';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';

const PerksCardSection = () => {
  return (
    <div className="xl:flex hidden gap-[0.2rem] mt-16">
      <div className="bg-darkGrey px-8 py-6 rounded-tl-xl rounded-bl-xl">
        <div className="flex flex-col items-center justify-center xl:w-[7rem] 1_5xl:w-[9rem] text-white">
          <h3
            className={`${Termina} xl:text-[2.3rem] 1_5xl:text-heroCard leading-none font-black`}
          >
            10
          </h3>
          <h3
            className={`${MaisonNeue} font-bold xl:text-[0.6rem] 1_5xl:text-xs text-center`}
          >
            YEARS IN THE CUSTOM APPAREL INDUSTRY
          </h3>
        </div>
      </div>
      <div className="bg-darkGrey px-8 py-6">
        <div className="flex flex-col items-center justify-center xl:w-[7rem] 1_5xl:w-[9rem] text-white">
          <h3
            className={`${Termina} xl:text-[2.2rem] 1_5xl:text-heroCard leading-none font-black`}
          >
            5-7
          </h3>
          <h3
            className={`${MaisonNeue} font-bold xl:text-[0.6rem] 1_5xl:text-xs text-center`}
          >
            DAY TURNAROUND FOR BULK ORDERS
          </h3>
        </div>
      </div>
      <div className="relative xl:w-[12.5rem] 1_5xl:w-[13.8rem]">
        <svg
          width="200"
          height="153"
          viewBox="0 0 266 153"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 w-full h-full"
        >
          <path
            d="M0 0H204.108C208.212 0 212.158 1.57692 215.133 4.40476L241 29L261.081 48.2773C264.223 51.2944 266 55.4628 266 59.8195V137C266 145.837 258.837 153 250 153H0V0Z"
            fill="#1E1D1D"
          />
        </svg>

        <div className="absolute h-full flex flex-col items-center justify-center text-white px-8 py-6 w-full">
          <h3
            className={`${Termina} xl:text-[2.3rem] 1_5xl:text-heroCard leading-none font-black`}
          >
            4.9
          </h3>
          <h3
            className={`${MaisonNeue} font-bold xl:text-[0.6rem] 1_5xl:text-xs text-center`}
          >
            STAR RATING IN GOOGLE REVIEWS
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PerksCardSection;
