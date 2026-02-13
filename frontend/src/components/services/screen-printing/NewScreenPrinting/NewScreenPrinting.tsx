'use client';

import { memo, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

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

interface StylingOption {
  imageSrc: string;
  title: string;
  link?: string;
}

interface Location {
  imageSrc: string;
  link: string;
  name: string;
}

// Constants
const TESTIMONIALS: Testimonial[] = [
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/21.png',
    quote: 'Tee Vision has done such an awesome job printing my tote bags. Joe was incredibly helpful every step of the way and ensured that the job was done well and that the totes arrived in time for my event. They\'re now my go-to company for all of my totes! Highly recommend!',
    name: 'Stephanie Pogas',
    title: 'Business Owner',
  },
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/22.png',
    quote: 'My husband and I placed a fairly large order with Tee Vision. T-shirts, tote bags and sweatshirts. All turned out very nice with awesome detail. My husband has pretty intricate designs which can sometimes be tricky with screen printing. They did a great job making sure everything came out crisp. Great customer service and professional!',
    name: 'Lauren Bockmeyer',
    title: 'Jay Productions',
  },
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/23.png',
    quote: 'Thank you Sean and his team for always taking great care of us! We have orders shirts for our company many times and will not go anywhere else! They are truly the best! Looking forward to growing together and will be calling you guys soon for the next batch! Highly recommended by the Element Granite & Quartz Team ---If you see our guys on your job site, you can Thank Tee Vision for making us look good!',
    name: 'Vinny Dip',
    title: 'Event Coordinator',
  },
  {
    image: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/Screen+Printing+(5).png',
    quote: 'The team at Tee Vision Printing delivered a high-quality product and fast turnaround for an incredible value. Joe provided thorough communication from the initial quote through pickup. Looking forward to working with them again for future projects.',
    name: 'Alyssa Marino',
    title: 'Sports Club Manager',
  },
];

