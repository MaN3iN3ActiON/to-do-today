import React from 'react'
import Task from './Task'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	padding-bottom: 10px;
`

const TaskList = ({ tasks }) => {
	const taskList = tasks.map(task => <Task key={task.id} {...task} />)
	return (
		<section>
			<h3>Today</h3>
			<List>{taskList}</List>
		</section>
	)
}

TaskList.propTypes = {
	tasks: PropTypes.array
}

export default TaskList
