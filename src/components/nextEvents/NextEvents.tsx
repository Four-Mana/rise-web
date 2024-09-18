import React from "react";

const events = [
  { date: "29", month: "Sep", day: "Sáb", name: "Primer Concierto", link: "#" },
  { date: "15", month: "Oct", day: "Sáb", name: "Segundo Concierto", link: "#" },
  { date: "23", month: "Sep", day: "Vie", name: "Concierto Inagural", link: "#" },
  { date: "07", month: "Dic", day: "Sáb", name: "Concierto Benéfico", link: "#" },
  { date: "30", month: "Dic", day: "Dom", name: "Sala Espejos", link: "#" },
];


const monthMap: { [key: string]: number } = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dic: 12,
};


const sortEventsByDate = (events: { date: string, month: string, day: string, name: string, link: string }[]) => {
  return events.slice().sort((a, b) => {
    const dateA = new Date(`${monthMap[a.month]} ${a.date}, 2024`);
    const dateB = new Date(`${monthMap[b.month]} ${b.date}, 2024`);
    return dateA.getTime() - dateB.getTime();
  });
};

export const NextEvents: React.FC = () => {
  const sortedEvents = sortEventsByDate(events);

  return (
    <section className="relative w-full h-full bg-black text-white py-10">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 gap-6">
        <h2 className="text-4xl font-bold mb-5 text-center mr-24 ">Próximos Conciertos</h2>
          {sortedEvents.map((event, index) => (
            
            <div key={index} className="flex justify-between items-center border-b border-white py-4">
              
              <div className="flex items-center">
                <div className="text-center pr-4">
                  <p className="text-5xl font-bold">{event.date}</p>
                  <p className="uppercase">{event.month}</p>
                  <p>{event.day}</p>
                </div>
                
              </div>
              <div >
                  <p >{event.name}</p>
                </div>
              <div>
                <a
                  href={event.link}
                  className="border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition"
                >
                  Comprar Entradas
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
