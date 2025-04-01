import { Logo } from "@/components";

import { Highlight } from "@/components/highlight";
import { Album } from "@/components/home";
import { Articles } from "@/components/shop/articles";
import { PurchaseForm } from "@/components/shop/purchase-form";
import { BiDownArrow } from "react-icons/bi";

export const metadata = {
  title: "La Tienda - Rise",
  description: "Compra nuestra mercancía y álbumes"
}

export default function Shop() {

  return (
    <main className="flex flex-col items-center justify-between mt-20 bg-zinc-900 gap-6">
      <div className="flex flex-col items-center px-6">
        <Logo variant="orangeHighlight" size="xl" />
        <h2 className='tracking-tight font-light text-3xl text-white text-center pb-6'>
          Elige tu merch ideal y rellena tus datos <a href="#purchase-form"><Highlight>abajo</Highlight> <BiDownArrow className=" inline-block" /></a>
        </h2>
      </div>
      <Articles />
      <div className="bg-black w-full pt-16 pb-10 px-4 " id="purchase-form">
        <h2 className='tracking-tight font-light text-4xl text-white text-center pb-6'>
          ¿Te gusta? Pídelo <Highlight>Ahora</Highlight>
        </h2>
        <p className="text-center md:w-1/2 mx-auto">
          Rellena tus datos y nos pondremos en contacto contigo lo antes posible para gestionar el pago y envío.
        </p>
        <PurchaseForm />
      </div>
      <Album bgVariant="transparent" />
    </main >
  );
}
