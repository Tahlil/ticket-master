// ... (other imports)
'use client';
import './ticket.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Link from 'next/link';
import { UiLayout } from '@/components/ui/ui-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { Provider } from '../provider';

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
  // Add more events as needed
];

const Ticket: React.FC = () => {
  type TicketData = {
    id: string;
    eventTitle: string;
    eventDate: string;
    eventTime: string;
    eventLocation: string;
    userIdentifier: string;
    imageUrl: string;
  };

  const [tickets] = useState<TicketData[]>([
    {
      id: '1',
      eventTitle: 'Eras Tour Concert',
      eventDate: '2024-02-10',
      eventTime: '8:00 PM',
      eventLocation: 'Music Hall',
      userIdentifier: 'user123',
      imageUrl: '/eras.jpeg',
    },
    // Add more ticket data as needed
  ]);

  return (
    <Provider>
      <ClusterProvider>
        <SolanaProvider>
          <UiLayout>
            <div className="flex flex-col bg-gradient-to-br from-red-300 to-red-900">
              <div className="flex flex-col h-screen w-screen">
                <div className="flex flex-col items-center bg-gradient-to-br from-red-300 to-red-900 min-h-screen p-6">
                  <h4 className="text-2xl font-bold text-white mb-8 pt-16">
                    Your Tickets
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {tickets.map((ticket: TicketData) => (
                      <div
                        key={ticket.id}
                        className="relative border-2 border-red-300 rounded-lg shadow-md overflow-hidden"
                      >
                        <div className="w-full h-56 overflow-hidden">
                          <img
                            className="w-full h-full object-cover rounded-t-lg"
                            src={ticket.imageUrl}
                            alt={ticket.eventTitle}
                          />
                        </div>
                        <div className="p-6 flex flex-col justify-end">
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {ticket.eventTitle}
                          </h3>
                          <p className="text-lg text-gray-300">
                            Date: {ticket.eventDate}
                          </p>
                          <p className="text-lg text-gray-300">
                            Time: {ticket.eventTime}
                          </p>
                          <p className="text-lg text-gray-300">
                            Location: {ticket.eventLocation}
                          </p>
                          <Link
                            href={`/verify`}
                            className="bg-red-500 hover:bg-red-600 text-white justify-center flex px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-4"
                          >
                            Check in
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </UiLayout>
        </SolanaProvider>
      </ClusterProvider>
    </Provider>
  );
};

export default Ticket;
