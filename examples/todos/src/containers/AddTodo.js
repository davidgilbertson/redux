import React from 'react'
import { collect } from 'react-recollect'
import { StorePropType } from '../StorePropType'

let nextTodoId = 0

const AddTodo = ({ store }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        store.todos.push({
          id: nextTodoId++,
          text: input.value,
          completed: false,
        })
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  store: StorePropType,
}

export default collect(AddTodo)
