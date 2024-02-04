// ... (other imports)
'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navbar/Navbar";


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

const Schedule: React.FC = () => {
  const [weekdayFilter, setWeekdayFilter] = useState('');
  const [eventTypeFilter, setEventTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [showWeekdayDropdown, setShowWeekdayDropdown] = useState(false);
  const [showEventTypeDropdown, setShowEventTypeDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

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
                  <Navbar />

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
              <p className="text-lg text-gray-300">Date: {event.date}</p>
              <p className="text-lg text-gray-300">Time: {event.time}</p>
              <p className="text-lg text-gray-300">
                Location: {event.location}
              </p>
              <Link href={`/ticket?id=${event.id}`} className="bg-red-500 hover:bg-red-600 text-white justify-center flex px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-4">
                Get Ticket
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
