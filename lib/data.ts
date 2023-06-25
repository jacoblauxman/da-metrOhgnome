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

export const bassNotes: { [key: string]: number } = {
  'C2': 65.41,
  'C#/Db2': 69.30,
  'D2': 73.42,
  'D#/Eb2': 77.78,
  'E2': 82.41,
  'F2': 87.31,
  'F#/Gb2': 92.50,
  'G2': 98,
  'G#/Ab2': 103.83,
  'A2': 110.00,
  'A#/Bb2': 116.54,
  'B2': 123.47,
  'C3': 130.81,
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



// Experimental - all tone frequencies object:

type NoteFrequencies = {
  [note: string]: number;
}

const noteFrequencies: NoteFrequencies = {
  "C0": 16.35,
  "C#0/Db0": 17.32,
  "D0": 18.35,
  "D#0/Eb0": 19.45,
  "E0": 20.60,
  "F0": 21.83,
  "F#0/Gb0": 23.12,
  "G0": 24.50,
  "G#0/Ab0": 25.96,
  "A0": 27.50,
  "A#0/Bb0": 29.14,
  "B0": 30.87,
  "C1": 32.70,
  "C#1/Db1": 34.65,
  "D1": 36.71,
  "D#1/Eb1": 38.89,
  "E1": 41.20,
  "F1": 43.65,
  "F#1/Gb1": 46.25,
  "G1": 49.00,
  "G#1/Ab1": 51.91,
  "A1": 55.00,
  "A#1/Bb1": 58.27,
  "B1": 61.74,
  "C2": 65.41,
  "C#2/Db2": 69.30,
  "D2": 73.42,
  "D#2/Eb2": 77.78,
  "E2": 82.41,
  "F2": 87.31,
  "F#2/Gb2": 92.50,
  "G2": 98.00,
  "G#2/Ab2": 103.83,
  "A2": 110.00,
  "A#2/Bb2": 116.54,
  "B2": 123.47,
  "C3": 130.81,
  "C#3/Db3": 138.59,
  "D3": 146.83,
  "D#3/Eb3": 155.56,
  "E3": 164.81,
  "F3": 174.61,
  "F#3/Gb3": 185.00,
  "G3": 196.00,
  "G#3/Ab3": 207.65,
  "A3": 220.00,
  "A#3/Bb3": 233.08,
  "B3": 246.94,
  "C4": 261.63,
  "C#4/Db4": 277.18,
  "D4": 293.66,
  "D#4/Eb4": 311.13,
  "E4": 329.63,
  "F4": 349.23,
  "F#4/Gb4": 369.99,
  "G4": 392.00,
  "G#4/Ab4": 415.30,
  "A4": 440.00,
  "A#4/Bb4": 466.16,
  "B4": 493.88,
  "C5": 523.25,
  "C#5/Db5": 554.37,
  "D5": 587.33,
  "D#5/Eb5": 622.25,
  "E5": 659.25,
  "F5": 698.46,
  "F#5/Gb5": 739.99,
  "G5": 783.99,
  "G#5/Ab5": 830.61,
  "A5": 880.00,
  "A#5/Bb5": 932.33,
  "B5": 987.77,
  "C6": 1046.50,
  "C#6/Db6": 1108.73,
  "D6": 1174.66,
  "D#6/Eb6": 1244.51,
  "E6": 1318.51,
  "F6": 1396.91,
  "F#6/Gb6": 1479.98,
  "G6": 1567.98,
  "G#6/Ab6": 1661.22,
  "A6": 1760.00,
  "A#6/Bb6": 1864.66,
  "B6": 1975.53,
  "C7": 2093.00,
  "C#7/Db7": 2217.46,
  "D7": 2349.32,
  "D#7/Eb7": 2489.02,
  "E7": 2637.02,
  "F7": 2793.83,
  "F#7/Gb7": 2959.96,
  "G7": 3135.96,
  "G#7/Ab7": 3322.44,
  "A7": 3520.00,
  "A#7/Bb7": 3729.31,
  "B7": 3951.07,
  "C8": 4186.01,
  "C#8/Db8": 4434.92,
  "D8": 4698.63,
  "D#8/Eb8": 4978.03,
  "E8": 5274.04,
  "F8": 5587.65,
  "F#8/Gb8": 5919.91,
  "G8": 6271.93,
  "G#8/Ab8": 6644.88,
  "A8": 7040.00,
  "A#8/Bb8": 7458.62,
  "B8": 7902.13
}


type FrequenciesOfNote = {
  [note: string]: number[]
}

// const frequenciesOfNotes = {
//   'C': [16.35, 32.7],
//   'C#': [],
//   'D': [],
//   'D#': [],
//   'E': [],
//   'F': [],
//   'F#': [],
//   'G': [],
//   'G#': [],
//   'A': [],
//   'A#': [],
//   'B': [],
// }


// EDIT: saved from function calling:

export const frequenciesOfNotes: FrequenciesOfNote = {
  'C': [16.35, 32.7, 65.41, 130.81, 261.63, 523.25, 1046.5, 2093],
  'C#/Db': [17.32, 34.65, 69.3, 138.59, 277.18, 554.37, 1108.73, 2217.46],
  'D': [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66, 2349.32],
  'D#/Eb': [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02],
  'E': [20.6, 41.2, 82.41, 164.81, 329.63, 659.25, 1318.51, 2637.02],
  'F': [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91, 2793.83],
  'F#/Gb': [23.12, 46.25, 92.5, 185, 369.99, 739.99, 1479.98, 2959.96],
  'G': [24.5, 49, 98, 196, 392, 783.99, 1567.98, 3135.96],
  'G#/Ab': [25.96, 51.91, 103.83, 207.65, 415.3, 830.61, 1661.22, 3322.44],
  'A': [27.5, 55, 110, 220, 440, 880, 1760, 3520],
  'A#/Bb': [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31],
  'B': [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53, 3951.07],
};





export const chordSpellings: {[chord: string]: string[]} = {
  'Cmaj': ['C', 'E', 'G'],
  'Cmin': ['C', 'D#/Eb', 'G'],
  'Caug': ['C', 'E', 'G#/Ab'],
  'Cdim': ['C', 'D#/Eb', 'F#/Gb'],
  'C#/Dbmaj': ['C#/Db', 'F', 'G#/Ab'],
  'C#/Dbmin': ['C#/Db', 'E', 'G#/Ab'],
  'C#/Dbaug': ['C#/Db', 'F', 'A'],
  'C#/Dbdim': ['C#/Db', 'E', 'G'],
  'Dmaj': ['D', 'F#/Gb', 'A'],
  'Dmin': ['D', 'F', 'A'],
  'Daug': ['D', 'F#/Gb', 'A#/Bb'],
  'Ddim': ['D', 'F', 'G#/Ab'],
  'D#/Ebmaj': ['D#/Eb', 'G', 'A#/Bb'],
  'D#/Ebmin': ['D#/Eb', 'F#/Gb', 'A#/Bb'],
  'D#/Ebaug': ['D#/Eb', 'G', 'B'],
  'D#/Ebdim': ['D#/Eb', 'F#/Gb', 'A'],
  'Emaj': ['E', 'G#/Ab', 'B'],
  'Emin': ['E', 'G', 'B'],
  'Eaug': ['E', 'G#/Ab', 'C'],
  'Edim': ['E', 'G', 'A#/Bb'],
  'Fmaj': ['F', 'A', 'C'],
  'Fmin': ['F', 'G#/Ab', 'C'],
  'Faug': ['F', 'A', 'C#/Db'],
  'Fdim': ['F', 'G#/Ab', 'B'],
  'F#/Gbmaj': ['F#/Gb', 'A#/Bb', 'C#/Db'],
  'F#/Gbmin': ['F#/Gb', 'A', 'C#/Db'],
  'F#/Gbaug': ['F#/Gb', 'A#/Bb', 'D'],
  'F#/Gbdim': ['F#/Gb', 'A', 'C'],
  'Gmaj': ['G', 'B', 'D'],
  'Gmin': ['G', 'A#/Bb', 'D'],
  'Gaug': ['G', 'B', 'D#/Eb'],
  'Gdim': ['G', 'A#/Bb', 'C#/Db'],
  'G#/Abmaj': ['G#/Ab', 'C', 'D#/Eb'],
  'G#/Abmin': ['G#/Ab', 'B', 'D#/Eb'],
  'G#/Abaug': ['G#/Ab', 'C', 'E'],
  'G#/Abdim': ['G#/Ab', 'B', 'D'],
  'Amaj': ['A', 'C#/Db', 'E'],
  'Amin': ['A', 'C', 'E'],
  'Aaug': ['A', 'C#/Db', 'F'],
  'Adim': ['A', 'C', 'D#/Eb'],
  'A#/Bbmaj': ['A#/Bb', 'D', 'F'],
  'A#/Bbmin': ['A#/Bb', 'C#/Db', 'F'],
  'A#/Bbaug': ['A#/Bb', 'D', 'F#/Gb'],
  'A#/Bbdim': ['A#/Bb', 'C#/Db', 'E'],
  'Bmaj': ['B', 'D#/Eb', 'F#/Gb'],
  'Bmin': ['B', 'D', 'F#/Gb'],
  'Baug': ['B', 'D#/Eb', 'G'],
  'Bdim': ['B', 'D', 'F'],
};
