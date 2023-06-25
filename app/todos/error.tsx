'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='min-h-full mt-10 max-w-4/5 text-6xl text-red-400 flex flex-col justify-center items-center'>
      <h2 className='font-extrabold underline my-10 p-4'>Something Went Wrong!</h2>
      <h3 className='text-4xl my-10 p-8 text-orange-400'>hazard a guess - limits of todo text input were met</h3>
      <button
        className="text-gray-300 text-sm bg-slate-700 p-3 mb-5 rounded hover:bg-slate-400 ease-in-out duration-300 hover:text-indigo-700 hover:font-semibold flex-auto min-w-fit cursor-pointer"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <h2>OR</h2>
      <Link
        className="text-gray-300 text-sm bg-slate-700 p-3 mb-5 rounded hover:bg-slate-400 ease-in-out duration-300 hover:text-indigo-700 hover:font-semibold flex-auto min-w-fit cursor-pointer"
        href='/'>
        homeward boundward
      </Link>
    </div>
  );
}
