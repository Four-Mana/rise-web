import { HeroSection } from '@/components/heroSection';
import logo from '@/components/_assets/logoBand.png';
import background from '../../public/background.jpg'
import { YoutubeVideo } from '@/components/youtubeVideo';
import { Album } from '@/components/home';

const backgroundBlur =  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAEAAYDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EAB8QAAEEAgIDAAAAAAAAAAAAAAECAwQFBggABxESE//EABUBAQEAAAAAAAAAAAAAAAAAAAYI/8QAIREAAgICAQQDAAAAAAAAAAAAAgMBBAUGEQAHEhMUFjL/2gAMAwEAAhEDEQA/ADX2r1y1ni9yZmKHXDpjE4Bk05apcWxNyop4ylQJDjq40Nuwc+SpDii4+Q4Q64AtQ9h55L/bzddq+27xQnO5E0Y8cKFP2WWMJC7FQjcpQsIlKWw1rMhUpfkQDJSUjHR1Ww32Z/PV7EItLk69mfkgbi95wfmzkm/o5YZHPHJERFMzMzM//9k="

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection logo={logo} background={background}  backgroundBlur={backgroundBlur}/>

      <section className='w-full py-12 px-8 bg-black'>
        <div className='grid gap-12 max-w-screen-lg mx-auto'>
          <p className='max-w-screen-md mx-auto font-light tracking-tighter text-xl text-white text-center'>
            ¡Mierda! Si no sabes por qué has entrado en la web
            <span className='text-primary-400'> ¡jódete!</span> habrá sido culpa de Zuckerberg o Bezos, ya que estás, échale un vistazo y ¡dale al play! ¡Thrash! En toda la boca.
          </p>
          <YoutubeVideo id="KAonpOplglo" title='test' />
        </div>
        <div className='divider-bottom-home'>
          <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
            <path d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' className='shape-fill'></path>
          </svg>
        </div>
      </section>

      <Album />
    </main>
  );
}
