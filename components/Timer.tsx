'use client'

import { useState, useEffect, useRef, MouseEvent } from 'react'
import { timeDisplay } from '@/lib/utils'

export default function Timer() {

  const [time, setTime] = useState<number>(0)
  const [savedTime, setSavedTime] = useState<number>(0)
  const [paused, setPaused] = useState<boolean>(true)

  let saveRef = useRef<ReturnType<typeof setInterval> | null>(null)


  useEffect(() => {
    saveRef.current = setInterval(() => {
      if (paused) {
        setSavedTime(time)
        clearInterval(saveRef.current as NodeJS.Timeout)
      } else {
        setTime(t => t + 1)
      }
    }, 1000)

    return () => {
      clearInterval(saveRef.current as NodeJS.Timeout)
    }
  }, [paused, savedTime, time])


  const reset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setTime(0)
    setSavedTime(0)
  }

  const timerStatus = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setPaused(state => !state)
  }

  return (
    <main className='rounded border-red-300 border p-5 flex flex-col justify-center mt-6'>
      <h2 className="text-red-600 font-bold text-6xl flex justify-center my-3">ticker tracker</h2>

      <div className='text-purple-300 p-3 flex justify-center'>
        You&apos;ve been at it for
      </div>
      <div className="text-red-300 p-3 flex justify-center text-4xl font-bold px-3">{timeDisplay(time)}</div>
      {paused ? (<button onClick={timerStatus}
        className='text-red-200 p-2 justify-center flex flex-row bg-slate-500 rounded m-2 hover:bg-slate-400 ease-in-out duration-300'
      >
        Start
      </button>) : (
        <button onClick={timerStatus}
          className='text-red-200 p-2 justify-center flex flex-row bg-slate-500 rounded m-2 hover:bg-slate-400 ease-in-out duration-300'
        >
          Pause
        </button>
      )}
      <button onClick={reset}
        className='text-red-200 p-2 justify-center flex flex-row bg-slate-500 rounded m-2 hover:bg-slate-400 ease-in-out duration-300'
      >
        Reset Timer
      </button>
    </main>
  )
}
