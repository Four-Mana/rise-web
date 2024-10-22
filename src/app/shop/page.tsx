import { Logo } from "@/components";

import { Highlight } from "@/components/highlight";
import { Album } from "@/components/home";
import { Input } from "@headlessui/react";
import classNames from "classnames";

export const metadata = {
  title: "The shop - Rise",
  description: "Buy your merch and albums"
}

export default function Shop() {
  return (
    <main className="flex flex-col items-center justify-between mt-20 bg-zinc-900 gap-6">
      <Logo variant="orangeHighlight" size="xl" />
      <Album />
      <div className="bg-black w-full py-10">

        <h2 className='tracking-tight font-light text-4xl text-white text-center pb-6'>
          ¿Quieres el tuyo? Pidelo <Highlight>Ahora</Highlight>
        </h2>
        <p className="text-center">
          Rellena tus datos y nos pondremos en contacto contigo lo antes posible
        </p>
        <form name="contact" method="POST" data-netlify="true" >
          <div className="flex flex-col pb-12 gap-4 w-full max-w-lg mx-auto pt-6">
            <label className='font-semibold tracking-tighter text-white/80' htmlFor="name">Your Name: </label>
            <Input
              type="text" name="name"
              className={classNames(
                'mt-3 block w-full rounded-lg bg-zinc-600 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />
            <label htmlFor="email">Your Email: </label>
            <Input type="email" name="email"
              className={classNames(
                'mt-3 block w-full rounded-lg bg-zinc-600 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )} />
            <label htmlFor="message">Message: </label>
            <textarea name="message"
              className={classNames(
                'mt-3 block w-full rounded-lg bg-zinc-600 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}></textarea>
            <button className="bg-primary-400 rounded-sm w-fit px-10 font-black text-white py-2 self-end" type="submit">Send</button>
          </div>
        </form>
      </div>

    </main >
  );
}
