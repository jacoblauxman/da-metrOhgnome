'use client'

import { toggleFinishedAction } from "@/app/_actions"
import { ToDo } from "@prisma/client"
import { useTransition } from "react"

type ToDoProps = {
  todo: ToDo
}


export default function ToDoItem({ todo }: ToDoProps) {

  let [isPending, startTransition] = useTransition()

  return (
    <div>
      <input
        id={`todo.id`}
        type='checkbox'
        defaultChecked={todo.finished}
        onChange={(e) => startTransition(() => toggleFinishedAction(`todo.id`, e.target.checked))}
      />
      <label
        htmlFor={`todo.id`}>
        {todo.text}
      </label>
    </div>
  )
}
