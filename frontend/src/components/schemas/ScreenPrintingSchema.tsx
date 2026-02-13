const ScreenPrintingSchema = () => {
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Screen Printing",
    "provider": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
    },
    "description": "Custom screen printing service for t-shirts, hoodies, sweatshirts, tote bags, and uniforms with premium inks and quick turnaround",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Screen Printing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plastisol Ink Printing",
            "description": "Vibrant, durable printing with raised texture perfect for logos and graphics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Metallic and UV Ink Printing",
            "description": "Premium metallic finish and glow-in-the-dark effects for unique designs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Puff Print",
            "description": "3D raised textured printing for dimensional designs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Simulated Process Printing",
            "description": "Full-color photorealistic printing with detailed gradients"
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
        "name": "Screen Printing",
        "item": "https://www.teevisionprinting.com/services/screen-printing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is screen printing best for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bulk orders with simple, bold designs such as logos or school names are ideal for screen printing."
        }
      },
      {
        "@type": "Question",
        "name": "Is screen printing better than DTG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For high-volume runs, screen printing is more cost-effective and durable."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use multiple ink colors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, use spot color printing to separate and layer colors for precise results."
        }
      },
      {
        "@type": "Question",
        "name": "Which fabrics are best for screen printing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend cotton or blends for the best screen printing results."
        }
      },
      {
        "@type": "Question",
        "name": "Can I print sweatshirts or hoodies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, screen printing works excellently on sweatshirts and hoodies."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Screen Printing Process",
    "description": "Learn about the screen printing technique and methods used at Tee Vision Printing",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Plastisol Ink Application",
        "text": "Apply vibrant, durable plastisol ink that sits on top of fabric creating a raised texture, perfect for logos and graphic designs."
      },
      {
        "@type": "HowToStep",
        "name": "Specialty Inks",
        "text": "Use metallic inks for shiny finishes or UV ink for glow-in-the-dark effects to create unique, eye-catching designs."
      },
      {
        "@type": "HowToStep",
        "name": "Puff Print Technique",
        "text": "Add dimensional 3D texture with special ink that expands during heat curing to create raised, textured designs."
      },
      {
        "@type": "HowToStep",
        "name": "Simulated Process",
        "text": "Blend multiple colors and shades to create photorealistic prints with detailed gradients and full-color images."
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
    </>
  );
};

export default ScreenPrintingSchema;