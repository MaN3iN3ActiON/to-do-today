import * as actionType from '../constants/actionTypes'
import { combineReducers } from 'redux'

const createList = filter => {
	const ids = (state = [], action) => {
		switch (action.type) {
		case actionType.FETCH_TASKS_SUCCESS:
			return action.filter === filter ? [...action.response.result] : state
		case actionType.ADD_TASK_SUCCESS:
			return filter === 'doing' ? [...state, action.response.result] : state
		case actionType.DONE_TASK_SUCCESS:
			return filter === 'done'
				? [...state, action.response.result]
				: state.filter(id => id !== action.response.result)
		default:
			return state
		}
	}
	const isFetching = (state = false, action) => {
		if (action.filter !== filter) {
			return state
		}
		switch (action.type) {
		case actionType.FETCH_TASKS_REQUEST:
			return true
		case actionType.FETCH_TASKS_SUCCESS:
		case actionType.FETCH_TASKS_FAILURE:
			return false
		default:
			return state
		}
	}
	const errorMessage = (state = null, action) => {
		if (action.filter !== filter) {
			return state
		}
		switch (action.type) {
		case actionType.FETCH_TASKS_FAILURE:
			return action.message
		case actionType.FETCH_TASKS_REQUEST:
		case actionType.FETCH_TASKS_SUCCESS:
			return null
		default:
			return state
		}
	}
	return combineReducers({
		ids,
		isFetching,
		errorMessage
	})
}

export default createList

export const getIds = state => state.ids
export const getIsFetching = state => state.isFetching
export const getErrorMessage = state => state.errorMessage
