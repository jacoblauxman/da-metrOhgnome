'use client'
import { useState, useEffect, useRef } from 'react'


export default function Metronome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [averageInterval, setAverageInterval] = useState<number>(0);
  const [lastTapTime, setLastTapTime] = useState(0);
  const [volume, setVolume] = useState(0.25);
  const [frequency, setFrequency] = useState(330);
  const [oscillatorType, setOscillatorType] = useState<OscillatorType | string>('triangle');

  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    audioCtxRef.current.resume().then(() => {
      console.log('playback resumed successfully')
    })

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }

      if (audioCtxRef.current) {
        audioCtxRef.current.close()
        audioCtxRef.current = null;
      }
    }

  }, [audioCtxRef, intervalId])

  const start = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsPlaying(true);
    playClick();
    setIntervalId(
      setInterval(() => {
        playClick();
      }, (60 / bpm) * 1000)
    );
  };

  const stop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsPlaying(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const playClick = () => {
    const audioContext = audioCtxRef.current!;
    // changed from 'new AudioContext() creation'
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.type = oscillatorType as OscillatorType;
    gainNode.gain.value = volume;
    oscillator.frequency.value = frequency;
    oscillator.start(audioContext.currentTime);
    // oscillator.stop(audioContext.currentTime + 0.1);

    const duration = 0.1; // duration of the click sound in seconds
    gainNode.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + duration);
    oscillator.stop(audioContext.currentTime + duration);
  };

  const handleBpmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBpm = Number(event.target.value)
    newBpm > 330 ? setBpm(330) : newBpm < 30 ? setBpm(30) : setBpm(newBpm)
    if (isPlaying) {
      clearInterval(intervalId!);
      setIntervalId(
        setInterval(() => {
          playClick();
        }, (60 / bpm) * 1000)
      );
    }
  };

  const handleTapTempo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const now = Date.now();
    if (lastTapTime && now - lastTapTime < 3000) {
      const newInterval = now - lastTapTime;
      setAverageInterval((prevAverageInterval) => {
        const newAverage = (prevAverageInterval + newInterval) / 2;
        const newBpm = Math.round((60 / newAverage) * 1000);
        newBpm > 330 ? setBpm(330) : newBpm < 30 ? setBpm(30) : setBpm(newBpm)
        if (isPlaying) {
          clearInterval(intervalId!);
          setIntervalId(
            setInterval(() => {
              playClick();
            }, (60 / newBpm) * 1000)
          );
        }
        return newAverage;
      });

    }
    setLastTapTime(now);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
    if (!isPlaying) {
      playClick()
    }
    if (isPlaying) {
      clearInterval(intervalId!);
      setIntervalId(
        setInterval(() => {
          playClick();
        }, (60 / bpm) * 1000)
      );
    }
  };

  const handleFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrequency(Number(event.target.value));
    if (isPlaying) {
      clearInterval(intervalId!);
      setIntervalId(
        setInterval(() => {
          playClick();
        }, (60 / bpm) * 1000)
      );
    }
  };

  const handleOscillatorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOscillatorType(event.target.value);
    if (isPlaying) {
      clearInterval(intervalId!);
      setIntervalId(
        setInterval(() => {
          playClick();
        }, (60 / bpm) * 1000)
      );
    }
  };


  return (
    <div className='flex flex-col text-slate-400 justify-center items-stretch min-h-full min-w-full w-3/5 border-2 border-slate-700 rounded py-8 px-20'>
      <h2 className="flex flex-col justify-center items-center text-2xl font-bold text-slate-400">
        {oscillatorType && isPlaying ? (
          oscillatorType === "triangle" ? "Currently Beeping" : oscillatorType === "sine" ? "Currently Boopin'" : "Currently Bzzappin'"
        ) : (
          " - Paused - "
        )}
        <div className='text-6xl flex justify-center mt-5 text-purple-400'>
          {bpm}
        </div>
      </h2>
      <div
        className='relative first-letter:flex flex-col items-center justify-center min-w-full py-2'
      >
        <div className="relative mt-3">
          <input
            className="range-lg text-white flex justify-center mb-3 bg-slate-700 py-3 rounded focus:outline-none text-left accent-green-600 hover:accent-green-600 min-w-full w-full h-3 cursor:pointer"
            type="range"
            id="bpm"
            min={30}
            max={330}
            step={1}
            value={bpm}
            onChange={handleBpmChange} />
          <label
            className="absolute z-0 hover:text-slate-300 ease-in-out duration-300 text-sm"
            style={{ top: "-.95rem", left: ".5rem" }}
            htmlFor="bpm"
          >New Speed
          </label>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center my-2 min-w-max'>
        <div className='flex min-w-full mb-2'>
          <button
            className="text-gray-300 bg-slate-700 p-3 mr-2 rounded hover:bg-slate-500 ease-in-out duration-300 hover:text-green-300 flex-auto min-w-fit"
            onClick={start}
            disabled={isPlaying}
          >
            Start
          </button>
          <button
            className="text-gray-300 bg-slate-700 p-3 ml-2 rounded hover:bg-slate-500 ease-in-out duration-300 hover:text-orange-300 flex-auto min-w-fit cursor-pointer"
            onClick={stop}
            disabled={!isPlaying
            }>
            Stop
          </button>
        </div>
        <button
          className="text-gray-300 bg-slate-700 p-3 rounded hover:bg-slate-500 ease-in-out duration-300 hover:text-purple-400 flex-auto min-w-full"
          onClick={handleTapTempo}
        >Tap Tempo
        </button>
      </div>
      <div className='border-2 border-indigo-500 min-w-full px-3 py-4 mt-2 rounded-md flex flex-col items-center justify-center'>
        <label
          className='text-sm'
          htmlFor="volume">Volume</label>
        <input
          className="text-white flex justify-center mb-3 bg-slate-700 rounded focus:outline-none text-left accent-green-600 hover:accent-green-600 min-w-full"
          type="range"
          id="volume"
          min={0}
          max={0.5}
          step={0.05}
          value={volume}
          onChange={handleVolumeChange} />
        <label
          className='text-sm'
          htmlFor="frequency">Frequency</label>
        <input
          className="text-white flex justify-center mb-3 bg-slate-700 py-3 rounded focus:outline-none text-left accent-green-600 hover:accent-green-600 min-w-full"
          type="range"
          min={330}
          max={660}
          id="frequency"
          value={frequency}
          onChange={handleFrequencyChange} />
        <label
          className='text-sm'
          htmlFor="oscillatorType">
          Oscillator</label>
        <select
          className='flex justify-center items-center list-none bg-slate-600  hover:bg-slate-500 ease-in-out duration-300 text-purple-300  hover:text-purple-400 m-2 text-sm p-2 text-center rounded min-w-full focus:border-none outline-none appearance-none cursor-pointer'
          id="oscillatorType"
          value={oscillatorType}
          onChange={handleOscillatorChange}>
          <option value="sine">Sine</option>
          <option value="triangle">Triangle</option>
          <option value="square">Square</option>
        </select>
      </div>
    </div>
  );
};
