const AboutUsSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/logo.png",
    "image": "https://www.teevisionprinting.com/icon.png",
    "description": "With over a decade of experience in the screen printing industry, we've mastered the art of screenprinting. We've worked with huge businesses, brands, and individuals to create exactly what they wanted and deliver it on time.",
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
    "foundingDate": "2014",
    "founder": {
      "@type": "Person",
      "name": "Sae Choi"
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Sae Choi",
        "jobTitle": "Founder",
        "image": "https://www.teevisionprinting.com/about-us/sae.jpeg"
      },
      {
        "@type": "Person",
        "name": "Sean Park",
        "jobTitle": "Operations and Sales",
        "image": "https://www.teevisionprinting.com/about-us/sean.jpeg"
      },
      {
        "@type": "Person",
        "name": "Jose Olmedo",
        "jobTitle": "Print Production",
        "image": "https://www.teevisionprinting.com/about-us/jose.jpeg"
      },
      {
        "@type": "Person",
        "name": "Darko Voislavovic",
        "jobTitle": "Operations and Designer",
        "image": "https://www.teevisionprinting.com/about-us/darko.jpeg"
      }
    ],
    "priceRange": "$$"
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Tee Vision Printing",
    "url": "https://www.teevisionprinting.com/about-us",
    "description": "Learn about Tee Vision Printing's decade of experience in screen printing industry, our team, and our commitment to quality service and timely delivery.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Tee Vision Printing"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tee Vision Printing",
    "image": [
      "https://www.teevisionprinting.com/icon.png",
      "https://www.teevisionprinting.com/about-us/bg.png"
    ],
    "description": "Professional screen printing service with over a decade of experience, specializing in custom t-shirts, apparel printing, and bulk orders for businesses, brands, and individuals.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "addressCountry": "US"
    },
    "url": "https://www.teevisionprinting.com",
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
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
        "name": "About Us",
        "item": "https://www.teevisionprinting.com/about-us"
      }
    ]
  };

  const videoObjectSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Tee Vision Printing - Our Vision",
    "description": "Learn about Tee Vision Printing's commitment to quality service and timely delivery for businesses, corporations, schools, brands, and influencers.",
    "contentUrl": "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/about-us/Video.mp4",
    "thumbnailUrl": "https://www.teevisionprinting.com/about-us/bg.png",
    "uploadDate": "2024-01-01"
  };

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Tee Vision Printing Team",
    "description": "Meet the team behind Tee Vision Printing's success",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Person",
          "name": "Sae Choi",
          "jobTitle": "Founder",
          "image": "https://www.teevisionprinting.com/about-us/sae.jpeg",
          "worksFor": {
            "@type": "Organization",
            "name": "Tee Vision Printing"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Person",
          "name": "Sean Park",
          "jobTitle": "Operations and Sales",
          "image": "https://www.teevisionprinting.com/about-us/sean.jpeg",
          "worksFor": {
            "@type": "Organization",
            "name": "Tee Vision Printing"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Person",
          "name": "Jose Olmedo",
          "jobTitle": "Print Production",
          "image": "https://www.teevisionprinting.com/about-us/jose.jpeg",
          "worksFor": {
            "@type": "Organization",
            "name": "Tee Vision Printing"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Person",
          "name": "Darko Voislavovic",
          "jobTitle": "Operations and Designer",
          "image": "https://www.teevisionprinting.com/about-us/darko.jpeg",
          "worksFor": {
            "@type": "Organization",
            "name": "Tee Vision Printing"
          }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
    </>
  );
};

export default AboutUsSchema;