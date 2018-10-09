import { connect } from 'react-redux'
import STAGE from '../constants/stages'
import { doneTask } from '../actions'
import TaskList from '../components/TaskList'
import { withRouter } from 'react-router-dom'

const getVisibleTasks = (tasks, filter = 'doing') => {
	switch (filter) {
	case 'doing':
		return tasks.filter(task => task.stage === STAGE.DOING)
	case 'done':
		return tasks.filter(task => task.stage === STAGE.DONE)
	case 'todo':
		return tasks.filter(task => task.stage === STAGE.TO_DO)
	default:
		throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = (state, { match }) => ({
	tasks: getVisibleTasks(state.tasks, match.params.filter)
})

const mapDispatchToProps = dispatch => ({
	onDoneTaskClick: id => dispatch(doneTask(id))
})

const VisbleTaskList = withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(TaskList)
)

export default VisbleTaskList
