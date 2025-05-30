'use client';
import { useIsHydrated } from '@/hooks';
import { useHasPastHeight } from '@/hooks/useHasPastHeight';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { MdMenu } from 'react-icons/md';
import { Logo } from '../logo';

export const MobileNavbar = () => {
  const isHydrated = useIsHydrated();
  const isPastNavbar = useHasPastHeight(80);

  return (
    <nav
      data-testid="mobile-navbar"
      className={`fixed top-0 z-40 w-full px-6 py-2 transition-all duration-200 ease-out ${isPastNavbar ? 'bg-black shadow-lg' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <Menu>
          <MenuButton disabled={!isHydrated}>
            <MdMenu size={24} />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="z-50 flex origin-top-left flex-col gap-2 rounded-md bg-[#5e5e60] px-6 py-3 text-white font-light transition duration-100 ease-out"
          >
            <MenuItem>
              <Link href="/">Menú</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/band">La Banda</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/shop">Tienda</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/tour">Tour</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/contact">Contacto</Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
};
