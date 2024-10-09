'use client';
import { useHasPastHeight } from '@/hooks';
import Link from 'next/link';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaBandcamp,
} from 'react-icons/fa6';
import { SiYoutubemusic } from 'react-icons/si';
export const DesktopNavbar = () => {
  const isPastNavbar = useHasPastHeight(40);

  return (
    <nav
      data-testid="desktop-navbar"
      className={`fixed top-0 z-40 w-full px-6 py-2 transition-all duration-200 ease-out ${isPastNavbar ? 'bg-black shadow-lg' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">🐯</Link>
        </div>

        <div className="ml-auto mr-2 flex gap-4 text-xl">
          <Link
            href="/banda"
            className="text-sm font-semibold leading-tight tracking-tighter text-white hover:text-yellow-500"
          >
            La Banda
          </Link>
          <Link
            href="/discografia"
            className="text-sm font-semibold leading-tight tracking-tighter text-white hover:text-yellow-500"
          >
            Discografía
          </Link>
          <Link
            href="/tour"
            className="text-sm font-semibold leading-tight tracking-tighter text-white hover:text-yellow-500"
          >
            Tour
          </Link>
          <Link
            href="/tienda"
            className="text-sm font-semibold leading-tight tracking-tighter text-white hover:text-yellow-500"
          >
            Tienda
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-semibold leading-tight tracking-tighter text-white hover:text-yellow-500"
          >
            Contacto
          </Link>
        </div>

        <div className="flex gap-3">
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
            href="https://www.youtube.com/@risebandofficial?si=b2WRmfNVw6B1kK8U"
            className="text-white hover:text-yellow-500"
          >
            <FaYoutube size={24} />
          </Link>

          <Link
            href="https://risemetalband.bandcamp.com/album/derange#"
            className="text-white hover:text-yellow-500"
          >
            <FaBandcamp size={24} />
          </Link>
          <Link
            href="https://music.youtube.com/channel/UCFl15L655YrI3f4VvB5HLBg?si=aD6q0c5LFQrMjjmn"
            className="text-white hover:text-yellow-500"
          >
            <SiYoutubemusic size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
