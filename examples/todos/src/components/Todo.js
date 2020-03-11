import React from 'react'
import { TodoPropType } from '../StorePropType'

const Todo = ({ todo }) => (
  <li
    onClick={() => todo.completed = !todo.completed}
    style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}
  >
    {todo.text}
  </li>
)

Todo.propTypes = {
  todo: TodoPropType
}

export default Todo
