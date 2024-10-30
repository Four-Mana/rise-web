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
      <Logo variant="orangeHighlight" size="xl" />
      <div className="bg-zinc-900 w-full py-10">

        <h2 className='tracking-tight font-light text-2xl text-white text-center pb-6'>
          No te leeremos el Tarot o adivinaremos tu futuro,<br /><br />
          pero si tienes cualquier pregunta y/o comentario no dudes en ponerte en contacto con nosotros.
        </h2>
        <p className="text-center text-white/80">
          Tardaremos menos en responderte que la <Highlight>Seguridad Social</Highlight>
        </p>
        <ContactForm />

       
        <div className="w-full flex justify-center">
          <div className="max-w-xl w-full"> 
            <MusicBar 
              text='También puedes seguirnos en nuestras Redes' 
            />
          </div>
        </div>

      </div>
    </main>
  );
}
