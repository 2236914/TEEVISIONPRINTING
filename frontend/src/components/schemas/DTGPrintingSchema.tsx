const DTGPrintingSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/logo.png",
    "description": "Professional custom DTG (Direct-to-Garment) printing services for t-shirts, hoodies, and more in Philadelphia",
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom DTG Printing",
    "provider": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
    },
    "description": "Direct-to-Garment (DTG) printing service for detailed, full-color designs and photographic images on t-shirts, hoodies, and custom apparel with quick turnaround",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DTG Printing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Color DTG Printing",
            "description": "Unlimited colors and intricate detail for photographic quality prints"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Small Batch Printing",
            "description": "Perfect for short-run orders starting at 12 pieces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photo-Realistic Printing",
            "description": "High-resolution printing for complex designs and photographs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Apparel Printing",
            "description": "DTG printing on premium t-shirts, hoodies, and custom garments"
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
        "name": "DTG Printing",
        "item": "https://www.teevisionprinting.com/services/dtg-printing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is DTG printing best for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DTG is ideal for short-run, full-color designs and photographic images. It allows unlimited colors and intricate detail."
        }
      },
      {
        "@type": "Question",
        "name": "Is DTG printing better than screen printing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Screen printing is better for bulk orders with few colors. DTG is faster for complex, detailed designs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I print full-color photos with DTG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but white base layers may be added for visibility on darker fabrics."
        }
      },
      {
        "@type": "Question",
        "name": "Which fabrics are best for DTG printing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "100% cotton, light-colored blank shirts are best for absorption and clarity."
        }
      },
      {
        "@type": "Question",
        "name": "What's the minimum order quantity for DTG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DTG printing is perfect for small orders, starting at 12 pieces. It's preferred by many when launching a clothing brand."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "DTG Printing Process",
    "description": "Learn about the Direct-to-Garment (DTG) printing process at Tee Vision Printing",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose Product",
        "text": "Select the product to print on, choose colors and sizes, and determine print types and locations."
      },
      {
        "@type": "HowToStep",
        "name": "Upload Artwork",
        "text": "Upload artwork files with special instructions. Your artwork is checked for optimal quality and resolution, and your account representative will guide you through the approval process."
      },
      {
        "@type": "HowToStep",
        "name": "Print Application",
        "text": "The DTG printer sprays water-based ink directly onto the fabric, just like printing on paper. The ink soaks into the cloth, making the print soft, detailed, and long-lasting."
      },
      {
        "@type": "HowToStep",
        "name": "Final Product",
        "text": "Receive vibrant, durable prints with photographic quality perfect for intricate, full-color designs."
      }
    ]
  };

  const printingSpecsSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "DTG Print Maximum Dimensions",
    "description": "Technical specifications for DTG printing dimensions on various garments",
    "articleBody": "DTG print dimensions apply to front and back torso area of tees, longsleeves, crewneck sweaters, and hoodies. Front/back - up to 16x20 inches. To keep graphics above a hoodie pocket, max height is approximately 10.5 inches."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(printingSpecsSchema) }}
      />
    </>
  );
};

export default DTGPrintingSchema;