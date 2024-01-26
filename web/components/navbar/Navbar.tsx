import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='fixed top-0 flex w-full justify-between px-32 py-8'>
      <div className='flex font-bold text-lg items-center'>Ticket Master</div>
      <div className='flex gap-8 items-center'>
        <Link href='/'  className='border-b-2 border-red-900 hover:border-white'>Schedule</Link>
        <Link href='/' className='border-b-2 border-red-900 hover:border-white'>Speakers</Link>
        <Link href='/' className='border-b-2 border-red-900 hover:border-white'>Ticket</Link>
        <Link href='/' className='border-b-2 border-red-900 hover:border-white'>Contact</Link>
        <Link href='/' className='border border-white px-8 py-2 rounded-full hover:bg-white hover:text-red-700'>Login</Link>
      </div>
    </div>
  )
}