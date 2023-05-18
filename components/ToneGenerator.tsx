'use client'

import { useState, useRef, useEffect } from 'react'
import { pentSelect, FreqMap } from '@/lib/data';

import NoteButton from './NoteButton';

export default function ToneGenerator() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [frequency, setFrequency] = useState(329.63); // E3 frequency
  const [volume, setVolume] = useState(0.3);
  const [detune, setDetune] = useState(0);
  const [waveform, setWaveform] = useState('sine');
  const [pentScale, setPentScale] = useState<string>('Eb')

  const audioContextRef = useRef<AudioContext>();
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const noteButtons = Object.entries(pentSelect(pentScale)).map(([note, freq]) => (
    <NoteButton key={note} note={note} frequency={freq} setFrequency={setFrequency} />
  ))

  useEffect(() => {
    audioContextRef.current = new AudioContext();
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  useEffect(() => {

    if (oscillatorRef.current) {
      oscillatorRef.current.frequency.setValueAtTime(frequency, audioContextRef.current?.currentTime ?? 0);
      oscillatorRef.current.detune.setValueAtTime(detune, audioContextRef.current?.currentTime ?? 0);
      oscillatorRef.current.type = waveform as OscillatorType;
    }

    if (gainNodeRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume, audioContextRef.current?.currentTime ?? 0);
    }
  }, [frequency, detune, waveform, volume, isPlaying, pentScale]);

  const createOscillator = (frequency: number) => {
    if (!audioContextRef.current) {
      return;
    }

    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);

    oscillator.frequency.value = frequency;

    return { oscillator, gainNode };
  };

  const togglePlayback = () => {
    if (!audioContextRef.current) {
      return;
    }

    if (!oscillatorRef.current || !gainNodeRef.current) {
      const oscillatorObj = createOscillator(frequency);

      if (!oscillatorObj) {
        return;
      }

      oscillatorRef.current = oscillatorObj.oscillator;
      gainNodeRef.current = oscillatorObj.gainNode;

      if (oscillatorRef.current && gainNodeRef.current) {
        oscillatorRef.current.start();
      }
    }

    if (audioContextRef.current.state === "running") {
      audioContextRef.current.suspend().then(() => setIsPlaying(false));
    } else if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume().then(() => setIsPlaying(true));
    }
  };

  const handlePentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPentScale(e.target.value)
  }

  return (
    <div className='flex flex-col text-slate-400 justify-center items-stretch min-h-full min-w-fit w-3/5 border-2 border-slate-700 rounded py-8 px-20 my-10'>
      <h2 className="text-purple-600 font-bold text-6xl flex justify-center my-3">da generator</h2>
      <div className='mb-6'>
        <div className='relative my-2 flex flex-col'>
          <h3 className='flex text-3xl items-center justify-center w-full text-slate-300 '>{frequency} Hz</h3>
          <input
            id='frequency'
            className="range-lg text-white flex justify-center mb-3 bg-slate-700 py-3 rounded focus:outline-none text-left accent-green-600 hover:accent-green-600 min-w-full w-full h-3 cursor:pointer"
            type="range"
            min="130.81" // C3 frequency
            max="659.26" // E5 frequency
            value={frequency}
            step="0.01"
            onChange={(e) => setFrequency(parseFloat(e.target.value))}
          />
          <label
            htmlFor="frequency"
            className='absolute -bottom-1 left-2 text-sm font-thin'>freq</label>
        </div>
        {/* EXPERIMENTAL! */}
        <h4
          className='flex text-2xl items-center justify-center w-full text-indigo-600 font-light hover:font-semibold'>
          pick a pent
        </h4>
        <select
          className='flex justify-center items-center list-none text-2xl bg-slate-700  hover:bg-slate-500 ease-in-out duration-300 hover:text-green-400 text-purple-300 my-2 p-2 text-center rounded min-w-full focus:border-none outline-none appearance-none cursor-pointer'
          value={pentScale} onChange={handlePentChange}
        >
          <option value="E">Emin</option>
          <option value="Eb">Ebmin</option>
          <option value="A">Amin</option>
        </select>
        {/* END EXPERIMENTAL */}
        <div className='grid grid-cols-4 gap-2 my-3 p-2'>
          {pentScale && Object.entries(pentSelect(pentScale)).map(([note, freq]) => (
            <NoteButton key={note} note={note} frequency={freq} setFrequency={setFrequency} />
          ))}
        </div>
        <div className='relative my-2 flex flex-col'>

          <h3
            className='flex text-3xl items-center justify-center w-full text-slate-300'>{(volume * 1000 / 6).toFixed(0)}%</h3>
          <input
            id="volume"
            className="range-lg text-white flex justify-center mb-3 bg-slate-700 py-3 rounded focus:outline-none text-left accent-green-600 hover:accent-green-600 min-w-full w-full h-3 cursor:pointer"
            type="range"
            min="0"
            max=".6"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}

          />
          <label
            htmlFor="volume"
            className='absolute -bottom-1 left-2 text-sm font-thin'
          >volume</label>
        </div>
        <div className='relative my-5 flex flex-col'>
          <h3 className='flex text-3xl items-center justify-center w-full text-slate-300 '>{detune / 100} pitch & cents</h3>
          <input
            id='detune'
            className="relative range-lg text-white flex justify-center mb-3 bg-slate-700 py-3 rounded focus:outline-none text-left accent-green-600 hover:accent-green-600 ease-in-out duration-300 min-w-full w-full h-3 cursor:pointer"
            type="range"
            min="-1200"
            max="1200"
            step="1"
            value={detune}
            onChange={(e) => setDetune(parseFloat(e.target.value))}
          />
          <label
            htmlFor="detune"
            className='absolute -bottom-1 left-2 text-sm font-thin'>detune</label>
        </div>
      </div>
      <div className='relative flex flex-col items-center justify-center'>
        <select
          id='wave'
          className='flex justify-center items-center list-none text-2xl bg-slate-700  hover:bg-slate-500 ease-in-out duration-300 hover:text-purple-400 text-purple-300 my-2 p-2 text-center rounded min-w-full focus:border-none outline-none appearance-none cursor-pointer'
          value={waveform}
          onChange={(e) => setWaveform(e.target.value)}>
          <option value="sine">Sine</option>
          <option value="square">Square</option>
          <option value="sawtooth">Sawtooth</option>
          <option value="triangle">Triangle</option>
        </select>
        <label
          htmlFor="wave"
          className='absolute -top-3 left-2 text-sm font-thin'
        >waveform</label>

        {isPlaying ? (
          <button
            className="text-gray-300 text-1xl bg-slate-700 p-3 rounded hover:bg-slate-500 ease-in-out duration-300 hover:text-orange-300 flex-auto min-w-full cursor-pointer"
            onClick={togglePlayback}>Pause</button>

        ) : (
          <button
            className="text-gray-300 text-1xl bg-slate-700 p-3 rounded hover:bg-slate-500 ease-in-out duration-300 hover:text-green-300 flex-auto min-w-full cursor-pointer"
            onClick={togglePlayback}>Start</button>
        )}
      </div>
    </div >
  );
};
