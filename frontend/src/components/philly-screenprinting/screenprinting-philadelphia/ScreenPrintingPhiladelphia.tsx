import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import Footer from '@/components/shared/Footer/Footer';

export const metadata: Metadata = {
  title: 'Screen Printing Philadelphia | Teevision Printing',
  description:
    'Trusted by 500+ local restaurants, breweries, and organizations across Philadelphia. Same-day quotes. Fast turnaround. Free local delivery.',
  keywords:
    'screen printing philadelphia, custom t-shirts philadelphia, local screen printing',
  alternates: {
    canonical: 'https://www.teevisionprinting.com/',
  },
};

const page = async () => {
  const portfolioItems = [
    {
      location: 'FISHTOWN',
      category: 'LOCAL BREWERY',
      title: 'MERCHANDISE',
      description: 'Custom t-shirts and hoodies for one of Fishtown\'s famous craft breweries. Limited edition seasonal designs that sold out within.',
      testimonial: '"Teevision helped us create merch our customers actually want to wear!"',
      color: 'bg-yellow-400'
    },
    {
      location: 'RITTENHOUSE',
      category: 'RESTAURANT STAFF',
      title: 'UNIFORMS',
      description: 'Professional, comfortable staff apparel for a popular Rittenhouse restaurant. Durable prints that withstand daily wear.',
      testimonial: '"Our staff looks sharp and the uniforms hold up through countless washes!"',
      color: 'bg-yellow-400'
    },
    {
      location: 'UNIVERSITY CITY',
      category: 'TEMPLE STUDENT',
      title: 'ORGANIZATION',
      description: 'Event shirts for student organizations at Temple. Including Greek Life/sororities to campus events and fundraisers.',
      testimonial: '"Fast turnaround and great prices for student budgets!"',
      color: 'bg-yellow-400'
    },
    {
      location: 'SOUTH PHILLY',
      category: 'REC SPORTS',
      title: 'LEAGUE',
      description: 'Team jerseys for Philadelphia recreational softball league. Quality prints that last through an entire season.',
      testimonial: '"Best prices for our 20-team league. Everyone loves their jerseys!"',
      color: 'bg-yellow-400'
    },
    {
      location: 'OLD CITY',
      category: 'NON-PROFIT',
      title: 'FUNDRAISER',
      description: 'Fundraising shirts for local Philadelphia charity event. Helped raise awareness and funds for an important cause.',
      testimonial: '"Our event shirts helped us raise over $10,000!"',
      color: 'bg-yellow-400'
    },
    {
      location: 'NORTHERN LIBERTIES',
      category: 'BOUTIQUE RETAIL',
      title: 'MERCHANDISE',
      description: 'Branded merchandise for Northern Liberties boutique shop. Unique designs that customers ask about.',
      testimonial: '"Our customers constantly ask where we got our shirts printed!"',
      color: 'bg-yellow-400'
    }
  ];

  const products = [
    {
      name: 'AS Colour Classic Tee (5026)',
      rating: 5.0,
      price: '$12.85',
      image: '/path-to-tshirt-image.jpg'
    },
    {
      name: 'AS Colour Classic Tee (5026)',
      rating: 5.0,
      price: '$12.85',
      image: '/path-to-tshirt-image.jpg'
    },
    {
      name: 'AS Colour Classic Tee (5026)',
      rating: 5.0,
      price: '$12.85',
      image: '/path-to-tshirt-image.jpg'
    },
    {
      name: 'AS Colour Classic Tee (5026)',
      rating: 5.0,
      price: '$12.85',
      image: '/path-to-tshirt-image.jpg'
    }
  ];

  const productCategories = ['T-SHIRTS', 'SWEATSHIRTS', 'LONG-SLEEVE SHIRTS', 'POLOS', 'TOTES'];

  const printingServices = [
    {
      title: 'T-SHIRT',
      location: 'New York',
      year: '2025',
      service: 'Screen Printing',
      description: 'Authentic T-shirt screen printing that delivers vibrant colors, durable prints, and a perfect finish for every style.',
      image: '/path-to-tshirt-image.jpg'
    },
    {
      title: 'HOODIES',
      location: 'New York',
      year: '2025',
      service: 'Screen Printing',
      description: 'Premium hoodie screen printing with bold, long-lasting designs and a soft, comfortable feel for everyday wear.',
      image: '/path-to-hoodie-image.jpg'
    },
    {
      title: 'POLOS',
      location: 'New York',
      year: '2025',
      service: 'Screen Printing',
      description: 'Professional polo screen printing with crisp, durable designs for a clean and polished look.',
      image: '/path-to-polo-image.jpg'
    },
    {
      title: 'TOTES',
      location: 'New York',
      year: '2025',
      service: 'Screen Printing',
      description: 'Eco-friendly tote screen printing with bold, lasting designs that combine style and function.',
      image: '/path-to-tote-image.jpg'
    }
  ];

  const faqs = [
    {
      question: 'What is your minimum order quantity?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    },
    {
      question: 'How long does production take?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    },
    {
      question: 'Do you offer rush orders?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    },
    {
      question: 'What file formats do you accept?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'LOCAL PICKUP & DELIVERY',
      description: 'Convenient pickup and drop-off at our Philly location. Get your orders delivered right to your doorstep for ultimate ease.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="currentColor">
          <path d="M48 20h-8v-4c0-2.2-1.8-4-4-4H20c-2.2 0-4 1.8-4 4v4H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V24c0-2.2-1.8-4-4-4zM20 16h16v4H20v-4zm28 32H8V24h8v4h4v-4h16v4h4v-4h8v24z"/>
          <path d="M44 32c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm-20 0c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
        </svg>
      )
    },
    {
      title: 'SUPPORT SMALL BUSINESS',
      description: 'We&apos;re Philly-born and proud. By choosing us, you&apos;re supporting local entrepreneurs. We understand small business needs and finances.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="currentColor">
          <path d="M54 14H10c-2.2 0-4 1.8-4 4v4l6 12v16c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V34l6-12v-4c0-2.2-1.8-4-4-4zm-2 36H12V36h40v14zm4-20l-5-10h-2v10H15V20h-2l-5 10v-8h46v8z"/>
        </svg>
      )
    },
    {
      title: 'FAST TURNAROUND',
      description: 'Need it yesterday? We get it. Rush orders available for tight deadlines. Premium quality delivered without the wait. Same-week options.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 8c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm0 44c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"/>
          <path d="M34 18h-4v16.4l11.7 7 2-3.3-9.7-5.8V18z"/>
        </svg>
      )
    },
    {
      title: 'UNION FRIENDLY',
      description: 'We support union workers and understand the special printing needs for union groups and organized labor options.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 8l-8 8v8h-8l-8 8 8 8v8h8l8 8 8-8h8l8-8-8-8v-8h-8l-8-8zm0 8.8l5.2 5.2h7.2v7.2l5.2 5.2-5.2 5.2v7.2h-7.2L32 52.2l-5.2-5.2h-7.2v-7.2L14.4 34l5.2-5.2v-7.2h7.2L32 16.8z"/>
          <circle cx="32" cy="34" r="6"/>
        </svg>
      )
    }
  ];

  const phillyNeighborhoods = [
    { name: 'CENTER CITY', subtitle: 'Corporate & Restaurants' },
    { name: 'FISHTOWN', subtitle: 'Breweries & Retail' },
    { name: 'UNIVERSITY CITY', subtitle: 'Campus Organizations' },
    { name: 'SOUTH PHILLY', subtitle: 'Sports & Community' },
    { name: 'NORTHERN LIBERTIES', subtitle: 'Creative Businesses' },
    { name: 'MANAYUNK', subtitle: 'Retail & Events' },
    { name: 'OLD CITY', subtitle: 'Tours & Gift Shops' },
    { name: 'PORT RICHMOND', subtitle: 'Industrial & Urban' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="mt-[5rem] xl:mt-[5rem] w-full overflow-hidden">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] flex items-center justify-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/path-to-your-image.jpg"
              alt="Screen printing process"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-white mb-6">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-2">
                SCREEN PRINTING
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold">
                PHILADELPHIA
              </span>
            </h1>
            
            <p className="text-white text-lg md:text-xl mb-4 font-semibold">
              Trusted by 500+ local restaurants, breweries, and organizations across Philadelphia.
            </p>
            <p className="text-white text-base md:text-lg mb-8">
              Same-day quotes. Fast turnaround. Free local delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 min-w-[220px]">
                REQUEST A QUOTE
              </button>
              <button className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 min-w-[220px]">
                VIEW MY PORTFOLIO
              </button>
            </div>
          </div>
        </section>

        {/* Proud to Print for Philadelphia Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                PROUD TO PRINT FOR <span className="text-yellow-400">PHILADELPHIA</span>
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                From Center City restaurants to Fishtown breweries, we&apos;ve helped hundreds of local businesses create custom apparel that represents their brand.
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {portfolioItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Image Placeholder with Location Badge */}
                  <div className={`${item.color} h-48 relative flex items-center justify-center`}>
                    <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      {item.location}
                    </span>
                    <span className="text-white text-xl font-bold">INSERT PHOTO HERE</span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {item.category} <span className="text-yellow-400">{item.title}</span>
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="bg-gray-50 border-l-4 border-yellow-400 p-3 rounded">
                      <p className="text-gray-800 text-sm italic">
                        {item.testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 px-16 rounded-full text-sm uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg">
                VIEW MORE
              </button>
            </div>
          </div>
        </section>

        {/* Featured Screen Printing Products Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                FEATURED <span className="text-yellow-400">SCREEN PRINTING PRODUCTS</span>
              </h2>
              <p className="text-gray-700 text-lg max-w-4xl">
                Bring your designs to life with high-quality screen printing in Philadelphia. We offer vibrant, durable prints for t-shirts, hoodies, polos, and totes- crafted with precision and local pride.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {productCategories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors duration-300 ${
                    index === 0
                      ? 'bg-black text-white hover:bg-white hover:text-black border-2 border-black'
                      : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {products.map((product, productIndex) => (
                <div key={productIndex} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Product Image */}
                  <div className="bg-gray-100 aspect-square flex items-center justify-center p-8 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((__, starIndex) => (
                        <svg
                          key={starIndex}
                          className="w-4 h-4 fill-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                    </div>

                    {/* Price */}
                    <p className="text-lg font-bold mb-3">{product.price} / each</p>

                    {/* View Details Button */}
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-2 px-4 rounded-full text-sm transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 px-16 rounded-full text-sm uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg">
                View More
              </button>
            </div>
          </div>
        </section>

        {/* What We Print For Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                WHAT <span className="text-yellow-400">WE PRINT</span> FOR
              </h2>
              <p className="text-gray-700 text-lg">
                Custom screen printing for every Philadelphia occasion and business need.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {printingServices.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row">
                    {/* Text Content */}
                    <div className="p-8 sm:w-1/2 flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                          {service.title}
                        </h3>
                        <div className="flex gap-3 mb-4 text-sm text-gray-600">
                          <span>{service.location}</span>
                          <span>•</span>
                          <span>{service.year}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{service.service}</p>
                        <p className="text-gray-700 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="sm:w-1/2 bg-gray-200 flex items-center justify-center p-8 relative min-h-[300px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain p-8"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request a Digital Mockup Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Side - Mockup Images */}
              <div className="lg:w-1/2 relative min-h-[400px] w-full">
                <Image
                  src="/path-to-mockup-showcase.jpg"
                  alt="Digital Mockup Examples"
                  fill
                  className="rounded-lg shadow-2xl object-cover"
                />
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-1/2 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  REQUEST A DIGITAL MOCKUP
                </h2>
                <p className="text-lg mb-8 leading-relaxed">
                  Our live assistants are here to help you achieve designs from start to finish. Check out our{' '}
                  <button type="button" className="text-yellow-400 hover:underline font-semibold">
                    FAQs
                  </button>
                  ,{' '}
                  <button type="button" className="text-yellow-400 hover:underline font-semibold">
                    send us an email
                  </button>
                  , or give us a call.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full text-base transition-colors duration-300 flex items-center justify-center gap-2">
                    <svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Request a Designer
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-8 rounded-full text-base transition-colors duration-300 flex items-center justify-center gap-2">
                    <svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Submit a Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                FREQUENTLY ASKED <span className="text-yellow-400">QUESTIONS</span>
              </h2>
              <p className="text-gray-700 text-lg">
                Got questions? Explore our Frequently Asked Questions to learn more about our services, products, and policies all in one place.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, faqIndex) => (
                <details 
                  key={faqIndex} 
                  className="group bg-gray-50 rounded-lg overflow-hidden"
                  open={faqIndex === 0}
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-gray-900">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4">
                      <span className="text-2xl font-bold text-gray-900 group-open:hidden">+</span>
                      <span className="text-2xl font-bold text-gray-900 hidden group-open:block">×</span>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Why Philly Businesses Choose Us Section */}
        <section className="py-16 px-4 bg-[#2b2b2b]">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                WHY <span className="text-[#f9a825]">PHILLY BUSINESSES</span> CHOOSE US
              </h2>
              <p className="text-gray-300 text-lg">
                We&apos;re more than just a screen printer—we&apos;re your local partner in success
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((feature, featureIndex) => (
                <div 
                  key={featureIndex} 
                  className="border-2 border-[#f9a825] rounded-lg p-6 text-center hover:bg-[#f9a825] hover:text-black transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4 text-[#f9a825] group-hover:text-black">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[#f9a825] font-bold text-lg mb-3 group-hover:text-black">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-black">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* We Serve All of Philadelphia Section */}
        <section className="py-16 px-4 bg-[#2b2b2b]">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                WE SERVE ALL OF <span className="text-[#f9a825]">PHILADELPHIA</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Professional screen printing services for every neighborhood in the city
              </p>
            </div>

            {/* Neighborhoods Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {phillyNeighborhoods.map((neighborhood, neighborhoodIndex) => (
                <div 
                  key={neighborhoodIndex} 
                  className="border-2 border-[#f9a825] rounded-lg p-6 text-center hover:bg-[#f9a825] transition-all duration-300 group cursor-pointer"
                >
                  <h3 className="text-[#f9a825] font-bold text-lg mb-2 group-hover:text-black">
                    {neighborhood.name}
                  </h3>
                  <p className="text-gray-300 text-sm group-hover:text-black">
                    {neighborhood.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default page;