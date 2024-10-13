
export const metadata = {
  title: "The band - Rise",
  description: "Know more about Rise band"
}

export default function Band() {
  return (
    <main className="flex flex-col items-center justify-between mt-20 bg-zinc-900">
      <h1 className='text-center font-bold text-4xl mx-auto'>Rise</h1>
      <div className='grid md:grid-cols-2 max-w-5xl min-h-screen py-10 gap-x-6 gap-y-10 grid-cols-1 px-8'>
        <div className="w-full bg-black h-screen max-h-96"></div>
        <p className="md:row-start-1 md:col-start-2">
          RISE es una banda de Heavy/Thrash Metal originaria de Hortaleza, Madrid, formada en 2016. En abril de 2018, lanzaron su álbum debut, ‘Derange’, que fue grabado, mezclado y masterizado en Moontower Studios por el productor Javi Félez (conocido por su trabajo con Crisix, TaintanBlood, Graveyard, Lizzies, etc.). El álbum, lleno de comentarios políticos, sociales y culturales, recibió grandes elogios tanto de la prensa nacional como internacional. Es un disco contundente, un sonido compacto, directo y lleno de rabia.
        </p>

        <p className="md:row-start-2 md:col-start-1">
          Tras varios conciertos, cambios en la formación original, y tras la pandemia global, RISE no se vino abajo y se reformuló internamente tanto en sus componentes como en su sonido. Todo ello hace que en enero de 2024 se embarcaran en la grabación de su segundo trabajo, ‘Breathing Again’, el cuál verá la luz en septiembre de 2024. Dicho álbum fue grabado, mezclado y masterizado en los estudios Hangar XIX junto a los productores Héctor Martín y Dani Gastelurrutia.
        </p>
        <div className="w-full bg-black h-screen max-h-96 md:col-start-2"></div>

        <div className="w-full bg-black h-screen max-h-96 md:row-start-3 md:col-start-1"></div>
        <p className="md:col-start-2">
          RISE es una banda de Heavy/Thrash Metal originaria de Hortaleza, Madrid, formada en 2016. En abril de 2018, lanzaron su álbum debut, ‘Derange’, que fue grabado, mezclado y masterizado en Moontower Studios por el productor Javi Félez (conocido por su trabajo con Crisix, TaintanBlood, Graveyard, Lizzies, etc.). El álbum, lleno de comentarios políticos, sociales y culturales, recibió grandes elogios tanto de la prensa nacional como internacional. Es un disco contundente, un sonido compacto, directo y lleno de rabia.
        </p>
      </div>

    </main>
  );
}
