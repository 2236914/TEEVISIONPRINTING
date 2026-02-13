const PastProjectsSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/logo.png",
    "description": "Professional custom screen printing services for t-shirts, sweatshirts, hoodies, and more in Philadelphia",
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
      "availableLanguage": "English"
    }
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Past Projects - Tee Vision Printing Portfolio",
    "description": "Showroom of what we have done - browse our portfolio of custom screen printing projects including t-shirts, hoodies, and apparel",
    "url": "https://www.teevisionprinting.com/past-projects",
    "breadcrumb": {
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
          "name": "Past Projects",
          "item": "https://www.teevisionprinting.com/past-projects"
        }
      ]
    }
  };

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Tee Vision Printing Portfolio Gallery",
    "description": "Gallery showcasing our custom screen printing projects and completed work",
    "image": [
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject1.jpg",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject2.jpg",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject3.jpg",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject4.jpg",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject5.jpg",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject6.jpg",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject7.jpg",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject8.png",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject9.png",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject10.png",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject11.png",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject12.png",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject13.jpg",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject14.png",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject15.png",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject16.png",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject17.jpg",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject18.jpg",
      "https://teevision-bucket.s3.ap-southeast-2.amazonaws.com/public/album/assets/past-projects/pastProject19.jpg"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tee Vision Printing",
    "image": "https://www.teevisionprinting.com/logo.png",
    "description": "Custom screen printing shop in Philadelphia offering professional apparel printing services",
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
    "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.869911668919!2d-75.11162422328594!3d40.011353271507765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7cabf19bf4b%3A0x62d520a9072b7781!2sTee%20Vision%20Printing!5e0!3m2!1sen!2sph!4v1737077263809!5m2!1sen!2sph",
    "priceRange": "$$"
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
        "name": "Past Projects",
        "item": "https://www.teevisionprinting.com/past-projects"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default PastProjectsSchema;