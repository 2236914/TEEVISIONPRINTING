import React from 'react';

import SixthSectionServerWrapper from '@/components/main/sixthSection/SixthSectionServerWrapper';

import ImageModal from '@/components/past-projects/components/ImageModal';
import Termina from '@/utilities/fonts/Termina/Termina';

const PastProjectsBody = () => {
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
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject5.jpg',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject6.jpg',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject7.jpg',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject8.png',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject9.png',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject10.png',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject11.png',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject12.png',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject13.jpg',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject14.png',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject15.png',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject16.png',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject17.jpg',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject18.jpg',
    },
    {
      imageSrc:
        'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject19.jpg',
    },
  ];

  return (
    <section className="flex flex-col min-h-screen pt-[5rem] bg-white">
      <div className="shadow-xl">
        <div className="w-full flex justify-center p-8 py-12 xl:pt-24 bg-white">
          <div className="max-w-[75rem] w-full">
            <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center">
              <h1
                className={`${Termina} font-black text-[1.5rem] md:text-[2rem] leading-tight xl:text-[3rem]`}
              >
                PAST PROJECTS
              </h1>
              <p className="text-[1rem] xl:text-[1.2rem] mt-4 xl:mt-0">
                showroom of what we have done
              </p>
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
          </div>
        </div>
      </div>
      <SixthSectionServerWrapper />
      <section>
        <div className="w-full flex items-center justify-center mb-16">
          <div className="w-full h-[20rem] md:h-[50rem] max-w-[75rem] px-8 xl:px-0">
            <iframe
              title="teevision-google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.869911668919!2d-75.11162422328594!3d40.011353271507765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7cabf19bf4b%3A0x62d520a9072b7781!2sTee%20Vision%20Printing!5e0!3m2!1sen!2sph!4v1737077263809!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{
                border: '4px solid #FFCD00',
                borderWidth: 4,
                borderRadius: '0.75rem',
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default PastProjectsBody;
