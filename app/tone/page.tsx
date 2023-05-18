import Link from "next/link";
import ToneGenerator from "@/components/ToneGenerator";


export default function page() {
  return (
    <div
      className='bg-slate-800 flex flex-col items-center justify-center min-h-screen min-w-fit box-border'>
      <h1 className="text-green-600 font-bold text-6xl flex justify-center my-3 min-w-fit">noiseMakers</h1>
      <h2 className="text-orange-300 font-bold text-5xl flex justify-center my-3">have fun 🤠</h2>
      <Link
        className="text-gray-300 text-sm bg-slate-700 p-3 rounded hover:bg-slate-400 ease-in-out duration-300 hover:text-indigo-700 hover:font-semibold flex-auto min-w-fit cursor-pointer"
        href='/'>homeward boundward</Link>
      <div>
        <ToneGenerator />
        <ToneGenerator />
        <ToneGenerator />
      </div>
    </div>
  )
}
