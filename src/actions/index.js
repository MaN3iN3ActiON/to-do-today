import {
	ADD_TASK,
	DONE_TASK,
	SET_VISIBILITY_FILTER
} from '../constants/actionTypes'
import URG_IMP from '../constants/priorities'

//action-creators
export const addTask = ({
	title = 'Test',
	desc = 'test',
	priority = URG_IMP.Q1
}) => ({
	type: ADD_TASK,
	task: {
		title,
		desc,
		priority
	}
})

export const doneTask = ({ id }) => ({
	type: DONE_TASK,
	id
})

export const setVisibilityFilter = filter => ({
	type: SET_VISIBILITY_FILTER,
	filter
})

// SHOW_TODO : will show tasks for the next 7 days
// SHOW_DOING : will show tasks for to day
export const VisibilityFilters = {
	SHOW_DONE: 'SHOW_DONE',
	SHOW_DOING: 'SHOW_DOING',
	SHOW_TODO: 'SHOW_TODO'
}
