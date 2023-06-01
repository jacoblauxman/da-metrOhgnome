import ToDoForm from "@/components/ToDoForm";
import ToDoItem from "@/components/ToDoItem";
import ToDoList from "@/components/ToDoList";
import { getTodos } from "@/lib/todos";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  auth,
  currentUser
} from "@clerk/nextjs";

async function getUser() {
  const res = await currentUser()
  return res
}
export default async function page() {

  const { userId } = auth()
  const user = await getUser()
  console.log(auth(), 'calling auth()')
  // console.log(user, 'calling getUser()'
  const todos = await getTodos(userId!)

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <h1>Testing for further use</h1>
      <SignedIn>
        <div>
          User ID: {userId}
        </div>
        <div>
          moar user stuff:
        </div>
        {user && (
          <div>
            {user.profileImageUrl}
          </div>
        )}
        <div>
          <h2>TODO FORM</h2>
          <ToDoForm />
        </div>
        <div>
          <h2>::TODO LIST::</h2>
          {/* <ToDoList /> */}
          {todos && todos.map(todo => (
            <ToDoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </div>
  );
}
