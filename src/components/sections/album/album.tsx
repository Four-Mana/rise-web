import Link from 'next/link';
import React from 'react';
import { FaBandcamp, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa6';
import { SiSpotify } from 'react-icons/si';
import breathingAgain from './assets/breathingAgain.png';
import Image from 'next/image';
import classNames from 'classnames';
import { ReactNode } from 'react';

export type variant = 'black' | 'transparent';
export type AlbumProps = {
  bgVariant?: variant;
  withoutBar?: boolean;
};

export const Album = ({ bgVariant = "transparent", withoutBar }: AlbumProps) => {
  const sectionStyles = classNames("w-full px-8", {
    ['bg-black']: bgVariant === 'black',
    ['bg-transparent']: bgVariant === 'transparent',
  });

  return (
    <section className={sectionStyles}>
      <div className='mx-auto grid md:grid-cols-2 max-w-5xl gap-y-6 md:gap-y-0 gap-x-6 py-20'>
        <div className="mx-auto w-5/6 aspect-square bg-black">
          <Image
            src={breathingAgain}
            alt="Breathing again album"
            placeholder='blur'
          />
        </div>
        <div className='flex flex-col gap-3 '>
          <h2 className='font-semibold tracking-tighter text-white/80'>
            Nuevo álbum - <span className='text-primary-400 tracking-wider font-black'>Ya disponible</span>
          </h2>
          <h1 className='tracking-tight font-light text-4xl text-white'>Breathing again</h1>
          <p className='text-sm font-light tracking-wide leading-6'>
            Una declaración de intenciones. Un sonido renovado. <span className='font-semibold text-primary-400'>RISE</span> está de vuelta.
            Más rabiosos, más furiosos y desafiantes que <span className='font-semibold text-primary-400'>NUNCA</span>.
          </p>
          {!withoutBar && <MusicBar />}
        </div>
      </div>
    </section>
  );
};

export type MusicBarProps = {
  header?: ReactNode
}


export const MusicBar = ({ header }: MusicBarProps) => {
  return (
    <div className='mt-12 grid md:gap-6 gap-2'>
      {header &&
        <h1 className='tracking-wide font-light text-2xl text-center text-white'>
          {header}
        </h1>
      }
      <div className='flex flex-wrap gap-6 w-full py-4 bg-white/30 justify-center items-center rounded-full'>
        <Link href="https://risemetalband.bandcamp.com/music" className="text-white hover:text-yellow-500 transition-colors">
          <FaBandcamp size={24} />
        </Link>
        <Link href="https://instagram.com/rise_metalband/" className="text-white hover:text-yellow-500 transition-colors">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://open.spotify.com/artist/5AdHsX8ljUSI35pVTjdWa8?si=5vy8NIZgRJOdw6-Vg_Gpdg" className="text-white hover:text-yellow-500 transition-colors">
          <SiSpotify size={52} />
        </Link>
        <Link href="https://www.youtube.com/@risebandoffical" className="text-white hover:text-yellow-500 transition-colors">
          <FaYoutube size={24} />
        </Link>
        <Link href="https://www.tiktok.com/@risebandofficial" className="text-white hover:text-yellow-500 transition-colors">
          <FaTiktok size={24} />
        </Link>
      </div>
    </div>
  );
};
