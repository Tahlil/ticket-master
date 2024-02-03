'use client'
import Navbar from '@/components/navbar/Navbar'
import Ticket from '@/components/sections/Ticket'
import { useSearchParams } from 'next/navigation'
type Props = {}

export default function Page({ }: Props) {
  const searchParam = useSearchParams()
  const id = searchParam.get('id')

  return (
    <>
      <Navbar />
      <Ticket id={id! as string} />
    </>
  )
}