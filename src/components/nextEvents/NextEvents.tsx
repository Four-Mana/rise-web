import React from 'react';

const events = [
  { date: '29', month: 'Sep', day: 'Sáb', name: 'Primer Concierto', link: '#' },
  {
    date: '15',
    month: 'Oct',
    day: 'Sáb',
    name: 'Segundo Concierto',
    link: '#',
  },
  {
    date: '23',
    month: 'Sep',
    day: 'Vie',
    name: 'Concierto Inagural',
    link: '#',
  },
  {
    date: '07',
    month: 'Dic',
    day: 'Sáb',
    name: 'Concierto Benéfico',
    link: '#',
  },
  { date: '30', month: 'Dic', day: 'Dom', name: 'Sala Espejos', link: '#' },
];

const monthMap: { [key: string]: number } = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dic: 12,
};

const sortEventsByDate = (
  events: {
    date: string;
    month: string;
    day: string;
    name: string;
    link: string;
  }[]
) => {
  return events.slice().sort((a, b) => {
    const dateA = new Date(`${monthMap[a.month]} ${a.date}, 2024`);
    const dateB = new Date(`${monthMap[b.month]} ${b.date}, 2024`);
    return dateA.getTime() - dateB.getTime();
  });
};

export const NextEvents: React.FC = () => {
  const sortedEvents = sortEventsByDate(events);

  return (
    <section className="relative h-full w-full bg-black py-10 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <h2 className="mb-5 mr-24 text-center text-4xl font-bold">
            Próximos Conciertos
          </h2>
          {sortedEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-white py-4"
            >
              <div className="flex items-center">
                <div className="pr-4 text-center">
                  <p className="text-5xl font-bold">{event.date}</p>
                  <p className="uppercase">{event.month}</p>
                  <p>{event.day}</p>
                </div>
              </div>
              <div>
                <p>{event.name}</p>
              </div>
              <div>
                <a
                  href={event.link}
                  className="border border-white px-6 py-2 text-white transition hover:bg-white hover:text-black"
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
