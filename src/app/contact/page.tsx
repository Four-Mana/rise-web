import { Logo } from "@/components";
import { Highlight } from "@/components/highlight";
import { ContactForm } from "@/components/contact/contact-form";
import { MusicBar } from "@/components/home";

export const metadata = {
  title: "Contáctanos - Rise",
  description: "Queremos escuchar tus sugerencias",
};

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center mt-20 bg-zinc-900 gap-y-6">
      <section className="max-w-5xl px-4">
        <div className="bg-zinc-900 w-full py-10 flex flex-col gap-3 ">
          <Logo variant="orangeHighlight" size="xl" />
          <h1 className='tracking-tight font-light text-4xl text-white text-center'>Contacto</h1>
          <p className="text-center text-white/80 md:w-2/3">
            No te leeremos el Tarot o adivinaremos tu futuro,
            pero si tienes cualquier pregunta y/o comentario no dudes en ponerte en contacto con nosotros.
            Tardaremos menos en responderte que la <Highlight>Seguridad Social</Highlight>
          </p>
          <ContactForm />
          <div className="w-full flex justify-center">
            <div className="max-w-xl w-full">
              <MusicBar
                header={
                  <div>
                    También puedes seguirnos en nuestras <Highlight>Redes</Highlight>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
