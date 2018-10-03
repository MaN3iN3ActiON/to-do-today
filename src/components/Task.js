import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListElement = styled.li`
	> strong {
		padding: 3px;
	}
	> em {
		padding: 3px;
	}
	> button {
		display: inline-block;
		border: none;
		margin: 0;
		text-decoration: none;
		cursor: pointer;
		text-align: center;
	}
`
const Task = ({ title, stage, priority, onClick }) => (
	<ListElement>
		<strong>{title}</strong>
		<em>{stage}</em>
		<em>{priority}</em>
		<button onClick={onClick}>Done</button>
	</ListElement>
)

Task.propTypes = {
	title: PropTypes.string,
	priority: PropTypes.string,
	stage: PropTypes.string,
	onClick: PropTypes.func
}

export default Task
