/* eslint-disable @typescript-eslint/no-unused-vars */
import DashboardFeature from '@/components/dashboard/dashboard-feature';
import Navbar from '@/components/navbar/Navbar';

export default function Page() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='flex h-full'>
          <div className='flex h-full items-center px-32'>
            <img src="/hero.png" alt="kpop" />
          </div>
          <div className='flex flex-col h-full justify-center pr-32'>
            <p className='uppercase text-4xl font-bold'>SBS MTV The KPOP</p>
            <p className='uppercase text-4xl font-bold'>show ticket package</p>
            <p className='text-pretty pt-4'>Look no further! Our SBS The Show Tickets are the simplest way for you to experience a live Kpop recording.</p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
