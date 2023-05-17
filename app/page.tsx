import { Inter } from 'next/font/google'
import Timer from '../components/Timer'
import Link from 'next/link'


export default function Home() {
  return (
    <main className='flex flex-col w-1/4 min-w-fit justify-center items-center p-3'>
      <h1 className="text-green-400 font-bold text-6xl flex justify-center my-10">metrohgnome</h1>
      <Timer />
    </main>
  )
}
