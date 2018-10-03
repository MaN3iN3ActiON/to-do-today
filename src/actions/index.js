import { ADD_TASK, DONE_TASK } from '../constants/actionTypes'
import URG_IMP from '../constants/priorities'

//action-creators
export const addTask = ({ title='Test', desc = 'test', priority = URG_IMP.Q1 }) => ({
	type: ADD_TASK,
	task: {
		title,
		desc,
		priority
	}
})

export const doneTask = ({ id }) => {
	return {
		type: DONE_TASK,
		id
	}
}
