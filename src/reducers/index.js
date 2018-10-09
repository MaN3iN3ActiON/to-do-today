import { combineReducers } from 'redux'
import tasks, * as fromTasks from './tasks'

export default combineReducers({
	tasks
})
export const getVisibleTasks = (state, filter) => fromTasks.getVisibleTasks(state.tasks,filter)
