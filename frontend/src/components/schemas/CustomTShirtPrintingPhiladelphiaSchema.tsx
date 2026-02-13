const CustomTShirtPrintingPhiladelphiaSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/logo.png",
    "description": "Custom t-shirt printing in Philadelphia with high-quality screen printing services for businesses, events, teams, and organizations",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "postalCode": "Your Postal Code",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.011353271507765",
      "longitude": "-75.11162422328594"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English",
      "areaServed": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Philadelphia",
        "containedInPlace": {
          "@type": "State",
          "name": "Pennsylvania"
        }
      }
    ],
    "priceRange": "$$"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom T-Shirt Printing",
    "provider": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
    },
    "description": "Professional custom t-shirt printing services in Philadelphia with fast turnaround, free delivery, and premium inks. Starting from 12 pieces with volume discounts available.",
    "areaServed": {
      "@type": "City",
      "name": "Philadelphia, PA"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "USD",
        "minPrice": "12",
        "description": "Minimum order starting at 12 pieces"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Custom T-Shirt Printing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Screen Print Orders",
            "description": "Starting from 12 pieces with premium inks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quick Turnaround",
            "description": "1-2 weeks standard turnaround with rush services available"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Delivery",
            "description": "Free delivery anywhere in United States"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Mockup",
            "description": "Free digital mockup for every order"
          }
        }
      ]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tee Vision Printing",
    "image": [
      "https://www.teevisionprinting.com/screen-printing/custom-tshirt-printing/54-converted-from-png (1).webp",
      "https://www.teevisionprinting.com/screen-printing/custom-tshirt-printing/36-converted-from-png.webp"
    ],
    "description": "Philadelphia's custom t-shirt printing expert offering screen printing for businesses, restaurants, breweries, student organizations, and events",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "postalCode": "Your Postal Code",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.011353271507765",
      "longitude": "-75.11162422328594"
    },
    "url": "https://www.teevisionprinting.com",
    "telephone": "Your Phone Number",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "USD"
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
        "name": "Services",
        "item": "https://www.teevisionprinting.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Custom T-Shirt Printing Philadelphia",
        "item": "https://www.teevisionprinting.com/services/custom-tshirt-printing"
      }
    ]
  };

  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Best Products for Screen Printing",
    "description": "Discover our most popular products for screen printing, including custom T-shirts, hoodies, sweatshirts, tote bags, and uniforms",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "Gildan Adult Softstyle® T-Shirt (G640)",
          "image": "https://www.teevisionprinting.com/screen-printing/new-screen-printing/1-converted-from-png.webp",
          "offers": {
            "@type": "Offer",
            "price": "13.19",
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
          "name": "AS Colour Classic Tee (5026)",
          "image": "https://www.teevisionprinting.com/screen-printing/new-screen-printing/5026_classic_tee_loose-converted-from-jfif.webp",
          "offers": {
            "@type": "Offer",
            "price": "21.62",
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
          "name": "Gildan Softstyle® Full-Zip Hooded Sweatshirt (SF600)",
          "image": "https://www.teevisionprinting.com/screen-printing/new-screen-printing/sweatshirts/215-converted-from-png.webp",
          "offers": {
            "@type": "Offer",
            "price": "37.91",
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
          "name": "Gildan Adult Heavy Cotton™ Long-Sleeve T-Shirt (G540)",
          "image": "https://www.teevisionprinting.com/screen-printing/new-screen-printing/long sleeve/1 (3)-converted-from-png.webp",
          "offers": {
            "@type": "Offer",
            "price": "17.13",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to get my custom t-shirts in Philadelphia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our standard turnaround time for custom t-shirts in Philadelphia is 7-10 business days after you approve your design. If you need your order sooner, rush services and same-day quotes are available upon request."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order for custom t-shirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can print as few or as many shirts as you need. While there's no strict minimum, we recommend 12 or more for the best pricing on custom t-shirt printing Philadelphia customers love."
        }
      },
      {
        "@type": "Question",
        "name": "Can I see my design before its printed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide a free digital mockup for every order. You'll get to review your custom t-shirt design and approve it before production begins — ensuring every detail is exactly how you want it."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of shirts can I customize?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a wide range of custom t-shirts in Philadelphia, including premium cotton tees, performance wear, long sleeves, polos, and hoodies. Our team will help you choose the best option for your brand or event."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver outside Philadelphia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! While we specialize in Philadelphia custom t-shirts, we also ship orders nationwide. Local pickup and free delivery are available within the Philly area for added convenience."
        }
      }
    ]
  };

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Featured Custom T-shirt Prints Gallery",
    "description": "Gallery showcasing our custom t-shirt printing work for Philadelphia businesses and organizations",
    "image": [
      "https://www.teevisionprinting.com/screen-printing/custom-tshirt-printing/25-converted-from-png.webp",
      "https://www.teevisionprinting.com/screen-printing/custom-tshirt-printing/26-converted-from-png.webp",
      "https://www.teevisionprinting.com/screen-printing/custom-tshirt-printing/27-converted-from-png.webp",
      "https://www.teevisionprinting.com/screen-printing/custom-tshirt-printing/28-converted-from-png.webp",
      "https://www.teevisionprinting.com/screen-printing/custom-tshirt-printing/29-converted-from-png.webp",
      "https://www.teevisionprinting.com/screen-printing/custom-tshirt-printing/30-converted-from-png.webp",
      "https://www.teevisionprinting.com/screen-printing/custom-tshirt-printing/31-converted-from-png.webp",
      "https://www.teevisionprinting.com/screen-printing/custom-tshirt-printing/32-converted-from-png.webp"
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Custom T-Shirt Printing Philadelphia",
    "description": "Design your own custom t-shirt that fits your style, brand, or event. We use high-quality printing to make your design stand out and last.",
    "url": "https://www.teevisionprinting.com/services/custom-tshirt-printing",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2"]
    },
    "specialty": [
      "Custom T-Shirt Printing",
      "Screen Printing",
      "Restaurant Staff Uniforms",
      "Student Organization Apparel",
      "Brewery Merchandise",
      "Event T-Shirts"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
};

export default CustomTShirtPrintingPhiladelphiaSchema;