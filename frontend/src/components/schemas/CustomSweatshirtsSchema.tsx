const CustomSweatshirtsSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/logo.png",
    "description": "Professional custom screen printing services for t-shirts, sweatshirts, hoodies, and more in Philadelphia",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "priceRange": "$$"
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Custom Sweatshirts",
    "description": "Custom sweatshirts designed to showcase your ideas on durable, high-quality apparel. Professional printing services in Philadelphia with screen printing, embroidery, and DTG options.",
    "url": "https://www.teevisionprinting.com/custom-sweatshirts",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Tee Vision Printing",
      "url": "https://www.teevisionprinting.com"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.teevisionprinting.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Custom Sweatshirts",
        "item": "https://www.teevisionprinting.com/custom-sweatshirts"
      }
    ]
  };

  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Custom Sweatshirts Collection",
    "description": "Premium custom sweatshirts including crewneck sweatshirts, pullover sweatshirts, and zip-up sweatshirts with professional printing",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "Independent Trading Co. Heavyweight Crewneck Sweatshirt (IND3000)",
          "category": "Crewneck Sweatshirts",
          "offers": {
            "@type": "Offer",
            "price": "36.16",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "1"
          }
        },
        {
          "@type": "Product",
          "position": 2,
          "name": "Gildan - Unisex Heavy Blend™ Crewneck Sweatshirt (18000)",
          "category": "Crewneck Sweatshirts",
          "offers": {
            "@type": "Offer",
            "price": "28.50",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "1"
          }
        },
        {
          "@type": "Product",
          "position": 3,
          "name": "Gildan Unisex Hammer™ Maxweight Crewneck Sweatshirt (19000)",
          "category": "Crewneck Sweatshirts",
          "offers": {
            "@type": "Offer",
            "price": "32.75",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "1"
          }
        },
        {
          "@type": "Product",
          "position": 4,
          "name": "Independent Trading Co. Midweight Pigment-Dyed Crewneck Sweatshirt (PRM3500)",
          "category": "Crewneck Sweatshirts",
          "offers": {
            "@type": "Offer",
            "price": "38.90",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "1"
          }
        }
      ]
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Sweatshirt Printing",
    "provider": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
    },
    "description": "Professional custom sweatshirt printing services including screen printing, embroidery, DTG, and heat transfer with quick turnaround and free delivery",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sweatshirt Printing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Screen Printing on Sweatshirts",
            "description": "Vibrant, durable screen printing perfect for bulk sweatshirt orders with bold designs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Embroidery on Sweatshirts",
            "description": "Professional embroidery for a textured, premium finish on custom sweatshirts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direct to Garment Printing on Sweatshirts",
            "description": "Full-color, detailed DTG printing for photorealistic designs on sweatshirts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DTF/Heat Transfer on Sweatshirts",
            "description": "High-quality heat transfer printing for custom sweatshirt designs"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What printing techniques do you offer for custom sweatshirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer several customization options for sweatshirts, including screen printing, DTG printing, DTF/heat-transfer, and embroidery. Each method provides a different look and feel, depending on your design and order size."
        }
      },
      {
        "@type": "Question",
        "name": "How long will it take to receive my custom sweatshirt order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your custom sweatshirt typically arrives in just 5–8 days! Every piece is made-to-order with premium care, and we keep you updated at every step."
        }
      },
      {
        "@type": "Question",
        "name": "What styles are available for custom sweatshirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a range of styles: comfy hoodies, classic crewnecks, zip-up sweatshirts, raglan sleeves, and oversized fits. Choose your color, size and design and we'll make it exactly the way you want."
        }
      },
      {
        "@type": "Question",
        "name": "Are there discounts for bulk orders of custom sweatshirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer special discounts on bulk custom sweatshirt orders, with savings increasing based on the quantity you choose. The more you order, the more you save."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best materials for custom sweatshirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the softest, most durable custom sweatshirts, we recommend cotton, cotton-poly blends, French terry, or fleece perfect for everyday wear or premium merch."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tee Vision Printing",
    "image": "https://www.teevisionprinting.com/logo.png",
    "description": "Professional custom sweatshirt printing and embroidery services in Philadelphia",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "url": "https://www.teevisionprinting.com/custom-sweatshirts",
    "telephone": "",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Custom Sweatshirts",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Crewneck Sweatshirts",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Crewneck Sweatshirts"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Pullover Sweatshirts",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Pullover Sweatshirts"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Zip-Up Sweatshirts",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Zip-Up Sweatshirts"
              }
            }
          ]
        }
      ]
    }
  };

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Featured Custom Sweatshirt Designs",
    "description": "Gallery showcasing custom sweatshirt printing designs and examples",
    "image": [
      "https://www.teevisionprinting.com/custom-sweatshirts/new1-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-sweatshirts/new2-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-sweatshirts/new3-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-sweatshirts/new4-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-sweatshirts/new5-converted-from-png.webp"
    ]
  };

  const aggregateOfferSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": "Custom Sweatshirts",
    "description": "Premium custom sweatshirts with various printing methods available",
    "lowPrice": "28.50",
    "highPrice": "38.90",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "offerCount": "4",
    "url": "https://www.teevisionprinting.com/custom-sweatshirts"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Custom Sweatshirt Printing Process",
    "description": "Learn about the custom sweatshirt printing process at Tee Vision Printing",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose Your Style",
        "text": "Select from crewneck sweatshirts, pullover sweatshirts, or zip-up sweatshirts in various colors and sizes."
      },
      {
        "@type": "HowToStep",
        "name": "Select Printing Method",
        "text": "Choose between screen printing for bulk orders, embroidery for textured designs, or DTG for detailed full-color prints."
      },
      {
        "@type": "HowToStep",
        "name": "Submit Design",
        "text": "Upload your custom design or work with our professional designers to create the perfect sweatshirt artwork."
      },
      {
        "@type": "HowToStep",
        "name": "Production & Delivery",
        "text": "We produce your custom sweatshirts in 5-8 days and deliver them free anywhere in the United States."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCollectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
};

export default CustomSweatshirtsSchema;