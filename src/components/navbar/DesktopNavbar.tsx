'use client';
import { useHasPastHeight } from '@/hooks';
import Link from 'next/link';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaBandcamp,
  FaTiktok
} from 'react-icons/fa6';
import { SiSpotify } from 'react-icons/si';
import { Logo } from '../logo';
export const DesktopNavbar = () => {
  const isPastNavbar = useHasPastHeight(40);

  return (
    <nav
      data-testid="desktop-navbar"
      className={`fixed top-0 z-40 w-full px-6 py-2 transition-all duration-200 ease-out ${isPastNavbar ? 'bg-black shadow-lg' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Logo size='lg' />
          </Link>
        </div>

        <div className="ml-auto mr-6 flex gap-4 text-xl">
          <Link
            href="/band"
            className="text-sm font-semibold leading-tight tracking-tighter text-white hover:text-yellow-500"
          >
            La Banda
          </Link>
          <Link
            href="/shop"
            className="text-sm font-semibold leading-tight tracking-tighter text-white hover:text-yellow-500"
          >
            Tienda
          </Link>
          <Link
            href="/tour"
            className="text-sm font-semibold leading-tight tracking-tighter text-white hover:text-yellow-500"
          >
            Tour
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-tight tracking-tighter text-white hover:text-yellow-500"
          >
            Contacto
          </Link>
        </div>

        <div className="flex gap-3">
          <Link
            href="https://open.spotify.com/artist/5AdHsX8ljUSI35pVTjdWa8?si=5vy8NIZgRJOdw6-Vg_Gpdg"
            className="text-white hover:text-yellow-500 transition-colors"
          >
            <SiSpotify size={22} />
          </Link>
          <Link
            href="https://es-es.facebook.com/RiseOrDieOfficial"
            className="text-white hover:text-yellow-500"
          >
            <FaFacebookF size={22} />
          </Link>

          <Link
            href="https://instagram.com/rise_metalband/"
            className="text-white hover:text-yellow-500"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://www.youtube.com/@risebandoffical"
            className="text-white hover:text-yellow-500"
          >
            <FaYoutube size={24} />
          </Link>
          <Link
            href="https://risemetalband.bandcamp.com/music"
            className="text-white hover:text-yellow-500"
          >
            <FaBandcamp size={24} />
          </Link>
          <Link
            href="https://www.tiktok.com/@risebandofficial"
            className="text-white hover:text-yellow-500"
          >
            <FaTiktok size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
