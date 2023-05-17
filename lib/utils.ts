
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
