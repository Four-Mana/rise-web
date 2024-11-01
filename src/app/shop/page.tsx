import { Logo } from "@/components";

import { Highlight } from "@/components/highlight";
import { Album } from "@/components/home";
import { Articles } from "@/components/shop/articles";
import { PurchaseForm } from "@/components/shop/purchase-form";

export const metadata = {
  title: "La Tienda - Rise",
  description: "Compra nuestra mercancía y álbumes"
}

export default function Shop() {

  return (
    <main className="flex flex-col items-center justify-between mt-20 bg-zinc-900 gap-6">
      <Logo variant="orangeHighlight" size="xl" />
      <Album />
      <Articles />
      <div className="bg-black w-full py-10">
        <h2 className='tracking-tight font-light text-4xl text-white text-center pb-6'>
          ¿Quieres el tuyo? Pidelo <Highlight>Ahora</Highlight>
        </h2>
        <p className="text-center">
          Rellena tus datos y nos pondremos en contacto contigo lo antes posible
        </p>
        <PurchaseForm />
      </div>
    </main >
  );
}
