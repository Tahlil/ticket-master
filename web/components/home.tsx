'use client';
import { useWallet } from '@solana/wallet-adapter-react';

export default function Home() {
    const { connected } = useWallet();
    return connected? (
     
     
          <div className="flex h-full">
            
            <div className="flex h-full items-center px-32">
              <img src="/hero.png" alt="kpop" />
            </div>
            <div className="flex flex-col h-full justify-center pr-12">
           
            
              <p className="uppercase text-4xl font-bold">SBS MTV The KPOP</p>
              <p className="uppercase text-4xl font-bold">show ticket package</p>
              <p className="text-pretty pt-4">
                Look no further! Our SBS The Show Tickets are the simplest way for
                you to experience a live Kpop recording.
              </p>
             
            </div>
          </div>
     
        ) : (
            <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-50% to-slate-1 p-11">
            <img src="/logo.png" alt="kpop" width={330} height={330} />
         Secure your ticket in a heartbeat for
         <span className="text-pink-800 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
           <ul className="block animate-text-slide-7 text-center leading-tight [&_li]:block">
             <li>Concerts</li>
             <li>Sports Games</li>
             <li>Cultural Festivals</li>
             <li>Conferences</li>
             <li>Theater Shows</li>
             <li>Movie Premieres</li>
             <li>Art Exhibitions</li>
             <li>Comedy Nights</li>
             <li>Workshops</li>
             <li>Food Festivals</li>
             <li>Tech Conferences</li>
             <li>Outdoor Adventures</li>
             <li>Fundraising Galas</li>
             <li>Fashion Shows</li>
             <li>Charity Event</li>
             <li aria-hidden="true">Educational Seminars</li>
           </ul>
         </span>
         <div className='p-5'>
         <h1 className='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Please Connect your wallet</h1>

         </div>
       </div>
            )
}