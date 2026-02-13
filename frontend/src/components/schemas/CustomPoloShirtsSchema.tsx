const CustomPoloShirtsSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/logo.png",
    "description": "Professional custom screen printing services for t-shirts, sweatshirts, hoodies, polo shirts, and more in Philadelphia",
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
    "name": "Custom Polo Shirts",
    "description": "Custom polo shirts designed to showcase your ideas on durable, high-quality apparel. Professional printing services in Philadelphia with screen printing, embroidery, and DTG options.",
    "url": "https://www.teevisionprinting.com/custom-polo-shirts",
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
        "name": "Custom Polo Shirts",
        "item": "https://www.teevisionprinting.com/custom-polo-shirts"
      }
    ]
  };

  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Custom Polo Shirts Collection",
    "description": "Premium custom polo shirts including classic pique polos, performance polos, and ladies polo shirts with professional printing",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "Gildan DryBlend® 6-Ounce Jersey Knit Sport Shirt (8800)",
          "category": "Classic Pique Polos",
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
          "name": "Port Authority® Silk Touch™ Performance Polo (K540)",
          "category": "Classic Pique Polos",
          "offers": {
            "@type": "Offer",
            "price": "22.75",
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
          "name": "Nike Dri-FIT Micro Pique Polo (363807)",
          "category": "Performance Polos",
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
          "position": 4,
          "name": "Jerzees SpotShield™ 5.6-Ounce Jersey Knit Sport Shirt (437)",
          "category": "Classic Pique Polos",
          "offers": {
            "@type": "Offer",
            "price": "16.25",
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
          "name": "Sport-Tek® PosiCharge® RacerMesh® Polo (ST640)",
          "category": "Performance Polos",
          "offers": {
            "@type": "Offer",
            "price": "24.50",
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
          "name": "Port Authority® Ladies Silk Touch™ Polo (L500)",
          "category": "Ladies Polo Shirts",
          "offers": {
            "@type": "Offer",
            "price": "20.90",
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
          "name": "Nike Ladies Dri-FIT Micro Pique Polo (354067)",
          "category": "Ladies Polo Shirts",
          "offers": {
            "@type": "Offer",
            "price": "36.75",
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
          "name": "Sport-Tek® Ladies PosiCharge® RacerMesh® Polo (LST640)",
          "category": "Ladies Polo Shirts",
          "offers": {
            "@type": "Offer",
            "price": "23.50",
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
          "name": "Gildan DryBlend® Ladies 6-Ounce Jersey Knit Sport Shirt (82800L)",
          "category": "Ladies Polo Shirts",
          "offers": {
            "@type": "Offer",
            "price": "17.90",
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
    "serviceType": "Custom Polo Shirt Printing",
    "provider": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
    },
    "description": "Professional custom polo shirt printing services including screen printing, embroidery, and direct to garment printing with quick turnaround and free delivery",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Polo Shirt Printing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Screen Printing on Polo Shirts",
            "description": "Vibrant, durable screen printing perfect for bulk orders with bold designs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Embroidery on Polo Shirts",
            "description": "Professional embroidery for a textured, premium finish on polo shirts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direct to Garment Printing on Polo Shirts",
            "description": "Full-color, detailed DTG printing for photorealistic designs"
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
        "name": "What's the difference between embroidery and screen printing for polo shirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Embroidery gives a textured look suited to logos and holds up well with frequent use. Screen printing suits bold, larger art and keeps colours clear. We can guide you on the right choice."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order quantity for custom polo shirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our minimum order for custom polo shirts is 12 pieces when using screen printing. Embroidery can be done in smaller runs, giving added flexibility."
        }
      },
      {
        "@type": "Question",
        "name": "How long does production take for custom polo shirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Production for custom polo shirts usually takes 1-2 weeks once artwork is approved. Timing may vary based on the method and quantity. If you need items sooner, rush options can be arranged for an added fee."
        }
      },
      {
        "@type": "Question",
        "name": "Can I mix and match polo shirt sizes in one order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can mix sizes in a single polo shirt order without extra charges. Most styles come in Small through 3XL, giving you plenty of range for groups or teams."
        }
      },
      {
        "@type": "Question",
        "name": "What polo shirt brands do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer polo shirts from Nike, Port Authority, Gildan, Sport-Tek and others, each with its own fabric feel, fit and price range. This helps match your project to the right option."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tee Vision Printing",
    "image": "https://www.teevisionprinting.com/logo.png",
    "description": "Professional custom polo shirt printing and embroidery services in Philadelphia",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "url": "https://www.teevisionprinting.com/custom-polo-shirts",
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
      "name": "Custom Polo Shirts",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Classic Pique Polos",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Classic Pique Polo Shirts"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Performance Polos",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Performance Polo Shirts"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Ladies Polo Shirts",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom Ladies Polo Shirts"
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
    "name": "Featured Custom Polo Shirt Designs",
    "description": "Gallery showcasing custom polo shirt printing designs and examples",
    "image": [
      "https://www.teevisionprinting.com/custom-polo-shirts/1-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-polo-shirts/2-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-polo-shirts/3-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-polo-shirts/4-converted-from-png.webp",
      "https://www.teevisionprinting.com/custom-polo-shirts/5-converted-from-png.webp"
    ]
  };

  const aggregateOfferSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": "Custom Polo Shirts",
    "description": "Premium custom polo shirts with various printing methods available",
    "lowPrice": "16.25",
    "highPrice": "38.90",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "offerCount": "9",
    "url": "https://www.teevisionprinting.com/custom-polo-shirts"
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
    </>
  );
};

export default CustomPoloShirtsSchema;