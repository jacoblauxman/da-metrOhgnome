import { prisma } from "./prisma"


// GET todos (userId)
export async function getTodos(userId: string) {
  const todos = await prisma.toDo.findMany({ where: { userId: userId } })

  return todos
}

// POST todo
export async function createTodo(text: string, userId: string) {
  'use server'

  try {
    const todo = await prisma.toDo.create({ data: { text, userId } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

// PUT todo
export async function updateTodo(id: number, finished: boolean) {
  'use server'

  try {
    const todo = await prisma.toDo.update({ where: { id }, data: { finished } })
    return { todo }
  } catch (error) {
    return { error }
  }
}
