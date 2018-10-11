import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import TaskList from '../components/TaskList'
import { withRouter } from 'react-router-dom'
import { getVisibleTasks, getIsFetching } from '../reducers'

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
		const { filter, fetchTasks } = this.props
		fetchTasks(filter)
	}
	render() {
		const { tasks, isFetching } = this.props
		if (isFetching && !tasks.length) return <p>Loading . . . </p>
		return <TaskList {...this.props} />
	}
}

const mapStateToProps = (state, { match }) => {
	const filter = match.params.filter || 'doing'
	return {
		filter,
		tasks: getVisibleTasks(state, filter),
		isFetching: getIsFetching(state, filter)
	}
}

const mapDispatchToProps = dispatch => ({
	onDoneTaskClick: id => dispatch(actions.doneTask(id)),
	fetchTasks: filter => dispatch(actions.fetchTasks(filter))
})

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(VisibleTaskList)
)
