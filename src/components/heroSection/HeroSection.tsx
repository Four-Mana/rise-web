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
    <section className="relative h-screen" data-testid="hero-section">
      <div className="flex h-full w-full justify-center">
        <Image
          src={background}
          alt="The band"
          draggable={false}
          className="h-full w-screen object-cover "
        />

        <Image
          src={logo}
          alt="Rise logo"
          draggable={false}
          className="absolute bottom-10 object-contain md:1/2 lg:w-2/5"
        />
      </div>
    </section>
  );
};
