interface NoteButtonProps {
  note: string
  frequency: number
  setFrequency: (frequency: number) => void
}

export default function NoteButton({ note, frequency, setFrequency }: NoteButtonProps) {
  return (
    <button
      className="text-sm font-light text-red-300 rounded-md border py-1 hover:bg-slate-700 ease-in-out duration-300 hover:text-purple-500 hover:font-semibold"
      onClick={() => setFrequency(frequency)}>
      {note}
    </button>
  )
}
