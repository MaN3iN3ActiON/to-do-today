import { ADD_TASK, DONE_TASK } from '../constants/actionTypes'
import { combineReducers } from 'redux'
import task from './task'
import STAGE from '../constants/stages'

// DONE_TASK sets the stage to done no toggling between done and doing
const byIds = (state = {}, action) => {
	switch (action.type) {
	case DONE_TASK:
	case ADD_TASK:
		return {
			...state,
			[action.id]: task(state[action.id], action)
		}
	default:
		return state
	}
}
const allIds = (state = [], action) => {
	switch (action.type) {
	case ADD_TASK:
		return [...state, action.id]
	default:
		return state
	}
}

const tasks = combineReducers({
	byIds,
	allIds
})

export default tasks
// default export is always the reducer
// named exports are selectors(prepares data to displayed by ui from the current state)
const getAllTasks = state => state.allIds.map(id => state.byIds[id])
export const getVisibleTasks = (state, filter) => {
	const allTasks = getAllTasks(state)
	switch (filter) {
	case 'doing':
		return allTasks.filter(task => task.stage === STAGE.DOING)
	case 'done':
		return allTasks.filter(task => task.stage === STAGE.DONE)
	case 'todo':
		return allTasks.filter(task => task.stage === STAGE.TO_DO)
	default:
		throw new Error('Unknown filter: ' + filter)
	}
}
