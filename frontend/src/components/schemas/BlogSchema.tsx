const BlogSchema = () => {
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
    }
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Tee Vision Tribune",
    "url": "https://www.teevisionprinting.com/blog",
    "description": "Stay informed and inspired with the latest screen printing trends and techniques at the Tee Vision Tribune. Our blog is dedicated to providing you with valuable insights and expert advice on all things screen printing.",
    "publisher": {
      "@type": "Organization",
      "name": "Tee Vision Printing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.teevisionprinting.com/logo.png"
      }
    },
    "inLanguage": "en-US"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.teevisionprinting.com/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "The Ultimate Guide to Custom Apparel | TeeVision Blog",
    "description": "Get expert tips and ideas for your custom apparel project. The TeeVision blog covers design, printing techniques, and the latest clothing trends.",
    "url": "https://www.teevisionprinting.com/blog",
    "about": {
      "@type": "Thing",
      "name": "Screen Printing and Custom Apparel"
    },
    "specialty": [
      "Screen Printing Trends",
      "Printing Techniques",
      "Custom Apparel Design",
      "Industry News",
      "Creative Projects"
    ]
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
        "name": "Blog",
        "item": "https://www.teevisionprinting.com/blog"
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Tee Vision Tribune Blog Posts",
    "description": "Latest articles and insights on screen printing, custom apparel, and printing techniques",
    "url": "https://www.teevisionprinting.com/blog"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
};

export default BlogSchema;