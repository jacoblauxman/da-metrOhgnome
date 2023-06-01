// TODO: create header with auth login from Clerk next --> set up 'todo' / 'practice log' next for user data (prisma for db storage?)

// import { UserButton } from "@clerk/nextjs";
// import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

// export default function Header() {

//   //   return (
//   //     <nav className='py-4 flex min-w-fit w-full'>
//   //       <UserButton afterSignOutUrl="/" />
//   //     </nav>
//   //   )
//   // }
//   return (
//     <header
//       style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
//     >
//       <h1>My App</h1>
//       <SignedIn>
//         {/* Mount the UserButton component */}
//         <UserButton afterSignOutUrl="/" />
//       </SignedIn>
//       <SignedOut>
//         {/* Signed out users get sign in button */}
//         <SignInButton />
//       </SignedOut>
//     </header>
//   );
// }


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
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <Link href='/user'>
        <h1>User Stuff</h1>
      </Link>
      <SignedIn>
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
