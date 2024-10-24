import Link from 'next/link'
import React from 'react'
import { FaBandcamp, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { SiSpotify, SiYoutubemusic } from 'react-icons/si'
import breathingAgain from './assets/breathingAgain.png'
import Image from 'next/image'
import classNames from 'classnames'

export type variant = 'black' | 'transparent';
export type AlbumProps = {
  bgVariant?: variant,
  withoutBar?: boolean
}

export const Album = ({ bgVariant = "transparent", withoutBar }: AlbumProps) => {

  const sectionStyles = classNames("w-full px-8", {
    ['bg-black']: bgVariant === 'black',
    ['bg-transparent']: bgVariant === 'transparent'
  })

  return (
    <section className={sectionStyles} >
      <div className='mx-auto grid md:grid-cols-2 max-w-5xl max-h-screen gap-x-6 py-20'>
        <div className="mx-auto w-5/6 aspect-square bg-black">
          <Image
            src={breathingAgain}
            alt="Breating again album"
          />
        </div>
        <div className='flex flex-col gap-3 '>
          <h2 className='font-semibold tracking-tighter text-white/80'>Nuevo album - <span className='text-secondary tracking-wider font-black'>Ya disponible</span></h2>
          <h1 className='tracking-tight font-light text-4xl text-white'>Breathing again</h1>
          <p className='text-sm font-light tracking-wide leading-6'>
            Una declaración de intenciones. Un sonido renovado. <span className='font-semibold text-primary-400'>RISE</span> esta de vuelta.
            Más rabiosos, más furiosos y desafiantes que <span className='font-semibold text-primary-400'>NUNCA</span>
          </p>
          {!withoutBar &&
            <MusicBar />
          }
        </div>
      </div>
    </section>
  )
}

export const MusicBar = () => {
  return (
    <div className='mt-12 grid gap-6'>
      <h1 className='tracking-wide font-light text-2xl text-center text-white'>Ready for the new <span className='text-primary-400'>era</span>?</h1>
      <div className='flex flex-wrap gap-6 md:gap-10 w-full py-4 px-10 bg-white/30 justify-center items-center rounded-full'>
        <Link
          href="https://risemetalband.bandcamp.com/album/derange#"
          className="text-white hover:text-yellow-500 transition-colors"
        >
          <FaBandcamp size={24} />
        </Link>
        <Link
          href="https://instagram.com/rise_metalband/"
          className="text-white hover:text-yellow-500 transition-colors"
        >
          <FaInstagram size={24} />
        </Link>
        <Link
          href="https://open.spotify.com/artist/5AdHsX8ljUSI35pVTjdWa8?si=5vy8NIZgRJOdw6-Vg_Gpdg"
          className="text-white hover:text-yellow-500 transition-colors"
        >
          <SiSpotify size={52} />
        </Link>
        <Link
          href="https://www.youtube.com/@risebandofficial?si=b2WRmfNVw6B1kK8U"
          className="text-white hover:text-yellow-500 transition-colors"
        >
          <FaYoutube size={24} />
        </Link>
        <Link
          href="https://music.youtube.com/channel/UCFl15L655YrI3f4VvB5HLBg?si=aD6q0c5LFQrMjjmn"
          className="text-white hover:text-yellow-500 transition-colors"
        >
          <SiYoutubemusic size={24} />
        </Link>
      </div>
    </div>
  )
}
