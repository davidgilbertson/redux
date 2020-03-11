import React from 'react'
import PropTypes from 'prop-types'
import { collect } from 'react-recollect'
import { StorePropType } from '../StorePropType'

const Link = ({ filter, children, store }) => (
    <button
       onClick={() => {
         store.visibilityFilter = filter
       }}
       disabled={filter === store.visibilityFilter}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
  store: StorePropType
}

export default collect(Link)
