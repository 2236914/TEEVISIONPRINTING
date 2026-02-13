import React from 'react';
import Image from 'next/image';

import SixthSectionServerWrapper from '@/components/main/sixthSection/SixthSectionServerWrapper';
import PastProjectsSPD from '@/components/services/screen-printing/PastProjectsSPD';
import RequestAQuoteModalServerWrapper from '@/components/shared/RequestAQuoteModal/RequestAQuoteModalServerWrapper';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import Termina from '@/utilities/fonts/Termina/Termina';

const ScreenPrintingBody = () => {

  const reasons = [
    {
      heading: 'Durability',
      content:
        "They are Long-Lasting Prints That Don’t Fade. Screen printing uses thick, high-opacity inks that bond firmly to fabric. This results in prints that stay bold, vibrant, and crack-free—even after countless washes. It's ideal for items that need to look great over time, whether worn daily or used for events.",
    },
    {
      heading: 'Affordability',
      content:
        "The more items printed, the lower the price per piece. Screen printing is one of the most budget-friendly methods for bulk orders. Whether outfitting a team, staff, or customer base, it's the most cost-efficient way to get high-quality apparel at scale.",
    },
    {
      heading: 'Consistency',
      content:
        'Every shirt, hoodie, or tote bag printed through this method looks clean, sharp, and identical. This consistency is key for businesses, schools, and events where a unified look matters. Expect retail-level quality across every piece.',
    },
    {
      heading: 'Versatility',
      content:
        "Screen printing isn't limited to just cotton. It works beautifully on blends, performance materials, and thicker garments like fleece. Whether the project is casual or premium, this method delivers durable, eye-catching results.",
    },
    {
      heading: 'Creativity',
      content:
        'Looking to stand out? Specialty inks like metallic, puff, neon, and glow-in-the-dark are available. These options open the door for creative, branded designs that turn heads and get talked about.',
    },
  ];

  const steps = [
    {
      heading: 'Send Us Your Design (or Just an Idea)',
      content:
        'Already got a logo or artwork? Sweet, just shoot it over. If you’re still figuring it out or only have a rough idea, no worries—we’ve got designers who can help clean it up or build it from scratch. Whether it’s a sketch, a photo, or just a vision in your head, we’ll make it work.',
    },
    {
      heading: 'We Prep the Screens',
      content:
        'Each color in your design needs its own screen. We take your artwork, break it down by color, and create stencils (aka screens) that we’ll use to apply the ink. The setup here is key—it’s what makes your print clean and sharp.',
    },
    {
      heading: 'Time to Print (and Heat It Up)',
      content:
        'This is where the magic happens. We load your shirts onto our press, push ink through the screens, and carefully layer each color. After printing, we run the shirts through a dryer that “cures” the ink—basically locking it in so it doesn’t crack, peel, or fade. You’re getting prints that last.',
    },
    {
      heading: 'You Get Your Gear',
      content:
        'Once everything’s printed and packed up, your order is ready for pickup or shipping. You’ll get fresh, high-quality shirts that look and feel awesome—whether you’re selling them, handing them out, or rocking them yourself.',
    },
  ];

  return (
      <main className="bg-white">
    <section className="w-full bg-darkGrey py-16">
      <div className="flex flex-col items-center gap-8 max-w-[90rem] mx-auto px-8">
        <h2 className={`${MaisonNeue} text-white text-2xl md:text-3xl xl:text-4xl font-bold text-center`}>
          Want to start your screen printing project?
        </h2>
        <RequestAQuoteModalServerWrapper className="w-full xl:w-fit">
          <div
            className={`${MaisonNeue} w-full xl:py-6 xl:px-8 h-full btn bg-primaryT border-primaryT font-extrabold border-[0.2rem] md:py-6 text-button md:text-button-md lg:text-[1.15rem] rounded-md md:px-[1.8rem] transition transform hover:scale-105 hover:bg-primaryT hover:border-primaryT`}
          >
           GET A FREE QUOTE
          </div>
        </RequestAQuoteModalServerWrapper>
      </div>
    </section>
      <section className="flex max-w-[1440px] mx-auto flex-col gap-4 items-center justify-center p-4 xl:p-12 pt-12">
        <h2
          className={`${Roboto} uppercase text-3xl xl:text-4xl font-black text-center`}
        >
          <span className="text-black">Why Choose</span>
          <span className="text-[#FFCD00]"> Screen Printing?</span>
        </h2>
        <p className={`${MaisonNeue} text-[22px] mt-4 text-center font-bold`}>
          Screen printing continues to be the top choice for custom apparel—and for good reason. Here are five major benefits that make it worth every dollar:
        </p>
        <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto items-center">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {reasons.slice(0, 3).map((reason, index) => {
              return (
                <div
                  className="bg-darkGrey text-white p-8 rounded-2xl flex flex-col items-center text-center"
                  key={index}
                >
                  <h3 className={`${MaisonNeue} text-[#FFCD00] text-[24px] md:text-[28px] font-bold mb-4 uppercase`}>
                    {reason.heading}
                  </h3>
                  <p className={`${MaisonNeue} text-base md:text-lg leading-relaxed`}>{reason.content}</p>
                </div>
              );
            })}
          </div>
          
          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-2xl">
            {reasons.slice(3, 5).map((reason, index) => {
              return (
                <div
                  className="bg-darkGrey text-white p-8 rounded-2xl flex flex-col items-center text-center"
                  key={index + 3}
                >
                  <h3 className={`${MaisonNeue} text-[#FFCD00] text-[24px] md:text-[28px] font-bold mb-4 uppercase`}>
                    {reason.heading}
                  </h3>
                  <p className={`${MaisonNeue} text-base md:text-lg leading-relaxed`}>{reason.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Past Projects */}
      <PastProjectsSPD />
      {/* How it Works */}
      <section className="bg-darkGrey text-white py-10">
        <div className="flex max-w-[1440px] mx-auto flex-col gap-5 items-center justify-center p-4 xl:p-3">
          <div className="text-center mb-8">
            <h2 className={`${Termina} uppercase text-3xl xl:text-5xl font-black text-[#FFC700] mb-2`}>
              HOW IT WORKS
            </h2>
            <p className={`${MaisonNeue} text-xl font-bold text-white`}>
              Our Screen Printing Process
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row w-full gap-8 items-center">
            <div className="w-full lg:w-1/2 lg:order-2" >
              <Image
                src="/screen-printing/how-does-screen-printing-work.jpg"
                width={600}
                height={900}
                alt="Hands in messy gloves, surrounded by paint and a phone, showing custom t-shirt design and screen printing."
                className="rounded-[18px]"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:order-1 space-y-6">
              {steps.map((step, index) => {
                return (
                  <div className="flex flex-col gap-3" key={index}>
                    <h3 className={`${MaisonNeue} text-[#FFC700] text-[20px] md:text-[24px] font-bold`}>
                      {index + 1}. {step.heading}
                    </h3>
                    <p className={`${MaisonNeue} text-white text-base md:text-lg leading-relaxed`}>
                      {step.content}
                    </p>
                  </div>
                );
              })}
              
              <div className="bg-[#FFC700] text-black p-4 rounded-md mt-8">
                <p className={`${MaisonNeue} font-bold text-sm md:text-base`}>
                  <strong>PRO TIP:</strong> The more shirts you print, the cheaper each one gets. Great for 12–1,000+ items!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto pt-9">
          <hr className="border-t border-gray-500" />
            </div>
          <div className="flex flex-col items-center gap-8 max-w-[90rem] mx-auto px-8">
        <p className={`${MaisonNeue} text-white text-2xl md:text-3xl xl:text-1xl font-bold text-center`}>
          Want to start your screen printing project?
        </p>
        <RequestAQuoteModalServerWrapper className="w-full xl:w-fit text-black">
          <div
            className={`${MaisonNeue} w-full xl:py-6 xl:px-8 h-full btn bg-primaryT border-primaryT font-extrabold border-[0.2rem] md:py-6 text-button md:text-button-md lg:text-[1.15rem] rounded-md md:px-[1.8rem] transition transform hover:scale-105 hover:bg-primaryT hover:border-primaryT`}
          >
           GET A FREE QUOTE
          </div>
        </RequestAQuoteModalServerWrapper>
      </div>
        </div>
      </section>

      {/* Why Choose Tee Vision Printing? */}
      {/* <section className="flex max-w-[1440px] mx-auto flex-col gap-8 items-center justify-center p-4 xl:p-12 pt-12">
        <h2
          className={`${Roboto} uppercase text-3xl xl:text-4xl font-black text-center`}
        >
          Why Choose Tee Vision Printing?
        </h2>
        <div className="flex flex-col lg:flex-row w-full gap-4">
          <div className="w-full">
            <p className={`${MaisonNeue} text-center text-[18px] mt-4`}>
              Tee Vision Printing delivers high-quality screen printing with
              fast turnaround, competitive pricing, and reliable customer
              service. From bulk orders to custom designs, every piece is
              printed with precision using durable, vibrant inks that last.
              Whether for business, events, or retail, trust a team that’s
              committed to making your brand look its best.
            </p>
          </div>
        </div>
        <p className={`${MaisonNeue} text-[32px] text-center mt-4 font-bold`}>
          Ready to get started? Request a quote today and bring your design to
          life!
        </p>
      </section> */}
      
      <div className="bg-white mt-2">
        <SixthSectionServerWrapper />
      </div>
    </main>
  );
};

export default ScreenPrintingBody;
