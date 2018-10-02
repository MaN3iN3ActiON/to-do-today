import React from 'react'

class TaskInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: '' }
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(event) {
		const value = event.target.value
		this.setState({ value })
	}
	handleSubmit(event) {
		event.preventDefault()
		//things are still static so use alert
		alert('A task was submitted: ' + this.state.value)
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Task:
					<input
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<input type="submit" value="submit" />
			</form>
		)
	}
}

export default TaskInput
