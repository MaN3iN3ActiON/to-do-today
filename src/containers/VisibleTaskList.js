import { connect } from 'react-redux'
import { doneTask } from '../actions'
import TaskList from '../components/TaskList'
import { withRouter } from 'react-router-dom'
import { getVisibleTasks } from '../reducers'

const mapStateToProps = (state, { match }) => ({
	tasks: getVisibleTasks(state, match.params.filter || 'doing')
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
