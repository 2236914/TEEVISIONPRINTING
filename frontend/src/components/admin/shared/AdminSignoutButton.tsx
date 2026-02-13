'use client';
import React from 'react';

import { handleSignOut } from '@/app/amplify/cognito-actions';

import Logout from '@/utilities/SVGs/Logout';

const AdminSignoutButton = () => {
  return (
    <form
      className="flex gap-2 items-center p-4 hover:bg-background5 cursor-pointer"
      action={handleSignOut}
    >
      <Logout width={26} height={26} />
      <button className="text-lg font-bold" type="submit">
        Signout
      </button>
    </form>
  );
};

export default AdminSignoutButton;
