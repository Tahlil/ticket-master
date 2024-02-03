import React from 'react'

type Props = {
  id: string
}



export default function Ticket({ id }: Props) {
  type Event = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    imageUrl: string;
  };

  const events: Event[] = [
    {
      id: 1,
      title: 'Event 1',
      date: '2022-01-01',
      time: '10:00 AM',
      location: 'Venue 1',
      imageUrl: '/event1.jpg',
    },
    {
      id: 2,
      title: 'Event 2',
      date: '2022-01-02',
      time: '02:00 PM',
      location: 'Venue 2',
      imageUrl: '/event2.jpg',
    },
    // Fetch events from contract
  ];

  const event = events.find((event) => event.id === parseInt(id));

  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-br from-red-300 to-red-900 h-screen'>
      <div className='flex w-full px-64'>
        <div className='w-1/2 font-semibold space-y-4'>
          <h1 className='font-bold text-3xl'>{event?.title}</h1>
          <p>On {event?.date}</p>
          <p>Time: {event?.time}</p>
          <p>Location: {event?.location}</p>
          <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-4'>Purchase Ticket</button>
        </div>
        <div className='w-1/2'>
          <img src={event?.imageUrl} width={300} alt={event?.title} />
        </div>
      </div>
    </div>
  )
}