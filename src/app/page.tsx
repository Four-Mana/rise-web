import { HeroSection } from '@/components/heroSection';
import logo from '@/components/_assets/logoBand.png';
import background from '@/components/_assets/heroPicture2.jpg'
import { YoutubeVideo } from '@/components/youtubeVideo';
import { Album } from '@/components/home';




export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection logo={logo} background={background} />

      <section className='w-full py-12 px-8 bg-black'>
        <div className='grid gap-12 max-w-screen-lg mx-auto'>
          <p className='max-w-screen-md mx-auto font-light tracking-tighter text-xl text-white text-center'>
            ¡Mierda! Si no sabes por qué has entrado en la web
            <span className='text-primary-400'> ¡jódete!</span> habrá sido culpa de Zuckerberg o Bezos, ya que estás, échale un vistazo y ¡dale al play! ¡Thrash! En toda la boca.
          </p>
          <YoutubeVideo id="KAonpOplglo" title='test' />
        </div>

      </section>

      <Album />
    </main>
  );
}
