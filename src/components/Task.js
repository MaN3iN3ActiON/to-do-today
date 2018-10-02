import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ task }) => (
	<li>
		<strong>{task.title}</strong>
		<em>{task.stage}</em>
	</li>
)

Task.propTypes = {
	task: PropTypes.object
}

export default Task
