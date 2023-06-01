import ToDoForm from "@/components/ToDoForm";
import ToDoItem from "@/components/ToDoItem";
import { getTodos } from "@/lib/todos";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  auth,
  currentUser
} from "@clerk/nextjs";
import Link from "next/link";


export default async function Page() {

  const { userId } = auth()
  const user = await currentUser()
  const todos = await getTodos(userId!)
  // console.log(todos, 'todos in app')

  return (
    <main
      className='mt-8 flex flex-col min-h-full h-full w-fit max-w-5/8 items-center'>
      <h1 className='p-2 text-transparent bg-clip-text text-6xl bg-gradient-to-r from-green-500 to-purple-600 via-orange-500 my-8'>hopes&#44; dreams&#44; goals &apos;n&apos; in-betweens</h1>
      <Link
        className="text-gray-300 text-sm bg-slate-700 p-3 mb-5 rounded hover:bg-slate-400 ease-in-out duration-300 hover:text-indigo-700 hover:font-semibold flex-auto min-w-fit cursor-pointer"
        href='/'>
        homeward boundward
      </Link>
      <SignedIn>
        {/* <div>
          User ID: {userId}
        </div> */}
        {/* <div>
          moar user stuff:
        </div>
        {user && (
          <div>
            {user.profileImageUrl}
          </div>
         )} */}
        <div className='min-w-fit w-3/5 flex flex-col justify-center items-center py-10 my-5 rounded-md border-2 border-indigo-600'>
          <h2
            className='text-3xl text-lime-500 font-semibold min-w-fit w-full flex justify-center'
          >add on to the pile!</h2>
          <ToDoForm />
        </div>
        <div className='max-w-3/5 flex flex-col justify-center items-center my-5 p-2 flex-wrap'>
          <h2
            className='text-3xl text-blue-400 font-semibold min-w-fit w-full flex justify-center my-4 p-2'
          >thinking of things to do...</h2>
          {todos.length > 0 ? (
            <section className='text-orange-300 font-light text-xl flex flex-col min-w-fit max-w-3xl flex-wrap border-2 border-lime-800 px-6 py-8 rounded-md'>
              {todos && todos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} />
              ))}
            </section>
          ) : (
            <section className='text-3xl text-orange-300 min-w-fit w-9/12 flex flex-col flex-wrap border-2 border-lime-800 px-6 py-8 rounded-md'>
             ¿ nothing here yet ? dang
            </section>
          )
          }
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>

    </main >
  );
}
