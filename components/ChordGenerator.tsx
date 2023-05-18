'use client'

import React, { useState } from 'react';
import ChordTone from './ChordTone';
import ChordButton from './ChordButton';
import { notes, triads, qualities, roots } from '@/lib/data'; // Replace with the actual file name containing notes and triads

const ChordGenerator: React.FC = () => {
  const [oscillatorType, setOscillatorType] = useState<OscillatorType>('sine');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [octaveShifts, setOctaveShifts] = useState([0, 0, 0]);
  const [rootNote, setRootNote] = useState('C');
  const [chordQuality, setChordQuality] = useState('maj');

  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value));
  };

  const handleOscillatorTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOscillatorType(event.target.value as OscillatorType);
  };

  const handleOctaveShiftChange = (index: number, newShift: number) => {
    const updatedShifts = [...octaveShifts];
    updatedShifts[index] = newShift;
    setOctaveShifts(updatedShifts);
  };

  const rootButtons = roots.map((root) => (
    <ChordButton key={root} setRootNote={setRootNote} root={root} />
  ));

  const chordQualityButtons = qualities.map((quality) => (
    <ChordButton key={quality} setChordQuality={setChordQuality} quality={quality} />
  ));

  const chordNotes = triads[`${rootNote}${chordQuality}`];
  const frequencies = chordNotes.map((note) => notes[note]);

  return (
    <div className='flex flex-col text-slate-400 justify-center items-stretch min-h-full min-w-fit w-3/5 border-2 border-slate-700 rounded py-8 px-20 my-10'>
      <h2 className="text-blue-600 font-bold text-6xl flex justify-center my-3">&apos;armOhknees</h2>

      {isPlaying ? (
        <button
          className="text-gray-300 text-1xl bg-slate-700 p-3 rounded hover:bg-slate-500 ease-in-out duration-300 hover:text-orange-300 flex-auto min-w-full cursor-pointer"
          onClick={handlePlayButtonClick}>Pause</button>

      ) : (
        <button
          className="text-gray-300 text-1xl bg-slate-700 p-3 rounded hover:bg-slate-500 ease-in-out duration-300 hover:text-green-300 flex-auto min-w-full cursor-pointer"
          onClick={handlePlayButtonClick}>Start</button>
      )}
      <div className='flex flex-col justify-center items-center min-w-fit w-full'>
        <h3
          className="text-blue-400 hover:text-blue-200 ease-in-out duration-300 font-bold text-3xl flex justify-center my-3"
        >Volume</h3>
        <input
          className="range-lg text-white flex justify-center mb-3 bg-slate-700 py-3 rounded focus:outline-none text-left accent-indigo-600 hover:accent-indigo-600 min-w-full w-full h-3 cursor:pointer"
          type="range" min="0" max="0.65" step="0.01" value={volume} onChange={handleVolumeChange} />
      </div>
      <div>
        <h3
          className="text-blue-400 hover:text-blue-200 ease-in-out duration-300 font-bold text-3xl flex justify-center my-3"
        >vvaveform</h3>
        <select
          className='flex justify-center items-center list-none text-2xl bg-slate-700  hover:bg-slate-500 ease-in-out duration-300 hover:text-purple-400 text-purple-300 my-2 p-2 text-center rounded min-w-full focus:border-none outline-none appearance-none cursor-pointer'
          value={oscillatorType} onChange={handleOscillatorTypeChange}>
          <option value="sine">Sine</option>
          <option value="square">Square</option>
          <option value="sawtooth">Sawtooth</option>
          <option value="triangle">Triangle</option>
        </select>
      </div>
      <h3
        className="text-blue-400 hover:text-blue-200 ease-in-out duration-300 font-bold text-3xl flex justify-center my-3"
      >root</h3>
      <div
        className='grid grid-cols-4 gap-2 my-3 p-2'
      >{rootButtons}</div>
      <h3
        className="text-blue-400  hover:text-blue-200 ease-in-out duration-300 font-bold text-3xl flex justify-center my-3"
      >
        quality
      </h3>
      <div
        className='grid grid-cols-4 gap-2 my-3 p-2'
      >{chordQualityButtons}</div>
      <div
        className="text-green-500 hover:text-green-400 ease-in-out duration-300 font-bold text-5xl flex justify-center my-3">
        {rootNote} {chordQuality}
      </div>
      {frequencies.map((frequency, index) => (
        <ChordTone
          index={index}
          key={index}
          frequency={frequency}
          oscillatorType={oscillatorType}
          isPlaying={isPlaying}
          volume={volume}
          label={`Tone ${index + 1}`}
          note={`Note ${index + 1}`}
          octaveShift={octaveShifts[index]}
          onOctaveShiftChange={(newShift) => handleOctaveShiftChange(index, newShift)}
        />
      ))}
    </div>
  );
};

export default ChordGenerator;
