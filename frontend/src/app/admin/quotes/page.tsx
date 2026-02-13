import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminQuotesBody from '@/components/admin/quotes/AdminQuotesBody/AdminQuotesBody';
import { getQuotesOnServer } from '@/server-actions/quote-action';

const page = async () => {
  const quotes = await getQuotesOnServer();
  return (
    <div className="bg-background5">
      <div>
        <AdminNavigation page="quotes" />
        <AdminQuotesBody quotes={quotes} />
      </div>
    </div>
  );
};

export default page;
