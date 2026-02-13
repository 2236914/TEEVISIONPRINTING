const ContactSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/logo.png",
    "description": "Get cheap custom shirts without sacrificing quality. TeeVision offers fast, affordable printing with volume discounts—perfect for events, teams, or promotions.",
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
    "priceRange": "$$"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tee Vision Printing",
    "image": "https://www.teevisionprinting.com/logo.png",
    "description": "Cheap custom shirts with quality printing and low prices. Fast, affordable printing with volume discounts for events, teams, and promotions.",
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
    "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.869911668919!2d-75.11162422328594!3d40.011353271507765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7cabf19bf4b%3A0x62d520a9072b7781!2sTee%20Vision%20Printing!5e0!3m2!1sen!2sph!4v1737077263809!5m2!1sen!2sph",
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
    ]
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact TeeVision Printing",
    "url": "https://www.teevisionprinting.com/contact",
    "description": "Get in touch with TeeVision Printing for cheap custom shirts with quality printing. Contact us for volume discounts and fast turnaround times.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
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
        "name": "Contact",
        "item": "https://www.teevisionprinting.com/contact"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom T-Shirt Printing",
    "provider": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
    },
    "description": "Affordable custom shirt printing services with volume discounts. Perfect for events, teams, or promotions with fast turnaround times.",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "USD",
        "price": "Variable based on quantity"
      }
    }
  };

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Tee Vision Printing Location",
    "description": "Visit our Philadelphia location for custom shirt printing services",
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
    "hasMap": "https://goo.gl/maps/your-google-maps-link"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
    </>
  );
};

export default ContactSchema;