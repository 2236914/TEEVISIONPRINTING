import React from 'react';

import ImageModal from '@/components/past-projects/components/ImageModal';
import RequestAQuoteModalServerWrapper from '@/components/shared/RequestAQuoteModal/RequestAQuoteModalServerWrapper';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';

const PastProjectsSPD = () => {
  const projects = [
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject1.jpg',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject2.jpg',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject3.jpg',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject4.jpg',
    },
  ];

  return (
    <section className="mx-auto flex-col gap-5 items-center justify-center p-4 xl:p-1">
        <div className="w-full flex justify-center p-8 py-12 xl:pt-24 bg-[#f1f0f5]">
          <div className="max-w-[75rem] w-full">
            <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center">
              <div className="flex flex-col gap-4">
                <h1
                  className={`${Termina} font-black text-[1.5rem] md:text-[2rem] leading-tight xl:text-[3rem]`}
                >
                  PAST PROJECTS
                </h1>
                <h2 className={`${MaisonNeue} text-[#fdcb00] text-xl md:text-2xl xl:text-3xl font-bold`}>
                  Real Prints. Real Impact. Real Results.
                </h2>
                <p className={`${MaisonNeue} text-base md:text-lg xl:text-xl max-w-4xl`}>
                  From bold event tees to branded uniforms and fundraiser merchandise, our screen printing has helped businesses, churches, schools, and organizations make their mark.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-8 gap-2 xl:gap-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-[6rem] h-[6rem] md:w-[15rem] md:h-[15rem] md:w-[18rem] md:h-[18rem]"
                >
                  <ImageModal imageSrc={project.imageSrc} />
                </div>
              ))}
            </div>
            {/* Get A Free Quote Button */}
            <div className="mt-10 mb-10 flex justify-start">
              <RequestAQuoteModalServerWrapper className="w-full xl:w-fit">
          <div
            className={`${MaisonNeue} w-full xl:py-6 xl:px-8 h-full btn bg-primaryT border-primaryT font-extrabold border-[0.2rem] md:py-6 text-button md:text-button-md lg:text-[1.15rem] rounded-md md:px-[1.8rem] transition transform hover:scale-105 hover:bg-primaryT hover:border-primaryT`}
          >
           GET A FREE QUOTE
          </div>
        </RequestAQuoteModalServerWrapper>
            </div>
          </div>
        </div>
    </section>
  );
};

export default PastProjectsSPD;
