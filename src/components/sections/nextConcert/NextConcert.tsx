import classNames from 'classnames';
import cartel from './assets/event-cartel.png'
import Image from 'next/image';
import { Highlight } from '@/components/highlight';

type variant = 'black' | 'transparent';
export type NextConcertProps = {
  bgVariant?: variant;
  withoutBar?: boolean;
};

export const NextConcert = ({ bgVariant = "transparent" }: NextConcertProps) => {
  const sectionStyles = classNames("w-full px-8", {
    ['bg-black']: bgVariant === 'black',
    ['bg-transparent']: bgVariant === 'transparent',
  });

  return (
    <section className={sectionStyles}>
      <div className='mx-auto grid md:grid-cols-2 max-w-5xl gap-y-6 md:gap-y-0 gap-x-6 py-20'>

        <div className='flex flex-col gap-3 '>
          <h2 className='font-semibold tracking-wide text-white/80'>
            Sala Silikona - <Highlight className='text-primary-400 tracking-wider font-semibold'>Sábado 5 de Abril</Highlight> - 20:00
          </h2>
          <div className='w-fit'>
            <h1 className='tracking-tight font-light text-4xl text-white'><Highlight>Breathing Again</Highlight></h1>
            <h3 className='tracking-wider uppercase text-sm'>En concierto</h3>
          </div>
          <p className='text-sm font-light tracking-wide leading-6'>
            Una declaración de intenciones. Un sonido renovado. <Highlight className='font-semibold'>RISE</Highlight> está de vuelta.
            Más rabiosos, más furiosos y desafiantes que <Highlight className='font-semibold'>NUNCA</Highlight>.
          </p>
          <a href="https://entradium.com/es/events/rise-presentacion-breathing-again-trasmoth-silikona" target="_blank"
            className='w-full py-8 bg-white/40 rounded-full text-white text-center tracking-wider text-2xl hover:bg-white/30 hover:text-primary-400 transition-colors duration-300 ease-in-out mt-12'>
            ¡Consigue las tuyas!
          </a>
        </div>
        <div className="mx-auto w-5/6">
          <Image
            src={cartel}
            alt="Breathing again album"
            placeholder='blur'
            className='mx-auto'
          />
        </div>
      </div>
    </section>
  );
};