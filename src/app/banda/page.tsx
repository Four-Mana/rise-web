import { HeroSection } from '@/components/heroSection';
import logo from '@/components/_assets/logotest2.png';
import background from '@/components/_assets/fondogrupal.jpg';

export default function Home() {
  return (
    <main className="flex h-[300vh] flex-col items-center justify-between">
      <HeroSection logo={logo} background={background} />
    </main>
  );
}
