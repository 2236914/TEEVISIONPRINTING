import React from 'react';
import Marquee from 'react-fast-marquee';

const UpperNavigation = () => {
  return (
    <div className="bg-primaryT py-2">
      <Marquee pauseOnHover={true} className="flex w-fit" autoFill={true}>
        <div className="flex gap-12">
          <h2 className="bg-primaryT mr-4 text-sm md:text-lg lg:text-md">
            <span className="font-bold">FREE</span> Shipping on Orders Over
            $500! High-Quality Custom Screen Printing with Fast Turnaround –
            Start Your Order Today!
          </h2>
        </div>
      </Marquee>
    </div>
  );
};

export default UpperNavigation;
