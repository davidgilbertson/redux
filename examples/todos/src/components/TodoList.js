import React from 'react'
import { collect } from 'react-recollect'
import Todo from './Todo'
import { VisibilityFilters } from '../constants'
import { StorePropType } from '../StorePropType'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const TodoList = ({ store }) => {
  const todos = getVisibleTodos(store.todos, store.visibilityFilter)

  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
        />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  store: StorePropType
}

export default collect(TodoList)
