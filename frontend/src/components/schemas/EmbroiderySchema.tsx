const EmbroiderySchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/logo.png",
    "description": "Professional custom embroidery services for t-shirts, sweatshirts, polos, caps, and uniforms in Philadelphia",
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
    "serviceType": "Custom Embroidery",
    "provider": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
    },
    "description": "Custom embroidery service for t-shirts, polos, caps, uniforms, and work apparel with professional thread stitching and quick turnaround",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Embroidery Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flat Stitch Embroidery",
            "description": "Most popular embroidery technique using polyester thread for detailed designs of any size"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3D Puff Embroidery",
            "description": "Foam underneath stitching creates dimensional 3D look, perfect for sports logos and caps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flat Stitch + 3D Puff Combination",
            "description": "Combined techniques adding depth and dimension to custom designs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Applique Twill",
            "description": "Tackle twill with cut shapes and embroidered edges for clean, professional look"
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
        "name": "Custom Embroidery",
        "item": "https://www.teevisionprinting.com/services/embroidery"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the difference between embroidery and printing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Embroidery uses thread stitched into the fabric, offering a more upscale look and longer durability than printed methods like screen printing."
        }
      },
      {
        "@type": "Question",
        "name": "Is embroidery good for t shirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, especially for logos, initials, and simple designs. It's excellent for events, uniforms, and custom gifts."
        }
      },
      {
        "@type": "Question",
        "name": "Can you embroider small details?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Learn what's possible in our embroidery stitch guide."
        }
      },
      {
        "@type": "Question",
        "name": "What types of shirts work best for embroidery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mid-weight cotton and blends are ideal. For options, see our blank t shirt collection."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer embroidery for jackets or sweatshirts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Refer to our sweater vs sweatshirt post to select the best garment."
        }
      },
      {
        "@type": "Question",
        "name": "What's the minimum order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible quantities, perfect for individuals or businesses. Contact us for bulk pricing or one-off orders."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Custom Embroidery Process",
    "description": "Learn about the embroidery techniques and methods used at Tee Vision Printing",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Flat Stitch Embroidery",
        "text": "The most popular embroidery option using polyester thread. This technique can be applied for most design types, whether big or small, simple or detailed."
      },
      {
        "@type": "HowToStep",
        "name": "3D Puff Embroidery",
        "text": "Place foam underneath the stitching to create a 3D look. Most commonly used for sports logos on caps, helping graphics stand out on garments."
      },
      {
        "@type": "HowToStep",
        "name": "Combination Technique",
        "text": "Combine flat stitch and 3D puff techniques to add depth and dimension to your designs."
      },
      {
        "@type": "HowToStep",
        "name": "Applique Twill",
        "text": "Use cut out shapes of twill material with embroidery stitching around the edges for a clean look with large areas of solid color."
      }
    ]
  };

  const specsSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "Embroidery Maximum Dimensions",
    "description": "Technical specifications for embroidery dimensions on various garments",
    "articleBody": "Front/back embroidery dimensions up to 16x20 inches for tees, longsleeves, crewneck sweaters, and hoodies. To keep graphics above a hoodie pocket, maximum height is approximately 10.5 inches."
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Custom Embroidery - Tee Vision Printing",
    "description": "Professional custom embroidery services in Philadelphia. Hand digitized designs with ultimate stitch quality for uniforms, events, and high-end merchandise.",
    "url": "https://www.teevisionprinting.com/services/embroidery",
    "mainEntity": {
      "@type": "Service",
      "name": "Custom Embroidery",
      "provider": {
        "@type": "Organization",
        "name": "Tee Vision Printing"
      }
    },
    "specialty": [
      "Flat Stitch Embroidery",
      "3D Puff Embroidery",
      "Applique Twill",
      "Corporate Uniforms",
      "Sports Team Apparel",
      "Event Merchandise"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
};

export default EmbroiderySchema;