import { Logo } from "@/components";
import { Highlight } from "@/components/highlight";
import { MusicBar } from "@/components/home";
import { TourForm } from "@/components/tour";

export const metadata = {
  title: "Tour - Rise",
  description: "Invoca a RISE donde se necesite",
};

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center mt-20 bg-zinc-900 gap-y-6">
      <section className="max-w-5xl px-4">
        <div className="bg-zinc-900 w-full py-10 flex flex-col gap-3 ">
          <div className="mx-auto">
            <Logo variant="orangeHighlight" size="xl" />
          </div>
          <h1 className='tracking-tight font-light text-4xl text-center text-white'>Tour</h1>
          <p className="text-center mx-auto text-white/80 md:w-2/3">
            ¿Quieres molestar a tus vecinos? ¿El alcalde/alcaldesa tu pueblo no gasta en <Highlight>cultura</Highlight>? ¿Quieres poner
            música a tu <Highlight>divorcio</Highlight>? ¿A tu ex le molaba Amon Amarth y quieres joderle/la? ¡No te preocupes! Ponte en
            contacto con nosotros para que carguemos todo en la furgo, echemos gasolina, y vayamos a reventar <Highlight>tímpanos</Highlight>
          </p>
          <TourForm />
          <div className="w-full flex justify-center">
            <MusicBar
              header={
                <div>
                  También puedes seguirnos en nuestras <Highlight>Redes</Highlight>
                </div>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
