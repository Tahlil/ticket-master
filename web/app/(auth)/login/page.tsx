import Login from '@/components/auth-forms/Login'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Login />
    </div>
  )
}