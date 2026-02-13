import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Termina from '@/utilities/fonts/Termina/Termina';
import Roboto from '@/utilities/fonts/Roboto';
import Instagram from '@/utilities/SVGs/Instagram';
import Linkedin from '@/utilities/SVGs/Linkedin';

const footerContents = [
  {
    header: 'SERVICES',
    links: [
      { name: 'Screen Printing', link: '/services/screen-printing' },
      { name: 'Embroidery', link: '/services/embroidery' },
      {
        name: 'Direct to Garment Printing',
        link: '/services/direct-to-garment-printing',
      },
    ],
  },
  {
    header: 'PRODUCTS',
    links: [
      { name: 'Crewneck Sweatshirts', link: '/products/category/sweatshirts-hoodies/crewneck-sweatshirts' },
      { name: 'Crewneck T-shirt', link: '/products/category/t-shirts/crewneck-t-shirt' },
      { name: 'Long Sleeve T-shirt', link: '/products/category/t-shirts/long-sleeve-t-shirt' },
      { name: 'Tote Bags', link: '/products/category/tote-bags-more/tote-bag' },
    ],
  },
  {
    header: 'ABOUT US',
    links: [
      { name: 'Meet Our Team', link: '/about' },
      { name: 'Blog', link: '/blog' },
      { name: 'Contact', link: '/contact' },
    ],
  },
  {
    header: 'SITEMAP',
    headerLink: '/sitemap',
    links: [],
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-secondaryT">
      {/* Yellow Top Line */}
      <div className="w-full h-2 bg-primaryT" />
      
      <div className="w-full xl:w-[80rem] p-8 flex xl:flex-row gap-8 flex-col xl:py-12 xl:justify-between text-center xl:text-left">
        <div className="flex flex-col xl:items-start gap-4 xl:max-w-[25rem]">
          {/* TVP Flag Icon */}
          <div className="flex justify-center xl:justify-start">
            <Image
              src="/icon.png"
              alt="TVP Flag"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </div>
          
          {/* TEE VISION PRINTING Text Logo */}
          <div className="flex flex-col xl:items-start items-center">
            <h3 className={`${Termina} text-primaryT text-2xl md:text-3xl font-black tracking-wide`}>
              TEE VISION
            </h3>
            <p className={`${MaisonNeue} text-primaryT text-xs md:text-sm tracking-[0.3em] font-medium`}>
              P R I N T I N G
            </p>
          </div>
          {/* Description */}
          <div className={`text-white/80 text-center xl:text-left`}>
            <p className={`${Roboto} text-sm md:text-base leading-relaxed`}>
              Your trusted partner for high-quality, custom screen printing. We
              specialize in bulk orders with fast turnaround, competitive
              pricing, and exceptional customer service.
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center xl:justify-start gap-3 mt-2">
            <Link
              aria-label="Instagram"
              href="https://www.instagram.com/teevisionprint"
              className="text-white hover:text-primaryT transition-colors"
            >
              <Instagram
                width={80}
                height={100}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </Link>
            <Link
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/tee-vision-printing/"
              className="text-white hover:text-primaryT transition-colors"
            >
              <Linkedin
                width={80}
                height={100}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </Link>
          </div>
        </div>
        
        {/* Footer Links Grid */}
        <div className="hidden xl:grid xl:grid-cols-4 gap-8 text-left">
          {footerContents.map((content) => (
            <div className="flex flex-col gap-4" key={content.header}>
              {content.headerLink ? (
                <Link href={content.headerLink}>
                  <p
                    className={`text-[1.2rem] ${MaisonNeue} font-extrabold w-fit text-white hover:text-primaryT transition-colors duration-300 cursor-pointer`}
                  >
                    {content.header}
                    <span className={`block h-1 w-full bg-primaryT rounded`} />
                  </p>
                </Link>
              ) : (
                <p
                  className={`text-[1.2rem] ${MaisonNeue} font-extrabold w-fit text-white`}
                >
                  {content.header}
                  <span className={`block h-1 w-full bg-primaryT rounded`} />
                </p>
              )}
              {content.links.length > 0 && (
                <div
                  className={`flex flex-col gap-4 ${Roboto} text-white/80 text-[0.85rem]`}
                >
                  {content.links.map((link) => (
                    <Link href={link.link} key={link.name}>
                      <p className="hover:text-primaryT transition-colors duration-300">
                        {link.name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Copyright */}
      <div className="w-full border-t border-white/20 text-white/60 py-6 text-center text-xs md:text-sm">
        <p className={`${Roboto}`}>
          Copyright ©2025 · Tee Vision Printing
        </p>
      </div>
    </footer>
  );
};

export default Footer;