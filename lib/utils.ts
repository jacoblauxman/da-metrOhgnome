import { triads, notes, chordSpellings, frequenciesOfNotes } from "./data"
// for Timer:
// converts ms to proper time
export const timeDisplay = (t: number): string => {
  let min = Math.floor(t / 60)
  let sec = t - (min * 60)
  let minDisplay
  let secDisplay

  min < 10 ? minDisplay = `0${min}` : minDisplay = min
  sec < 10 ? secDisplay = `0${sec}` : secDisplay = sec

  return `${minDisplay}:${secDisplay}`
}





// for ChordTone:
// assigning root/3rd/5th (triads):
export const triadIdx = (idx: number): string => {
  let res = ''
  idx === 0 ? res = 'Root' : idx === 1 ? res = 'Third' : res = 'Fifth'
  return res
}



// for ChordKBCtrl
// returning root value from keyboard input:

export const getRootKeyPress = (key: string): string | null => {
  switch (key) {
    case 'a':
      return 'A'
    case 'b':
      return 'B'
    case 'c':
      return 'C'
    case 'd':
      return 'D'
    case 'e':
      return 'E'
    case 'f':
      return 'F'
    case 'g':
      return 'G'
    default:
      return null
  }
}

export const getQualityKeyPress = (key: string): string | null => {
  switch (key) {
    case 'i':
      return 'maj'
    case 'k':
      return 'min'
    case 'j':
      return 'dim'
    case 'l':
      return 'aug'
    default:
      return null
  }
}



export const autoVoiceLead = (currentFreqs: number[], newChord: string) => {
  let [freq1, freq2, freq3] = currentFreqs
  const newChordSpelling: string[] = chordSpellings[newChord]

  const freqChoices: number[] = [...frequenciesOfNotes[newChordSpelling[0]], ...frequenciesOfNotes[newChordSpelling[1]], ...frequenciesOfNotes[newChordSpelling[2]]]
  freqChoices.sort((a, b) => a - b)

  const freqChoicesMap: Record<string, {closest: number, secondClosest: number, closestDiff: number, secondClosestDiff: number, isAssigned: boolean, assignedVal: number}> = {}
  let freqChoicesArr: number[] = []
  let freqAssignments: number[] = []

  for (let freq of currentFreqs) {
    freqChoicesMap[`${freq}`] = {closest: Infinity, secondClosest: Infinity, closestDiff: Infinity, secondClosestDiff: Infinity, isAssigned: false, assignedVal: Infinity}
  }

  for (let freq in freqChoicesMap) {

    let closest = freqChoicesMap[freq].closest;
    let secondClosest = freqChoicesMap[freq].secondClosest;

    for (let i = 0; i < freqChoices.length; i++) {
      let choice = freqChoices[i];
      let diff = Math.abs(+freq - choice)

      if (diff < Math.abs(+freq - closest)) {
        secondClosest = closest
        closest = choice
      } else if (diff < Math.abs(+freq - secondClosest)) {
        secondClosest = choice
      }
    }

    freqChoicesMap[freq].closest = closest;
    freqChoicesMap[freq].closestDiff = Math.abs(+freq - closest)
    freqChoicesMap[freq].secondClosest = secondClosest;
    freqChoicesMap[freq].secondClosestDiff = Math.abs(+freq - secondClosest)

    // for tracking unique values (later comparison)
    freqChoicesArr = [...freqChoicesArr, closest, secondClosest]
  }

  console.log(`NEW TEST \n \n currentFreqs: ${currentFreqs} \n AND \n freqChoices: ${freqChoicesArr} to our new Chord ${newChord}`)

  for (const freq in freqChoicesMap) {
    const closest = freqChoicesMap[freq].closest
    const secondClosest = freqChoicesMap[freq].secondClosest
    const freqNum = +freq

    // console.log(freq, ':', freqChoicesMap[freq], 'Freq in the for in loop')
    if (freqChoicesArr.filter(freq => freq === closest).length === 1) {
      console.log(`in closest of ${freq} with filter of 1, ${closest} value: this should assign our closest to override ${freqNum}, which is idx ${currentFreqs.indexOf(freqNum)}`)
      freqNum === freq1 ? freq1 = closest : freqNum === freq2 ? freq2 = closest : freqNum === freq3 ? freq3 = closest : null
      freqChoicesMap[freq].isAssigned = true
      freqChoicesMap[freq].assignedVal = closest
      freqAssignments.push(closest)
    } else if (freqChoicesArr.filter(freq => freq === secondClosest).length === 1) {
            console.log(`in secondClosest of ${freq} with filter of 1, ${secondClosest} value: this should assign our secondClosest to override ${freqNum}, which is idx ${currentFreqs.indexOf(freqNum)}`)
      freqNum === freq1 ? freq1 = secondClosest : freqNum === freq2 ? freq2 = secondClosest : freqNum === freq3 ? freq3 = secondClosest : null
      freqChoicesMap[freq].isAssigned = true
      freqChoicesMap[freq].assignedVal = secondClosest
      freqAssignments.push(secondClosest)
    } else {
      if (freqAssignments.includes(closest)) {
        freqNum === freq1 ? freq1 = secondClosest : freqNum === freq2 ? freq2 = secondClosest : freqNum === freq3 ? freq3 = secondClosest : null
        freqChoicesMap[freq].isAssigned = true
        freqChoicesMap[freq].assignedVal = secondClosest
        freqAssignments.push(secondClosest)
      console.log(`in secondClosest of ${freq} with no uniques, ${secondClosest} value: this should assign our secondClosest to override ${freqNum}, which is idx ${currentFreqs.indexOf(freqNum)}`)
      } else {

      freqNum === freq1 ? freq1 = closest : freqNum === freq2 ? freq2 = closest : freqNum === freq3 ? freq3 = closest : null
      freqChoicesMap[freq].isAssigned = true
      freqChoicesMap[freq].assignedVal = closest
      freqAssignments.push(closest)
            console.log(`in closest of ${freq} with no uniques, ${closest} value: this should assign our closest to override ${freqNum}, which is idx ${currentFreqs.indexOf(freqNum)}`)

      }
      }
    }

    console.log(freqChoicesMap, 'map after assignments')
  currentFreqs = [freq1, freq2, freq3]

  console.log('END OF TEST BEFORE RETURN, OUR NEW CURRENT FREQS:', currentFreqs, '\n \n')

  return currentFreqs
}





const CMaj = [65.41, 82.41, 98]

const FSharpMin = [92.5, 110, 138.59]

console.log(' \n \n  --------------- TEST BREAK --------------- \n \n')

// console.log('TEST ONE: AutoVL from Cmaj to Dmaj \n', 'RESULT', autoVoiceLead(CMaj, 'Dmaj'), '\n', '---------------------- \n')

// console.log('TEST TWO: setting autovoicelead from Dmaj to A#/Bbmaj \n', 'RESULT', autoVoiceLead([73.42, 92.5, 110], 'A#/Bbmaj'), '\n', '---------------------- \n')

// console.log('TEST THREE: Cmaj to F#min... \n', 'RESULT', autoVoiceLead(FSharpMin, 'Cmaj'))

// console.log('TEST FOUR: INCEPTION: \n RESULT', autoVoiceLead(autoVoiceLead(CMaj, 'Dmaj'), 'A#/Bbmaj'))


// console.log('TEST FIVE: spread voice check with Amaj to D#/Ebmaj \n', 'RESULT', autoVoiceLead([69.3, 110, 164.81], 'D#/Ebmaj'), '\n', '---------------------- \n')
