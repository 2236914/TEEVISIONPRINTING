'use client';

import React, { memo, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';
import Delivery from '@/utilities/SVGs/Delivery';
import Needle from '@/utilities/SVGs/Needle';
import QuickCube from '@/utilities/SVGs/QuickCube';
import Scissors from '@/utilities/SVGs/Scissors';

// Lazy loaded components
const ImageModal = dynamic(() => import('@/components/past-projects/components/ImageModal'), {
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse" />,
});

const RequestAQuoteModalServerWrapper = dynamic(
  () => import('@/components/shared/RequestAQuoteModal/RequestAQuoteModalServerWrapper'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full xl:w-fit">
        <div className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-[#FFC107] border-[#FFC107] font-extrabold border-[0.2rem] text-button md:text-button-md lg:text-[1.15rem] rounded-md transition transform hover:scale-105 hover:bg-[#FFD54F] hover:border-[#FFD54F] min-w-[280px] flex items-center justify-center`} style={{ height: '64px' }}>
          REQUEST FREE QUOTE
        </div>
      </div>
    )
  }
);

// Types
interface Testimonial {
  image: string;
  name: string;
  quote: string;
  title: string;
}

interface Project {
  imageSrc: string;
}

// Constants
const TESTIMONIALS: Testimonial[] = [
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/25.png',
    quote: 'I collaborated with Benjie, and he was communicative and prompt. We had an urgent request for 60 shirts for our wedding, and they were completed in less than a week - the customer service was great. Bengie and his team kept us informed via text/email, providing updates on the shirts, including pictures of the mock-up and the first print for approval, as well as details for pickup times. The quality of the t-shirts and printing exceeded our expectations and our friends & family were happy with the t-shirt toss during our reception! We wish we had more to give, but it was first come first serve "Sixers game t-shirt toss reference"! I\'ll certainly be returning for any future printing needs.',
    name: 'Nancy Nguyen',
    title: 'Local Guide',
  },
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/Screen+Printing+(11).png',
    quote: 'We had such a great experience working with Tee Vision! We used them when ordering giveaway t-shirts for our organization and they were a delight to work with and they provided us with an awesome final product.',
    name: 'Carrie Wobensmith',
    title: 'Organization',
  },
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/27.png',
    quote: 'It doesn\'t get any better than this! I am very pleased with Sean, Darko and the team from Tee Vision. They worked with me to get shirts printed for an event. From the modifications to the design I submitted to the comfortable shirt itself, they really made me feel that I was an exclusive customer. They were very flexible with a relatively short timeframe, and ended up delivering the shirts earlier than I had requested, in addition to having the best price for the quality and design of the shirt. Everything was exactly as I had ordered it and the quality was superb. I received so many compliments on the t-shirts. They really went above and beyond, and I am so happy to have found a regional business to work with. There is no question, I will return to Tee Vision for all of my printing needs going forward. Thank you so much!',
    name: 'John McKenzie',
    title: 'Exclusive Customer',
  },
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/28.png',
    quote: 'My experience with Tee Vision was simply perfect from all aspects of the transaction. Their professionalism and attention to detail, their consistent communication with updates have been a service we have never received anywhere else. Joe and Shaun are the pinnacle of this industry and highly recommend them. We will be doing more business in the future!',
    name: 'Lime Athletics',
    title: 'Sports Club Manager',
  },
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/29.png',
    quote: 'My go-to print shop has been Tee Vision for a few years now. Sae and company are always so quick to respond, send proofs, and make adjustments. They are class acts when it comes to customer service and making sure the customer is happy with what they are getting. I love the communication, quality work, and great prices. Tee Vision is the place to go for all printing needs!',
    name: 'Susan Kim',
    title: 'Customer',
  },
];

