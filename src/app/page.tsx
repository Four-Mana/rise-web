import { HeroSection } from '@/components/heroSection';
import { NextEvents } from '@/components/nextEvents';
import logo from '@/components/_assets/logoBand.png';
import background from '@/components/_assets/heroPicture2.jpg';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection logo={logo} background={background} />
      <section className='w-full py-16 px-8 bg-black'>
        <p className='max-w-screen-md mx-auto font-semibold tracking-tighter text-lg'>
          ¡Mierda! Si no sabes por qué has entrado en la web ¡jódete! habrá sido culpa de Zuckerberg o Bezos, ya que estás, échale un vistazo y ¡dale al play! ¡Thrash! En toda la boca.
        </p>
        <iframe
          src="https://www.youtube.com/watch?v=KAonpOplglo"
        />
      </section>
      <section className='grid md:grid-cols-2 max-w-5xl max-h-screen py-10 px-8 gap-x-6'>
        <div className="w-96 aspect-square bg-black"></div>
        <div className='flex'>
          <h1>Nuestro nuevo albúm</h1>
        </div>
      </section>
      <NextEvents />
    </main>
  );
}
