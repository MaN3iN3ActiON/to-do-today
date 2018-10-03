import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ title, stage }) => (
	<li>
		<strong>{title}</strong>
		<em>{stage}</em>
	</li>
)

Task.propTypes = {
	title: PropTypes.string,
	stage: PropTypes.string
}

export default Task
