'use client'
import { useState, useEffect, useRef } from 'react';
import { triadIdx } from '@/lib/utils';

interface ChordToneProps {
  index: number;
  frequency: number;
  oscillatorType: OscillatorType;
  isPlaying: boolean;
  volume: number;
  label: string;
  note: string;
  octaveShift: number;
  onOctaveShiftChange: (newShift: number) => void;
}

const ChordTone: React.FC<ChordToneProps> = ({
  index,
  frequency,
  oscillatorType,
  isPlaying,
  volume,
  note,
  label,
  octaveShift,
  onOctaveShiftChange,
}) => {
  const [detune, setDetune] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const detuneRef = useRef<number>(0);

  useEffect(() => {
    audioContextRef.current = new AudioContext();
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  useEffect(() => {
    if (!audioContextRef.current || !isPlaying) {
      return;
    }

    const adjustedFrequency = frequency * Math.pow(2, octaveShift);

    oscillatorRef.current = audioContextRef.current.createOscillator();
    gainNodeRef.current = audioContextRef.current.createGain();

    oscillatorRef.current.connect(gainNodeRef.current);
    gainNodeRef.current.connect(audioContextRef.current.destination);

    oscillatorRef.current.type = oscillatorType;
    oscillatorRef.current.frequency.setValueAtTime(adjustedFrequency, Math.max(0, audioContextRef.current.currentTime + detune / 100));
    oscillatorRef.current.start();

    gainNodeRef.current.gain.setValueAtTime(volume, audioContextRef.current.currentTime);

    console.log('detune in chord tone!', detune, adjustedFrequency, 'FREQUENCY', note, 'NOTE!');
    return () => {
      oscillatorRef.current?.stop();
      oscillatorRef.current?.disconnect();
      gainNodeRef.current?.disconnect();
    };
  }, [oscillatorType, frequency, detune, isPlaying, volume, octaveShift, note]);


  const handleOctaveInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newOctaveShift = parseInt(event.target.value);
    onOctaveShiftChange(newOctaveShift);
  };

  return (
    <div>
      <div>
        <span>{triadIdx(index)} Octave Shift:</span>
        <input
          className="range-lg text-white flex justify-center mb-3 bg-slate-700 py-3 rounded focus:outline-none text-left accent-indigo-500 hover:accent-indigo-500 min-w-full w-full h-3 cursor:pointer"

          type="range" min="-1" max="1" step="1" value={octaveShift} onChange={handleOctaveInputChange} />
      </div>
    </div>
  );
};

export default ChordTone;
