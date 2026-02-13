import React from 'react';
import Link from 'next/link';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import Roboto from '@/utilities/fonts/Roboto';
import SitemapSchema from '@/components/schemas/SitemapSchema';

const sitemapData = [
  {
    category: 'Product Categories',
    sections: [
      {
        title: 'T-Shirts',
        links: [
          { name: 'Crewneck T-shirt', url: '/products/category/t-shirts/crewneck-t-shirt' },
          { name: 'Long Sleeves T-shirt', url: '/products/category/t-shirts/long-sleeve-t-shirt' },
          { name: 'Tank Tops', url: '/products/category/t-shirts/tank-tops' },
        ],
      },
      {
        title: 'Sweatshirts & Hoodies',
        links: [
          { name: 'Crewneck Sweatshirts', url: '/products/category/sweatshirts-hoodies/crewneck-sweatshirts' },
          { name: 'Hooded Sweatshirts', url: '/products/category/sweatshirts-hoodies/hooded-sweatshirts' },
          { name: 'Zip Ups', url: '/products/category/sweatshirts-hoodies/zip-ups' },
        ],
      },
      {
        title: 'Ladies',
        links: [
          { name: 'Ladies Crop Tank', url: '/products/category/ladies/ladies-crop-tank' },
          { name: 'Ladies Crop Top', url: '/products/category/ladies/ladies-crop-top' },
          { name: 'Ladies Long Sleeve', url: '/products/category/ladies/ladies-long-sleeve' },
          { name: 'Ladies Long Sleeve Polo', url: '/products/category/ladies/ladies-long-sleeve-polo' },
          { name: 'Ladies Shirts', url: '/products/category/ladies/ladies-shirts' },
          { name: 'Ladies Tank Top', url: '/products/category/ladies/ladies-tank-top' },
        ],
      },
      {
        title: 'Youth & Toddlers',
        links: [
          { name: 'Youth Fleece Crewneck', url: '/products/category/youth-toddlers/youth-fleece-crewneck' },
          { name: 'Youth Hooded Sweatshirt', url: '/products/category/youth-toddlers/youth-hooded-sweatshirt' },
          { name: 'Youth T-shirts', url: '/products/category/youth-toddlers/youth-tshirts' },
        ],
      },
      {
        title: 'Tote Bags & More',
        links: [
          { name: 'Tote Bag', url: '/products/category/tote-bags-more/tote-bag' },
          { name: 'Track Pants', url: '/products/category/tote-bags-more/track-pants' },
        ],
      },
      {
        title: 'Polos',
        links: [
          { name: 'Polo', url: '/products/category/polos/polo' },
        ],
      },
    ],
  },
  {
    category: 'Services & Information',
    sections: [
      {
        title: 'Our Services',
        links: [
          { name: 'Screen Printing', url: '/services/screen-printing' },
          { name: 'Embroidery', url: '/services/embroidery' },
          { name: 'Direct to Garment Printing', url: '/services/direct-to-garment-printing' },
        ],
      },
      {
        title: 'General Help Information',
        links: [
          { name: 'About Us', url: '/about' },
          { name: 'Blog', url: '/blog' },
          { name: 'Contact', url: '/contact' },
        ],
      },
    ],
  },
  {
    category: 'Location & Specialty Pages',
    sections: [
      {
        title: 'Philadelphia Custom Printing',
        links: [
          { name: 'Custom T-Shirt Printing Philadelphia', url: '/custom-t-shirt-printing-philadelphia' },
          { name: 'Screen Printing Philadelphia', url: '/screen-printing-philadelphia' },
          { name: 'Custom Hoodies', url: '/custom-hoodies' },
          { name: 'Custom Polo Shirts', url: '/custom-polo-shirts' },
          { name: 'Custom Sweatshirts', url: '/custom-sweatshirts' },
          { name: 'Custom Long Sleeve', url: '/custom-long-sleeve' },
          { name: 'Custom Crewneck', url: '/custom-crewneck-sweatshirts' },
        ],
      },
    ],
  },
];

const SitemapPage = () => {
  return (
    <div className="min-h-screen bg-white">
          <SitemapSchema />
      {/* Hero Section */}
      <div className="bg-white py-12 md:py-16 border-b-2 border-gray-200">
        <div className="container mx-auto px-4 md:px-5 max-w-7xl">
          <h1 className={`${MaisonNeue} text-4xl md:text-5xl font-bold text-gray-900 text-center mt-12`}>
            SITE MAP
          </h1>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
        {sitemapData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className={`${MaisonNeue} text-2xl md:text-3xl font-bold text-gray-900 mb-8`}>
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
              {category.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className={`${MaisonNeue} text-lg md:text-xl font-bold text-gray-900 mb-4`}>
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.url}
                          className={`${Roboto} text-sm md:text-base text-blue-500 hover:text-[#ffcd00] hover:underline transition-colors duration-200`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SitemapPage;