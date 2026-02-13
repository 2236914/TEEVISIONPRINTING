import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminColors from '@/components/admin/colors/AdminColors/AdminColors';

const page = () => {
  return (
    <main className="bg-background5">
      <AdminNavigation page="colors" />
      <AdminColors />
    </main>
  );
};

export default page;
