import { createTodo } from "@/lib/todos";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";


async function createTodoAction(data: FormData) {
  'use server'
  const { userId } = auth()
  const text = data.get('text')

  // TODO: update error handling with simple message display
  if (typeof text !== "string" || text.length === 0) {
    throw new Error("Invalid Todo Text")
  }
  if (!userId) throw new Error("Must be logged in")

  const res = await createTodo(text, userId)
  console.log(res, 'RES IN FORM ACTION')
  // return res
  revalidatePath("/user")
}

export default function ToDoForm() {
  return (
    <form action={createTodoAction}>
      <h2>hopes, dreams, goals, and in betweens? throw em in</h2>
      <input type='text' name="text" />
      <button type='submit'>add it</button>
    </form>
  )
}
