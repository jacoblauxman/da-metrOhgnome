
interface ChordButtonProps {
  root?: string
  quality?: string
  setRootNote?: (root: string) => void
  setChordQuality?: (quality: string) => void
}

export default function ChordButton({ root, quality, setRootNote, setChordQuality }: ChordButtonProps) {
  if (root && setRootNote) {
    return (
      <button
        className="text-sm font-light text-red-300 rounded-md border py-1 hover:bg-slate-700 ease-in-out duration-300 hover:text-purple-500 hover:font-semibold"
        onClick={() => setRootNote(root)}>
        {root}
      </button>
    )
  }

  if (quality && setChordQuality) {
    return (
      <button
        className="text-sm font-light text-red-300 rounded-md border py-1 hover:bg-slate-700 ease-in-out duration-300 hover:text-purple-500 hover:font-semibold"
        onClick={() => setChordQuality(quality)}>
        {quality}
      </button>
    )
  } else {
    return null
  }
}
