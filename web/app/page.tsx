/* eslint-disable @typescript-eslint/no-unused-vars */
import DashboardFeature from '@/components/dashboard/dashboard-feature';
import Navbar from '@/components/navbar/Navbar';
import { UiLayout } from '@/components/ui/ui-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { Provider } from './provider';
import Home from '@/components/home'

// import { Button } from '@daisyui/react';

export default function Page() {

  return (
    <Provider>
      <ClusterProvider>
        <SolanaProvider>
          <UiLayout>
            <div className="flex flex-col bg-gradient-to-br from-red-300 to-red-900">
              <div className="flex flex-col h-screen ">
                {/* <Navbar /> */}
                <div className="flex h-full">
                  
                  <div className="flex h-full items-center px-32">
                    <img src="/hero.png" alt="kpop" />
                  </div>
                  <div className="flex flex-col h-full justify-center pr-12">
                 

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
             </div>
                    <p className="uppercase text-4xl font-bold">SBS MTV The KPOP</p>
                    <p className="uppercase text-4xl font-bold">show ticket package</p>
                    <p className="text-pretty pt-4">
                      Look no further! Our SBS The Show Tickets are the simplest way for
                      you to experience a live Kpop recording.
                    </p>
                    <div className='m-3'>
                    <Home></Home>
                    </div>
                   
                    {/* <div className="flex justify-center items-center py-6 px-3 space-x-4">
                      <button className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full border border-red-700">
                        Get ticket
                      </button>
                      <button className="rounded-full bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent">
                        Create Event
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </UiLayout>
        </SolanaProvider>
      </ClusterProvider>
    </Provider>

  );
}
