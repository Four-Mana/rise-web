import { Logo } from "@/components";
import Image from "next/image";
import heroBand from "@/components/_assets/band/bandHero.jpg"
import bandHigh from "@/components/_assets/band/bandHigh.jpg"

import { Highlight } from "@/components/highlight";
import { Album } from "@/components/home";

export const metadata = {
  title: "La Banda - Rise",
  description: "Conoce más sobre Rise"
}
const heroBlur= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAEAAYDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACP/EAB4QAAICAgMBAQAAAAAAAAAAAAEDAgUEBgcIEQkS/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQb/xAAgEQACAgAGAwAAAAAAAAAAAAABAwIRAAQSEyIyBTFB/9oADAMBAAIRAxEAPwAsd2vpB2V43VcJ16w1Ka08kVuAuNhRZj/EZGrWuXMkouMUlgaiAjL38iBkDEkiQlct5B6VFkdBkyfK4muvypCsOXVHNPcht7aANvTQlyECdRIkD2PoDH//2Q=="
const bandBlur="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAJAAYDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACP/EACMQAAEEAAQHAAAAAAAAAAAAAAECAwQFAAYIEhEhMTVRdrX/xAAXAQADAQAAAAAAAAAAAAAAAAAEBgcI/8QAJxEAAgIBAgMJAQAAAAAAAAAAAQIDBAUAEQY1YQcSFCFRc3WBsrT/2gAMAwEAAhEDEQA/ABFqx1JN0efMzwKxgy4US+rG47zad6XEv1Ep1fAp5HYpAB8FQ6EnGLOCsRha9uK3FfhNvJYeWazAJV70YhuwxRllB3AYMQCR57dNKuXz7YjN+CaF3gXHrIsoUlTJJPsU39VVCT0I+xnqG73c+ww/lSMS3s25hJ8Za/uqaC4u5mvsJ+m1/9k="
export default function Band() {
  return (
    <main className="flex flex-col items-center justify-between mt-20 bg-zinc-900">
      <Logo variant="orangeHighlight" size="xl" />
      <div className='grid md:grid-cols-2 max-w-5xl min-h-screen py-10 gap-x-6 gap-y-10 grid-cols-1 px-8'>
        <div className="row-start-2 md:row-start-1  md:col-start-1 w-full bg-zinc-900 h-64 md:h-80 flex items-center relative">
          <Image
            src={heroBand}
            alt="Image from Rise band"
            fill
            objectFit="contain"
            objectPosition="100% 0%"
            placeholder="blur"
            blurDataURL={bandBlur}
          />
        </div>

        <p className="row-start-1 md:col-start-2 font-light text-wide text-white leading-7">
          RISE es una banda de Heavy/Thrash Metal originaria de <Highlight>Hortaleza, Madrid</Highlight>, formada en 2016. En abril de 2018, lanzaron su álbum debut, ‘Derange’, que fue grabado, mezclado y masterizado en <Highlight>Moontower Studios</Highlight> por el productor Javi Félez (conocido por su trabajo con Crisix, TaintanBlood, Graveyard, Lizzies, etc.). El álbum, lleno de comentarios políticos, sociales y culturales, recibió grandes elogios tanto de la prensa nacional como internacional. Es un disco contundente, un sonido compacto, directo y lleno de rabia.
        </p>

        <p className="row-start-3 md:row-start-2 md:col-start-1 font-light text-wide text-white leading-7">
          Tras varios conciertos, cambios en la formación original, y tras la pandemia global, RISE no se vino abajo y se reformuló internamente tanto en sus componentes como en su sonido. Todo ello hace que en enero de 2024 se embarcaran en la grabación de su segundo trabajo, <Highlight className="font-semibold">‘Breathing Again’</Highlight>, el cuál verá la luz en septiembre de 2024. Dicho álbum fue grabado, mezclado y masterizado en los estudios Hangar XIX junto a los productores <Highlight className="font-semibold">Héctor Martín y Dani Gastelurrutia</Highlight>.
        </p>
        <div className="w-full bg-zinc-900 h-96 flex items-center row-start-4 md:row-start-2 md:col-start-2 pb-36 overflow-hidden relative">
          <Image
            src={bandHigh}
            alt="Image from Rise band"
            layout="fill"
            placeholder="blur"
            blurDataURL={bandBlur}
            style={{
              objectFit: "cover",
              objectPosition: "100% 30%"
            }}
          />
        </div>
      </div >
      <Album bgVariant="black" />
    </main >
  );
}
