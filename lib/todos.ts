import { prisma } from "./prisma"


// GET todos (userId)
export async function getTodos(userId: string) {
  // 'use server'
  const todos = await prisma.toDo.findMany({ where: { userId: userId }, orderBy: { id: 'asc' } })
  return todos
}

// POST todo
export async function createTodo(text: string, userId: string) {
  'use server'

  try {
    const todo = await prisma.toDo.create({ data: { text, userId } })
    console.log(todo, 'IN OUR ACTION')
    return { todo }
  } catch (error) {
    console.log(error, 'ERROR IN CATCH')
    return { error }
  }
}

// PUT todo
export async function updateTodo(id: number, isFinished: boolean) {
  'use server'

  try {
    const todo = await prisma.toDo.update({ where: { id }, data: { isFinished: isFinished } })
    console.log(todo, 'in update todo')
    return { todo }
  } catch (error) {
    return { error }
  }
}


// DELETE todo
export async function deleteTodo(id: number) {
  'use server'

  try {
    const todo = await prisma.toDo.delete({ where: { id } })
    return { todo, 'message': 'Successfully deleted Todo' }
  } catch (error) {
    return { error }
  }
}
