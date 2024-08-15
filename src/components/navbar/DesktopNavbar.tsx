'use client'
import { useHasPastHeight } from "@/hooks";
import Link from "next/link"

export const DesktopNavbar = () => {
    const isPastNavbar = useHasPastHeight(80);

    return (
        <nav className={`w-full px-6 py-2 z-40 fixed top-0 transition-all duration-200 ease-out ${isPastNavbar ? 'bg-black shadow-lg' : ' bg-transparent'}`}>

            <div className="flex justify-between items-center">
                <div>
                    <Link href='/'>
                        🐯
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Link href='/discografia'>
                        Discografia
                    </Link>
                </div>
            </div>
        </nav>
    )
}
