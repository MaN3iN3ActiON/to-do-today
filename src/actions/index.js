import { normalize } from 'normalizr'
import * as schema from './schema'
import * as actionTypes from '../constants/actionTypes'
import URG_IMP from '../constants/priorities'
import * as api from '../api'
import { getIsFetching } from '../reducers'

//action-creators
export const addTask = ({
	title = 'Test',
	date,
	priority = URG_IMP.Q1
}) => dispatch => {
	const newTask = { title, date, priority }
	dispatch({
		type: actionTypes.ADD_TASK_REQUEST,
		...newTask
	})
	return api.addTask(newTask).then(
		response => {
			dispatch({
				type: actionTypes.ADD_TASK_SUCCESS,
				response: normalize(response, schema.task)
			})
		},
		error =>
			dispatch({
				type: actionTypes.ADD_TASK_ERROR,
				message: error.message || 'Something went wrong!'
			})
	)
}

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
		response => {
			dispatch({
				type: actionTypes.FETCH_TASKS_SUCCESS,
				filter,
				response: normalize(response, schema.arrayOfTasks)
			})
		},
		error =>
			dispatch({
				type: actionTypes.FETCH_TASKS_FAILURE,
				filter,
				message: error.message || 'Something went wrong!'
			})
	)
}
