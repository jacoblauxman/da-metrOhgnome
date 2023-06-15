'use client'

import { removeTodoAction, toggleFinishedAction } from "@/app/_actions"
import { ToDo } from "@prisma/client"
import { useTransition } from "react"

type ToDoProps = {
  todo: ToDo
}


export default function ToDoItem({ todo }: ToDoProps) {

  let [isPending, startTransition] = useTransition()

  return (
    <section className='flex items-baseline justify-between'>
      <div className='flex items-baseline gap-4'>
        <input
          className='peer accent-indigo-400 h-4 w-4 cursor-pointer rounded border-slate-300 focus:ring-indigo-600'
          id={`todo.id`}
          type='checkbox'
          defaultChecked={todo.isFinished}
          onChange={(e) =>
            startTransition(() => toggleFinishedAction(String(todo.id), e.target.checked))}
        />
        <label
          className='my-2 cursor-pointer peer-checked:text-green-200 peer-checked:font-extralight peer-checked:line-through flex wrap'
          htmlFor={`todo.id`}>
          {todo.text}
        </label>
      </div>
      <button
        className='text-red-400 hover:text-red-300 rounded-md py-1 px-1 hover:bg-slate-950 ease-in-out duration-300 text-sm font-light cursor-pointer'
        onClick={(e) => startTransition(() => removeTodoAction(String(todo.id)))}
      >delete</button>
    </section>
  )
}
