'use server'

import { createTodo, updateTodo } from "@/lib/todos"
import { revalidatePath } from "next/cache"


export async function newTodoAction(text: string, userId: string) {
  await createTodo(text, userId)
  revalidatePath("/user")
}

export async function toggleFinishedAction(id: string, finished: boolean) {
  await updateTodo(Number(id), finished)
  revalidatePath("/user")
}
