import Image from "next/image";
import { StaticImageData } from "next/image";

type HeroSectionProps = {
  logo: StaticImageData;
  background: StaticImageData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ logo, background }) => {
  return (
    <section className="relative max-h-screen" data-testid='hero-section'>
      <div className="flex items-end justify-center w-full h-full">
        <Image
          style={{
            width: '140%',
            height: 'auto',
          }}
          src={background}
          alt="Background Image"
          objectFit="cover"
        />
        <Image
          className="absolute bottom-8"
          style={{
            width: '50%',
            height: 'auto',
          }}
          src={logo}
          alt="Logo"
          objectFit="contain"
        />
      </div>
    </section>
  );
};
