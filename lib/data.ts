export const notes: { [key: string]: number } = {
  'C3': 130.81,
  'C#/Db3': 138.59,
  'D3': 146.83,
  'D#/Eb3': 155.56,
  'E3': 164.81,
  'F3': 174.61,
  'F#/Gb3': 185.00,
  'G3': 196.00,
  'G#/Ab3': 207.65,
  'A3': 220.00,
  'A#/Bb3': 233.08,
  'B3': 246.94,
  'C4': 261.63,
  'C#/Db4': 277.18,
  'D4': 293.66,
  'D#/Eb4': 311.13,
  'E4': 329.63,
  'F4': 349.23,
  'F#/Gb4': 369.99,
  'G4': 392.00,
  'G#/Ab4': 415.30,
  'A4': 440.00,
  'A#/Bb4': 466.16,
  'B4': 493.88,
  'C5': 523.25,
  'C#/Db5': 554.37,
  'D5': 587.33,
  'D#/Eb5': 622.25,
  'E5': 659.25,
  'F5': 698.46,
  'F#/Gb5': 739.99,
  'G5': 783.99,
  'G#/Ab5': 830.61,
  'A5': 880.00,
  'A#/Bb5': 932.33,
  'B5': 987.77
}


export const triads: { [key: string]: string[] } = {
  'Cmaj': ['C3', 'E3', 'G3'],
  'Cmin': ['C3', 'D#/Eb3', 'G3'],
  'Caug': ['C3', 'E3', 'G#/Ab3'],
  'Cdim': ['C3', 'D#/Eb3', 'F#/Gb3'],
  'C#/Dbmaj': ['C#/Db3', 'F3', 'G#/Ab3'],
  'C#/Dbmin': ['C#/Db3', 'E3', 'G#/Ab3'],
  'C#/Dbaug': ['C#/Db3', 'F3', 'A3'],
  'C#/Dbdim': ['C#/Db3', 'E3', 'G3'],
  'Dmaj': ['D3', 'F#/Gb3', 'A3'],
  'Dmin': ['D3', 'F3', 'A3'],
  'Daug': ['D3', 'F#/Gb3', 'A#/Bb3'],
  'Ddim': ['D3', 'F3', 'G#/Ab3'],
  'D#/Ebmaj': ['D#/Eb3', 'G3', 'A#/Bb3'],
  'D#/Ebmin': ['D#/Eb3', 'F#/Gb3', 'A#/Bb3'],
  'D#/Ebaug': ['D#/Eb3', 'G3', 'B3'],
  'D#/Ebdim': ['D#/Eb3', 'F#/Gb3', 'A3'],
  'Emaj': ['E3', 'G#/Ab3', 'B3'],
  'Emin': ['E3', 'G3', 'B3'],
  'Eaug': ['E3', 'G#/Ab3', 'C4'],
  'Edim': ['E3', 'G3', 'A#/Bb3'],
  'Fmaj': ['F3', 'A3', 'C4'],
  'Fmin': ['F3', 'G#/Ab3', 'C4'],
  'Faug': ['F3', 'A3', 'C#/Db4'],
  'Fdim': ['F3', 'G#/Ab3', 'B3'],
  'F#/Gbmaj': ['F#/Gb3', 'A#/Bb3', 'C#/Db4'],
  'F#/Gbmin': ['F#/Gb3', 'A3', 'C#/Db4'],
  'F#/Gbaug': ['F#/Gb3', 'A#/Bb3', 'D4'],
  'F#/Gbdim': ['F#/Gb3', 'A3', 'C4'],
  'Gmaj': ['G3', 'B3', 'D4'],
  'Gmin': ['G3', 'A#/Bb3', 'D4'],
  'Gaug': ['G3', 'B3', 'D#/Eb4'],
  'Gdim': ['G3', 'A#/Bb3', 'C#/Db4'],
  'G#/Abmaj': ['G#/Ab3', 'C4', 'D#/Eb4'],
  'G#/Abmin': ['G#/Ab3', 'B4', 'D#/Eb4'],
  'G#/Abaug': ['G#/Ab3', 'C4', 'E4'],
  'G#/Abdim': ['G#/Ab3', 'B3', 'D4'],
  'Amaj': ['A3', 'C#/Db4', 'E4'],
  'Amin': ['A3', 'C4', 'E4'],
  'Aaug': ['A3', 'C#/Db4', 'F4'],
  'Adim': ['A3', 'C4', 'D#/Eb4'],
  'A#/Bbmaj': ['A#/Bb3', 'D4', 'F4'],
  'A#/Bbmin': ['A#/Bb3', 'C#/Db4', 'F4'],
  'A#/Bbaug': ['A#/Bb3', 'D4', 'F#/Gb4'],
  'A#/Bbdim': ['A#/Bb3', 'C#/Db4', 'E4'],
  'Bmaj': ['B3', 'D#/Eb4', 'F#/Gb4'],
  'Bmin': ['B3', 'D4', 'F#/Gb4'],
  'Baug': ['B3', 'D#/Eb4', 'G4'],
  'Bdim': ['B3', 'D4', 'F4'],
};



// for ez melody play
export const eMinPent = ['D4', 'E4', 'G4', 'A4', 'B4', 'D5', 'E5', 'G5']
export const eBMinPent = ['C#/Db4', 'D#/Eb4', 'F#/Gb4', 'G#/Ab4', 'A#/Bb4', 'C#/Db5', 'D#/Eb5', 'F#/Gb5']
export const aMinPent = ['G4', 'A4', 'C4', 'D4', 'E4', 'G5', 'A5', 'C5']

export const qualities = ['maj', 'min', 'aug', 'dim']
export const roots = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];

export type FreqMap = {
  [key: string]: number
}

export const pentSelect = (key: string): FreqMap => {
  let res: FreqMap = {}
  if (key === 'E') {
    for (let note of eMinPent) {
      res[note] = notes[note]
    }
  } else if (key === 'Eb') {
    for (let note of eBMinPent) {
      res[note] = notes[note]
    }
  } else if (key === 'A') {
    for (let note of aMinPent) {
      res[note] = notes[note]
    }
  }

  return res
}
