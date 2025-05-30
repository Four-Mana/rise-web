import React from 'react';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';

export const Navbar = () => {
  return (
    <>
      <div className="inset-x-0 top-0 md:hidden">
        <MobileNavbar />
      </div>
      <div className="inset-x-0 top-0 hidden md:block">
        <DesktopNavbar />
      </div>
    </>
  );
};
