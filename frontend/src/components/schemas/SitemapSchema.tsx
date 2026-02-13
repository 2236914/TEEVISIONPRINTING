const SitemapSchema = () => {
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
    "name": "Site Map",
    "description": "Complete sitemap of Tee Vision Printing website showing all product categories, services, and information pages",
    "url": "https://www.teevisionprinting.com/sitemap",
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
        "name": "Site Map",
        "item": "https://www.teevisionprinting.com/sitemap"
      }
    ]
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Product Categories Navigation",
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "T-Shirts",
        "url": "https://www.teevisionprinting.com/products/category/t-shirts"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Sweatshirts & Hoodies",
        "url": "https://www.teevisionprinting.com/products/category/sweatshirts-hoodies"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Ladies",
        "url": "https://www.teevisionprinting.com/products/category/ladies"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Youth & Toddlers",
        "url": "https://www.teevisionprinting.com/products/category/youth-toddlers"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Tote Bags & More",
        "url": "https://www.teevisionprinting.com/products/category/tote-bags-more"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Polos",
        "url": "https://www.teevisionprinting.com/products/category/polos"
      }
    ]
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Tee Vision Printing Services",
    "description": "Custom printing services offered by Tee Vision Printing",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Screen Printing",
          "url": "https://www.teevisionprinting.com/services/screen-printing",
          "description": "Professional screen printing for bulk orders with vibrant, durable results"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Embroidery",
          "url": "https://www.teevisionprinting.com/services/embroidery",
          "description": "High-quality embroidery services for a professional, textured finish"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Direct to Garment Printing",
          "url": "https://www.teevisionprinting.com/services/direct-to-garment-printing",
          "description": "DTG printing for detailed, full-color designs on demand"
        }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
    </>
  );
};

export default SitemapSchema;