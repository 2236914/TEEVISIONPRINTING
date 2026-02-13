import React from 'react';

import AdminNavigation from '@/components/admin/AdminNavigation/AdminNavigation';
import AdminFits from '@/components/admin/fits/AdminFits/AdminFits';
import {
  addFitOnServer,
  editFitOnServer,
} from '@/server-actions/fit-actions';
import { fetchFits } from '@/utilities/fetch/fit';

// Tells Next.js to render dynamically
export const dynamic = 'force-dynamic';

const page = async () => {
  // Fetch fits with error handling
  let fits = [];
  
  try {
    fits = await fetchFits();
    // Ensure it's an array
    fits = Array.isArray(fits) ? fits : [];
  } catch (error) {
    console.error('Error fetching fits:', error);
    fits = [];
  }

  return (
    <main className="bg-background5">
      <AdminNavigation page="fits" />
      <AdminFits
        fits={fits}
        addFitOnServer={addFitOnServer}
        editFitOnServer={editFitOnServer}
      />
    </main>
  );
};

export default page;