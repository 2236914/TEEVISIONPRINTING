import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminDashboard from '@/components/admin/dashboard/AdminDashboard/AdminDashboard';

const page = () => {
  return (
    <main className="bg-background5">
      <AdminNavigation page="dashboard" />
      <AdminDashboard />
    </main>
  );
};

export default page;
