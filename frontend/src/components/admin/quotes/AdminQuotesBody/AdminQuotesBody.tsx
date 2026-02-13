import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ViewQuoteModal from '@/components/admin/quotes/AdminQuotesBody/components/ViewQuoteModal';
import DocumentIcon from '@/utilities/SVGs/Document';
import type { Quote } from '@/utilities/types/shared.types';

type PropTypes = {
  quotes: Array<Quote>;
};

const AdminQuotesBody: React.FC<PropTypes> = ({ quotes }) => {
  const isImage = (url: string) => {
    return (
      url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png')
    );
  };

  return (
    <div className="ml-64 p-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold bg-background4 p-8 rounded-lg">
          View all quotes
        </h1>
        <div className="bg-white p-4 rounded-lg">
          <table className="table">
            <thead>
              <tr>
                <th>Artwork</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id}>
                  <td>
                    {isImage(quote.artworkImageUrl) ? (
                      <Image
                        src={quote.artworkImageUrl}
                        width={200}
                        height={200}
                        alt="Artwork"
                      />
                    ) : (
                      <div className="w-fit h-fit">
                        <Link
                          href={quote.artworkImageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <DocumentIcon width={30} height={30} />
                          <p>Download here</p>
                        </Link>
                      </div>
                    )}
                  </td>
                  <td>{quote.fullName}</td>
                  <td>{quote.email}</td>
                  <td>{quote.phoneNumber}</td>
                  <td>
                    <div className="flex items-center justify-center gap-4 pr-12 w-fit">
                      <ViewQuoteModal quote={quote} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminQuotesBody;