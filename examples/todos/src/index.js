import React from 'react'
import { render } from 'react-dom'
import { initStore } from 'react-recollect'
import App from './components/App'
import { VisibilityFilters } from './constants'

initStore({
  todos: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL
})

render(
  <App />,
  document.getElementById('root')
)
