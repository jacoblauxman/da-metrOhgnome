'use server'

import { createTodo, deleteTodo, updateTodo } from "@/lib/todos"
import { revalidatePath } from "next/cache"


export async function newTodoAction(text: string, userId: string) {
  await createTodo(text, userId)
  revalidatePath("/todos")
}

export async function toggleFinishedAction(id: string, finished: boolean) {
  // console.log(id, finished, 'ARGS IN TOGGLE')
  const updatedTodo = await updateTodo(Number(id), finished)
  console.log(updatedTodo)
  revalidatePath("/user")
}

export async function removeTodoAction(id: string) {
  await deleteTodo(Number(id))
  revalidatePath("/todos")
}
