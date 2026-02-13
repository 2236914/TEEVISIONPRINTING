import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminStyles from '@/components/admin/styles/AdminStyles/AdminStyles';

// ADD THIS LINE
export const dynamic = 'force-dynamic';

const page = () => {
  return (
    <div className="bg-background5">
      <div>
        <AdminNavigation page="styles" />
        <AdminStyles />
      </div>
    </div>
  );
};

export default page;