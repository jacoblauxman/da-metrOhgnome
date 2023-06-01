import { getTodos } from "@/lib/todos";
import { auth } from "@clerk/nextjs";
import ToDoItem from "./ToDoItem";

type ToDoProps = {
  id: string,
  text: string,
  finished: boolean,
  toggleFinished: (id: number, finished: boolean) => void
}


export default async function ToDoList() {
  const { userId } = auth()
  const todos = await getTodos(userId!)

  console.log(todos, 'TODOS in COMPONENT!')

  return (
    <main>
      <h1>USER TODOS!</h1>
      <div>
        {Object.values(todos).map(todo => (
          <li key={todo.id}>
            <p>OUR TODO ID: {todo.id}</p>
            {todo.text} - {todo.userId} - {todo.createdAt.toLocaleDateString()}
            {/* <ToDoItem id={`todo.id`} text={todo.text} finished={todo.finished} /> */}
          </li>
        ))}
      </div>
    </main>
  )
}
