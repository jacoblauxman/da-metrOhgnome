import { triads, notes } from "./data"
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
