'use client';

import React from 'react';

export default function InteractiveComponentShow() {
  return (
    <>
      {/* Shared Components */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-300">
          Shared Interactive Components
        </h2>

        <div className="space-y-8">
          {/* Search Input */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-4">Search Input</h3>
            <p className="text-gray-600 text-sm mb-4">Used in navigation and filtering</p>
            <p className="text-sm text-gray-500">
              (Client component - displays search field with icon)
            </p>
          </div>

          {/* Pagination */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-4">Pagination</h3>
            <p className="text-gray-600 text-sm mb-4">
              For product listings, blog, etc.
            </p>
            <p className="text-sm text-gray-500">
              (Client component - shows page numbers and items-per-page selector)
            </p>
          </div>

          {/* Loading Modal */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-4">Loading Modal</h3>
            <p className="text-gray-600 text-sm mb-4">
              Displays during async operations
            </p>
            <p className="text-sm text-gray-500">
              (Client component - shows spinner overlay with customizable title/message)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
