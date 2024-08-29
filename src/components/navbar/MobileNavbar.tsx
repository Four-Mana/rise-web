'use client'
import { useIsHydrated } from '@/hooks'
import { useHasPastHeight } from '@/hooks/useHasPastHeight';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import React from 'react'
import { MdMenu } from 'react-icons/md';

export const MobileNavbar = () => {
    const isHydrated = useIsHydrated();
    const isPastNavbar = useHasPastHeight(80);

    return (
        <nav className={`w-full px-6 py-2 z-40 fixed top-0 transition-all duration-200 ease-out ${isPastNavbar ? 'bg-black shadow-lg' : ' bg-transparent'}`} data-testid='mobile-navbar'>
            <div className="flex justify-between items-center">
                <div>
                    <Link href='/'>
                        🐯
                    </Link>
                </div>
                <Menu>
                    <MenuButton disabled={!isHydrated} >
                        <MdMenu size={24} />
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="flex flex-col gap-2 bg-white transition duration-100 ease-out origin-top-left text-black rounded-md px-6 py-3 z-50"
                    >
                        <MenuItem>
                            <Link href='/'>Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href='/about-us'>About us</Link>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </nav >
    )
}
