import PropTypes from 'prop-types'

export const TodoPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
});

export const StorePropType = PropTypes.shape({
  todos: PropTypes.arrayOf(TodoPropType),
  visibilityFilter: PropTypes.string.isRequired
})
