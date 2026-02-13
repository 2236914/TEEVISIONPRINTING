const TeeVisionHomepageSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/main/logo.png",
    "description": "Professional custom screen printing services for t-shirts, sweatshirts, hoodies, and more in Philadelphia. 10 years in the custom apparel industry with 5-7 day turnaround for bulk orders.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "920 E Hunting Park Ave",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "postalCode": "19124",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-267-538-5331",
      "email": "info@teevisionprinting.com",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100+",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    "foundingDate": "2014",
    "slogan": "Your trusted partner for high-quality, custom screen printing"
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Custom T Shirts: Match Your Style and Brand | Tee Vision Printing",
    "description": "Professional custom t-shirt printing in Philadelphia. Screen printing, embroidery, and DTG services with 5-7 day turnaround. 10 years of experience and 4.9 star rating.",
    "url": "https://www.teevisionprinting.com",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Tee Vision Printing",
      "url": "https://www.teevisionprinting.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.teevisionprinting.com"
        }
      ]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tee Vision Printing",
    "image": "https://www.teevisionprinting.com/main/logo.png",
    "description": "Professional custom t-shirt printing and screen printing services in Philadelphia with 10 years of experience",
    "@id": "https://www.teevisionprinting.com",
    "url": "https://www.teevisionprinting.com",
    "telephone": "+1-267-538-5331",
    "email": "info@teevisionprinting.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "920 E Hunting Park Ave",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "postalCode": "19124",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.0094",
      "longitude": "-75.1199"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100+",
      "bestRating": "5"
    },
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
    "sameAs": [
      "https://www.google.com/search?q=Tee+Vision+Printing"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Apparel Printing",
    "provider": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
    },
    "description": "Professional custom t-shirt and apparel printing services including screen printing, embroidery, and direct to garment printing with quick 5-7 day turnaround for bulk orders",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Custom Printing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Screen Printing",
            "description": "Vibrant colors and durable finish on custom t-shirts, hoodies, and apparel",
            "url": "https://www.teevisionprinting.com/services/screen-printing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direct to Garment Printing (DTG)",
            "description": "High-quality digital printing for detailed designs and small batch orders",
            "url": "https://www.teevisionprinting.com/services/direct-to-garment-printing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Embroidery",
            "description": "Professional embroidery services for premium branded apparel",
            "url": "https://www.teevisionprinting.com/services/embroidery"
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

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Tee Vision Printing"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Elli - CRO APO"
    },
    "reviewBody": "They offered a really quick turn around time, helped redraw my designs and were very communicative throughout the entire process. The shirts turned out amazing!! I would highly recommend Tee Vision Printing"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the turnaround time for bulk orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tee Vision Printing offers a 5-7 day turnaround time for bulk orders. Rush options may be available for an additional fee depending on the project size and complexity."
        }
      },
      {
        "@type": "Question",
        "name": "What printing methods do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three main printing methods: Screen Printing for vibrant colors and durability, Direct to Garment (DTG) for detailed designs and small batches, and Embroidery for premium branded apparel with a textured finish."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide design assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer multiple design options: you can upload your own design, use our online design studio to create custom artwork, or work with our in-house design team for professional assistance."
        }
      },
      {
        "@type": "Question",
        "name": "What is your minimum order quantity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum order quantities vary by printing method. Screen printing typically requires at least 12 pieces for the best pricing. Contact us for specific requirements for your project."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Tee Vision Printing located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tee Vision Printing is located at 920 E Hunting Park Ave, Philadelphia, PA 19124. We serve customers throughout the United States with competitive pricing and fast shipping."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Tee Vision Printing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach us by phone at (267) 538-5331 or email at info@teevisionprinting.com. You can also fill out our online quote request form for a quick response."
        }
      }
    ]
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Past Projects Portfolio",
    "description": "Custom apparel created for businesses, universities, events, and organizations",
    "url": "https://www.teevisionprinting.com/past-projects",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "position": 1,
          "name": "Manor College University Merch",
          "description": "High-quality merchandise for Manor College students with timely delivery and budget-friendly pricing",
          "datePublished": "2021-03"
        },
        {
          "@type": "CreativeWork",
          "position": 2,
          "name": "Sonic Studios Tech Pack",
          "description": "Complete tech pack with screen printed shirts, embroidered caps and bags",
          "datePublished": "2022-07"
        },
        {
          "@type": "CreativeWork",
          "position": 3,
          "name": "12 Labours Crossfit Apparel",
          "description": "Performance athletic wear for CrossFit event with specialized fabric printing",
          "datePublished": "2022-04"
        }
      ]
    }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
};

export default TeeVisionHomepageSchema;