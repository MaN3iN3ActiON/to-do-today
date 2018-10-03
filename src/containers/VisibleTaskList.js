import { connect } from 'react-redux'
import STAGE from '../constants/stages'
import { doneTask } from '../actions'
import TaskList from '../components/TaskList'

const getVisibleTasks = tasks =>
	tasks.filter(task => task.stage === STAGE.DOING)

const mapStateToProps = state => ({
	tasks: getVisibleTasks(state.tasks)
})

const mapDispatchToProps = dispatch => ({
	onDoneTaskClick: id => dispatch(doneTask({id}))
})

const VisbleTaskList = connect(
	mapStateToProps,
	mapDispatchToProps,
)(TaskList)

export default VisbleTaskList