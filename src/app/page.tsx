import { HeroSection } from "@/components/heroSection";
import { NextEvents } from '@/components/nextEvents';
import logo from '@/components/_assets/logotest2.png';
import background from '@/components/_assets/fotogrupal2.jpg';

export default function Home() {
  return (
    <main className="flex h-[300vh] flex-col items-center justify-between">
      <HeroSection logo={logo} background={background} />
      <NextEvents />
    </main>
  );
}