const PROJECTS: Project[] = [
  { imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/26.png' },
  { imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/27.png' },
  { imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/28.png' },
  { imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/29.png' },
];

const DESCRIPTIONS = [
  { title: 'Screen Print Orders', subtitle: 'Starting 12 pieces', icon: <Needle width={52} height={52} /> },
  { title: 'Premium Inks', subtitle: 'Perfect for Vibrant Prints', icon: <Scissors width={52} height={52} /> },
  { title: 'Quick Turnaround', subtitle: '1-2 weeks', icon: <QuickCube width={52} height={52} /> },
  { title: 'Free Delivery', subtitle: 'Anywhere in United States', icon: <Delivery width={52} height={52} /> },
];

// Testimonial Components
const TestimonialCard = memo(({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col h-full">
    <div className="absolute -top-4 left-6">
      <span className="text-[#fcb318] text-6xl font-bold">&quot;</span>
    </div>
    
    <div className="w-32 h-32 mx-auto mb-4 mt-6 relative flex-shrink-0">
      <Image
        src={testimonial.image}
        fill
        alt={`${testimonial.name}'s review`}
        className="object-contain"
        loading="lazy"
        sizes="128px"
        quality={75}
      />
    </div>

    <div className="flex-grow mb-6">
      <p className={`${MaisonNeue} text-center text-sm italic`}>
        {testimonial.quote}
      </p>
    </div>

    <div className="text-center flex-shrink-0">
      <p className={`${Termina} font-bold text-lg`}>{testimonial.name}</p>
      <p className={`${MaisonNeue} text-sm text-gray-600`}>{testimonial.title}</p>
    </div>
  </div>
));
TestimonialCard.displayName = 'TestimonialCard';

const TestimonialsCarousel = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const visibleTestimonials = [
    TESTIMONIALS[currentIndex % TESTIMONIALS.length],
    TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(currentIndex + 2) % TESTIMONIALS.length],
    TESTIMONIALS[(currentIndex + 3) % TESTIMONIALS.length],
  ];

  return (
    <div className="relative">
      <div className="flex gap-4 overflow-hidden items-stretch">
        <div className="w-full md:hidden flex">
          <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} />
        </div>
        
        <div className="hidden md:flex xl:hidden gap-4 w-full items-stretch">
          {visibleTestimonials.slice(0, 2).map((testimonial, index) => (
            <div key={index} className="w-1/2 flex">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="hidden xl:flex gap-4 w-full items-stretch">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="w-1/4 flex">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-6 justify-center">
        <button
          onClick={prevSlide}
          className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6 rotate-180" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#fcb318] hover:bg-[#e5a516] p-3 rounded-full transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
});
TestimonialsCarousel.displayName = 'TestimonialsCarousel';

const FeaturedPrintsCarousel = memo(({ projects }: { projects: Project[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const handleImageClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleImageKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsModalOpen(true);
    }
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleModalKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsModalOpen(false);
    }
  }, []);

  return (
    <div className="relative w-full">
      <div className="xl:hidden">
        <div className="relative w-full flex items-center justify-center px-4 mb-8">
          <div 
            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] cursor-pointer"
            onClick={handleImageClick}
            onKeyDown={handleImageKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`View featured print ${currentIndex + 1} in full size`}
          >
            <Image
              src={projects[currentIndex].imageSrc}
              fill
              alt={`Featured print ${currentIndex + 1}`}
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 640px) 300px, 400px"
              quality={75}
            />
          </div>
        </div>
        
        <div className="flex gap-2 mt-6 justify-center">
          <button
            onClick={prevSlide}
            className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 rotate-180" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#fcb318] hover:bg-[#e5a516] p-3 rounded-full transition-colors"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="flex gap-2 mt-4 justify-center">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-[#fcb318] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="hidden xl:flex flex-wrap justify-center gap-2 xl:gap-4">
        {projects.map((project, idx) => (
          <div key={idx} className="w-[6rem] h-[6rem] md:w-[15rem] md:h-[15rem] xl:w-[18rem] xl:h-[18rem]">
            <ImageModal imageSrc={project.imageSrc} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleModalClose}
          onKeyDown={handleModalKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Close image modal"
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={projects[currentIndex].imageSrc}
              fill
              alt={`Featured print ${currentIndex + 1}`}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              quality={90}
            />
          </div>
        </div>
      )}
    </div>
  );
});
FeaturedPrintsCarousel.displayName = 'FeaturedPrintsCarousel';

const PuffPrint = () => {
  return (
    <main className="bg-white">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend mode="multiply" in="SourceGraphic" />
        </filter>
      </svg>

      <section className="w-full relative flex mt-[5rem] xl:mt-[6rem] overflow-hidden">
        <div 
          className="absolute w-full h-full z-0"
          style={{
            backgroundColor: '#2a2a2a',
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 50%), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)`,
            filter: 'url(#noiseFilter)',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
            }}
          />
        </div>

        <div className="flex flex-col w-full z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-12 xl:px-24 pt-0 pb-0">
            <div className="flex flex-col gap-8 text-white">
              <div>
                <p className={`${Termina} text-lg md:text-xl xl:text-2xl font-medium uppercase tracking-wide`}>
                  Your Vision, Our Expertise
                </p>
                <h1 className={`${Termina} uppercase font-black text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl mt-0 leading-[0.9]`}>
                  <span className="text-[#FFC107]">PUFF</span>
                  <br />
                  <span className="text-white">PRINTING</span>
                </h1>
              </div>
              <p className={`${MaisonNeue} text-lg md:text-xl xl:text-2xl text-gray-300 max-w-2xl leading-relaxed`}>
                A modern printing method that excels at producing highly detailed, multi-colored designs and photographic images for small-quantity orders.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 w-full xl:w-fit items-stretch mt-4">
                <RequestAQuoteModalServerWrapper className="w-full xl:w-fit">
                  <div
                    className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-[#FFC107] border-[#FFC107] font-extrabold border-[0.2rem] text-button md:text-button-md lg:text-[1.15rem] rounded-md transition transform hover:scale-105 hover:bg-[#FFD54F] hover:border-[#FFD54F] min-w-[280px] flex items-center justify-center`}
                    style={{ height: '64px' }}
                  >
                    REQUEST FREE QUOTE
                  </div>
                </RequestAQuoteModalServerWrapper>
                <a href="/contact" className="w-full xl:w-fit">
                  <div
                    className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-transparent border-[#FFC107] text-[#FFC107] font-extrabold border-[0.2rem] text-button md:text-button-md lg:text-[1.15rem] rounded-md transition transform hover:scale-105 hover:bg-[#FFC107] hover:text-black min-w-[280px] flex items-center justify-center cursor-pointer`}
                    style={{ height: '64px' }}
                  >
                    REQUEST A DESIGN
                  </div>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-center">
              <div className="relative w-full max-w-[1000px] xl:max-w-[1000px] aspect-square transform scale-125 lg:scale-150 -mb-16 lg:-mb-24 z-0">
                <Image
                  src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/52-converted-from-png.webp"
                  fill
                  alt="Puff printing example on black t-shirt showing raised textured design"
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1000px, 1000px"
                  quality={85}
                />
              </div>
            </div>
          </div>

          <div className="bg-[#FFC107] w-full relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-6 md:p-8 max-w-7xl mx-auto">
              {DESCRIPTIONS.map((description) => (
                <div
                  className={`flex flex-col items-center text-center ${MaisonNeue} text-black`}
                  key={description.title}
                >
                  <div className="mb-2">
                    {description.icon}
                  </div>
                  <p className="font-bold text-base md:text-lg">{description.title}</p>
                  <p className="text-sm md:text-md">{description.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center px-8 md:px-12 pt-16 pb-16 xl:pt-24 xl:pb-24 bg-white -mt-1">
        <div className="max-w-[75rem] w-full">
          <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-16">
            <div className="w-full xl:w-[50%]">
              <h2 className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3rem] leading-tight mb-6`}>
                <span className="text-black">WHAT IS</span>
                <br />
                <span className="text-[#fcb318]">PUFF PRINTING?</span>
              </h2>
              
              <p className={`${MaisonNeue} text-black text-base md:text-lg leading-relaxed`}>
                Puff print is a unique screen printing technique that adds a 3D, raised texture to your design. The ink expands when heat is applied, creating a soft, puffy effect that stands out both visually and by touch.
              </p>
            </div>

            <div className="w-full xl:w-[50%]">
              <div className="relative w-full h-[400px] xl:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/newpuffprint/36.png"
                  fill
                  alt="Close-up of puff print texture showing 3D raised design effect"
                  className="object-cover rounded-lg"
                  loading="lazy"
                  sizes="(max-width: 1280px) 100vw, 600px"
                  quality={75}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center p-8 py-16 xl:py-24 bg-[#f5f5f5]">
        <div className="max-w-[75rem] w-full">
          <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-16">
            <div className="w-full xl:w-[50%]">
              <div className="relative w-full h-[400px] xl:h-[500px] rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/newpuffprint/45.png"
                  fill
                  alt="Puff print design on custom apparel showcasing premium texture"
                  className="object-cover rounded-lg"
                  loading="lazy"
                  sizes="(max-width: 1280px) 100vw, 600px"
                  quality={75}
                />
              </div>
            </div>

            <div className="w-full xl:w-[50%]">
              <h2 className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3rem] text-black leading-tight mb-4`}>
                Why Choose Puff Print?
              </h2>
              
              <p className={`${MaisonNeue} text-black text-base md:text-lg mb-8`}>
                It adds a bold, textured look that stands out, feels premium, and lasts wash after wash
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#fcb318] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className={`${MaisonNeue} text-black text-base md:text-lg`}>
                    <span className="font-bold">Eye-catching</span> <span className="text-[#fcb318] font-bold">raised texture</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#fcb318] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className={`${MaisonNeue} text-black text-base md:text-lg`}>
                    <span className="font-bold">Long-lasting</span> <span className="text-[#fcb318] font-bold">and durable</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#fcb318] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className={`${MaisonNeue} text-black text-base md:text-lg`}>
                    <span className="font-bold">Works on</span> <span className="text-[#fcb318] font-bold">shirts, hoodies, and tote bags</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#fcb318] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className={`${MaisonNeue} text-black text-base md:text-lg`}>
                    <span className="font-bold">Perfect for</span> <span className="text-[#fcb318] font-bold">logos or minimal designs</span>
                  </p>
                </div>
              </div>

              <a href="/contact" className="inline-block">
                <button className={`${Termina} bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-4 px-8 rounded-md transition-colors`}>
                  REQUEST A DESIGN
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center p-8 py-16 xl:py-24 bg-white">
        <div className="max-w-[75rem] w-full">
          <h2 className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3rem] text-black mb-6`}>
            The Advantages & Limitations of <span className="text-[#fcb318]">Puff Print Ink</span>
          </h2>
          
          <p className={`${MaisonNeue} text-black text-base md:text-lg mb-12 leading-relaxed`}>
            Puff print ink offers a unique way to make designs stand out with its raised, 3D texture that adds depth and a premium look to any garment. It provides a soft, tactile feel and works well on cotton, hoodies, and blended fabrics. When properly cared for, puff prints remain durable and vibrant even after multiple washes. The ink can also be customized with various colors or combined with other printing effects for a more creative finish.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
            <div className="bg-black rounded-lg p-8">
              <h3 className={`${Termina} font-black text-[1.5rem] md:text-[1.8rem] mb-6`}>
                <span className="text-white">The Advantages </span>
                <span className="text-[#fcb318]">of Puff Print Ink</span>
              </h3>
              <p className={`${MaisonNeue} text-white text-sm md:text-base leading-relaxed`}>
                Puff print ink offers several advantages that make it a popular choice for custom apparel. It creates a bold, raised texture that instantly draws attention and gives designs a premium, 3D look. The soft, tactile feel adds depth and dimension, making prints stand out compared to flat inks. Puff print is also durable — with proper care, it maintains its texture and color through many washes. It works well on cotton and blended fabrics, offering versatility for shirts, hoodies, and tote bags. Additionally, puff print ink can be mixed with different colors or combined with other effects, allowing for creative and eye-catching designs that elevate the overall appeal of any garment.
              </p>
            </div>

            <div className="bg-[#fcb318] rounded-lg p-8">
              <h3 className={`${Termina} font-black text-[1.5rem] md:text-[1.8rem] mb-6`}>
                <span className="text-black">The Limitations of Puff Print Ink</span>
              </h3>
              <p className={`${MaisonNeue} text-black text-sm md:text-base leading-relaxed`}>
                While puff print ink creates eye-catching and textured designs, it also comes with a few limitations. Fine or intricate details may blur or lose sharpness as the ink expands during heating. It&apos;s also sensitive to temperature — too much heat can over-expand or flatten the puff effect, while too little heat can result in uneven texture. Puff print isn&apos;t ideal for multi-layered or complex color designs since the raised ink can make alignment difficult. Additionally, it works best on stable fabrics like cotton; stretchy or thin materials may not hold the puff texture well and could cause cracking or distortion over time.
              </p>
            </div>
          </div>

          <div className="border-4 border-[#fcb318] rounded-lg p-6 bg-white">
            <p className={`${MaisonNeue} text-black text-base md:text-lg`}>
              <span className={`${Termina} font-bold`}>Pro Tip:</span> 3D puff screen printing can be used in combination with different methods of customization to produce a totally unique garment with unparalleled texture.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center p-8 py-16 xl:py-24 bg-[#2a2a2a]">
        <div className="max-w-[100rem] w-full">
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
            <div className="w-full xl:w-[40%]">
              <h2 className={`${Termina} font-black text-[2.5rem] md:text-[3rem] xl:text-[3.5rem] leading-tight mb-6`}>
                <span className="text-white">What </span>
                <span className="text-[#fcb318]">We Offer</span>
              </h2>
              
              <p className={`${MaisonNeue} text-white text-base md:text-lg leading-relaxed mb-8`}>
                We provide high-quality puff print services that bring your designs to life with a bold, 3D texture. From custom t-shirts and hoodies to tote bags and branded apparel, we deliver prints that stand out in both look and feel. Each piece is carefully designed, printed, and heat-cured to ensure a durable, long-lasting finish.
              </p>

              <a href="/products">
                <button className={`${Termina} bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-4 px-8 rounded-md transition-colors`}>
                  VIEW OUR PRODUCTS
                </button>
              </a>
            </div>

            <div className="w-full xl:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <Image
                      src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/newpuffprint/41.png"
                      fill
                      alt="Custom puff print apparel icon"
                      className="object-contain"
                      loading="lazy"
                      sizes="96px"
                      quality={75}
                    />
                  </div>
                </div>
                <h3 className={`${Termina} font-bold text-[#fcb318] text-lg mb-3`}>
                  Custom Puff Print Apparel
                </h3>
                <p className={`${MaisonNeue} text-white text-sm leading-relaxed`}>
                  Unique, textured prints on tshirts, hoodies, crewnecks, and more, perfect for brands, events, or personal style.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <Image
                      src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/newpuffprint/42.png"
                      fill
                      alt="Design and artwork support icon"
                      className="object-contain"
                      loading="lazy"
                      sizes="96px"
                      quality={75}
                    />
                  </div>
                </div>
                <h3 className={`${Termina} font-bold text-[#fcb318] text-lg mb-3`}>
                  Design & Artwork Support
                </h3>
                <p className={`${MaisonNeue} text-white text-sm leading-relaxed`}>
                  Our team helps you refine your design for puff print, adjusting colors, line weight, and file quality to achieve optimal results.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <Image
                      src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/newpuffprint/43.png"
                      fill
                      alt="Versatile fabric options icon"
                      className="object-contain"
                      loading="lazy"
                      sizes="96px"
                      quality={75}
                    />
                  </div>
                </div>
                <h3 className={`${Termina} font-bold text-[#fcb318] text-lg mb-3`}>
                  Versatile Fabric Options
                </h3>
                <p className={`${MaisonNeue} text-white text-sm leading-relaxed`}>
                  From 100% cotton to blends, we apply puff prints on a wide range of garments, including tote bags and polos.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <Image
                      src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/newpuffprint/44.png"
                      fill
                      alt="Bulk and drop-shipping solutions icon"
                      className="object-contain"
                      loading="lazy"
                      sizes="96px"
                      quality={75}
                    />
                  </div>
                </div>
                <h3 className={`${Termina} font-bold text-[#fcb318] text-lg mb-3`}>
                  Bulk & Drop-Shipping Solutions
                </h3>
                <p className={`${MaisonNeue} text-white text-sm leading-relaxed`}>
                  Whether it&apos;s a small-run merch drop or wholesale orders, we handle order fulfillment, branding consistency, and fast turnaround.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex-col gap-5 items-center justify-center p-4 xl:p-1">
        <div className="w-full flex justify-center p-8 py-12 xl:pt-24 bg-[#f1f0f5]">
          <div className="max-w-[75rem] w-full">
            <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center">
              <div className="flex flex-col gap-4">
                <h2 className={`${Termina} font-black text-[1.0rem] md:text-[1rem] leading-tight xl:text-[2rem]`}>
                  Featured Puff Prints
                </h2>
              </div>
            </div>
            <div className="mt-8">
              <FeaturedPrintsCarousel projects={PROJECTS} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center p-8 py-16 xl:py-24 bg-white">
        <div className="max-w-[75rem] w-full">
          <div className="text-center mb-12">
            <p className={`${Termina} text-black text-sm md:text-base mb-2 tracking-wider`}>
              Testimonials
            </p>
            <h2 className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3rem] text-black`}>
              We care about <span className="text-[#fcb318]">your experience</span> too
            </h2>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      <section className="w-full flex justify-center py-12 xl:py-24 bg-[#2a2a2a] overflow-hidden">
        <div className="max-w-[75rem] w-full flex flex-col xl:flex-row items-center gap-4 xl:gap-8 px-8 relative">
          <div className="w-full xl:w-[53%] xl:absolute xl:left-0 xl:-translate-x-[15%]">
            <div className="relative w-full h-[350px] xl:h-[550px]">
              <Image
                src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/PuffPrint/Screen+Printing+(9).png"
                fill
                alt="Digital Mockup Preview"
                className="object-contain scale-[2] sm:scale-150 xl:scale-125"
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 800px"
                quality={75}
              />
            </div>
          </div>

          <div className="w-full xl:w-[60%] xl:ml-auto flex flex-col items-center xl:items-start text-center xl:text-left xl:pl-8">
            <h2 className={`${Termina} font-black text-white text-[2rem] md:text-[2.5rem] xl:text-[2.5rem] mb-6 leading-tight`}>
              REQUEST A DIGITAL MOCKUP
            </h2>
            
            <p className={`${MaisonNeue} text-white text-base md:text-lg mb-8 max-w-[650px]`}>
              Our live assistants are here to help you achieve designs from start to finish. Check out our{' '}
              <span className="underline cursor-pointer hover:text-[#fcb318]">FAQs</span>,{' '}
              <span className="underline cursor-pointer hover:text-[#fcb318]">send us an email</span>, or give us a call.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.teevisionprinting.com/contact"
                className="bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Request a designer
              </a>
              
              <a 
                href="https://www.teevisionprinting.com/contact"
                className="bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Submit a Design +
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PuffPrint;