const PROJECTS: Project[] = [
  { imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/11-converted-from-png.webp' },
  { imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/12-converted-from-png.webp' },
  { imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/13-converted-from-png.webp' },
  { imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/15-converted-from-png.webp' },
];

const STYLING_OPTIONS: StylingOption[] = [
  { title: 'PUFF PRINT', imageSrc: '/screen-printing/new-images/3-converted-from-png.webp', link: '/services/screen-printing/puff-print' },
  { title: 'CMYK PRINT', imageSrc: '/screen-printing/new-images/5-converted-from-png.webp' },
  { title: 'SCREEN PRINT', imageSrc: '/screen-printing/new-images/Screen Print (3)-converted-from-png.webp' },
  { title: 'PLASTISOL PRINT', imageSrc: '/screen-printing/new-images/4-converted-from-png.webp' },
  { title: 'SPECIAL LOCATION', imageSrc: '/screen-printing/new-images/Screen Print (2)-converted-from-png.webp' },
  { title: 'METALLIC', imageSrc: '/screen-printing/new-images/Screen Print-converted-from-png.webp' },
];

const LOCATIONS: Location[] = [
  { 
    name: 'PHILADELPHIA', 
    imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/11-converted-from-png.webp',
    link: '/services/screen-printing/screen-printing-philadelphia'
  },
  { 
    name: 'NEW JERSEY', 
    imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/12-converted-from-png.webp',
    link: '/locations/new-jersey'
  },
  { 
    name: 'NEW YORK', 
    imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/13-converted-from-png.webp',
    link: '/locations/new-york'
  },
  { 
    name: 'CALIFORNIA', 
    imageSrc: 'https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/15-converted-from-png.webp',
    link: '/locations/california'
  },
];

const DESCRIPTIONS = [
  { title: 'Screen Print Orders', subtitle: 'Starting 12 pieces', icon: <Needle width={52} height={52} /> },
  { title: 'Premium Inks', subtitle: 'Perfect for Vibrant Prints', icon: <Scissors width={52} height={52} /> },
  { title: 'Quick Turnaround', subtitle: '1-2 weeks', icon: <QuickCube width={52} height={52} /> },
  { title: 'Free Delivery', subtitle: 'Anywhere in United States', icon: <Delivery width={52} height={52} /> },
];

// Shared Components
const NavigationButton = ({ direction, label, onClick }: { direction: 'prev' | 'next'; label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`p-3 rounded-full transition-colors ${
      direction === 'next' ? 'bg-[#fcb318] hover:bg-[#e5a516]' : 'bg-gray-300 hover:bg-gray-400'
    }`}
    aria-label={label}
  >
    <svg className={`w-6 h-6 ${direction === 'prev' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  </button>
);

// Testimonial Components
const TestimonialCard = memo(({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg relative">
    <div className="absolute -top-4 left-6">
      <span className="text-[#fcb318] text-6xl font-bold">&quot;</span>
    </div>
    
    <div className="w-32 h-32 mx-auto mb-4 mt-6 relative">
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

    <p className={`${MaisonNeue} text-center text-sm italic mb-6`}>
      {testimonial.quote}
    </p>

    <div className="text-center">
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
    TESTIMONIALS[currentIndex],
    TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length],
  ];

  return (
    <div className="relative">
      <div className="flex gap-4 overflow-hidden">
        <div className="w-full xl:hidden">
          <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} />
        </div>
        
        <div className="hidden xl:flex gap-4">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="w-1/2">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-6 justify-center xl:justify-end">
        <NavigationButton onClick={prevSlide} direction="prev" label="Previous testimonial" />
        <NavigationButton onClick={nextSlide} direction="next" label="Next testimonial" />
      </div>
    </div>
  );
});
TestimonialsCarousel.displayName = 'TestimonialsCarousel';

// Featured Prints Components
const FeaturedPrintsCarousel = memo(({ projects }: { projects: Project[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const handleImageClick = useCallback(() => setIsModalOpen(true), []);
  const handleModalClose = useCallback(() => setIsModalOpen(false), []);

  const handleImageKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsModalOpen(true);
    }
  }, []);

  const handleModalKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsModalOpen(false);
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Mobile Carousel */}
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
          <NavigationButton onClick={prevSlide} direction="prev" label="Previous image" />
          <NavigationButton onClick={nextSlide} direction="next" label="Next image" />
        </div>
        
        <div className="flex gap-2 mt-4 justify-center">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#fcb318] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden xl:flex flex-wrap justify-center gap-2 xl:gap-4">
        {projects.map((project, idx) => (
          <div key={idx} className="w-[6rem] h-[6rem] md:w-[15rem] md:h-[15rem] xl:w-[18rem] xl:h-[18rem]">
            <ImageModal imageSrc={project.imageSrc} />
          </div>
        ))}
      </div>

      {/* Modal for mobile */}
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

// Locations Carousel Component
const LocationsCarousel = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % LOCATIONS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + LOCATIONS.length) % LOCATIONS.length);
  }, []);

  return (
    <div className="relative">
      {/* Mobile Carousel */}
      <div className="xl:hidden">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-full group">
            <Image
              src={LOCATIONS[currentIndex].imageSrc}
              fill
              alt={`Screen printing in ${LOCATIONS[currentIndex].name}`}
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              sizes="100vw"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center gap-4">
              <h3 className={`${Termina} font-black text-white text-2xl text-center`}>
                {LOCATIONS[currentIndex].name}
              </h3>
              <Link href={LOCATIONS[currentIndex].link}>
                <button className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105`}>
                  VISIT NOW!
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-2 mt-6 justify-center">
          <NavigationButton onClick={prevSlide} direction="prev" label="Previous location" />
          <NavigationButton onClick={nextSlide} direction="next" label="Next location" />
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-2 mt-4 justify-center">
          {LOCATIONS.map((location, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#FFC107] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to ${location.name}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden xl:grid grid-cols-4 gap-6">
        {LOCATIONS.map((location, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg h-[400px]">
            <div className="relative w-full h-full">
              <Image
                src={location.imageSrc}
                fill
                alt={`Screen printing in ${location.name}`}
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                sizes="25vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center gap-4">
              <h3 className={`${Termina} font-black text-white text-2xl text-center`}>
                {location.name}
              </h3>
              <Link href={location.link}>
                <button className={`${MaisonNeue} bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105`}>
                  VISIT NOW!
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
LocationsCarousel.displayName = 'LocationsCarousel';

// Main Component
const NewScreenPrinting = () => {
  return (
    <main className="bg-white">
      {/* Noise Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend mode="multiply" in="SourceGraphic" />
        </filter>
      </svg>

      {/* Hero Section */}
      <section className="w-full relative flex mt-[5rem] xl:mt-[6rem] overflow-hidden">
        <div 
          className="absolute w-full h-full z-0"
          style={{
            backgroundColor: '#2a2a2a',
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 50%), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)`,
            filter: 'url(#noiseFilter)',
          }}
        >
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)' }} />
        </div>

        <div className="flex flex-col w-full z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-12 xl:px-24 pt-0 pb-0">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-8 text-white">
              <div>
                <p className={`${Termina} text-lg md:text-xl xl:text-2xl font-medium uppercase tracking-wide`}>
                  GET BOLD, LONG-LASTING PRINTS WITH
                </p>
                <h1 className={`${Termina} uppercase font-black text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl mt-0 leading-[0.9]`}>
                  <span className="text-[#FFC107]">SCREEN</span>
                  <br />
                  <span className="text-white">PRINTING</span>
                </h1>
              </div>
              <p className={`${MaisonNeue} text-lg md:text-xl xl:text-2xl text-gray-300 max-w-2xl leading-relaxed`}>
                Experience the craftsmanship of pro-grade screen-printing — superb clarity, rich detail, and prints that last.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 w-full xl:w-fit items-stretch mt-4">
                <RequestAQuoteModalServerWrapper className="w-full xl:w-fit">
                  <div
                    className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-[#FFC107] border-[#FFC107] font-extrabold border-[0.2rem] text-button md:text-button-md lg:text-[1.15rem] rounded-md transition transform hover:scale-105 hover:bg-[#FFD54F] hover:border-[#FFD54F] min-w-[280px] flex items-center justify-center`}
                    style={{ height: '64px' }}
                  >
                    REQUEST FREE QUOTE
                  </div>
                </RequestAQuoteModalServerWrapper>
                <Link href="/contact" className="w-full xl:w-fit">
                  <div
                    className={`${MaisonNeue} w-full py-4 xl:py-4 xl:px-12 h-full btn bg-transparent border-[#FFC107] text-[#FFC107] font-extrabold border-[0.2rem] text-button md:text-button-md lg:text-[1.15rem] rounded-md transition transform hover:scale-105 hover:bg-[#FFC107] hover:text-black min-w-[280px] flex items-center justify-center cursor-pointer`}
                    style={{ height: '64px' }}
                  >
                    REQUEST A DESIGN
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative w-full max-w-[1000px] xl:max-w-[1000px] aspect-square transform scale-125 lg:scale-150 -mb-16 lg:-mb-24 z-0">
                <Image
                  src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/Untitled+design-converted-from-png.webp"
                  fill
                  alt="Puff printing example on black t-shirt"
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1000px, 1000px"
                  quality={85}
                />
              </div>
            </div>
          </div>

          {/* Yellow Section with Icons */}
          <div className="bg-[#FFC107] w-full relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-6 md:p-8 max-w-7xl mx-auto">
              {DESCRIPTIONS.map((description) => (
                <div
                  className={`flex flex-col items-center text-center ${MaisonNeue} text-black`}
                  key={description.title}
                >
                  <div className="mb-2">{description.icon}</div>
                  <p className="font-bold text-base md:text-lg">{description.title}</p>
                  <p className="text-sm md:text-md">{description.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Prints Section */}
      <section className="mx-auto flex-col gap-5 items-center justify-center p-4 xl:p-1">
        <div className="w-full flex justify-center p-8 py-12 xl:pt-24 bg-[#f1f0f5]">
          <div className="max-w-[75rem] w-full">
            <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center">
              <div className="flex flex-col gap-4">
                <h2 className={`${Termina} font-black text-[1.0rem] md:text-[1rem] leading-tight xl:text-[2rem]`}>
                  Featured Screen Printing Prints
                </h2>
              </div>
            </div>
            <div className="mt-8">
              <FeaturedPrintsCarousel projects={PROJECTS} />
            </div>
          </div>
        </div>
      </section>

      {/* Screen Printing Services Section */}
      <section className="w-full flex justify-center bg-[#2a2a2a] px-4 pb-0 xl:py-0">
        <div className="max-w-[75rem] w-full flex flex-col xl:flex-row items-center gap-0 xl:gap-16">
          <div className="w-full xl:w-[50%] flex flex-col pt-8">
            <h2 className={`${Termina} font-black leading-tight mb-6`}>
              <span className="text-[3rem] md:text-[4rem] xl:text-[5rem] text-[#fcb318] block">SCREEN</span>
              <span className="text-[3rem] md:text-[4rem] xl:text-[5rem] text-white block">PRINTING</span>
            </h2>
            
            <h3 className={`${Termina} font-bold text-white text-[1.2rem] md:text-[1.5rem] mb-6`}>
              SERVICES FOR CUSTOM APPAREL
            </h3>
            
            <p className={`${MaisonNeue} text-white text-base md:text-lg leading-relaxed`}>
              Vibrant, durable screen prints on t-shirts, hoodies, and hats. Easy print-ready options for your designs.
            </p>
          </div>
          
          <div className="w-full xl:w-[100%] -mt-40 xl:mt-0">
            <div className="relative w-full h-[450px] md:h-[500px] xl:h-[400px]">
              <Image
                src="https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/services/screenprinting/Screen+Printing+(1)-converted-from-png.webp"
                fill
                alt="Custom screen printed t-shirt"
                className="object-contain object-bottom md:object-cover xl:object-cover md:object-top xl:object-top"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                quality={75}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Styling Options Section */}
      <section className="w-full flex justify-center p-8 py-16 xl:py-24 bg-white">
        <div className="max-w-[75rem] w-full">
          <h2 className={`${Termina} font-black text-[2rem] md:text-[2.5rem] xl:text-[3rem] mb-12`}>
            STYLING <span className="text-[#fcb318]">OPTIONS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-4">
            {STYLING_OPTIONS.map((option, index) => {
              const content = (
                <>
                  <Image
                    src={option.imageSrc}
                    fill
                    alt={option.title}
                    className="object-cover scale-[1.5] group-hover:scale-[1.55] transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-end justify-start p-6 z-10">
                    <h3 className={`${Termina} font-black text-white text-[1.5rem] md:text-[1.8rem] xl:text-[2rem] leading-tight`}>
                      {option.title}
                    </h3>
                  </div>
                </>
              );

              const containerClasses = `relative h-[280px] rounded-lg overflow-hidden group cursor-pointer
                ${index === 0 || index === 3 ? 'md:col-span-2 xl:col-span-2' : 'md:col-span-1 xl:col-span-1'}`;

              return option.link ? (
                <Link key={index} href={option.link} className={containerClasses}>
                  {content}
                </Link>
              ) : (
                <div key={index} className={containerClasses}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Request Digital Mockup Section */}
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
              <Link 
                href="https://www.teevisionprinting.com/contact"
                className="bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Request a designer
              </Link>
              
              <Link 
                href="https://www.teevisionprinting.com/contact"
                className="bg-[#fcb318] hover:bg-[#e5a516] text-black font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Submit a Design +
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full flex justify-center p-8 py-16 xl:py-24 bg-[#f5f5f5]">
        <div className="max-w-[75rem] w-full">
          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-8 xl:gap-16">
            {/* Left side - Heading */}
            <div className="w-full xl:w-[40%]">
              <h2 className={`${Termina} font-black leading-tight`}>
                <span className="text-[1.5rem] md:text-[1.8rem] xl:text-[2rem] block">
                  WHAT FOLKS
                </span>
                <span className="text-[3rem] md:text-[4rem] xl:text-[4rem] text-[#fcb318] block">
                  ARE SAYING
                </span>
                <span className="text-[3rem] md:text-[4rem] xl:text-[4rem] block">
                  ABOUT US
                </span>
              </h2>
            </div>

            {/* Right side - Reviews Carousel */}
            <div className="w-full xl:w-[60%] relative">
              <TestimonialsCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Global Prints, Locally Crafted Section */}
      <section className="w-full flex justify-center p-8 py-16 xl:py-24 bg-white">
        <div className="max-w-[75rem] w-full">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className={`${Termina} font-black leading-tight mb-4`}>
              <span className="text-[2.5rem] md:text-[3.5rem] xl:text-[4.5rem] text-[#FFC107] block">
                GLOBAL PRINTS,
              </span>
              <span className="text-[2.5rem] md:text-[3.5rem] xl:text-[4.5rem] text-black block">
                LOCALLY CRAFTED.
              </span>
            </h2>
            <p className={`${MaisonNeue} text-lg md:text-xl xl:text-2xl text-gray-700 mt-4`}>
              Nationwide reach, local screen printing excellence.
            </p>
          </div>

          {/* Location Cards */}
          <LocationsCarousel />
        </div>
      </section>
    </main>
  );
};

export default NewScreenPrinting;