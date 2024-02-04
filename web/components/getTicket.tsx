'use client';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useWallet } from '@solana/wallet-adapter-react';
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
      title: 'Eras Tour Concert',
      date: '2024-02-10',
      time: '8:00 PM',
      location: 'Music Hall',
      imageUrl: '/eras.jpeg',
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

export default function GetTicket() {
    const [weekdayFilter, setWeekdayFilter] = useState('');
    const [eventTypeFilter, setEventTypeFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [showWeekdayDropdown, setShowWeekdayDropdown] = useState(false);
    const [showEventTypeDropdown, setShowEventTypeDropdown] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const router = useRouter();
    function timeout(delay: number) {
      return new Promise((res) => setTimeout(res, delay));
    }
  
    const { publicKey } = useWallet();
    const getTicket = async () => {
      console.log('buying ticket...');
      console.log(publicKey?.toString());
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userAddress: publicKey?.toString() })
    };
    const response = await fetch('http://localhost:3001/mint-ticket', requestOptions);
    const data = await response.json();

      toast.custom(
        <div className="bg-stone-200 border text-red-600 p-4 rounded-lg">
          Bought NFT Ticket 
          <div>
          <a
            href={`${data.url}`}
            target="_blank"
            className="underline p-1"
          >
            {" "}
            TX Link{" "}
          </a>
          </div>
        </div>
      );
      await timeout(5000);
  
      router.push('/');
    };
    const filterEvents = () => {
      return events.filter((event: { date: string; location: string }) => {
        const matchWeekday = !weekdayFilter || event.date === weekdayFilter;
        const matchEventType =
          !eventTypeFilter || event.location === eventTypeFilter;
        const matchCategory =
          !categoryFilter || event.location === categoryFilter;
  
        return matchWeekday && matchEventType && matchCategory;
      });
    };
  
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const eventTypes = ['Concert', 'Dance', 'Salsa', 'Meetup']; // Add your event types
    const categories = ['Rock', 'Pop', 'Sufi', 'Hiphop']; // Add your categories
  
    const toggleDropdown = (dropdown: string) => {
      switch (dropdown) {
        case 'weekday':
          setShowWeekdayDropdown(!showWeekdayDropdown);
          setShowEventTypeDropdown(false);
          setShowCategoryDropdown(false);
          break;
        case 'eventType':
          setShowWeekdayDropdown(false);
          setShowEventTypeDropdown(!showEventTypeDropdown);
          setShowCategoryDropdown(false);
          break;
        case 'category':
          setShowWeekdayDropdown(false);
          setShowEventTypeDropdown(false);
          setShowCategoryDropdown(!showCategoryDropdown);
          break;
        default:
          break;
      }
    };
  
    const closeAllDropdowns = () => {
      setShowWeekdayDropdown(false);
      setShowEventTypeDropdown(false);
      setShowCategoryDropdown(false);
    };
  
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest('.weekday-dropdown') &&
        !target.closest('.event-type-dropdown') &&
        !target.closest('.category-dropdown')
      ) {
        closeAllDropdowns();
      }
    };
  
    useEffect(() => {
      window.addEventListener('click', handleOutsideClick);
      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }, []);

    return (
        <div className="flex flex-col items-center bg-gradient-to-br from-red-300 to-red-900 min-h-screen p-6">
                  {/* <Toaster
                    toastOptions={{
                      className: '',
                      style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                      },
                    }}
                  /> */}
                  <h4 className="text-2xl font-bold text-white mb-8 pt-16">
                    Upcoming Events
                  </h4>

                  <div className="flex space-x-4 mb-4">
                    <div className="relative inline-block weekday-dropdown">
                      <button
                        onClick={() => toggleDropdown('weekday')}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        All Weekdays
                      </button>
                      {showWeekdayDropdown && (
                        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                          {weekdays.map((day) => (
                            <button
                              key={day}
                              onClick={() => {
                                setWeekdayFilter(day);
                                closeAllDropdowns();
                              }}
                              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {day}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="relative inline-block event-type-dropdown">
                      <button
                        onClick={() => toggleDropdown('eventType')}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        All Event Types
                      </button>
                      {showEventTypeDropdown && (
                        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                          {eventTypes.map((type) => (
                            <button
                              key={type}
                              onClick={() => {
                                setEventTypeFilter(type);
                                closeAllDropdowns();
                              }}
                              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="relative inline-block category-dropdown">
                      <button
                        onClick={() => toggleDropdown('category')}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        All Categories
                      </button>
                      {showCategoryDropdown && (
                        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                          {categories.map((category) => (
                            <button
                              key={category}
                              onClick={() => {
                                setCategoryFilter(category);
                                closeAllDropdowns();
                              }}
                              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filterEvents().map((event: any, index: any) => (
                      <div
                        key={index}
                        className="relative border-2 border-red-300 rounded-lg shadow-md overflow-hidden"
                      >
                        <div className="w-full h-56 overflow-hidden">
                          <img
                            className="w-full h-full object-cover rounded-t-lg"
                            src={event.imageUrl}
                            alt={event.title}
                          />
                        </div>
                        <div className="p-6 flex flex-col justify-end">
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {event.title}
                          </h3>
                          <p className="text-lg text-gray-300">
                            Date: {event.date}
                          </p>
                          <p className="text-lg text-gray-300">
                            Time: {event.time}
                          </p>
                          <p className="text-lg text-gray-300">
                            Location: {event.location}
                          </p>
                          <Button
                            onClick={getTicket}
                            className="bg-red-500 hover:bg-red-600 text-white justify-center flex px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-4"
                          >
                            Get Ticket
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
    )
}