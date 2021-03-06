import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const FilterLink = ({ filter, children }) => (
	<NavLink
		to={`/${filter === 'doing'? '' : filter}`}
		exact
		activeStyle={{
			textDecoration: 'none',
			color: 'black'
		}}
	>
		{children}
	</NavLink>
)
FilterLink.propTypes = {
	filter: PropTypes.string,
	children: PropTypes.node
}
export default FilterLink
