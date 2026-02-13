const CustomCrewneckSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/logo.png",
    "description": "Professional custom screen printing services for t-shirts, sweatshirts, hoodies, crewneck sweatshirts, and more in Philadelphia",
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
    "name": "Custom Crewneck Sweatshirts",
    "description": "Custom crewneck sweatshirts designed to showcase your ideas on durable, high-quality apparel. Professional printing services in Philadelphia with screen printing, embroidery, and DTG options.",
    "url": "https://www.teevisionprinting.com/custom-crewneck",
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
        "name": "Custom Crewneck Sweatshirts",
        "item": "https://www.teevisionprinting.com/custom-crewneck"
      }
    ]
  };

  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Custom Crewneck Sweatshirts Collection",
    "description": "Premium custom crewneck sweatshirts including heavyweight, pigment-dyed, and premium crewneck styles with professional printing",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "Independent Trading Co. Heavyweight Crewneck Sweatshirt (IND3000)",
          "category": "Heavyweight Crewnecks",
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
          "name": "Gildan Unisex Hammer™ Maxweight Crewneck Sweatshirt (19000)",
          "category": "Heavyweight Crewnecks",
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
          "position": 3,
          "name": "Gildan - Unisex Heavy Blend™ Crewneck Sweatshirt (18000)",
          "category": "Heavyweight Crewnecks",
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
          "position": 4,
          "name": "Independent Trading Co. Midweight Pigment-Dyed Crewneck Sweatshirt (PRM3500)",
          "category": "Pigment-Dyed Crewnecks",
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
        },
        {
          "@type": "Product",
          "position": 5,
          "name": "Comfort Colors Adult Crewneck Sweatshirt",
          "category": "Pigment-Dyed Crewnecks",
          "offers": {
            "@type": "Offer",
            "price": "34.25",
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
    "serviceType": "Custom Crewneck Sweatshirt Printing",
    "provider": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
    },
    "description": "Professional custom crewneck sweatshirt printing services including screen printing, embroidery, and direct to garment printing with quick turnaround and free delivery",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Crewneck Sweatshirt Printing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Screen Printing on Crewneck Sweatshirts",
            "description": "Vibrant, durable screen printing perfect for bulk crewneck sweatshirt orders with bold designs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Embroidery on Crewneck Sweatshirts",
            "description": "Professional embroidery for a textured, premium finish on custom crewneck sweatshirts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direct to Garment Printing on Crewneck Sweatshirts",
            "description": "Full-color, detailed DTG printing for photorealistic designs on crewneck sweatshirts"
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
        "name": "What materials are used for custom crewneck sweatshirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most crewnecks are made from cotton, fleece, or cotton-poly blends. Cotton gives softness, fleece adds warmth, and blended fabrics offer durability and great print quality."
        }
      },
      {
        "@type": "Question",
        "name": "Can you print on the front, back, and sleeves of a crewneck?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many printers can add designs to the chest, back, and sleeves. Placement depends on the printing method and artwork layout, giving you full flexibility for creative or branded looks."
        }
      },
      {
        "@type": "Question",
        "name": "What printing method is best for custom crewnecks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Screen printing is ideal for bold, bulk designs, DTF suits full-color prints, and embroidery adds a premium textured look. The best option depends on your budget, design style, and quantity."
        }
      },
      {
        "@type": "Question",
        "name": "Can crewnecks be customized for events and giveaways?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Custom crewnecks are great for corporate events, school programs, sports teams, and giveaways because they're practical, stylish, and offer plenty of space for branding."
        }
      },
      {
        "@type": "Question",
        "name": "Are custom crewnecks available in unisex and oversized styles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer unisex, standard-fit, and oversized crewnecks to make sure everyone gets the right fit."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tee Vision Printing",
    "image": "https://www.teevisionprinting.com/logo.png",
    "description": "Professional custom crewneck sweatshirt printing and embroidery services in Philadelphia",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "url": "https://www.teevisionprinting.com/custom-crewneck",
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
      "name": "Custom Crewneck Sweatshirts",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Heavyweight Crewnecks",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Heavyweight Crewneck Sweatshirts"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Pigment-Dyed Crewnecks",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Pigment-Dyed Crewneck Sweatshirts"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Premium Crewnecks",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Premium Crewneck Sweatshirts"
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
    "name": "Featured Custom Crewneck Sweatshirt Designs",
    "description": "Gallery showcasing custom crewneck sweatshirt printing designs and examples",
    "image": [
      "https://www.teevisionprinting.com/custom-crewneck/1-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-crewneck/2-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-crewneck/3-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-crewneck/4-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-crewneck/5-converted-from-png.webp"
    ]
  };

  const aggregateOfferSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": "Custom Crewneck Sweatshirts",
    "description": "Premium custom crewneck sweatshirts with various printing methods available",
    "lowPrice": "28.50",
    "highPrice": "38.90",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "offerCount": "5",
    "url": "https://www.teevisionprinting.com/custom-crewneck"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Custom Crewneck Sweatshirt Printing Process",
    "description": "Learn about the custom crewneck sweatshirt printing process at Tee Vision Printing",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose Your Style",
        "text": "Select from heavyweight, pigment-dyed, or premium crewneck sweatshirts in various colors and sizes."
      },
      {
        "@type": "HowToStep",
        "name": "Select Printing Method",
        "text": "Choose between screen printing for bulk orders, embroidery for textured designs, or DTG for detailed full-color prints."
      },
      {
        "@type": "HowToStep",
        "name": "Submit Design",
        "text": "Upload your custom design or work with our professional designers to create the perfect crewneck sweatshirt artwork."
      },
      {
        "@type": "HowToStep",
        "name": "Production & Delivery",
        "text": "We produce your custom crewneck sweatshirts in 1-2 weeks and deliver them free anywhere in the United States."
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

export default CustomCrewneckSchema;