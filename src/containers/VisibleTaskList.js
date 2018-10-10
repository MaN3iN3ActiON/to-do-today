import React from 'react'
import { connect } from 'react-redux'
import { doneTask,recieveTasks } from '../actions'
import TaskList from '../components/TaskList'
import { withRouter } from 'react-router-dom'
import { getVisibleTasks } from '../reducers'
import { fetchTasks } from '../api'

class VisibleTaskList extends React.Component {
	componentDidMount() {
		this.fetchData()
	}
	componentDidUpdate(prevProps) {
		if (this.props.filter !== prevProps.filter) {
			this.fetchData()
		}
	}
	fetchData() {
		const {filter,recieveTasks} = this.props
		fetchTasks(filter).then(resolve => recieveTasks(filter,resolve))
	}
	render() {
		return <TaskList {...this.props} />
	}
}

const mapStateToProps = (state, { match }) => {
	const filter = match.params.filter || 'doing'
	return {
		filter,
		tasks: getVisibleTasks(state, filter)
	}
}

const mapDispatchToProps = dispatch => ({
	onDoneTaskClick: id => dispatch(doneTask(id)),
	recieveTasks: (filter,response) => dispatch(recieveTasks(filter,response))
})

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(VisibleTaskList)
)
