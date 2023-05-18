import { Inter } from 'next/font/google'
import Link from 'next/link'
import Timer from '../components/Timer'
import Metronome from '@/components/Metronome'
import ChordGenerator from '@/components/ChordGenerator'
import ToneGenerator from '@/components/ToneGenerator'

export default function Home() {
  return (
    <main className='flex flex-col w-1/4 min-w-fit justify-center items-center p-3'>
      <h1 className="text-green-400 font-bold text-6xl flex justify-center my-10">metrohgnome</h1>
      <Metronome />
      <Timer />
      <ToneGenerator />
      <Link className="text-gray-300 text-sm bg-slate-700 p-3 rounded hover:bg-slate-400 ease-in-out duration-300 hover:text-indigo-700 hover:font-semibold flex-auto min-w-fit w-1/2 cursor-pointer justify-center items-center text-center"
        href='/tone'>
        moar tone ?
      </Link>
      <ChordGenerator />
      <Link className="text-gray-300 text-sm bg-slate-700 p-3 rounded hover:bg-slate-400 ease-in-out duration-300 hover:text-indigo-700 hover:font-semibold flex-auto min-w-fit w-1/2 cursor-pointer justify-center items-center text-center"
        href='/chords'>
        chords'n'chords
      </Link>
    </main>
  )
}
