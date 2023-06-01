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
    if (res.error) {
      console.log(res, 'WERE IN THE CATCH IN CREATE TODO ACTION')
      throw new Error()
    }
    // return res
    revalidatePath("/user")

}

export default function ToDoForm() {
  return (
    <form
      className='flex flex-col py-3 min-w-fit w-3/5'
      action={createTodoAction}>
      <input
        className='px-3 my-4 border-none bg-slate-500 text-white font- rounded-sm min-w-fit w-full focus:outline-none '
        type='text' name="text" />
      <button
        className='p-3 border-2 rounded-sm text-l font-light text-slate-300 my-4 hover:font-semibold hover:text-cyan-400 hover:bg-slate-900 ease-in-out duration-300'
        type='submit'>add it</button>
    </form>
  )
}
