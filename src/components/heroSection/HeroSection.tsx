import Image from "next/image";
import { StaticImageData } from "next/image";  // Import type

// Define props interface
interface HeroSectionProps {
  logo: StaticImageData;
  background: StaticImageData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ logo, background }) => {
  return (
    <section className="relative w-full h-screen" data-testid="hero-section">
      <div className="flex items-end justify-center w-full h-full">
        <Image
          src={background}
          alt="Foto"
          objectFit="cover"
          className="w-full h-full object-cover" 
        />

        <Image
          src={logo}
          alt="Logo"
          objectFit="contain"
          className="absolute bottom-[30%] w-[50%] h-auto"
        />
      </div>
    </section>
  );
};
