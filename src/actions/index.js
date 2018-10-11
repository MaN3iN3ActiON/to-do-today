import * as actionTypes from '../constants/actionTypes'
import URG_IMP from '../constants/priorities'
import { v4 } from 'node-uuid'
import * as api from '../api'
import { getIsFetching } from '../reducers'

//action-creators
export const addTask = ({ title = 'Test', date, priority = URG_IMP.Q1 }) => ({
	type: actionTypes.ADD_TASK,
	id: v4(),
	title,
	date,
	priority
})

export const doneTask = id => ({
	type: actionTypes.DONE_TASK,
	id
})

export const fetchTasks = filter => (dispatch, getState) => {
	if (getIsFetching(getState(), filter)) {
		return Promise.resolve()
	}
	dispatch({
		type: actionTypes.FETCH_TASKS_REQUEST,
		filter
	})
	return api.fetchTasks(filter).then(
		response =>
			dispatch({
				type: actionTypes.FETCH_TASKS_SUCCESS,
				filter,
				response
			}),
		error =>
			dispatch({
				type: actionTypes.FETCH_TASKS_FAILURE,
				filter,
				message: error.message || 'Something went wrong!'
			})
	)
}
