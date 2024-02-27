import React from "react"
import { TypeTodo } from "./todos"

const Todo: React.FC<TypeTodo> = ({ id, value }) => {
  return <li onClick={() => {}}>{value}</li>
}

export default Todo
