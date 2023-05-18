'use client'

import { getQualityKeyPress, getRootKeyPress } from '@/lib/utils';
import { useEffect, useState } from 'react'
import { roots } from '@/lib/data';

type ChordKBCtrlProps = {
  onRootNoteChange: (rootNote: string) => void;
  onChordQualityChange: (chordQuality: string) => void;
  onAccidentalChange: (isSharp: boolean) => void;
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void;
};


export default function ChordKBCtrl({ onRootNoteChange, onChordQualityChange, onAccidentalChange, isPlaying, setIsPlaying }: ChordKBCtrlProps) {
  const [accidentalKeyPressed, setAccidentalKeyPressed] = useState<boolean>(false)

  useEffect(() => {

    // kb logic
    const handleKeyDown = (e: KeyboardEvent) => {
      // pause
      if (e.key === 'p') {
        setIsPlaying(!isPlaying)
        return
      }
      // accidental
      if (e.key === '3') {
        setAccidentalKeyPressed(true)
        onAccidentalChange(true)
        return
      }
      // natural
      if (e.key === '8') {
        setAccidentalKeyPressed(false)
        onAccidentalChange(false)
        return
      }
      const root = getRootKeyPress(e.key)
      const quality = getQualityKeyPress(e.key)

      if (root !== null) {
        if (accidentalKeyPressed) {
          const accidentalRoot = roots.find((r) => r.includes(`${root}#`))
          if (accidentalRoot) {
            onRootNoteChange(accidentalRoot)
          }
          setAccidentalKeyPressed(false)
          onAccidentalChange(false)
        } else {
          onRootNoteChange(root)
        }
      }

      if (quality !== null) {
        onChordQualityChange(quality)
      }
    };

    // attach on mount
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }

  }, [onRootNoteChange, onChordQualityChange, accidentalKeyPressed, isPlaying, setIsPlaying])

  return null
}
