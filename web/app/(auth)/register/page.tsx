import Register from '@/components/auth-forms/Register'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Register />
    </div>
  )
}