import Image from 'next/image';
import { StaticImageData } from 'next/image';

type HeroSectionProps = {
  logo: StaticImageData;
  background: StaticImageData;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  logo,
  background,
}) => {
  return (
    <section className="relative h-screen w-full" data-testid="hero-section">
      <div className="flex h-full w-full items-end justify-center">
        <Image
          src={background}
          alt="Foto"
          className="h-full w-full object-cover"
        />

        <Image
          src={logo}
          alt="Logo"
          className="absolute bottom-[30%] h-auto w-[50%]"
        />
      </div>
    </section>
  );
};
