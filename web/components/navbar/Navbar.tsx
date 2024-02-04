import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='fixed top-0 flex w-full justify-between px-32 py-8'>
      <div className='flex font-bold text-2xl items-center text-red-900 tracking-[1.5px]'>Ticket Master</div>
      <div className='flex gap-8 items-center'>
        <Link href='/schedule'  className='border-b-2 border-transparent hover:border-white'>Schedule</Link>
        <Link href='/ticket' className='border-b-2 border-transparent hover:border-white'>Ticket</Link>
        {/* <Link href='/login' className='border border-white px-8 py-2 rounded-full hover:bg-white hover:text-red-700'>Login</Link> */}
      </div>
    </div>
  )
}