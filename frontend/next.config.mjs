/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'teevision-bucket.s3.ap-southeast-2.amazonaws.com',
        pathname: '/public/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'private, no-cache, no-store, must-revalidate, max-age=0',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'private, no-cache, no-store, must-revalidate, max-age=0',
          },
        ],
      },
      {
        source: '/:path((?!admin|api).*)*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/products/category/long-sleeve',
        destination: '/products/category/long-sleeves',
        permanent: true,
      },
      {
        source: '/product/gildan-hammer%E2%84%A2-adult-t-shirt-h000',
        destination: '/products/view/gildan-hammer-adult-t-shirt-h000',
        permanent: true,
      },
      {
        source: '/product/independent-trading-co.---heavyweight-hooded-sweatshirt---ind4000',
        destination: '/products/view/independent-apparel-heavyweight-hooded-sweatshirt',
        permanent: true,
      },
      {
        source: '/product/gildan%C2%AE-heavy-blend%E2%84%A2--adult-hooded-sweatshirt-style',
        destination: '/products/view/gildan-heavy-blend-hooded-sweatshirt-g185',
        permanent: true,
      },
      {
        source: '/product/gildan-heavy-blend-adult-hooded-sweatshirt-style-g185',
        destination: '/products/view/gildan-heavy-blend-hooded-sweatshirt-g185',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/designer/settings',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/t-shirt-screen-printing-near-center-city-philadelphia-pa',
        destination: '/blog/custom-t-shirt-printing-near-me-center-city-philadelphia-pa',
        permanent: true,
      },
      {
        source: '/products/category',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/account/register',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bulk-custom-t-shirt-printing-center-city-philadelphia',
        destination: '/blog/custom-t-shirt-printing-near-me-center-city-philadelphia-pa',
        permanent: true,
      },
      {
        source: '/bulk-custom-t-shirt-printing-chinatown',
        destination: '/blog/bulk-custom-t-shirt-printing-chinatown-philadelphia',
        permanent: true,
      },
      {
        source: '/custom-t-shirt-printing-chinatown',
        destination: '/blog/bulk-custom-t-shirt-printing-chinatown-philadelphia',
        permanent: true,
      },
      {
        source: '/shopdetail/:id',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products/view/next-level-long-sleeve-n3601',
        destination: '/products/category/t-shirts/long-sleeve-t-shirt',
        permanent: true,
      },
            {
        source: '/products/view/hanes-beefy-t-long-sleeve-5186',
        destination: '/products/category/t-shirts/long-sleeve-t-shirt',
        permanent: true,
      },
            {
        source: '/products/view/gildan-ultra-cotton-long-sleeve-g2400',
        destination: '/products/category/t-shirts/long-sleeve-t-shirt',
        permanent: true,
      },
            {
        source: '/products/view/comfort-colors-long-sleeve-c6014',
        destination: '/products/category/t-shirts/long-sleeve-t-shirt',
        permanent: true,
      },
            {
        source: '/custom-polo-shirts/port-authority-performance-polo.webp',
        destination: '/products/category/polos/polo',
        permanent: true,
      },
            {
        source: '/custom-long-sleeve/industries/clothing-brands.webp',
        destination: '/products/category/t-shirts/long-sleeve-t-shirt',
        permanent: true,
      },
            {
        source: '/custom-polo-shirts/gildan-dryblend-polo.webp',
        destination: '/products/category/polos/polo',
        permanent: true,
      },
            {
        source: '/custom-long-sleeve/products/hanes-beefy-t.webp',
        destination: '/products/category/t-shirts/long-sleeve-t-shirt',
        permanent: true,
      },
            {
        source: '/custom-long-sleeve/products/next-level-cotton.webp',
        destination: '/products/category/t-shirts/long-sleeve-t-shirt',
        permanent: true,
      },
            {
        source: '/services/dtg',
        destination: '/services/direct-to-garment-printing',
        permanent: true,
      },
            {
        source: '/products/nike-dri-fit-polo-363807',
        destination: '/products/category/polos/polo',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;