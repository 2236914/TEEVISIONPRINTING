import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background1 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-primaryT mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn btn-primary bg-primaryT text-white px-6 py-2 rounded-lg shadow hover:bg-secondaryT transition border-0"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
