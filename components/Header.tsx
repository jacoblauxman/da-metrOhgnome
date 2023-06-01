import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className='absolute top-0 flex justify-evenly items-center w-full min-w-fit py-4 px-8 text-2xl bg-slate-800 text-indigo-400 hover:text-indigo-300 ease-in-out duration-300'
    // style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <SignedIn>
        <Link
          className='text-2xl text-orange-300 hover:text-orange-500 ease-in-out duration-300'
          href='/todos'>
          <h1>your list</h1>
        </Link>
        {/* Mount the UserButton component */}
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
}
