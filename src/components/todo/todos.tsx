import React, { useState } from "react"
import Todo from "./todo"

export interface TypeTodo {
  id: number
  value: string
}

const Todos = () => {
  const [todos, setTodos] = useState<TypeTodo[]>([])
  const [todo, setTodo] = useState("")

  const handleSubmitTodo = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, value: todo },
    ])
    setTodo("")
  }

  return (
    <div>
      <h1>Todos</h1>

      <form>
        <label htmlFor="todo">Write your Todo</label>
        <input
          type="text"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleSubmitTodo}>Submit</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo id={todo.id} value={todo.value} key={todo.id} />
        ))}
      </ul>
    </div>
  )
}

export default Todos
