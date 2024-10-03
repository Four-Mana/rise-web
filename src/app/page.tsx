import { HeroSection } from '@/components/heroSection';
import { NextEvents } from '@/components/nextEvents';
import logo from '@/components/_assets/logoBand.png';
import background from '@/components/_assets/heroPicture2.jpg';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection logo={logo} background={background} />
      <NextEvents />
    </main>
  );
}
