const ProductsPageSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tee Vision Printing",
    "url": "https://www.teevisionprinting.com",
    "logo": "https://www.teevisionprinting.com/main/logo.png",
    "description": "Your trusted partner for high-quality, custom screen printing. We specialize in bulk orders with fast turnaround, competitive pricing, and exceptional customer service.",
    "telephone": "+1-267-538-5331",
    "email": "info@teevisionprinting.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-267-538-5331",
      "contactType": "Customer Service",
      "email": "info@teevisionprinting.com",
      "availableLanguage": "English"
    },
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
        "name": "Products",
        "item": "https://www.teevisionprinting.com/products"
      }
    ]
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Browse Our Products",
    "description": "Discover high-quality apparel and accessories perfect for custom screen printing. Whether you need t-shirts, hoodies, tote bags, or hats for your team, event, or business—we deliver exceptional prints with fast turnaround times.",
    "url": "https://www.teevisionprinting.com/products",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "T-Shirts",
          "description": "Custom Printed T-Shirts for Every Occasion",
          "url": "https://www.teevisionprinting.com/products/category/t-shirts"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sweatshirts & Hoodies",
          "description": "Custom Sweatshirts & Hoodies",
          "url": "https://www.teevisionprinting.com/products/category/sweatshirts-hoodies"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Ladies",
          "description": "Custom Women's T-Shirts & Apparel",
          "url": "https://www.teevisionprinting.com/products/category/ladies"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Youth & Toddlers",
          "description": "Custom Youth & Toddler Shirts",
          "url": "https://www.teevisionprinting.com/products/category/youth-toddlers"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Tote Bags & More",
          "description": "Custom Tote Bags & Accessories",
          "url": "https://www.teevisionprinting.com/products/category/tote-bags-more"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Polos",
          "description": "Custom Polo Shirts",
          "url": "https://www.teevisionprinting.com/products/category/polos"
        }
      ]
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Shop Custom T-Shirts, Hoodies & Apparel by Category",
    "description": "Discover high-quality apparel and accessories perfect for custom screen printing. Whether you need t-shirts, hoodies, tote bags, or hats for your team, event, or business.",
    "url": "https://www.teevisionprinting.com/products",
    "mainEntityOfPage": "https://www.teevisionprinting.com/products",
    "publisher": {
      "@type": "Organization",
      "name": "Tee Vision Printing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.teevisionprinting.com/main/logo.png"
      }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
};

export default ProductsPageSchema;