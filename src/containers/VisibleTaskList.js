import { connect } from 'react-redux'
import STAGE from '../constants/stages'
import { doneTask } from '../actions'
import TaskList from '../components/TaskList'
import { VisibilityFilters } from '../actions'

const getVisibleTasks = (tasks, filter = VisibilityFilters.SHOW_DOING) => {
	switch (filter) {
	case VisibilityFilters.SHOW_DOING:
		return tasks.filter(task => task.stage === STAGE.DOING)
	case VisibilityFilters.SHOW_DONE:
		return tasks.filter(task => task.stage === STAGE.DONE)
	case VisibilityFilters.SHOW_TODO:
		return tasks.filter(task => task.stage === STAGE.TO_DO)
	default:
		return [...tasks]
	}
}

const mapStateToProps = state => ({
	tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
	onDoneTaskClick: id => dispatch(doneTask({ id }))
})

const VisbleTaskList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskList)

export default VisbleTaskList
