import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTask } from '../actions'
import priorities from '../constants/priorities'

let TaskInput = ({ dispatch }) => {
	let title, date, priority
	let prChoices = []
	for (let pr in priorities) {
		prChoices.push(<option value={priorities[pr]}>{pr}</option>)
	}
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				if (
					!title.value.trim() &&
					!date.value.trim() &&
					!priority.value.trim()
				) {
					return
				}
				dispatch(
					addTask({
						title: title.value,
						date: date.value,
						priority: priority.value
					})
				)
				title.value = ''
				date.value = ''
				priority.value = priorities.Q1
			}}
		>
			<label>
				Task:
				<input
					type="text"
					ref={node => {
						title = node
					}}
				/>
			</label>
			<label>
				Date:
				<input
					type="date"
					ref={node => {
						date = node
					}}
				/>
			</label>
			<label>
				Priority:
				<select
					name="priority"
					ref={node => {
						priority = node
					}}
				>
					{prChoices}
				</select>
			</label>
			<input type="submit" value="AddTask" />
		</form>
	)
}
TaskInput.propTypes = {
	dispatch: PropTypes.func
}
export default connect()(TaskInput)
