import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTask } from '../actions'

let TaskInput = ({ dispatch }) => {
	let input
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				dispatch(addTask({title:input.value}))
				input.value = ''
			}}
		>
			<label>
				Task:
				<input
					type="text"
					ref={node => {
						input = node
					}}
				/>
			</label>
			<input type="submit" value="AddTask" />
		</form>
	)
}
TaskInput.propTypes = {
	dispatch: PropTypes.func
}
export default connect()(TaskInput)
