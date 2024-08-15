import { HeroSection } from "@/components/heroSection/HeroSection";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex h-[300vh] flex-col items-center justify-between ">
      <HeroSection />
    </main>
  );
}
