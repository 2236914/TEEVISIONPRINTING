const CustomLongSleeveSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/logo.png",
    "description": "Professional custom screen printing services for t-shirts, sweatshirts, hoodies, long sleeve shirts, and more in Philadelphia",
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
    "name": "Custom Long Sleeve Shirts",
    "description": "Custom long sleeve shirts designed to showcase your ideas on durable, high-quality apparel. Professional printing services in Philadelphia with screen printing, embroidery, and DTG options.",
    "url": "https://www.teevisionprinting.com/custom-long-sleeve",
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
        "name": "Custom Long Sleeve Shirts",
        "item": "https://www.teevisionprinting.com/custom-long-sleeve"
      }
    ]
  };

  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Custom Long Sleeve Shirts Collection",
    "description": "Premium custom long sleeve shirts including heavyweight, performance, and premium long sleeve styles with professional printing",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "Comfort Colors Adult Heavyweight Long Sleeve T-Shirt (C6014)",
          "category": "Heavyweight Long Sleeve",
          "offers": {
            "@type": "Offer",
            "price": "18.50",
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
          "name": "Gildan Ultra Cotton® Long Sleeve T-Shirt (G2400)",
          "category": "Heavyweight Long Sleeve",
          "offers": {
            "@type": "Offer",
            "price": "12.75",
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
          "name": "Hanes Beefy-T® Long Sleeve T-Shirt (5186)",
          "category": "Heavyweight Long Sleeve",
          "offers": {
            "@type": "Offer",
            "price": "14.25",
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
          "name": "Next Level Unisex Cotton Long Sleeve Crew (N3601)",
          "category": "Heavyweight Long Sleeve",
          "offers": {
            "@type": "Offer",
            "price": "13.90",
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
          "position": 5,
          "name": "Sport-Tek® PosiCharge® Long Sleeve Competitor™ Tee (ST350LS)",
          "category": "Performance Long Sleeve",
          "offers": {
            "@type": "Offer",
            "price": "16.50",
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
          "position": 6,
          "name": "Augusta Sportswear Attain Wicking Long Sleeve Shirt (2795)",
          "category": "Performance Long Sleeve",
          "offers": {
            "@type": "Offer",
            "price": "15.75",
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
          "position": 7,
          "name": "Champion® Long Sleeve Performance T-Shirt (CW26)",
          "category": "Performance Long Sleeve",
          "offers": {
            "@type": "Offer",
            "price": "17.25",
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
          "position": 8,
          "name": "Bella + Canvas Unisex Jersey Long Sleeve Tee (BC3501)",
          "category": "Premium Long Sleeve",
          "offers": {
            "@type": "Offer",
            "price": "19.91",
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
          "position": 9,
          "name": "Alternative Apparel Keeper Long Sleeve Tee (AA5104)",
          "category": "Premium Long Sleeve",
          "offers": {
            "@type": "Offer",
            "price": "21.50",
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
          "position": 10,
          "name": "American Apparel Fine Jersey Long Sleeve T-Shirt (2007)",
          "category": "Premium Long Sleeve",
          "offers": {
            "@type": "Offer",
            "price": "20.20",
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
    "serviceType": "Custom Long Sleeve Shirt Printing",
    "provider": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
    },
    "description": "Professional custom long sleeve shirt printing services including screen printing, embroidery, and direct to garment printing with quick turnaround and free delivery",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Long Sleeve Shirt Printing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Screen Printing on Long Sleeve Shirts",
            "description": "Vibrant, durable screen printing perfect for bulk long sleeve shirt orders with bold designs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Embroidery on Long Sleeve Shirts",
            "description": "Professional embroidery for a textured, premium finish on custom long sleeve shirts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direct to Garment Printing on Long Sleeve Shirts",
            "description": "Full-color, detailed DTG printing for photorealistic designs on long sleeve shirts"
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
        "name": "What printing techniques do you offer for custom long sleeve shirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer several printing techniques such as screen printing, embroidery, and direct-to-garment (DTG) printing. Each method is chosen to best match your design, ensuring vibrant, durable, and high-quality custom long sleeves."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a mockup before printing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most suppliers offer a digital mockup for approval before printing. This lets you check the layout, colors, and sizing, ensuring everything looks accurate and helps prevent mistakes before production starts."
        }
      },
      {
        "@type": "Question",
        "name": "What materials are used for custom long sleeves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom long sleeve shirts are typically made from cotton, CVC blends, or polyester. Cotton feels soft, CVC offers everyday durability, and polyester works great for sublimation or activewear."
        }
      },
      {
        "@type": "Question",
        "name": "Will the print fade after washing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Silkscreen and DTF prints stay vibrant for a long time when cared for properly. Wash your shirt inside out, use mild detergent, and skip the bleach to keep the design looking sharp."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer unisex, men's, and women's long sleeve sizes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer a full range of long sleeve sizes, including unisex, men's, and women's cuts. Sizes usually range from XS to 3XL or more, ensuring a comfortable fit for all body types and preferences."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tee Vision Printing",
    "image": "https://www.teevisionprinting.com/logo.png",
    "description": "Professional custom long sleeve shirt printing and embroidery services in Philadelphia",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "url": "https://www.teevisionprinting.com/custom-long-sleeve",
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
      "name": "Custom Long Sleeve Shirts",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Heavyweight Long Sleeve",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Heavyweight Long Sleeve Shirts"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Performance Long Sleeve",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Performance Long Sleeve Shirts"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Premium Long Sleeve",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Premium Long Sleeve Shirts"
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
    "name": "Featured Custom Long Sleeve Shirt Designs",
    "description": "Gallery showcasing custom long sleeve shirt printing designs and examples",
    "image": [
      "https://www.teevisionprinting.com/custom-long-sleeve/1-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-long-sleeve/2-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-long-sleeve/3-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-long-sleeve/4-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-long-sleeve/5-converted-from-png.webp"
    ]
  };

  const aggregateOfferSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": "Custom Long Sleeve Shirts",
    "description": "Premium custom long sleeve shirts with various printing methods available",
    "lowPrice": "12.75",
    "highPrice": "21.50",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "offerCount": "10",
    "url": "https://www.teevisionprinting.com/custom-long-sleeve"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Custom Long Sleeve Shirt Printing Process",
    "description": "Learn about the custom long sleeve shirt printing process at Tee Vision Printing",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose Your Style",
        "text": "Select from heavyweight, performance, or premium long sleeve shirts in various colors and sizes."
      },
      {
        "@type": "HowToStep",
        "name": "Select Printing Method",
        "text": "Choose between screen printing for bulk orders, embroidery for textured designs, or DTG for detailed full-color prints."
      },
      {
        "@type": "HowToStep",
        "name": "Submit Design",
        "text": "Upload your custom design or work with our professional designers to create the perfect long sleeve shirt artwork."
      },
      {
        "@type": "HowToStep",
        "name": "Production & Delivery",
        "text": "We produce your custom long sleeve shirts in 1-2 weeks and deliver them free anywhere in the United States."
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

export default CustomLongSleeveSchema;